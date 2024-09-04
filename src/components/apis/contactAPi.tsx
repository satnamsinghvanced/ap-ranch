import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<any, ContactApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/contact`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ContactApiArg = {
  name?: string;
  email?: any;
  phoneNumber?: any;
  reason?: any;
  comments?: any;
};

export const { useCreateContactMutation } = injectedRtkApi;
