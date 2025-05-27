import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    { src: "/gallery/1.jpg", thumbnail: "/gallery/thumbnails/1.jpg" },
    { src: "/gallery/2.jpg", thumbnail: "/gallery/thumbnails/2.jpg" },
    { src: "/gallery/3.jpg", thumbnail: "/gallery/thumbnails/3.jpg" },
    { src: "/gallery/4.jpg", thumbnail: "/gallery/thumbnails/4.jpg" },
    { src: "/gallery/5.jpg", thumbnail: "/gallery/thumbnails/5.jpg" },
    { src: "/gallery/6.jpg", thumbnail: "/gallery/thumbnails/6.jpg" },
    { src: "/gallery/7.jpg", thumbnail: "/gallery/thumbnails/7.jpg" },
    { src: "/gallery/8.jpg", thumbnail: "/gallery/thumbnails/8.jpg" },
    { src: "/gallery/9.jpg", thumbnail: "/gallery/thumbnails/9.jpg" },
    { src: "/gallery/10.jpg", thumbnail: "/gallery/thumbnails/10.jpg" },
    { src: "/gallery/11.jpg", thumbnail: "/gallery/thumbnails/11.jpg" },
    { src: "/gallery/12.jpg", thumbnail: "/gallery/thumbnails/12.jpg" },
    { src: "/gallery/13.jpg", thumbnail: "/gallery/thumbnails/13.jpg" },
    { src: "/gallery/14.jpg", thumbnail: "/gallery/thumbnails/14.jpg" },
    { src: "/gallery/15.jpg", thumbnail: "/gallery/thumbnails/15.jpg" },
    { src: "/gallery/17.jpg", thumbnail: "/gallery/thumbnails/17.jpg" },
    { src: "/gallery/18.jpg", thumbnail: "/gallery/thumbnails/18.jpg" },
    { src: "/gallery/21.jpg", thumbnail: "/gallery/thumbnails/21.jpg" },
    { src: "/gallery/24.jpg", thumbnail: "/gallery/thumbnails/24.jpg" },
    { src: "/gallery/25.jpg", thumbnail: "/gallery/thumbnails/25.jpg" },
    { src: "/gallery/26.jpg", thumbnail: "/gallery/thumbnails/26.jpg" },
    { src: "/gallery/27.jpg", thumbnail: "/gallery/thumbnails/27.jpg" },
    { src: "/gallery/28.jpg", thumbnail: "/gallery/thumbnails/28.jpg" },
    { src: "/gallery/29.jpg", thumbnail: "/gallery/thumbnails/29.jpg" },
    { src: "/gallery/30.jpg", thumbnail: "/gallery/thumbnails/30.jpg" },
    { src: "/gallery/31.jpg", thumbnail: "/gallery/thumbnails/31.jpg" },
    { src: "/gallery/32.jpg", thumbnail: "/gallery/thumbnails/32.jpg" },
    { src: "/gallery/33.jpg", thumbnail: "/gallery/thumbnails/33.jpg" },
    { src: "/gallery/34.jpg", thumbnail: "/gallery/thumbnails/34.jpg" },
    { src: "/gallery/35.jpg", thumbnail: "/gallery/thumbnails/35.jpg" },
    { src: "/gallery/36.jpg", thumbnail: "/gallery/thumbnails/36.jpg" },
    { src: "/gallery/37.jpg", thumbnail: "/gallery/thumbnails/37.jpg" },
    { src: "/gallery/38.jpg", thumbnail: "/gallery/thumbnails/38.jpg" },
    { src: "/gallery/39.jpg", thumbnail: "/gallery/thumbnails/39.jpg" },
    { src: "/gallery/40.jpg", thumbnail: "/gallery/thumbnails/40.jpg" },
    { src: "/gallery/41.jpg", thumbnail: "/gallery/thumbnails/41.jpg" },
    { src: "/gallery/42.jpg", thumbnail: "/gallery/thumbnails/42.jpg" },
    { src: "/gallery/43.jpg", thumbnail: "/gallery/thumbnails/43.jpg" }
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

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  // Add ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

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