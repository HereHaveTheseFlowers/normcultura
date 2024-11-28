import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import TextList from "@/components/TextList/TextList";

function AboutPage() {
  return (
    <>
      <Navbar pagePath="/info/about" />
      <InfoBar pagePath="/info/about" />
      <TextList>
        <TextList.Field>
          We hope our work can speak for itself. But if you don’t mind, we’d
          like to say a few words about it. <br />
          we are a design practice focused on branding solutions and working on
          the intersection between research and intuition, blending the
          k-hole-esque normcore with fun.
        </TextList.Field>
      </TextList>
    </>
  );
}

export default AboutPage;
