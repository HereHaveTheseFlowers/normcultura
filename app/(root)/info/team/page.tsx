import Action from "@/components/Action/Action";
import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar/Navbar";
import TextList from "@/components/TextList/TextList";
import React from "react";

function TeamPage() {
  return (
    <>
      <Navbar pagePath="/info/team" />
      <InfoBar pagePath="/info/team" />
      <TextList>
        <TextList.Field>masha sivers</TextList.Field>
        <TextList.Field>polina ovchinnikova</TextList.Field>
        <TextList.Field>evgenii lomov</TextList.Field>
        <TextList.Field>Andrew ivanov</TextList.Field>
        <TextList.Field>daniel feldman</TextList.Field>
        <TextList.Field>
          <Action href="https://herehavetheseflowers.tech" target="_blank">
            herehavetheseflowers
          </Action>
        </TextList.Field>
      </TextList>
    </>
  );
}

export default TeamPage;
