import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMissionsData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/mission`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetMissionsDataQuery } = injectedRtkApi;
