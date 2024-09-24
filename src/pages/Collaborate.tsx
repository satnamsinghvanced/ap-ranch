import { useGetCollaborateDataQuery } from "../components/apis/collaborate";
import DOMPurify from "dompurify";
import { apiBaseUrl } from "../components/consts/api-url.const";

const Collaborate = () => {
  const { data }: any = useGetCollaborateDataQuery();
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
  const description = DOMPurify.sanitize(data[0]?.descriptions);
  return (
    <div>
      <section
        className="collabrate-banner"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(180deg, rgba(22, 20, 21, 0) 0%, #161415 100%), url(${apiBaseUrl}/${data[0]?.headerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "-80px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="collabrate-heading">{data[0]?.name}</h1>
        </div>
      </section>

      <section className="about-collabrate">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-inner-page">
                <div
                  //  className="collabrate-page-text"
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{ fontFamily: "Satoshi" }}
                  className="description"
                />

                {/* <p className="about-collabrate-answer mb-4">
                  Any student entering fifth through twelfth grade is welcome to
                  apply. We are looking for students who demonstrate a strong
                  commitment to academic excellence.
                </p>
                <div>
                  <h3 className="about-collabrate-question mb-5">
                    What does it look like?
                  </h3>
                  <h4 className="about-collabrate-subpoint mb-2">
                    Accountability
                  </h4>
                  <p className="about-collabrate-answer">
                    Students who are accepted to AP Ranch Collaborate will be
                    assigned a partner for the duration of the school year. This
                    fellow student will be a teammate, ally, and accountability
                    partner. Both students will navigate this journey together
                    along with the help and coaching of the Academic
                    Coordinator.
                  </p>
                  <h4 className="about-collabrate-subpoint mb-2 mt-5">
                    Monthly Checkpoints{" "}
                  </h4>
                  <p className="about-collabrate-answer">
                    Students will meet once a month for a touch-base with the
                    Academic Coordinator. This will be a small group
                    accountability session with only one or two other students
                    and is intended to provide the student with accountability
                    and guidance. It is important that the student attend every
                    session and come ready to be honest and be challenged in
                    their academic performance.
                  </p>
                  <h4 className="about-collabrate-subpoint mb-2 mt-5">
                    Monthly Skills Development
                  </h4>
                  <p className="about-collabrate-answer">
                    All students will also participate in monthly group sessions
                    on highly practical topics brought to you by the Academic
                    Coordinator and visiting guest specialists. There will be
                    separate sessions for middle and high school students. These
                    training sessions are intended to help you grow in study
                    skills, time management, goal setting, personal discipline,
                    public speaking, and other practical life skills that are
                    essential to your success.
                  </p>
                  <h4 className="about-collabrate-subpoint mb-2 mt-5">
                    Bi-Semester Parent Sessions
                  </h4>
                  <p className="about-collabrate-answer">
                    Parent(s) and/or guardian(s) will be expected to participate
                    in one group session per semester as well as one individual
                    session. The group session will focus on a practical topic
                    such as college admissions, adolescent development, or
                    financial aid. The second session will be scheduled with the
                    parent(s) and/or guardian(s) of both student partners so
                    that all parties will have the opportunity to meet with the
                    Academic Coordinator and (for older grades) the College
                    Advisor to discuss the individual needs of their children.
                  </p>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 p-0 d-none-lg ">
              <div
                className="about-collaborate"
                style={{
                  backgroundImage: `url(${apiBaseUrl}/${data[0]?.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "1390px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
