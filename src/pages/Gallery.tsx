import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    {
      src: "/gallery/IMG_6877.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6877.jpg"
    },
    {
      src: "/gallery/IMG_6890.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6890.jpg"
    },
    {
      src: "/gallery/IMG_6925.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6925.jpg"
    },
    {
      src: "/gallery/IMG_6928.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6928.jpg"
    },
    {
      src: "/gallery/IMG_6933.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6933.jpg"
    },
    {
      src: "/gallery/IMG_6944.jpg",
      thumbnail: "/gallery/thumbnails/IMG_6944.jpg"
    }
  ];

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: "url('/images/Speakers_BG.png')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/60" />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32">
          <div className="absolute inset-0"></div>
          <div className="absolute inset-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              title="Event Gallery"
              subtitle="Relive the moments from Test Society 2024"
              textColor="text-white"
              align="center"
            />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer"
                  onClick={() => openImageModal(image)}
                >
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-4 border-[#f4a82e] border-t-transparent"></div>
                    </div>
                  )}
                  <img 
                    src={image.thumbnail} 
                    alt="Gallery image"
                    className="w-full h-48 sm:h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-4xl hover:text-[#f4a82e] transition-colors"
                onClick={closeImageModal}
              >
                &times;
              </button>
              <img 
                src={selectedImage.src} 
                alt="Gallery image"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              title="Join Us This Year"
              subtitle="Be part of Test Society 2025"
              textColor="text-[#f4a82e]"
            />
            <Button 
              className="bg-teal-800 hover:bg-teal-700 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 mt-6 sm:mt-8 uppercase tracking-wide font-bold rounded-md font-montserrat"
              size="lg"
              asChild
            >
              <a href="/#register">GRAB YOUR SEAT NOW</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery; 