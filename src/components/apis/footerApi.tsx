import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFooterData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/footer`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetFooterDataQuery } = injectedRtkApi;
