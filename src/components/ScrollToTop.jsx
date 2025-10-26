import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component doesn't render anything, it just contains the effect logic.
export default function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current URL path

  useEffect(() => {
    // Scroll the window to the top (0 pixels horizontally, 0 pixels vertically)
    window.scrollTo(0, 0); 
  }, [pathname]); // Re-run this effect every time the pathname changes

  return null; // This component doesn't need to render any HTML
}
