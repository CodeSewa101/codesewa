import React from "react";
import Navbar from "../components/common/Header/Navbar";
import { Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className=" w-full h-[80%] flex justify-center text-6xl my-[200px]">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
