import React from 'react'

const faqItems = [
    {
      key: "1",
      label: (
        <span className="font-serif text-base md:text-lg font-normal">
          What is PrepStat?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat is your <span className="text-orange-600 font-semibold">all-in-one</span> placement preparation platform designed to
          help students excel in their careers. We focus on providing a
          comprehensive approach to aptitude, reasoning, and interview skills.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <span className="font-serif text-base md:text-lg font-normal">
          How does PrepStat help with placements?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat offers resources like topic-specific quizzes, mock tests, and
          curated study material for aptitude, reasoning, and verbal skills. Our
          tools are tailored to guide you <span className="text-orange-600 font-semibold">step-by-step</span> through your preparation
          journey.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <span className="font-serif text-base md:text-lg font-normal">
          Is PrepStat free to use?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          Yes, PrepStat is <span className="text-orange-600 font-semibold">free</span> for all users as we are a new startup. Our
          mission is to make <span className="text-orange-600 font-semibold">high-quality</span> placement preparation accessible to
          every student without any financial burden.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <span className="font-serif text-base md:text-lg font-normal">
          What makes PrepStat unique?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat stands out because of its data-driven insights and
          community-driven approach. Unlike traditional platforms, we use
          <span className="text-orange-600 font-semibold">real-world</span> placement analytics to help you understand trends and
          tailor your preparation effectively.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <span className="font-serif text-base md:text-lg font-normal">
          What kind of questions are available on PrepStat?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat offers a curated collection of aptitude, reasoning, verbal,
          and interview-related questions. We ensure that all questions are
          carefully selected to match <span className="text-orange-600 font-semibold">real-world</span> placement patterns and
          difficulty.
        </p>
      ),
    },
  ];
  
  export default faqItems;
  