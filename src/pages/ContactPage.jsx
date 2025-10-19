import React from 'react';

export default function ContactPage() {
  return (
    <div className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question, a proposal, or just want to say hello, feel free to reach out.</p>
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="space-y-4 text-left">
                     {/* <-- PASTE YOUR CONTACT INFO HERE --> */}
                    <p className="text-lg"><strong className="text-gray-800">Email:</strong> <a href="mailto:info@nypei.org" className="text-green-600 hover:underline">info@nypei.org</a></p>
                    <p className="text-lg"><strong className="text-gray-800">Phone:</strong> +234 123 456 7890</p>
                    <p className="text-lg"><strong className="text-gray-800">Address:</strong> 123 Peace Avenue, Abuja, Nigeria</p>
                </div>
            </div>
        </div>
    </div>
  );
}