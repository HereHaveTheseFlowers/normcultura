import React from "react";
import Logo from "../Logo/Logo";
import Arrow from "../Arrow/Arrow";
import GridButton from "../GridButton/GridButton";
import Action from "../Action/Action";

type NavbarProps = { pagePath: string };

const Navbar = async (props: NavbarProps) => {
  const pagePath = props.pagePath;
  return (
    <header className="header">
      <nav className="header__nav row">
        <Logo />
        <div className="header__logo col-9">
          <div className="row header__row">
            <div className="col-1 header__arrow-wrapper">
              <Arrow className="header__arrow" />
            </div>
            <div className="col-11 header__menu">
              <Action
                href="/"
                className={`header__link ${pagePath.includes("info") ? "" : "header__link_selected"}`}
              >
                WORKS
              </Action>
              <div>/</div>
              <Action
                href="/info"
                className={`header__link ${pagePath.includes("info") ? "header__link_selected" : ""}`}
              >
                INFO
              </Action>
            </div>
          </div>
          <div className="row header__row">
            <div className="col-8 header__menu">
              <Action
                href="/list"
                className={`header__link ${pagePath.includes("list") ? "header__link_selected" : ""}`}
              >
                LIST
              </Action>

              <div>/</div>
              <Action
                href="/"
                className={`header__link ${pagePath.includes("list") || pagePath.includes("info") ? "" : "header__link_selected"}`}
              >
                FEED
              </Action>
            </div>
            <div className="col-4">
              <div className="header__info-wrapper">
                <div className="header__info">© 2024</div>
                <div className="header__grid-button">
                  <GridButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
