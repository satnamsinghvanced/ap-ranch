import React from "react";
import Header from "../components/layout/header";
import Footer from "./Footer";
import teamMember1 from "../assets/img/png/team-member1.png";
import GregScholars from "../assets/img/png/greg-scholars-img.png";
import fosterSawyer from "../assets/img/png/foster-sawyer-img.png";
import latoshaJohnson from "../assets/img/png/latosha-johnson-img.png";
import KieranHayward from "../assets/img/png/Kieran-Hayward-img.png";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const handleMemberClick = (memberName: any) => {
    navigate(`/team/${memberName}`);
  };
  return (
    <div>
      <Header />

      <section className="team-section">
        <div className="container ">
          <h1 className="team-section-heading pt-5">the team</h1>
          <div className="row team-member">
            <div
              className="col-lg-4 col-md-6 "
              onClick={() => handleMemberClick("mike-dry")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={teamMember1} alt="" />
                  </div>
                  <h3 className="team-member-name">mike dry</h3>
                  <p className="team-member-position">FOUNDER</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4  col-md-6"
              onClick={() => handleMemberClick("greg-scholars")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={GregScholars} alt="" />
                  </div>
                  <h3 className="team-member-name">Greg Scholars</h3>
                  <p className="team-member-position">
                    DIRECTOR, HEAD OF TRACK
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4  col-md-6"
              onClick={() => handleMemberClick("foster-sawyer")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={fosterSawyer} alt="" />
                  </div>
                  <h3 className="team-member-name">foster sawyer</h3>
                  <p className="team-member-position">HEAD OF FOOTBALL</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4  col-md-6"
              onClick={() => handleMemberClick("kieran-hayward")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={KieranHayward} alt="" />
                  </div>
                  <h3 className="team-member-name">Kieran Hayward</h3>
                  <p className="team-member-position">HEAD OF BASKETBALL</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4  col-md-6"
              onClick={() => handleMemberClick("latosha-johnson")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={latoshaJohnson} alt="" />
                  </div>
                  <h3 className="team-member-name">latosha johnson</h3>
                  <p className="team-member-position">EVENTS CO-ORDINATOR</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4  col-md-6"
              onClick={() => handleMemberClick("marquette-miller")}
            >
              <div className="team-member-list">
                <div>
                  <div className="team-member-imgbox">
                    <img src={fosterSawyer} alt="" />
                  </div>
                  <h3 className="team-member-name">marquette miller</h3>
                  <p className="team-member-position">Facility Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
