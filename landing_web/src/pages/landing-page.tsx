import React from "react";
import Header from "../components/layout/header";
import { PRIMARY_NAV_ITEMS } from "../constant/header";
import HeroSection from "../components/sections/hero-section";

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header navItems={PRIMARY_NAV_ITEMS} />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default LandingPage;
