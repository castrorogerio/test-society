import { useState } from 'react';

const ComingSoon = () => {

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: "url('/images/banner.png')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl w-full">
          <h1 className="text-[#f4a82e] text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 tracking-wider">
            TEST SOCIETY 2025
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-3xl mb-8 sm:mb-16 font-semibold">
            QUALITY ASSURANCE CONFERENCE
          </p>

          {/* Event Cancellation Notice */}
          <div className="mb-8 sm:mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-[#f4a82e]/30 relative overflow-hidden shadow-2xl hover:shadow-[#f4a82e]/20 transition-all duration-300">
              {/* Background decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f4a82e]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#f4a82e]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f4a82e] to-[#f4a82e]/80 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h2 className="text-[#f4a82e] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wider">
                  EVENT CANCELLED
                </h2>
                
                {/* Main message */}
                <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                  The TestSociety Organizing Committee has made the difficult decision to pause the annual TestSociety Conference for the foreseeable future.
                  <br /><br />
                  We sincerely thank our speakers, sponsors, and attendees for their support over the years.
                  <br /><br />
                  We look forward to connecting with you soon!
                </p>
                
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 sm:mt-16 flex justify-center space-x-4 sm:space-x-6">
            <a href="https://www.instagram.com/testsociety.conf/" className="text-white hover:text-[#f4a82e] transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/testsociety/posts/?feedView=all" className="text-white hover:text-[#f4a82e] transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 