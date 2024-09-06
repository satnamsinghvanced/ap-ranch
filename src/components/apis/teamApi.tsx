import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTeamList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/team`,
        };
      },
    }),
    getTeamById: builder.query<[], Partial<TeamApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/team/detail`,
          params: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type TeamApiArg = {
  id?: any;
};
export const { useGetTeamListQuery, useGetTeamByIdQuery } = injectedRtkApi;
