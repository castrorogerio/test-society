import React from 'react';

interface SpeakerProps {
  name: string;
  topic: string;
  image: string;
  job: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, topic, image, job }) => {
  return (
    <div
      className="relative aspect-square rounded-xl overflow-hidden w-full border-2 border-teal-800 shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#f4a82e]"
      tabIndex={0}
      aria-label={`Speaker: ${name}, ${job}, Topic: ${topic}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image === "placeholder" ? (
          <div className="w-full h-full bg-black/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        ) : (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Animated green overlay and info on hover */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full h-full bg-[#18403e] opacity-85 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 ease-in-out absolute bottom-0 left-0 right-0" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-full px-4 py-5 text-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 flex flex-col items-center max-h-full overflow-y-auto">
            <h3 className="text-[#f4a82e] text-3xl font-extrabold tracking-wide mb-1 break-words whitespace-normal">{name}</h3>
            <p className="text-white/90 text-lg italic font-semibold mb-6 break-words whitespace-normal">{job}</p>
            <div className="w-10 h-0.5 bg-white/30 rounded-full mb-6"></div>
            <p className="text-white text-xl font-bold mb-3 break-words whitespace-normal">{topic}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
