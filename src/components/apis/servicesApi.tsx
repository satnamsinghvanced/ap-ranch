import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getServicesList: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/service`,
        };
      },
    }),
    getServicesById: builder.query<[], Partial<ServicesApiArg>>({
      query: (queryArg) => {
        return {
          url: `/api/service/detail`,
          params: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };
export type ServicesApiArg = {
    serviceId?: any;
};
export const { useGetServicesListQuery, useGetServicesByIdQuery } = injectedRtkApi;
