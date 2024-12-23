import React from "react";
import "./styles.scss";

function TextList({
  children,
  className,
}: Readonly<{ children?: React.ReactNode }> & { className?: string }) {
  return (
    <div className={`text-list${className ? " " + className : ""}`}>
      {children}
    </div>
  );
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
