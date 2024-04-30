import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/pages/Share/Navbar";
import Footer from "../Component/pages/Share/Footer";
import Gototop from "../Component/Gototop/Gototop";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Gototop />
      <Footer />
    </>
  );
}
