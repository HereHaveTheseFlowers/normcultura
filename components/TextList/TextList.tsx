import React from "react";
import "./styles.css";

function TextList({ children }: Readonly<{ children?: React.ReactNode }>) {
  return <div className="text-list">{children}</div>;
}

TextList.Field = function Field(
  props: Readonly<{ children?: React.ReactNode }>,
) {
  return (
    <div className="row">
      <div className="text-list__menu col-12">{props.children}</div>
    </div>
  );
};

export default TextList;
