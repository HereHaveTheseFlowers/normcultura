"use client";
import React, { useState } from "react";
import "./styles.css";
import Action from "../Action/Action";
import { GRID_OPACITY_ACTIVE, GRID_OPACITY_DISABLED } from "@/app/variables";

function GridButton() {
  const [gridOn, setGridOn] = useState(true);

  const handleOnGridChange = () => {
    if (gridOn) {
      document.documentElement.style.setProperty(
        "--grid-opacity",
        GRID_OPACITY_DISABLED,
      );
    } else {
      document.documentElement.style.setProperty(
        "--grid-opacity",
        GRID_OPACITY_ACTIVE,
      );
    }
    setGridOn((gridOn) => (gridOn = !gridOn));
  };

  return (
    <Action className="grid-button" onClick={handleOnGridChange}>
      {gridOn ? "GRID ON" : "GRID OFF"}
    </Action>
  );
}

export default GridButton;
