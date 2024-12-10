          {/* Statistics Section */}
          <section className="bg-[#f7e8d3] py-16">
            <div className="container mx-auto text-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Early Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">
                      Growing
                    </h3>
                    <p className="text-gray-700">Placement Success Rate</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">
                      Dedicated
                    </h3>
                    <p className="text-gray-700">Committed Users</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">
                      Partnerships
                    </h3>
                    <p className="text-gray-700">with Institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-[#f7e8d3] py-16">
            <div className="container mx-auto text-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">95%</h3>
                    <p className="text-gray-700">Placement Success Rate</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">
                      200K+
                    </h3>
                    <p className="text-gray-700">Active Users</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">100+</h3>
                    <p className="text-gray-700">Partner Institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#f8f3ed] py-16">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                What Our Users Say
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, staggerChildren: 0.2 },
                  },
                }}
              >
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "PrepStat's platform helped me land my dream job. The
                    analytics and interview prep were spot on!"
                  </p>
                  <p className="mt-4 font-semibold">
                    - John Doe, Placed at ABC Corp.
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "I couldn't have cracked my aptitude tests without PrepStat.
                    It's a game-changer for placement prep."
                  </p>
                  <p className="mt-4 font-semibold">
                    - Jane Smith, Placed at XYZ Ltd.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#f8f3ed] py-16">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                What Our Early Users Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "PrepStat's resources are already making a difference in my
                    prep for placements. Can't wait to see what's next!"
                  </p>
                  <p className="mt-4 font-semibold">- Early Access User</p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "The mock questions and practice tests are just what I
                    needed to get started on my placement journey."
                  </p>
                  <p className="mt-4 font-semibold">- Recent Graduate</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call-to-Action */}
          <section className="bg-[#f8e1c4] py-16">
            <div className="container mx-auto text-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Boost Your Career?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  PrepStat is your go-to platform for placement success.
                </p>
              </div>
            </div>
          </section>









{/* Our Vision Section */}
<section className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Vision</h2>
    <p className="text-lg text-gray-600 mb-6">
      At PrepStat, we aspire to create a future where every student is equipped with the tools and confidence to excel in their placements and career.
    </p>
    <div className="flex justify-center space-x-8">
      {[
        {
          id: 1,
          title: "Empowerment",
          description: "Helping students unlock their true potential through structured learning.",
          icon: <FaLightbulb className="text-orange-500 text-4xl mb-2" />,
        },
        {
          id: 2,
          title: "Innovation",
          description: "Staying ahead with modern techniques and data-driven strategies.",
          icon: <FaRocket className="text-orange-500 text-4xl mb-2" />,
        },
        {
          id: 3,
          title: "Community",
          description: "Building a strong network of learners and achievers.",
          icon: <FaUsers className="text-orange-500 text-4xl mb-2" />,
        },
      ].map((item) => (
        <div
          key={item.id}
          className="p-6 bg-white rounded-lg shadow-lg w-64"
        >
          {item.icon}
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Explore Features Section */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Features</h2>
    <p className="text-lg text-gray-600 mb-6">
      Discover what makes PrepStat your go-to platform for placement preparation.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          title: "Customizable Practice",
          description:
            "Tailor your learning journey with topic-specific quizzes and mock tests.",
          icon: <FaTasks className="text-orange-500 text-4xl mb-4" />,
        },
        {
          id: 2,
          title: "Performance Insights",
          description:
            "Track your progress with detailed analytics and personalized feedback.",
          icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
        },
        {
          id: 3,
          title: "Expert Tips",
          description:
            "Access valuable tips and strategies from placement experts to ace your preparation.",
          icon: <FaUserTie className="text-orange-500 text-4xl mb-4" />,
        },
      ].map((feature) => (
        <div
          key={feature.id}
          className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
        >
          {feature.icon}
          <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Community Focus Section */}
<section className="bg-gray-800 text-white py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Building a Community</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col items-center">
        <FaHandsHelping className="text-orange-400 text-6xl mb-4" />
        <h3 className="text-2xl font-bold">Collaborative Learning</h3>
        <p className="text-gray-300 text-center">
          Connect with peers to exchange knowledge, ideas, and support on your preparation journey.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaGlobe className="text-orange-400 text-6xl mb-4" />
        <h3 className="text-2xl font-bold">Global Reach</h3>
        <p className="text-gray-300 text-center">
          Join a growing network of learners and professionals sharing insights and success stories.
        </p>
      </div>
    </div>
  </div>
</section>