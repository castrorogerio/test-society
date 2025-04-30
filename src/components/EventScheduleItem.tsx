
interface EventScheduleItemProps {
  time: string;
  title: string;
  speaker: string;
  description: string;
  speakerImage: string;
}

const EventScheduleItem = ({ 
  time, 
  title, 
  speaker, 
  description, 
  speakerImage 
}: EventScheduleItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
      <div className="text-amber-DEFAULT font-semibold w-32 shrink-0">
        {time}
      </div>
      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
        <img 
          src={speakerImage} 
          alt={speaker} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-amber-DEFAULT mb-2">{speaker}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default EventScheduleItem;
