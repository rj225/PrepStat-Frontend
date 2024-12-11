import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSmile,
  FaLinkedin,
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/Navbar";
import { GiCrossedBones } from "react-icons/gi";

export default function Contact() {
  const [formVisible, setFormVisible] = useState(false);

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    once: true,
  });

  return (
    <div className="min-h-screen font-serif">
      <Navbar showContact={false} />
      <div className="bg-gradient-to-l from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4]">
        <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12" data-aos="fade-down">
              <h2 className="text-4xl font-bold text-orange-600">
                Get in Touch{" "}
                <FaSmile className="inline-block text-orange-500 ml-2" />
              </h2>
              <p className="text-gray-500 italic mt-4">
                Have questions or want to work together? We'd love to hear from
                you!
              </p>
            </div>

            {/* Contact Details */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              data-aos="fade-up"
            >
              {/* LinkedIn */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-x-4">
                  <FaLinkedin className="text-3xl text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-orange-600">
                    Connect on LinkedIn
                  </h3>
                </div>
                <a
                  href="https://www.linkedin.com/in/rishabh-raj-875327282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-900 mt-4 inline-block hover:underline"
                >
                  Visit LinkedIn Profile
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-x-4">
                  <FaEnvelope className="text-3xl text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-orange-600">
                    Email Us
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">
                  <a
                    href="mailto:wtc131123@gmail.com"
                    className="text-orange-900 hover:underline"
                  >
                    wtc131123@gmail.com
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-x-4">
                  <FaMapMarkerAlt className="text-3xl text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-orange-600">
                    Visit Us
                  </h3>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Iter,Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-orange-900 mt-2 cursor-pointer hover:underline">
                    Iter, Bhubaneswar
                  </p>
                </a>
              </div>
            </div>

            {/* Call-to-Action */}
            {!formVisible && (
              <div
                className="text-center py-8 bg-gradient-to-tl from-[#f9bd73ed] via-[#fff8ef] to-[#f9bd73ed] text-orange-800 rounded-lg shadow-lg max-w-7xl mx-auto cursor-pointer hover:bg-orange-600 transition-transform hover:scale-105"
                onClick={() => setFormVisible(true)}
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-bold">Want to Talk to Us?</h3>
                <p className="mt-2">Click here to communicate with us!</p>
              </div>
            )}

            {/* Contact Form */}
            {formVisible && (
              <div
                className="bg-white relative p-8 rounded-lg hover:shadow-xl bg-gradient-to-br from-[#f8cb94ed] via-[#fff8ef] to-[#f8cb94ed] shadow-lg max-w-4xl mx-auto mt-8"
                data-aos="fade-up"
              >
                <span
                  className="text-orange-600 absolute md:right-2 right-1 top-0 md:top-2 scale-75 md:scale-100 hover:scale-95 md:hover:scale-105 duration-500 cursor-pointer border-2 p-2 bg-orange-200 rounded-full"
                  onClick={() => setFormVisible(false)}
                >
                  <GiCrossedBones />
                </span>
                <h3 className="md:text-2xl text-xl font-bold text-orange-600 mb-6 text-center">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block md:text-lg text-base text-gray-600 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full md:px-4 md:py-3 px-2 py-1 border-transparent rounded-lg shadow-lg focus:border-transparent focus:ring-2 focus:ring-orange-400"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block md:text-lg text-base text-gray-600 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full md:px-4 md:py-3 px-2 py-1 border-transparent rounded-lg shadow-lg focus:border-transparent focus:ring-2 focus:ring-orange-400"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block md:text-lg text-base text-gray-600 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full md:px-4 md:py-3 px-2 py-1 border-transparent rounded-lg shadow-lg focus:border-transparent focus:ring-2 focus:ring-orange-400"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="md:px-6 md:py-3 px-3 py-1 bg-orange-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-orange-600 transition-transform duration-500 hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
