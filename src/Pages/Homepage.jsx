import React from "react";
import Popular from "../Component/Popular";
import TopRated from "../Component/TopRated";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";

function Homepage() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Hero />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}

export default Homepage;
