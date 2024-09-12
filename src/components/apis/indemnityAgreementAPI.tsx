import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createIndemnityAgreement: builder.mutation<any, IndemnityAgreementApiArg>({
      query: (queryArg) => {
        return {
          url: `/api/indemnity-agreement`,
          method: "POST",
          body: queryArg,
        };
      },
    }),
  }),
});
export { injectedRtkApi as enhancedApi };

export type IndemnityAgreementApiArg = {
  name?: any;
  activity?: any;
  courseNumber?: any;
  instructor?: any;
  destination?: any;
  semester?: any;
  email?: any;
  dateSigned?: any;
  sign?: any;
};

export const { useCreateIndemnityAgreementMutation } = injectedRtkApi;
