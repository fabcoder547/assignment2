import React from "react";
import Navbar from "./Navbar";

const Base = ({ children, isDisplay }) => {
  return (
    <div>
      <Navbar isDisplay={isDisplay} />
      <div className="">{children}</div>
    </div>
  );
};
export default Base;
