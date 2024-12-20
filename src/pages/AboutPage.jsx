import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomSidebar from "../components/CustomSidebar";
import "../css/Aboutpage.css";
import { HiViewList } from "react-icons/hi";
import { BiFolderOpen } from "react-icons/bi";
// import { FiHelpCircle } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PiyushImage from "../css/profile photo/Piyush.jpg";
import RishabhImage from "../css/profile photo/Rishabh.png";
import AdityaImage from "../css/profile photo/Aditya.jpg";
import heroimg from "../css/aboutpage_herosection.png";
import vision1 from "../css/vision/vision1.png";
import vision2 from "../css/vision/vision2.png";
import vision3 from "../css/vision/vision 3.png";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="text-gray-800 font-serif min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://www.prepstat.in/about" />
        <title>About Us - PrepStat | Placement Preparation Platform</title>
        <meta
          name="description"
          content="PrepStat is your partner in conquering placement challenges, offering curated resources for aptitude, reasoning, and interview preparation."
        />
        <meta
          name="keywords"
          content="PrepStat, placements, interview preparation, quantitative aptitude, reasoning ability, SOA, ITER"
        />
      </Helmet>
      <Navbar />
      <div className="flex md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <div className="">
          {/* About Us Section */}
          <section
            aria-label="About Us"
            className="flex flex-col md:flex-row md:bg-gradient-to-br bg-gradient-to-bl from-[#f8eada] md:from-40% from-20% via-[#ffb348a5] via-65% to-[#f99c2a3c] to-85% px-4 md:px-10 font-serif items-center justify-center relative h-auto md:py-16 py-8"
          >
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-2 mx-auto" data-aos="fade-up">
              {/* Main heading for SEO */}
              <h1 className="text-2xl md:text-4xl font-semibold text-orange-950 mb-5 text-left md:text-left">
                PrepStat For You
              </h1>

              {/* Subheading */}
              <h2 className="text-sm md:text-lg font-semibold text-orange-600 italic mb-6 text-center md:text-left">
                "Your partner in conquering placement challenges."
              </h2>

              {/* Section heading for the description */}
              <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-3 text-left">
                About PrepStat
              </h3>
              <p className="text-sm md:text-lg text-gray-800 leading-relaxed mb-4 text-justify">
                <span className="text-orange-600 font-semibold">PrepStat</span>,
                created by three B.Tech students from SOA, ITER, is dedicated to
                simplifying placement preparation with curated resources and
                structured guidance, tailored to meet the demands of today’s
                competitive job market.
              </p>

              {/* Section heading for platform features */}
              <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-3 text-left">
                Our Platform Features
              </h3>
              <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-justify">
                We offer an all-in-one platform that covers{" "}
                <span className="text-orange-600">Quantitative Aptitude</span>,{" "}
                <span className="text-orange-600">Logical Reasoning</span>, and{" "}
                <span className="text-orange-600">Interview Preparation</span>,
                providing personalized questions, theoretical insights, and
                expert-curated content to help you ace every stage of the
                placement process.
              </p>
            </div>

            {/* Image Section */}
            <div
              className="w-full md:w-1/2 p-4 md:pl-12 mt-6 md:mt-0"
              data-aos="fade-up"
            >
              <img
                src={heroimg}
                loading="lazy"
                alt="Illustration representing the PrepStat platform"
                className="rounded-3xl border-r-4 border-t-4 shadow-xl border-orange-500 mx-auto w-full"
              />
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 placement_section_img relative">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="md:text-3xl text-xl drop-shadow-lg font-bold text-center z-10 text-orange-700 mb-8">
                Your Journey to Placement Success
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                >
                  <div className="flex items-center justify-center mb-4 text-orange-500 md:text-4xl text-3xl">
                    <span>
                      <HiViewList />
                    </span>
                  </div>
                  <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                    Step 1: Choose Your Section
                  </h3>
                  <p className="text-gray-600 text-base">
                    Start by selecting one of the three sections from the
                    sidebar –
                    <span className="font-semibold text-orange-700">
                      {" "}
                      Quantitative Aptitude, Reasoning Ability,
                    </span>{" "}
                    or
                    <span className="font-semibold text-orange-700">
                      {" "}
                      Interview Preparation
                    </span>
                    .
                  </p>
                </div>
                <div
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="flex items-center justify-center mb-4 text-orange-500 md:text-4xl text-3xl">
                    <i>
                      <BiFolderOpen />
                    </i>
                  </div>
                  <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                    Step 2: Explore Topics
                  </h3>
                  <p className="text-gray-600 text-base">
                    Based on your selection, dive into a list of relevant topics
                    tailored to your chosen section. Pick the topic you want to
                    practice or explore further.
                  </p>
                </div>
                <div
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center justify-center mb-4 text-orange-500 md:text-4xl text-3xl">
                    <i>
                      <RiVerifiedBadgeFill />
                    </i>
                  </div>
                  <h3 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
                    Step 3: Solve Questions
                  </h3>
                  <p className="text-gray-600 text-base">
                    Answer multiple-choice questions for topics in
                    <span className="font-semibold text-orange-700">
                      {" "}
                      Quantitative Aptitude
                    </span>{" "}
                    and
                    <span className="font-semibold text-orange-700">
                      {" "}
                      Reasoning Ability
                    </span>
                    . For
                    <span className="font-semibold text-orange-700">
                      {" "}
                      Interview Preparation
                    </span>
                    , access detailed, theory-based content to enhance your
                    understanding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Team Section */}
          <section className="py-16 bg-gradient-to-br from-[#f8eada] from-30% via-[#ffb348a5] via-65% to-[#febd6d92] to-85%">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="md:text-3xl text-2xl font-bold text-center text-orange-600 mb-8">
                Introducing the Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Rishabh Raj",
                    image: RishabhImage,
                    about:
                      "MERN stack developer with industry experience, delivering responsive designs and seamless integrations.",
                    contribution:
                      "Led frontend, integrated APIs, ensured seamless functionality.",
                    Linkedin:
                      "https://www.linkedin.com/in/rishabh-raj-875327282",
                    github: "https://github.com/rj225",
                  },
                  {
                    name: "Piyush Kumar Singh",
                    image: PiyushImage,
                    about:
                      "MERN stack developer creating innovative solutions that empower users and help students excel in real life.",
                    contribution:
                      "Connected backend APIs and managed database operations.",
                    Linkedin:
                      "https://www.linkedin.com/in/piyush-kumar-singh-902036248/",
                    github: "https://github.com/Piyush-kr-Singh",
                  },
                  {
                    name: "Aditya Raj Purohit",
                    image: AdityaImage,
                    about:
                      "Java & Spring Boot developer with expertise in REST/GraphQL APIs, microservices, and MySQL",
                    contribution:
                      "Managed deployment and cloud infrastructure.",
                    Linkedin:
                      "https://www.linkedin.com/in/aditya-raj-purohit-400346314",
                    github: "https://github.com/deku740",
                  },
                ].map((member, index) => (
                  <article
                    key={index}
                    className="bg-orange-200 duration-500 hover:scale-105 md:p-6 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                  >
                    {/* Image Section */}
                    <img
                      alt={member.name}
                      src={member.image}
                      loading="lazy"
                      className="rounded-full border-4 border-amber-500 shadow-lg shadow-amber-800 h-32 w-32 md:h-48 md:w-48 object-cover mx-auto mb-4"
                    />

                    {/* Description Section */}
                    <h3 className="text-xl font-semibold drop-shadow-2xl text-orange-600 md:text-left text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mt-2 md:text-left text-center">
                      {member.about}
                    </p>
                    {/* Contribution Section */}
                    <p className="text-gray-700 italic mt-4 text-left">
                      <span className="font-bold text-orange-600">
                        Contribution:
                      </span>{" "}
                      {member.contribution}
                    </p>
                    {/* Social Media Section */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <a
                        href={member.Linkedin}
                        target="_blank"
                        className="text-gray-500 hover:text-blue-700 hover:scale-110 transition-transform"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        className="text-gray-500 hover:text-black hover:scale-110 transition-transform"
                        aria-label="GitHub"
                      >
                        <FaGithub size={24} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* our vision */}
          <section
            className="md:bg-gradient-to-br bg-gradient-to-bl from-[#f8eada] md:from-40% from-20% via-[#ffb348a5] via-65% to-[#f99c2a3c] to-85% md:py-16 py-8 px-6 md:px-12 lg:px-24"
            id="vision"
          >
            <div className="container mx-auto">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-orange-800 md:mb-10 mb-4 md:text-center text-left">
                Vision of Excellence
              </h2>
              <div className="flex flex-col lg:flex-row justify-center items-center mb-12">
                <div className="lg:w-1/2 text-left md:pr-8 mb-5 md:mb-0">
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    At <strong className="text-orange-600">PrepStat</strong>, we envision a world where every student is
                    equipped with the right knowledge, skills, and confidence to
                    succeed in their placement journey.
                    <br /><br/>
                    We aim to empower students with the resources and support
                    they need to not only secure <strong className="text-orange-600">placements</strong> but to excel in
                    their careers. Our platform combines the latest trends in
                    education with <strong className="text-orange-600">practical learning</strong>, preparing students for
                    success in real-world challenges.
                  </p>
                </div>
                <div className="lg:w-1/2 md:pl-8">
                  <img
                    src={vision1}
                    alt="Vision Image"
                    className="w-4/5 mx-auto h-auto rounded-3xl border-r-4 border-t-4 shadow-xl border-orange-500 "
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
                <div className="lg:w-1/2 text-left mb-5 md:mb-0 md:pl-8">
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    We are committed to transforming the way students approach
                    their <strong className="text-orange-600">career challenges</strong>, offering them not only tools for
                    learning but a path to holistic growth.
                    <br />
                    Our approach focuses on <strong className="text-orange-600">practical learning</strong>, <strong className="text-orange-600">personalized
                    mentorship</strong>, and preparing students for real-world
                    challenges.
                    <ul className="list-disc text-xs md:text-sm lg:text-base pl-6 mt-4">
                      <li>
                        Providing access to <strong className="text-orange-600">high-quality</strong> resources and
                        comprehensive study materials
                      </li>
                      <li>
                        Fostering a <strong className="text-orange-600">community of support</strong> that aligns with career
                        aspirations
                      </li>
                      <li>
                        Equipping students with <strong className="text-orange-600">essential skills</strong> beyond academic
                        knowledge
                      </li>
                      <li>
                        Ensuring that every student is ready to excel in the
                        <strong className="text-orange-600"> workforce</strong>
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="lg:w-1/2 md:pr-8">
                  <img
                    src={vision2}
                    alt="Vision Image"
                    className="w-5/6 mx-auto h-auto rounded-3xl border-l-4 border-t-4 shadow-xl border-orange-500"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="lg:w-1/2 text-center lg:text-left md:pr-8 mb-5 md:mb-0">
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                    Our vision is to foster an environment where learning is
                    <strong className="text-orange-600"></strong>empowering, <strong className="text-orange-600">career-building</strong> is intentional, and every
                    student has access to <strong className="text-orange-600">world-class</strong> resources.
                    <br /><br/>
                    We aspire to create a future where education seamlessly
                    integrates with career success, helping students unlock
                    their <strong className="text-orange-600">full potential</strong>. By creating an ecosystem that nurtures
                    <strong className="text-orange-600">skill-buildin</strong>g, we aim to be the leading platform for
                    placement preparation.
                  </p>
                </div>
                <div className="lg:w-1/2 md:pl-8">
                  <img
                    src={vision3}
                    alt="Vision Image"
                    className="w-4/5 mx-auto h-auto rounded-3xl border-r-4 border-t-4 shadow-xl border-orange-500 "
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Join the Community Section */}
          <section className="py-16 community_section_img relative">
            <div className=" bg-gradient-to-bl from-cyan-200 from-15% via-orange-300 via-55% to-orange-700 opacity-50 absolute inset-0 -z-10"></div>
            <div className="max-w-5xl font-sans z-10 mx-auto px-4 text-center">
              <h2 className="text-xl md:text-3xl font-bold text-orange-600 mb-6 md:mb-8">
                Join Our Growing Community
              </h2>
              <p className="text-sm md:text-lg font-semibold text-gray-800 mb-4 md:mb-6">
                Have questions about placements, need help with a tricky
                problem, or want to contribute to PrepStat? We're here for you!
                Our community is a space where you can share ideas, ask for
                guidance, and collaborate with others who share the same drive
                for success.
              </p>
              <p className="text-sm md:text-lg font-semibold text-gray-800 mb-4 md:mb-6">
                Whether it's clearing doubts, sharing resources, or just seeking
                motivation—we've got you covered.
              </p>
              <a
                href="https://chat.whatsapp.com/E2r7c10BwECCA6R6J9cU0o"
                target="blank"
              >
                <button className="bg-gradient-to-tl font-serif from-orange-400 from-15% to-orange-700 cursor-pointer text-orange-100 md:px-6 px-3 md:py-3 py-2 rounded-full font-semibold hover:bg-gradient-to-bl hover:scale-105 shadow-md hover:ring-1 hover:ring-amber-300 shadow-orange-900 duration-500 transition">
                  Be a Part of the Community
                </button>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
