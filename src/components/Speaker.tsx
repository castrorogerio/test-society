
interface SpeakerProps {
  name: string;
  role: string;
  image: string;
}

const Speaker = ({ name, role, image }: SpeakerProps) => {
  return (
    <div className="group card-hover">
      <div className="overflow-hidden rounded-xl mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-darker to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-tram transition-colors duration-300">{name}</h3>
      <p className="text-tram-DEFAULT font-medium">{role}</p>
    </div>
  );
};

export default Speaker;
