import React from "react";

const companies = [
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
  { name: "Deloitte", logo: "https://logo.clearbit.com/www2.deloitte.com" },
  { name: "EY India", logo: "https://logo.clearbit.com/ey.com" },
  { name: "LTI Mindtree", logo: "https://logo.clearbit.com/ltimindtree.com" },
  { name: "HCL Technologies", logo: "https://logo.clearbit.com/hcltech.com" },
  { name: "Paltech", logo: "https://logo.clearbit.com/pal.tech" },
  { name: "Argusoft", logo: "https://logo.clearbit.com/argusoft.com" },
  { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Persistent Systems", logo: "https://logo.clearbit.com/persistent.com" },
  { name: "Birlasoft", logo: "https://logo.clearbit.com/birlasoft.com" },
  { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "Zensar Technologies", logo: "https://logo.clearbit.com/zensar.com" },
  { name: "KPIT", logo: "https://logo.clearbit.com/kpit.com" },
  { name: "KFin Technologies", logo: "https://logo.clearbit.com/kfintech.com" },
  { name: "Tata Elxsi", logo: "https://logo.clearbit.com/tataelxsi.com" },
  { name: "UST Global", logo: "https://logo.clearbit.com/ust.com" },
  { name: "ericsson", logo: "https://logo.clearbit.com/www.ericsson.com/" },
];

const TargetCompanies = () => {
  return (
    <div className="relative w-full py-12 bg-transparent overflow-hidden">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-600">
        A Few of Our Focused Companies
      </h2>

      {/* Logo Container */}
      <div className="relative flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`relative rounded-lg overflow-hidden shadow-md flex justify-center items-center group 
              ${
                index % 3 === 0
                  ? "w-24 h-24 sm:w-32 sm:h-32"
                  : index % 4 === 0
                  ? "w-28 h-28 sm:w-36 sm:h-36"
                  : "w-20 h-20 sm:w-28 sm:h-28"
              }`}
          >
            {/* Logo Image */}
            <img
              src={company.logo}
              alt={company.name}
              className="object-contain w-full h-full p-2 rounded-md hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100x100";
              }}
            />

            {/* Company Name Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetCompanies;
