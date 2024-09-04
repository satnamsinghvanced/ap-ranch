import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<any, ContactApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/comment/post`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ContactApiArg = {
  id?: string;
  employee?: any;
  text?: any;
  image?: any;
};

export const { useCreateContactMutation } = injectedRtkApi;
