import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCollaborateData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/collaborate`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetCollaborateDataQuery } = injectedRtkApi;
