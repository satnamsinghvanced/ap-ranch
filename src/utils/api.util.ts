import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";
import { Mutex } from "async-mutex";
import { apiBaseUrl } from "../components/consts/api-url.const";

const mutex = new Mutex();

const baseUrl = `${apiBaseUrl}`;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState as typeof store.getState)().authentication?.token;
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
const refreshAccessToken = async (refreshToken: string) => {
  const response = await fetch(
    `${baseUrl}/api/auth/refresh_token?refresh_token=${refreshToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  return data;
};
export const fetchbase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result.error.status === 401) {
    // checking whether the mutex is locked
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      try {
        // Call the refresh token API manually
        const refreshResult = await refreshAccessToken(refreshToken);
        const newToken = refreshResult?.access_token;

        if (newToken) {
          localStorage.setItem("token", newToken);

          // Update the headers with the new token
          // api.dispatch(authenticationSlice.actions.setToken(newToken));

          // Retry the original query with the new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          throw new Error("Failed to get new access token");
        }
      } catch (error) {}
    }
    if (!mutex.isLocked()) {
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  } else if (result.error && result.error.status) {
    let msg = getFirstErrorFromObject(result.error.data);
    // if (!msg) {
    //   msg = `Internal server error`;
    // }
    if (!(result.error.data instanceof Blob)) toast.error(msg);
  }

  return result;
};
function getFirstErrorFromObject(obj: any) {
  if (obj?.detail) {
    if (Array.isArray(obj.detail)) {
      const eItem = obj.detail[0];
      if (eItem) {
        return `${eItem.msg}`;
      }
    } else if (obj.detail) {
      return obj.detail.toString();
    }
  }
}
