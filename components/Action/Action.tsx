"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

type ActionProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
  React.AriaAttributes;

function Action(props: ActionProps) {
  const { children, ...rest } = props;
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
  if (props.href) {
    return (
      <a
        {...rest}
        ref={actionRef as React.RefObject<HTMLAnchorElement>}
        className={`anchor ${hoverActive ? "action_hover" : ""} ${props.className}`}
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
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <div
          className={`action__hover-info ${hoverActive ? "action__hover-info_hover" : ""}`}
        >
          <span className="action__hover-info-span">
            {buttonDimensions[0]} X {buttonDimensions[1]}
          </span>
        </div>
      </a>
    );
  } else
    return (
      <button
        {...rest}
        ref={actionRef as React.RefObject<HTMLButtonElement>}
        className={`button ${hoverActive ? "action_hover" : ""} ${props.className}`}
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
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <span
          className={`action__hover-squares ${hoverActive ? "action__hover-squares_hover" : ""}`}
        />
        <div
          className={`action__hover-info ${hoverActive ? "action__hover-info_hover" : ""}`}
        >
          <span className="action__hover-info-span">
            {buttonDimensions[0]} X {buttonDimensions[1]}
          </span>
        </div>
      </button>
    );
}
export default Action;
