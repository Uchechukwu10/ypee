import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>© {new Date().getFullYear()} Nigeria Youth for Peace and Entrepreneurial Initiative. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
