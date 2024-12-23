"use client";
import React, { useState } from "react";
import "./styles.scss";
import Action from "../Action/Action";

function GridButton() {
  const [gridOn, setGridOn] = useState(true);

  const handleOnGridChange = () => {
    const gridElement = document.querySelector(".grid");
    if (!gridElement) return;
    if (gridOn) {
      gridElement.classList.remove("grid_active");
    } else {
      gridElement.classList.add("grid_active");
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
