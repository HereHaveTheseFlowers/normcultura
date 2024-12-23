import React from "react";
import Action from "../Action/Action";
import "./styles.scss";

type InfoBarProps = { pagePath: string };

function InfoBar(props: InfoBarProps) {
  const pagePath = props.pagePath;
  return (
    <div className="info-bar">
      <div className="info-bar__row row">
        <div className="info-bar__menu col-12">
          <Action
            href="/info/about"
            className={`info-bar__path${pagePath.includes("/about") ? " info-bar__path_selected" : ""}`}
          >
            ABOUT US
          </Action>
          /
          <Action
            href="/info/team"
            className={`info-bar__path${pagePath.includes("/team") ? " info-bar__path_selected" : ""}`}
          >
            TEAM
          </Action>
          /
        </div>
      </div>
      <div className="info-bar__row row">
        <div className="info-bar__menu col-12">
          /
          <Action
            href="/info/contacts"
            className={`info-bar__path${pagePath.includes("/contacts") ? " info-bar__path_selected" : ""}`}
          >
            CONTACTS
          </Action>
          /
          <Action
            href="/info/credits"
            className={`info-bar__path${pagePath.includes("/credits") ? " info-bar__path_selected" : ""}`}
          >
            CREDITS
          </Action>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
