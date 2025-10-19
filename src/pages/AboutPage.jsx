import React from 'react';

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Our Organization</h1>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
                {/* <-- PASTE YOUR "ABOUT US" CONTENT HERE, broken into paragraphs --> */}
                <p>
                    Nigeria Youth for Peace and Entrepreneurial Initiative was founded in 2020 with a singular mission: to channel the vibrant energy of our nation's youth towards positive, constructive, and sustainable outcomes. We believe that peace and prosperity are two sides of the same coin.
                </p>
                <p>
                    Our vision is a Nigeria where every young person has the skills, resources, and platform to become a leader in their community, driving both economic growth and social harmony. We focus on hands-on training, mentorship, and funding for young entrepreneurs who are passionate about making a difference.
                </p>
            </div>
        </div>
    </div>
  );
}
