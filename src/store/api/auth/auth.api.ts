import { baseApi } from "../base";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginWithSpotify: builder.mutation({
      query: () => ({
        url: "/api/auth/login",
        method: "GET",
      }),
    }),
    authMe: builder.query<any, null | undefined>({
      query: () => ({ url: `/api/auth/me`, method: "GET" }),
    }),
    getRefreshToken: builder.query<[], Partial<ApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/artists/songs`,
          params: queryArg,
        };
      },
    }),
    authRegister: builder.mutation<any, void>({
      query: (data) => ({
        url: "api/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    authLogout: builder.mutation<any, void>({
      query: (data) => ({
        url: "api/auth/logout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export type ApiArg = {
  refresh_token?: any;
};
export const {
  useLoginWithSpotifyMutation,
  useGetRefreshTokenQuery,
  useLazyAuthMeQuery,
  useAuthRegisterMutation,
  useAuthLogoutMutation,
} = authApi;
