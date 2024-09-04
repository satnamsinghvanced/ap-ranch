import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";
import Mikedry from "../../assets/img/png/mike-dry-img.png"

// Define the structure of a team member
interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

// Dummy data for demonstration. Replace with your actual data source.
const teamMembers: Record<string, TeamMember> = {
  "mike-dry": {
    name: "Mike Dry",
    position: "Founder",
    imgSrc: "path_to_image",
  },
  "greg-scholars": {
    name: "Greg Scholars",
    position: "Director, Head of Track",
    imgSrc: "path_to_image",
  },
  "foster-sawyer": {
    name: "Foster Sawyer",
    position: "Head of Football",
    imgSrc: "path_to_image",
  },
  "kieran-hayward": {
    name: "Kieran Hayward",
    position: "Head of Basketball",
    imgSrc: "path_to_image",
  },
  "latosha-johnson": {
    name: "Latosha Johnson",
    position: "Events Co-ordinator",
    imgSrc: "path_to_image",
  },
  "marquette-miller": {
    name: "Marquette Miller",
    position: "Facility Coordinator",
    imgSrc: "path_to_image",
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
              <h1>MIKE<br></br>
            DRY</h1>
            <p>FOUNDER</p>

            <div>
              <p>Greg Sholars is a Fort Worth native who attended Southwest High School and went on to become a legendary Flyin Frog at Texas Christian University.  Greg is a collegiate and national record holder in 4/100m relay  in which while at TCU he ran on 3 national titles teams in that event  In high school he held the state of Texas record in the 100m for over two decades, is an 8-time NCAA All American and 3-time NCAA National Champion.  He has coached collegiately at prestigious Division I programs including the University of Florida, the University of Texas and Texas Tech.  He since transitioned to the corporate world, where he was a financial coach (professionally known as Vice President/Financial Consultant) at Charles Schwab and Merrill Lynch and is now currently fulfilling his life-long dream of helping children in his current role as Director of Operations at AP Ranch.</p>
            </div>
              </div>
              <div className="col-lg-6 p-0">
                  <div className="text-end banner-img">
                      <img src={Mikedry} alt="" />
                  </div>
              </div>
            </div>

           
          </section>

      </div>
    </>
  );
};

export default TeamMemberDetail;
