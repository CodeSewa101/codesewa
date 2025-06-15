import React from "react";
import Navbar from "../components/common/Header/Navbar";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Footer from "../components/common/Footer/Footer";
function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <Outlet />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
