interface EventScheduleItemProps {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  speakerImage?: string;
  isBreak?: boolean;
}

const EventScheduleItem = ({ time, title, speaker, description, speakerImage, isBreak }: EventScheduleItemProps) => {
  return (
    <div className={`group relative pl-6 pb-6 last:pb-0 ${isBreak ? 'opacity-80' : ''}`}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-800/30 group-last:h-[50px]"></div>
      
      {/* Timeline dot */}
      <div className={`absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full ${isBreak ? 'bg-[#f4a82e]' : 'bg-teal-800'} group-hover:bg-[#f4a82e] transition-colors duration-300`}></div>
      
      <div className={`${isBreak ? 'bg-black/10' : 'bg-black/20'} rounded-lg p-4 hover:bg-black/40 transition-all duration-300 transform group-hover:translate-x-2 border border-teal-800 group-hover:border-teal-700`}>
        <div className="flex items-start gap-4">
          {/* Time and Content */}
          <div className={`flex-grow ${isBreak ? 'min-h-[32px]' : 'min-h-[48px]'} flex flex-col justify-center`}>
            <div className="flex items-center gap-3 mb-1">
              <span className={`${isBreak ? 'text-[#f4a82e]' : 'text-[#f4a82e]'} font-semibold`}>{time}</span>
              <h3 className={`${isBreak ? 'text-base' : 'text-lg'} text-white font-bold group-hover:text-[#f4a82e] transition-colors duration-300`}>{title}</h3>
            </div>
            {speaker && (
              <div className="flex items-center gap-2 ml-12 mb-2">
                {speakerImage && (
                  <img 
                    src={speakerImage} 
                    alt={speaker} 
                    className="w-8 h-8 rounded-full object-cover border-2 border-teal-800 group-hover:border-[#f4a82e] transition-colors duration-300"
                  />
                )}
                <span className="text-[#f4a82e] font-medium">{speaker}</span>
              </div>
            )}
            {description && <p className="text-white/70 text-sm mb-2 ml-12">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScheduleItem;
