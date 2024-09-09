import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDanate: builder.mutation<any, DonateApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/donate`,
          method: "POST",
          body: queryArg,
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

export const { useCreateDanateMutation } = injectedRtkApi;