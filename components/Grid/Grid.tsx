"use server";
import React from "react";
import "./styles.css";

function Grid() {
  return (
    <div className="grid grid_active">
      <div className="grid__wrapper">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div className="grid__column" key={i + 1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 100 3000"
              >
                <defs>
                  <pattern
                    id="a"
                    patternUnits="userSpaceOnUse"
                    width="100"
                    height="10"
                  >
                    <circle cx="2" cy="2" r="1" />
                    <circle cx="98" cy="2" r="1" />
                  </pattern>
                </defs>
                <path fill="url(#a)" d="M0 0h112v3000H0z" />
              </svg>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Grid;
