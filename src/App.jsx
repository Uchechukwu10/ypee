import React from 'react';
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Layout component to wrap all pages with a Navbar and Footer
function Layout() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Child routes will be rendered here */}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Handles any undefined routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

