import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createSearch: builder.mutation<any, SearchApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/search`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type SearchApiArg = {
  searchTerm?: string;
};

export const { useCreateSearchMutation } = injectedRtkApi;
