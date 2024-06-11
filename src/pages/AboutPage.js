import React, { useEffect } from "react";
import aboutImg from "../assets/about.png";
import Stats from "../components/Stats";
import BreadCrumb from "../components/BreadCrumb";


const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <BreadCrumb />
      <section className="section section-center about">
        <img src={aboutImg} alt="phones and laptops" />
        <article>
          <h2>about us</h2>
          <p>
            At Gadget Hub, we're passionate about bringing you the latest and
            greatest gadgets that make your life easier and more exciting. With
            a focus on quality, innovation, and customer satisfaction, we strive
            to be your trusted source for the latest gadgets, offering a wide
            selection of smartphones, laptops, accessories, and more. Our team
            of tech enthusiasts are dedicated to deliver exceptional services,
            ensuring that you find the perfect device to suit your needs. Shop
            with us today and experience the full potential of modern
            technology.
          </p>
          <Stats />
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
