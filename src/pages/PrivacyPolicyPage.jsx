import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="text-gray-800 font-serif min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://www.prepstat.in/privacy-policy" />
        <title>Privacy Policy - PrepStat</title>
        <meta
          name="description"
          content="Privacy Policy for PrepStat, outlining how we handle and protect your personal information."
        />
        <meta
          name="keywords"
          content="privacy policy, PrepStat, data protection"
        />
      </Helmet>
      <Navbar />
      <div className="flex md:flex-row">
        <div className="w-full px-4 md:px-10 py-16 text-left">
          <h1 className="md:text-3xl text-2xl font-bold text-orange-600 text-center">Privacy Policy</h1>
          <p className="md:text-lg text-base gap-x-1 text-gray-700 mt-4">
            At <strong className="text-orange-500">PrepStat</strong>, we value and respect your privacy. This Privacy Policy
            outlines how we collect, use, store, and protect your personal data
            when you use our platform. Please read this policy carefully to
            understand our views and practices regarding your personal
            information.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            1. Information We Collect
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            We collect the following types of information:
          </p>
          <ul className="list-inside list-disc mt-4 md:text-lg text-sm text-gray-700">
            <li>
              <strong>Personal Information:</strong> When you use PrepStat, we
              may collect personal details such as your name, email address,
              phone number, etc.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you
              interact with our website and platform, such as IP address,
              browser type, device information, and activity logs.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to improve your
              experience on our platform. Cookies help us analyze web traffic
              and remember your preferences.
            </li>
          </ul>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            2. How We Use Your Information
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-inside list-disc mt-4 md:text-lg text-sm text-gray-700">
            <li>
              <strong>Improving User Experience:</strong> We use your data to
              personalize your experience and improve the functionality of our
              platform.
            </li>
            <li>
              <strong>Communication:</strong> We may use your email address to
              send important notifications, updates, or promotional materials
              related to PrepStat.
            </li>
            <li>
              <strong>Analytics:</strong> We analyze usage data to understand
              trends and improve our platform’s performance.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may use your information to
              comply with legal obligations and resolve disputes.
            </li>
          </ul>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            3. How We Protect Your Information
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            We take the security of your personal information seriously. We
            implement various technical and organizational measures to protect
            your data from unauthorized access, disclosure, alteration, or
            destruction. However, no method of data transmission or storage is
            completely secure, and we cannot guarantee the absolute security of
            your information.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            4. Sharing Your Information
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            We do not sell, trade, or rent your personal data to third parties.
            However, we may share your information with trusted third-party
            service providers who assist in the operation of our platform and
            who agree to keep this information confidential.
          </p>
          <ul className="list-inside list-disc mt-4 md:text-lg text-sm text-gray-700">
            <li>
              <strong>Service Providers:</strong> We may share information with
              vendors and service providers who help us run our platform and
              services.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may disclose your
              information when required by law or to protect our legal rights.
            </li>
          </ul>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            5. Your Data Rights
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            You have the right to access, update, or delete your personal data
            at any time. If you wish to exercise these rights, please contact us
            through the contact information provided at the end of this policy.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            PrepStat uses cookies to enhance your browsing experience. Cookies
            are small text files placed on your device that help us analyze web
            traffic and customize your experience. You can choose to disable
            cookies by adjusting your browser settings, but this may affect your
            ability to use certain features of the platform.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            7. Children’s Privacy
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            PrepStat is not intended for children under the age of 13. We do not
            knowingly collect personal information from children. If you are a
            parent or guardian and believe that your child has provided us with
            personal information, please contact us, and we will take steps to
            delete such information.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            8. Changes to This Privacy Policy
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page, and we will update the "Last
            Updated" date at the bottom of this policy. We encourage you to
            review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="md:text-2xl text-lg md:font-mono font-sans font-semibold text-orange-600 mt-8">
            9. Contact Us
          </h2>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            If you have any questions about this Privacy Policy or how we handle
            your personal data, please contact us at:
          </p>
          <p className="md:text-lg text-sm text-gray-700 mt-4">
            Email:{" "}
            <a href="mailto:wtc131123@gmail.com" className="text-orange-600">
            wtc131123@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
