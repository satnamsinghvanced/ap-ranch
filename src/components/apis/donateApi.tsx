import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDonate: builder.mutation<any, DonateApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/donate`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
    getDonateTabData: builder.query<[], void>({
      query: () => {
        return {
          url: `/api/donateTab`,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type DonateApiArg = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;
  amount?: string;
  sourceId?: string;
};

export const { useCreateDonateMutation, useGetDonateTabDataQuery } =
  injectedRtkApi;
