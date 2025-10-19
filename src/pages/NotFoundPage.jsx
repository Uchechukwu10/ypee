import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link 
                to="/" 
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    </div>
  );
}
