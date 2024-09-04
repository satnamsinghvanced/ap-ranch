import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import Mikedry from "../../assets/img/png/mike-dry-img.png";
// import GregScholars from "../../assets/img/png/greg-scholars-img.png";
// import FosterSawyer from "../../assets/img/png/foster-sawyer-img.png";
// import KieranHayward from "../../assets/img/png/Kieran-Hayward-img.png";
// import Latosha from "../../assets/img/png/latosha-johnson-img.png";
// import Marquette from "../../assets/img/png/foster-sawyer-img.png";

// Define the structure of a team member
interface TeamMember {
  name: string;
  position: string;
  imgSrc: any;
  surname: string;
  description: string;
}

// Dummy data for demonstration. Replace with your actual data source.
const teamMembers: Record<string, TeamMember> = {
  "mike-dry": {
    name: "Mike",
    surname: "Dry",
    position: "Founder",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
  "greg-scholars": {
    name: "Greg",
    surname: "Scholars",
    position: "Director, Head of Track",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
  "foster-sawyer": {
    name: "Foster ",
    surname: "Sawyer",
    position: "Head of Football",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
  "kieran-hayward": {
    name: "Kieran ",
    surname: "Hayward",
    position: "Head of Basketball",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
  "latosha-johnson": {
    name: "Latosha ",
    surname: "Johnson",
    position: "Events Co-ordinator",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
  "marquette-miller": {
    name: "Marquette ",
    surname: "Miller",
    position: "Facility Coordinator",
    description:
      "Greg Sholars is a Fort Worth native who attended Southwest school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was afinancial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.",
    imgSrc: Mikedry,
  },
};

const TeamMemberDetail: React.FC = () => {
  const { memberName } = useParams<{ memberName: string }>(); // Ensure memberName is a string

  // Assert that memberName is a key of the teamMembers object
  const member = memberName
    ? teamMembers[memberName as keyof typeof teamMembers]
    : undefined;

  if (!member) {
    return <p>Member not found.</p>;
  }

  return (
    <>
      {/* <Header />
      <div className="team-member-detail">
        <img src={member.imgSrc} alt={member.name} />
        <h2>{member.name}</h2>
        <p>{member.position}</p>
      </div> */}

      <div>
        <Header />
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="member-detail-container">
                <h1 className="member-name">
                  {member.name}
                  <br></br>
                  {member.surname}
                </h1>
                <p className="member-profile">{member.position}</p>

                <div>
                  <p className="about-member">{member.description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end banner-img">
                <img src={member.imgSrc} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamMemberDetail;
