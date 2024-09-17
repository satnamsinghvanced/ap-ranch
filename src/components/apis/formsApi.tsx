import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFormsData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/form`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetFormsDataQuery } = injectedRtkApi;
