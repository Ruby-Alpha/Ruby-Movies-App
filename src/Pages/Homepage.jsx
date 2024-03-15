import React from "react";
import Popular from "../Component/Popular";
import TopRated from "../Component/TopRated";
import Footer from "../Component/Footer";

function Homepage() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}

export default Homepage;
