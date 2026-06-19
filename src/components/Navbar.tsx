import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and not near the very top
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 mix-blend-difference text-white transition-transform duration-500 ease-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="text-sm font-bold tracking-wider uppercase">DR. NIDHI'S DENTAL CLINIC</div>
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li><a href="#services" className="hover:opacity-70 transition-opacity">Services</a></li>
        <li><a href="#team" className="hover:opacity-70 transition-opacity">Team</a></li>
        <li><a href="#blog" className="hover:opacity-70 transition-opacity">Blog</a></li>
        <li><a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a></li>
        <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
      </ul>
    </nav>
  );
}

