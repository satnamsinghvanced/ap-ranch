import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
// import { toast } from "react-toastify";
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

export const fetchbase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  return result;
};
// function getFirstErrorFromObject(obj: any) {
//   if (obj?.detail) {
//     if (Array.isArray(obj.detail)) {
//       const eItem = obj.detail[0];
//       if (eItem) {
//         return `${eItem.msg}`;
//       }
//     } else if (obj.detail) {
//       return obj.detail.toString();
//     }
//   }
// }
