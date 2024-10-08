import AboutAccordions from "../components/custom-components/custom-about-accordian";
import { useGetAboutDataQuery } from "../components/apis/aboutApi";
import { apiBaseUrl } from "../components/consts/api-url.const";
import DOMPurify from "dompurify";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const { data }: any = useGetAboutDataQuery();
  const isMobileSmall = useMediaQuery({ query: "(max-width: 993px)" });
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
  const description = DOMPurify.sanitize(data[0]?.descriptions,{
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["target", "rel"],
  });
  return (
    <div>
      <section className="about-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="about-page-content "
                style={{
                  backgroundImage: isMobileSmall
                    ? `linear-gradient(180deg, rgba(22, 20, 21, 0) 0%, #161415 100%), linear-gradient(0deg, rgba(22, 20, 21, 0.6), rgba(22, 20, 21, 0.6)), url(${apiBaseUrl}/${data[0]?.image})`
                    : "",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="about-page-heading px-3">{data[0]?.name}</h1>
                {/* <p className="about-page-para "> */}
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{ fontFamily: "Satoshi" }}
                  className="description px-3"
                />
                {/* </p> */}
              </div>
            </div>

            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end about-section-img">
                <img
                  src={`${apiBaseUrl}/${data[0]?.image}`}
                  alt=""
                  className="img-fluid"
                  style={{
                    minHeight: "1270px",
                    minWidth: "626px",
                    maxWidth: "626px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <div className="container-fluid">
          <div className="row">
            <AboutAccordions />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
