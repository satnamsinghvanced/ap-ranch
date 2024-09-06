import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import Mikedry from "../../assets/img/png/mike-dry-img.png";
import GregScholars from "../../assets/img/png/greg-scholars-full-img.png";
import FosterSawyer from "../../assets/img/png/millar-full-img.png";
import KieranHayward from "../../assets/img/png/Kieran-Hayward-full-img.png";
import Latosha from "../../assets/img/png/latosha-johnson-full-img.png";
import Marquette from "../../assets/img/png/millar-full-img.png";
import { useGetTeamByIdQuery } from "../apis/teamApi";

// Define the structure of a team member
interface TeamMember {
  name: string;
  position: string;
  imgSrc: any;
  surname: string;
  description: string;
}

const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: any }>();

  const { data } = useGetTeamByIdQuery<any>({
    id: id,
  });
  console.log(data, "ghjjj", id);
  if (!data) {
    return <p>Member not found.</p>;
  }

  return (
    <>
      <div>
        <Header />
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="member-detail-container">
                <h1 className="member-name">{data.name}</h1>
                <p className="member-profile">{data.role}</p>

                <div>
                  <p className="about-member">{data.descriptions}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end banner-img">
                <img src={data.image} alt="" height={1174} width={626} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamMemberDetail;
