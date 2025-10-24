import React from 'react';
import { Mail, Phone, MapPin, CreditCard, Banknote } from 'lucide-react'; // Example icons

export default function SupportUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Support Our Mission
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your generous contribution empowers us to continue our vital work with Nigerian youth. Every donation makes a difference in building a more peaceful and prosperous future.
          </p>
        </div>

        {/* Donation Options */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden divide-y divide-gray-200">
          
          {/* Bank Transfer Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Banknote className="w-7 h-7 mr-3 text-green-600" />
              Direct Bank Transfer
            </h2>
            <p className="text-gray-600 mb-4">
              You can make a direct deposit or transfer to our official bank account. Please use "Donation" as the reference or description.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-md p-4 space-y-2">
              <p><strong>Bank Name:</strong> First Bank of Nigeria</p>
              <p><strong>Account Name:</strong> Nigeria Youth for Peace and Entrepreneurial Initiative</p>
              <p><strong>Account Number:</strong> 1234567890</p>
              {/* <p><strong>Sort Code (if needed):</strong> 011XXXXX</p> 
              <p><strong>Swift/BIC (for international):</strong> FBNINGLAXXX</p> */}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Please ensure you are transferring to the correct account details. NYPEI is not responsible for transfers made to incorrect accounts.*
            </p>
          </div>

          {/* Alternative/Online Payment (Placeholder) */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CreditCard className="w-7 h-7 mr-3 text-green-600" />
              Online Donations (Coming Soon)
            </h2>
            <p className="text-gray-600 mb-4">
              We are currently working on setting up secure online payment options (e.g., Paystack, Flutterwave). Please check back soon for updates!
            </p>
            {/* You could add a placeholder button here */}
            <button 
              disabled 
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 cursor-not-allowed"
            >
              Donate Online (Unavailable)
            </button>
          </div>

          {/* Contact for Other Ways to Give */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Support</h2>
            <p className="text-gray-600 mb-4">
              Interested in volunteering your time, offering in-kind donations, or discussing corporate partnerships? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                Contact Us
              </a>
               <a href="/projects" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Learn About Our Projects
              </a>
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Thank you for considering supporting NYPEI. Your partnership is invaluable.
          </p>
        </div>
      </div>
    </div>
  );
}
