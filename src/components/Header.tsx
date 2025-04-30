
import { useState } from 'react';
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-amber-DEFAULT font-bold text-xl">TEST SOCIETY 2025</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-amber-DEFAULT transition-colors">About</a>
          <a href="#speakers" className="text-white hover:text-amber-DEFAULT transition-colors">Speakers</a>
          <a href="#schedule" className="text-white hover:text-amber-DEFAULT transition-colors">Schedule</a>
          <a href="#sponsors" className="text-white hover:text-amber-DEFAULT transition-colors">Sponsors</a>
          <a href="#register" className="text-white hover:text-amber-DEFAULT transition-colors">Register</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-amber-DEFAULT transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#speakers" className="text-white hover:text-amber-DEFAULT transition-colors" onClick={() => setIsMenuOpen(false)}>Speakers</a>
            <a href="#schedule" className="text-white hover:text-amber-DEFAULT transition-colors" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#sponsors" className="text-white hover:text-amber-DEFAULT transition-colors" onClick={() => setIsMenuOpen(false)}>Sponsors</a>
            <a href="#register" className="text-white hover:text-amber-DEFAULT transition-colors" onClick={() => setIsMenuOpen(false)}>Register</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
