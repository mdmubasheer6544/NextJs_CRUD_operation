import React from "react";
import Navbar from "../Navbar";
export const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="container mt-5">{props.children}</main>
    </>
  );
};
