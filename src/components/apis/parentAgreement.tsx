import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createParentAgreement: builder.mutation<any, ParentAgreementApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/parent-agreement`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type ParentAgreementApiArg = {
  name?: any;
  ageDivision?: any;
  dateSigned?: any;
  sign?: any;
};

export const { useCreateParentAgreementMutation } = injectedRtkApi;
