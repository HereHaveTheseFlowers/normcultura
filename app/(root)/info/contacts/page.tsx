import Action from "@/components/Action/Action";
import InfoBar from "@/components/InfoBar/InfoBar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import TextList from "@/components/TextList/TextList";

function ContactsPage() {
  return (
    <>
      <Navbar pagePath="/info/contacts" />
      <InfoBar pagePath="/info/contacts" />
      <TextList>
        <TextList.Field>
          dm us on{"\xa0"}
          <Action href="https://www.instagram.com/normcultura" target="_blank">
            instagram
          </Action>
        </TextList.Field>
        <TextList.Field>
          contact us through{"\xa0"}
          <Action href="mailto:hello@normcultura.com">email</Action>
        </TextList.Field>
        <TextList.Field>
          text us on{"\xa0"}
          <Action href="https://t.me/normcultura" target="_blank">
            telegram
          </Action>
        </TextList.Field>
      </TextList>
    </>
  );
}

export default ContactsPage;
