import React from "react";
import Navbar from "../compnents/navbar/Navbar";
import FullServices from "../compnents/services/full-services";
import WhyWeStandOut from "../compnents/why-we-stand-out/why-we-stand-out";
import Footer from "../compnents/footer/Footer";
import aboutImg from "../assets/aboutImg.png";

const About = () => {
  console.log("About page rendering");

  return (
    <div>
      <Navbar />
      <div className="mx-auto lg:px-24 md:px-18 px-8 py-8">
        <div className="relative w-full h-[579px] rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutImg})`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-opacity-40"></div>
          </div>

         
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-16 z-10">
            <h1 className="text-4xl lg:text-[90px] font-Neue lg:font-[700] md:text-6xl font-bold mb-6">
              About
              <br />
              Blekospotlesss
              <br />
              Businesses!
            </h1>

            <p className="max-w-3xl font-sans text-lg mb-10">
              Welcome to [Your Company Name], your trusted partner in
              professional cleaning and facility management services. We are
              committed to delivering top-quality cleaning solutions tailored to
              meet the needs of homeowners, businesses, and organizations.
            </p>

            <button className="bg-white text-blue-600 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Book a Service
            </button>
          </div>
        </div>
      </div>
      <FullServices />
      <WhyWeStandOut />
      <Footer />
    </div>
  );
};

export default About;
