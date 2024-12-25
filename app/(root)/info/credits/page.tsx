import Action from "@/components/Action/Action";
import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar/Navbar";
import TextList from "@/components/TextList/TextList";
import React from "react";

function CreditsPage() {
  return (
    <>
      <Navbar pagePath="/info/credits" />
      <InfoBar pagePath="/info/credits" />
      <TextList>
        <TextList.Field>
          font used: ABC camera plain 51pt by abc dinamo
        </TextList.Field>
        <TextList.Field>
          website designed by masha
          <br />
          sivers and daniel feldman
        </TextList.Field>
        <TextList.Field>website hosted on godaddy</TextList.Field>
        <TextList.Field>
          <div style={{ display: "flex", flexDirection: "column" }}>
            website developed by
            <br />
            <Action
              href="https://herehavetheseflowers.tech"
              className="mobile-hidden"
              target="_blank"
            >
              herehavetheseflowers
            </Action>
            <Action
              href="https://herehavetheseflowers.tech"
              isMobile={true}
              className="mobile-only"
              target="_blank"
            >
              herehavetheseflowers
            </Action>
          </div>
        </TextList.Field>
      </TextList>
    </>
  );
}

export default CreditsPage;
