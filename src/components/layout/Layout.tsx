import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Header from "./header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
