import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="text-gray-800 font-serif min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://www.prepstat.in/disclaimer" />
        <title>Disclaimer - PrepStat</title>
        <meta
          name="description"
          content="Disclaimer for PrepStat, including limitations of liability and general information about the service."
        />
        <meta
          name="keywords"
          content="disclaimer, PrepStat, legal information"
        />
      </Helmet>
      <Navbar />
      <div className="flex md:flex-row">
        <div className="w-full font-serif px-4 md:px-40 py-16 text-left">
          <h1 className="text-lg font-bold text-orange-600 text-center sm:text-xl lg:text-3xl">
            Disclaimer
          </h1>
          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            PrepStat is an online platform providing resources for aptitude
            tests, reasoning, verbal assessments, and interview preparation. The
            content available on our platform is intended for educational
            purposes only. While we strive to provide accurate and up-to-date
            information, we do not guarantee its completeness, accuracy, or
            reliability. Users should verify the information independently
            before making decisions based on it.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            While PrepStat offers resources to help you prepare for exams, we do
            not guarantee specific results such as job placements or success in
            aptitude tests. Success depends on many factors, including
            individual effort, external conditions, and personal aptitude.
            Therefore, we make no promises regarding the outcomes of using our
            platform.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            Our platform may include links to third-party websites, which are
            not under our control. PrepStat is not responsible for the content
            or privacy practices of these external sites. We encourage users to
            review the privacy policies and terms of use of any third-party
            websites before engaging with them.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            Users of PrepStat are responsible for how they use the resources and
            information available on the platform. While we aim to provide
            high-quality content, we encourage users to cross-check any
            information and assess its relevance for their personal learning and
            preparation goals. All use of the platform is at the user’s
            discretion and risk.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            To the fullest extent permitted by law, PrepStat and its affiliates
            shall not be held liable for any indirect, incidental, special, or
            consequential damages arising from the use of the platform. This
            includes, but is not limited to, any errors, omissions,
            interruptions, or delays in the service provided by PrepStat. Users
            acknowledge and agree to use the platform at their own risk.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            We reserve the right to update or modify this Disclaimer at any
            time. Any changes will be reflected on this page, and the updated
            version will include a "Last Updated" date. We recommend that users
            periodically review this section to stay informed of any updates or
            changes.
          </p>

          <p className="text-sm text-center text-gray-700 mt-4 sm:text-base md:text-xl">
            If you have any questions or concerns about this Disclaimer or any
            aspect of our platform, please feel free to contact us at{" "}
            <a href="mailto:wtc131123@gmail.com" className="text-orange-600">
            wtc131123@gmail.com
            </a>
            . We are happy to assist you.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Disclaimer;
