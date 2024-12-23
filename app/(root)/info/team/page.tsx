import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar/Navbar";
import TextList from "@/components/TextList/TextList";
import React from "react";

const teamMembers = [
  "masha sivers",
  "polina ovchinnikova",
  "evgenii lomov",
  "Andrew ivanov",
  "daniel feldman",
  "herehavetheseflowers",
];

function TeamPage() {
  return (
    <>
      <Navbar pagePath="/info/team" />
      <InfoBar pagePath="/info/team" />
      <TextList>
        {teamMembers.map((teamMember) => (
          <TextList.Field key={teamMember}>{teamMember}</TextList.Field>
        ))}
      </TextList>
    </>
  );
}

export default TeamPage;
