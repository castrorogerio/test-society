
interface SpeakerProps {
  name: string;
  role: string;
  image: string;
}

const Speaker = ({ name, role, image }: SpeakerProps) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-amber-DEFAULT">{role}</p>
    </div>
  );
};

export default Speaker;
