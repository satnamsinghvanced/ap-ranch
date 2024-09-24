import React from "react";
import { useParams } from "react-router-dom";
import { useGetTeamByIdQuery } from "../apis/teamApi";
import DOMPurify from "dompurify";
import { apiBaseUrl } from "../consts/api-url.const";
import { useMediaQuery } from "react-responsive";

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const isMobileSmall = useMediaQuery({ query: "(max-width: 993px)" });
  const { data } = useGetTeamByIdQuery<any>({
    id: id,
  });
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
  const nameParts = data?.name.split(" ");
  const description = DOMPurify.sanitize(data?.descriptions);
  return (
    <>
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0 member-detail">
              <div
                className="member-detail-container"
                style={{
                  backgroundImage: isMobileSmall
                    ? `linear-gradient(180deg, rgba(22, 20, 21, 0) 0%, #161415 100%), linear-gradient(0deg, rgba(22, 20, 21, 0.6), rgba(22, 20, 21, 0.6)), url(${apiBaseUrl}/${data?.image})`
                    : "",
                  backgroundRepeat: isMobileSmall ? "no-repeat" : "",
                  backgroundSize: isMobileSmall ? "cover" : "",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="member-name">
                  {nameParts?.map((part: any, index: any) => (
                    <React.Fragment key={index}>
                      {part}
                      <br />
                    </React.Fragment>
                  ))}
                </h1>
                <p className="member-profile">{data?.role}</p>

                <div>
                  {/* <p className="about-member"> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    // className="about-page-para"
                    style={{
                      fontFamily: "Satoshi",
                      zIndex: 1,
                      position: "relative",
                    }}
                    className="description"
                  />
                  {/* </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end banner-img">
                <img
                  src={`${apiBaseUrl}/${data?.image}`}
                  alt=""
                  // height={1174}
                  // width={626}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamMemberDetail;
