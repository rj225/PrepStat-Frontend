import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="text-gray-800 font-serif min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://www.prepstat.in/terms-of-service" />
        <title>Terms of Service - PrepStat</title>
        <meta
          name="description"
          content="Terms of service for PrepStat, outlining the conditions for using our platform and services."
        />
        <meta
          name="keywords"
          content="terms of service, PrepStat, legal conditions"
        />
      </Helmet>
      <Navbar />
      <div className="flex md:flex-row">
        <div className="w-full px-4 md:px-40 font-serif py-16 text-left">
          <h1 className="text-lg font-bold text-orange-600 text-center sm:text-xl lg:text-3xl">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            Welcome to PrepStat! These terms and conditions outline the rules
            and regulations for the use of our website and services. By
            accessing or using PrepStat, you agree to comply with and be bound
            by these terms. If you do not agree with any part of these terms,
            please refrain from using our platform.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>1. Use of Content:</strong> The content provided on
            PrepStat, including aptitude tests, reasoning, verbal assessments,
            and interview preparation materials, is for educational and
            informational purposes only. You may use the content for personal,
            non-commercial purposes, but you may not modify, distribute,
            reproduce, or sell any part of the content without explicit
            permission from the content creator or PrepStat.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>2. User Contributions:</strong> Users of PrepStat may
            contribute content, including practice materials, study notes, or
            other educational resources. By contributing, you grant PrepStat a
            non-exclusive, royalty-free, worldwide, perpetual license to use,
            reproduce, modify, and distribute your content for the purpose of
            providing our services.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>3. Prohibited Activities:</strong> You agree not to engage
            in any activities that may disrupt or interfere with the functioning
            of PrepStat or violate any applicable laws. This includes uploading
            malicious code, spamming, impersonating others, or engaging in any
            form of harassment. Any such activity will result in immediate
            suspension or termination of your account.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>4. Disclaimer:</strong> The content on PrepStat is intended
            for educational purposes only and is not a substitute for
            professional guidance. PrepStat makes no warranties or
            representations regarding the accuracy, completeness, or reliability
            of the content. You are solely responsible for any decisions or
            actions you take based on the information provided on PrepStat.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>5. Limitation of Liability:</strong> PrepStat, its
            administrators, contributors, and affiliates shall not be held
            liable for any direct, indirect, incidental, special, or
            consequential damages arising from the use of our website or
            services, including the accuracy or usefulness of the content
            provided.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>6. Modifications:</strong> PrepStat reserves the right to
            modify or terminate these terms and conditions at any time without
            prior notice. It is your responsibility to review these terms
            periodically. Continued use of PrepStat after changes to the terms
            constitutes your acceptance of the modified terms.
          </p>

          <p className="text-sm text-gray-700 mt-4 sm:text-base md:text-xl">
            <strong>7. Contact Us:</strong> If you have any questions or
            concerns about these terms and conditions, please contact us at{" "}
            <a href="mailto:wtc131123@gmail.com" className="text-orange-600">
              wtc131123@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
