import { ROUTES } from "../consts/routes.consts";
import { useNavigate } from "react-router-dom";
import { useGetFormsDataQuery } from "../apis/formsApi";
import DOMPurify from "dompurify";
import { apiBaseUrl } from "../consts/api-url.const";

const Forms = () => {
  const navigate = useNavigate();
  const { data }: any = useGetFormsDataQuery();
  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  const description = DOMPurify.sanitize(data[0]?.description,{
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["target", "rel"],
  });
  return (
    <div>
      <div>
        <section className="about-banner ">
          <div className="container mb-4">
            <div className="row">
              <div className="col-lg-6 p-0  our-missions-page ">
                <h1 className="about-page-heading px-3">{data[0]?.name}</h1>
                <div className="our-missions-page-content">
                  <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    style={{ fontFamily: "Satoshi" }}
                    className="description"
                  />
                  {/* <h1 className="about-collabrate-question">
                    REGISTRATION NOW OPEN!!!
                  </h1>
                  <ol>
                    <li className="about-page-para  text-start">
                      Fill out the registration form.
                    </li>
                    <li className="about-page-para  text-start">
                      Fill out the Indemnity waiver form.
                    </li>
                    <li className="about-page-para  text-start">
                      Make payment for selected training, payments can be paid
                      online at www.apranch.org under “donate”
                    </li>
                  </ol>
                  <p className="about-page-para  text-start mt-5">
                    **Scholarships and grants are also available**
                  </p>
                  <p className="about-collabrate-question  mt-5">
                    AP RANCH Sports AND TRAINING WORKOUTS
                  </p>
                  <p className="about-collabrate-question  mt-3">
                    Training Days :
                  </p>
                  <p className="about-page-para  text-start  mt-3">
                    Monday -Thursday 2:00pm-9:00pm
                  </p>
                  <p className="about-page-para  text-start  mt-3">
                    Saturday 10:00am-3:00pm
                  </p>
                  <p className="about-page-para  text-start  mt-3">
                    Sunday: Per Request
                  </p>
                  <p className="about-page-para  text-start  mt-3">
                    Contact Coach Kae to schedule training: coachkae@apranch.org
                  </p>
                  <p className="about-page-para  text-start  mt-3">
                    Location: 1590 RM 2871 Fort Worth, TX 76126
                  </p> */}
                </div>
              </div>

              <div
                className="col-lg-6 our-missions-page"
                style={{
                  padding: "20px",
                }}
              >
                <div
                  className="d-flex justify-content-center flex-wrap "
                  style={{ gap: "20px" }}
                >
                  {data[0]?.buttonStatus[0].hidden === 0 && (
                    <button
                      className="form-white-btn"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                      onClick={() => navigate(ROUTES.INDEMNITY_AGREEMENT)}
                    >
                      {data[0]?.buttonStatus[0].buttonTxt}
                    </button>
                  )}

                  {data[0]?.buttonStatus[1].hidden === 0 && (
                    <button
                      className="form-white-btn"
                      onClick={() => navigate(ROUTES.CODE_OF_CONDUCT)}
                    >
                      {data[0]?.buttonStatus[1].buttonTxt}
                    </button>
                  )}
                  {data[0]?.formButton.map((val: any, idx: any) => (
                    <button
                      className="form-white-btn"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                      onClick={() =>
                        window.open(`${apiBaseUrl}/${val.link}`, "_blank")
                      }
                      key={idx}
                    >
                      {val.buttonTxt}
                    </button>
                  ))}
                  {/* <button
                    className="form-white-btn"
                    onClick={() =>
                      window.open(
                        "https://apranch.org/pdf/Special%20Events%20Application%20AP%20Ranch.pdf",
                        "_blank"
                      )
                    }
                  >
                    Special Events Application
                  </button>
                  <button
                    className="form-white-btn"
                    onClick={() =>
                      window.open(
                        "https://apranch.org/pdf/AP%20Ranch%20Athlete%20Questionnaire%20113014.pdf",
                        "_blank"
                      )
                    }
                  >
                    Athlete Questionnaire
                  </button>
                  <button
                    className="form-white-btn"
                    onClick={() =>
                      window.open(
                        "https://apranch.org/pdf/APR%20Scholarship%20Application.pdf",
                        "_blank"
                      )
                    }
                  >
                    Scholarship Application
                  </button>
                  <button
                    className="form-white-btn"
                    onClick={() =>
                      window.open(
                        "https://apranch.org/pdf/APR%20Grant%20Application.pdf",
                        "_blank"
                      )
                    }
                  >
                    Grant Application
                  </button>
                  <button
                    className="form-white-btn"
                    onClick={() =>
                      window.open(
                        "https://apranch.org/pdf/Student%20Participant%20Release%20Indemnity%20AP%20Ranch.pdf",
                        "_blank"
                      )
                    }
                  >
                    Participant Release and Indemnity Agreement
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forms;
