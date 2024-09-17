import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFacilitiesData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/facility`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetFacilitiesDataQuery } = injectedRtkApi;
