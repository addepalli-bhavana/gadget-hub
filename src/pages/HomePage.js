import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Companies from "../components/Companies";
import FeaturedProducts from "../components/FeaturedProducts";
import Map from "../components/Map";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <Services />
      <Companies />
      <FeaturedProducts />
      <Map />
    </main>
  );
};

export default HomePage;
