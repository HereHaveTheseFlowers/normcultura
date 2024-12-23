"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

type ActionProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
  React.AriaAttributes & { isMobile?: boolean };

function Action(props: ActionProps) {
  const { children, isMobile, ...rest } = props;
  const [hoverActive, setHoverActive] = useState(false);
  const actionRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [buttonDimensions, setButtonDimensions] = useState([0, 0]);

  function UpdateDimensions() {
    if (
      actionRef?.current &&
      actionRef.current.offsetWidth &&
      actionRef.current.offsetHeight
    ) {
      setButtonDimensions([
        Math.ceil(actionRef.current.offsetWidth),
        Math.ceil(actionRef.current.offsetHeight),
      ]);
    } else if (
      actionRef?.current &&
      actionRef.current.parentElement &&
      actionRef.current.parentElement.offsetWidth &&
      actionRef.current.parentElement.offsetHeight
    ) {
    }
  }
  useEffect(() => {
    UpdateDimensions();
  }, []);
  const handleOnClick = () => {
    UpdateDimensions();
  };
  const handleOnMouseEnter = () => {
    setHoverActive(true);
    UpdateDimensions();
  };
  const handleOnMouseLeave = () => {
    setHoverActive(false);
    UpdateDimensions();
  };

  const actionHoverElement = (
    <>
      <span
        className={`action__hover-squares ${hoverActive || isMobile ? "action__hover-squares_hover" : ""}`}
      />
      <span
        className={`action__hover-squares ${hoverActive || isMobile ? "action__hover-squares_hover" : ""}`}
      />
      <span
        className={`action__hover-squares ${hoverActive || isMobile ? "action__hover-squares_hover" : ""}`}
      />
      <span
        className={`action__hover-squares ${hoverActive || isMobile ? "action__hover-squares_hover" : ""}`}
      />
      <div
        className={`action__hover-info ${!isMobile ? (hoverActive ? "action__hover-info_hover" : "") : ""}`}
      >
        <span className="action__hover-info-span">
          {buttonDimensions[0]} X {buttonDimensions[1]}
        </span>
      </div>
    </>
  );

  if (props.href) {
    return (
      <a
        {...rest}
        draggable="false"
        ref={actionRef as React.RefObject<HTMLAnchorElement>}
        className={`anchor ${hoverActive || isMobile ? "action_hover" : ""} ${props.className ? props.className : ""}`}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          if (props.onClick) {
            props.onClick(e);
          }
          setTimeout(() => {
            handleOnClick();
          }, 10);
        }}
      >
        {children}
        {actionHoverElement}
      </a>
    );
  } else
    return (
      <button
        {...rest}
        ref={actionRef as React.RefObject<HTMLButtonElement>}
        className={`button ${hoverActive || isMobile ? "action_hover" : ""} ${props.className ? props.className : ""}`}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (props.onClick) {
            props.onClick(e);
          }
          setTimeout(() => {
            handleOnClick();
          }, 10);
        }}
      >
        {children}
        {actionHoverElement}
      </button>
    );
}
export default Action;
