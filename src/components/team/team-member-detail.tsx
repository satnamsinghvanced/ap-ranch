import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import { useGetTeamByIdQuery } from "../apis/teamApi";

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: any }>();

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

  return (
    <>
      <div>
        <Header />
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0 member-detail">
              <div className="member-detail-container">
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
                  <p className="about-member">{data?.descriptions}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end banner-img">
                <img
                  src={data?.image}
                  alt=""
                  height={1174}
                  width={626}
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
