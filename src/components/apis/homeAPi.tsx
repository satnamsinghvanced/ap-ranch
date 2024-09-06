import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomeData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/home`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetHomeDataQuery } = injectedRtkApi;
