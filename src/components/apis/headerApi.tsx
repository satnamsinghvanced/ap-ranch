import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeaderData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/header`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetHeaderDataQuery } = injectedRtkApi;
