import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Link, useLocation } from 'react-router-dom';

type MenuItem = {
  href: string;
  label: string;
  type: 'scroll' | 'link';
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  const menuItems: MenuItem[] = [
    { href: '#about', label: 'About', type: 'scroll' },
    { href: '#speakers', label: 'Speakers', type: 'scroll' },
    { href: '#schedule', label: 'Schedule', type: 'scroll' },
    { href: '#sponsors', label: 'Sponsors', type: 'scroll' },
    { href: '#past-events', label: 'Past Events', type: 'scroll' }
  ];

  const renderMenuItem = (item: MenuItem) => {
    if (item.type === 'link') {
      return (
        <Link
          to={item.href}
          className="text-white hover:text-[#f4a82e] transition-colors font-semibold text-lg px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        onClick={scrollToSection}
        className="text-white hover:text-[#f4a82e] transition-colors font-semibold text-lg px-4 py-2"
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="w-full px-8 py-1 flex items-center justify-between">
        <div className="flex items-center ml-24">
          <Link to="/" className="focus:outline-none">
            <img src="/images/Logo_Pequeno.png" alt="Test Society 2025" className="h-12 md:h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {menuItems.map((item) => (
            <div key={item.href}>
              {renderMenuItem(item)}
            </div>
          ))}
          <Button 
            className="bg-teal-800 hover:bg-teal-700 text-white ml-4 px-6 py-2 rounded-md font-semibold text-lg transition-colors"
            asChild
          >
            <a href="#tickets" onClick={scrollToSection}>Register Now</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
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
        <div className="md:hidden bg-black/90 backdrop-blur-sm p-6">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.href}>
                {renderMenuItem(item)}
              </div>
            ))}
            <Button 
              className="bg-teal-800 hover:bg-teal-700 text-white w-full py-3 rounded-md font-semibold text-lg transition-colors"
              asChild
            >
              <a href="#tickets" onClick={scrollToSection}>Register Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
