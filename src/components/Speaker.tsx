import React from 'react';

interface SpeakerProps {
  name: string;
  role: string;
  topic: string;
  image: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, role, topic, image }) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-teal-800/30 hover:border-teal-700 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-black/20 flex items-center justify-center">
          {image === "placeholder" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ) : (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <h3 className="text-[#f4a82e] text-xl font-bold mb-1">{name}</h3>
        <p className="text-white/70 text-sm mb-3">{role}</p>
        <p className="text-white text-sm">{topic}</p>
      </div>
    </div>
  );
};

export default Speaker;
