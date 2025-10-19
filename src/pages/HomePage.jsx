import React from 'react';

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
            We are dedicated to fostering peace and creating entrepreneurial opportunities for the youth in Nigeria.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
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
    </>
  );
}
