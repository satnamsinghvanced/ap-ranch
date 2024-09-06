import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAboutData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/About`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export const { useGetAboutDataQuery } = injectedRtkApi;
