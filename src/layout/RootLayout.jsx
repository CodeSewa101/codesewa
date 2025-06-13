import React from "react";
import Navbar from "../components/common/Header/Navbar";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
