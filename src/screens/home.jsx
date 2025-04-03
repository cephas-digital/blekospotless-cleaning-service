import React from "react";
import Navbar from "../compnents/navbar/Navbar";
import Testimonial from "../compnents/testimonial/Testimonial";
import Services from "../compnents/services/Services";
import Footer from "../compnents/footer/Footer";
import Btn from "../compnents/button/Btn";
import chooseusImg from "../assets/chooseus.png";
import heroImg from "../../src/assets/Image.webp";
import Imgone from "../assets/imgone.png";
import Imgtwo from "../assets/imgtwo.png";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="lg:flex py-16 font-sans lg:px-24 md:px-18 px-8 lg:justify-between bg-white">
        <div className="lg:w-1/2">
          <h1 className="lg:text-[90px] mt-4 Neue-Regrade text-5xl leading-[100%] font-bold text-black">
            Professional Cleaning Services for Homes & Businesses!
          </h1>
          <p className="text-gray-600 my-4 text-lg ">
            We provide top-quality residential, commercial, and specialized
            cleaning services tailored to your needs. From home cleaning to
            office maintenance, post-construction cleanup, and pest control, we
            ensure a cleaner, healthier environment for you.
          </p>

          <Btn>Book a service</Btn>
        </div>
        <div className="lg:w-1/2">
          <img
            src={heroImg}
            alt="Cleaning service"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <Services />

      <div className=" mx-auto lg:px-24 py-16 md:px-20 px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="lg:w-1/2 ">
            <div className="rounded-lg overflow-hidden">
              <img
                src={chooseusImg}
                alt="Professional cleaner with cleaning equipment"
                width={650}
                height={688}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl mb-6 font-Inter lg:text-[48px] font-bold text-gray-800">
              Why Choose Us
            </h2>

            <p className="text-[#1D1E1C] py-6 text-[18px] font-[400] font-sans">
              "Exceptional cleaning services you can trust! With a professional
              team, eco-friendly products, and flexible scheduling, we guarantee
              a spotless space at an affordable price.
            </p>

            {/* Feature 1 */}
            <div className="bg-sky-100 mb-4 p-6 rounded-lg">
              <div className="lg:flex py-6 font-Inter items-center gap-4">
                <div className="flex-shrink-0">
                  <div className=" p-2 rounded-md w-32 h-32 flex items-center justify-center">
                    <img
                      src={Imgone}
                      alt="experienced professional team"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Experienced & Professional Team
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Our cleaning professionals are highly trained and
                    experienced, ensuring that every task is completed to the
                    highest standards. With years of expertise in residential
                    and commercial cleaning, you can trust us to handle all your
                    cleaning needs with precision and care.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-sky-100 mt-4 font-Inter p-6 rounded-lg">
              <div className="lg:flex py-6 gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-md w-32 h-32 flex items-center justify-center">
                    <img
                      src={Imgtwo}
                      alt="Eco-friendly"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Eco-Friendly & Safe Cleaning Products
                  </h3>
                  <p className="mt-2 text-gray-700">
                    We care about your health and the environment. That's why we
                    use eco-friendly, non-toxic cleaning products that are safe
                    for your family, pets, and the planet. You can rest easy
                    knowing your space is being cleaned with safe, effective
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />

      <Footer />
    </div>
  );
};

export default Home;
