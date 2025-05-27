import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type MenuItem = {
  href: string;
  label: string;
  type: 'scroll' | 'link';
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isGalleryPage = location.pathname === '/gallery';

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
    
    if (!isHomePage) {
      navigate(`/#${targetId}`);
      return;
    }
    
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
          className="text-white hover:text-[#f4a82e] transition-colors font-semibold text-base sm:text-lg px-2 sm:px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
          aria-label={`Go to ${item.label} section`}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        onClick={scrollToSection}
        className="text-white hover:text-[#f4a82e] transition-colors font-semibold text-base sm:text-lg px-2 sm:px-4 py-2"
        aria-label={`Go to ${item.label} section`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-[#f4a82e]/60 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="w-full px-4 sm:px-6 md:px-8 py-1 flex items-center justify-between">
        <div className="flex items-center ml-4 sm:ml-8 md:ml-24">
          {isHomePage ? (
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#f4a82e] transition-colors"
              aria-label="Scroll to top of Test Society home page"
            >
              <img src="/images/Logo_Pequeno.png" alt="Test Society 2025" className="h-10 sm:h-12 md:h-16" />
            </a>
          ) : (
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#f4a82e] transition-colors"
              aria-label="Go to Test Society home page"
            >
              <img src="/images/Logo_Pequeno.png" alt="Test Society 2025" className="h-10 sm:h-12 md:h-16" />
            </a>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {isGalleryPage ? (
            <Button 
              className="bg-teal-800 hover:bg-teal-700 text-white px-4 lg:px-6 py-2 rounded-md font-semibold text-base lg:text-lg transition-colors flex items-center gap-2"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Conference
            </Button>
          ) : (
            <>
              {menuItems.map((item) => (
                <div key={item.href}>
                  {renderMenuItem(item)}
                </div>
              ))}
              <Button 
                className="bg-teal-800 hover:bg-teal-700 text-white ml-2 lg:ml-4 px-4 lg:px-6 py-2 rounded-md font-semibold text-base lg:text-lg transition-colors"
                asChild
              >
                <a href="#tickets" onClick={scrollToSection} aria-label="Go to Tickets section">Buy Tickets</a>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <span className="text-xl sm:text-2xl">✕</span>
          ) : (
            <span className="text-xl sm:text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm p-4 sm:p-6">
          <nav className="flex flex-col space-y-2 sm:space-y-4">
            {isGalleryPage ? (
              <Button 
                className="bg-teal-800 hover:bg-teal-700 text-white w-full py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Conference
              </Button>
            ) : (
              <>
                {menuItems.map((item) => (
                  <div key={item.href}>
                    {renderMenuItem(item)}
                  </div>
                ))}
                <Button 
                  className="bg-teal-800 hover:bg-teal-700 text-white w-full py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition-colors mt-2"
                  asChild
                >
                  <a href="#tickets" onClick={scrollToSection} aria-label="Go to Tickets section">Register Now</a>
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
