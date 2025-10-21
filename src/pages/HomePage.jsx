import React from "react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] w-[100vw] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-image.jpg')" }} // <-- REPLACE with your hero image
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {/* <-- PASTE YOUR HEADLINE HERE */}
            Empowering Youth, Building Peace
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {/* <-- PASTE YOUR MISSION STATEMENT HERE */}
            We are dedicated to fostering peace and creating entrepreneurial
            opportunities for the youth in Nigeria.
          </p>
          <button
            className={`
        inline-flex items-center justify-center gap-2 px-8 py-3 mx-1 my-6 
        font-bold text-green text-lg
        bg-green-600 rounded-full 
        shadow-lg hover:shadow-xl 
        hover:bg-green-700 
        transform hover:-translate-y-1 transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-green-300
      `}
          >
            Support Us
            {/* Arrow Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      {/* --- Updated Brief About Us Section --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="text-center lg:text-left">
              <img
                src="/empowerment.jpg" // You can replace this with a photo of your team or an event
                alt="Our Mission"
                className="w-[85%] h-auto mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>

            {/* Text & Cards Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nigeria Youth for Peace and Entrepreneurial Initiative (NYPEI)
                was founded on the belief that empowering our youth is the most
                effective path to lasting peace and national prosperity. We
                provide the tools, training, and support necessary to turn
                innovative ideas into successful ventures.
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Mission Card */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-start gap-4">
                    {/* Target Icon */}
                    <svg
                      className="w-8 h-8 text-green-700 flex-shrink-0 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M21.75 12h-2.25m-1.334 5.834l-1.591-1.591M5.25 4.666l1.591 1.591M3 12H.75m1.334 5.834l1.591-1.591M12 19.5v2.25"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-600 text-sm">
                        To equip young Nigerians with the entrepreneurial skills
                        and resources needed to build sustainable businesses and
                        promote peace within their communities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-start gap-4">
                    {/* Eye Icon */}
                    <svg
                      className="w-8 h-8 text-green-700 flex-shrink-0 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600 text-sm">
                        A peaceful and prosperous Nigeria driven by a new
                        generation of innovative leaders and entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center font-semibold text-green-600 hover:text-green-800 transition-colors duration-300"
              >
                Learn More About Our Mission
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <-- PASTE YOUR STATISTICS HERE --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-green-600">50+</h3>
              <p className="text-gray-600 mt-2">Projects Launched</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-green-600">2,000+</h3>
              <p className="text-gray-600 mt-2">Youths Trained</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-green-600">15+</h3>
              <p className="text-gray-600 mt-2">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <-- PASTE YOUR STATISTICS HERE --> */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-green-600">Empowerment</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-24 h-24 my-2 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m3-10.5l-1.5 1.5m-5.25-1.5L7.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5l-3.75-3.75m0 0l-3.75 3.75M12 15.75V9"
                />
              </svg>
            </div>
            <div className="bg-white p-6 rounded-lg shadow- flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-green-600">Integrity</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-24 h-24 my-2 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <div className="bg-white p-6 rounded-lg shadow- flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-green-600">Innovation</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-24 h-24 my-2 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311l-3.75 0M9 17.25a3 3 0 013-3h0a3 3 0 013 3v.003M5.527 16.29a3.375 3.375 0 01-.133-1.666V12a3.375 3.375 0 013.375-3.375h5.462c1.858 0 3.375 1.517 3.375 3.375v2.624c0 .622-.182 1.222-.515 1.748l-.14.212M16.5 10.5V7.125c0-1.858-1.517-3.375-3.375-3.375h-5.462C5.815 3.75 4.3 5.267 4.3 7.125v3.375"
                />
              </svg>
            </div>
            <div className="bg-white p-6 rounded-lg shadow- flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-green-600">
                Collaboration
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-24 h-24 my-2 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5m-3.75 7.5v-7.5m-3.75 7.5v-7.5m9 3.75l-3-3l-3 3m1.5-12v7.5"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
