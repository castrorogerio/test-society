import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/61419109-344e-4865-a338-eb069aca0bd2.png')" }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <Header />
      </div>
      
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center">
          <h1 className="text-amber-DEFAULT text-5xl md:text-7xl font-bold mb-4">404</h1>
          <p className="text-white text-xl md:text-2xl mb-8">Oops! The page you're looking for doesn't exist</p>
          <Button 
            className="bg-amber-DEFAULT hover:bg-amber-dark text-black" 
            size="lg"
            asChild
          >
            <a href="/">Back to Home</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
