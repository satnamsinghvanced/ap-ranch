import React from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/header";

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
      <Header />
      <div className="team-member-detail">
        <img src={member.imgSrc} alt={member.name} />
        <h2>{member.name}</h2>
        <p>{member.position}</p>
      </div>
    </>
  );
};

export default TeamMemberDetail;
