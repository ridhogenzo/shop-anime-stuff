import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import BestSeller from "../component/BestSeller";
import SortBy from "../component/SortBy";
import Categories from "../component/Categories";
import landingPage from "../json/landingPage.json";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSeller data={landingPage.bestSeller} />
      <SortBy />
      <Categories data={landingPage.category} />
    </>
  );
}
