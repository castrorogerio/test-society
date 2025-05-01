interface SpeakerProps {
  name: string;
  role: string;
  topic: string;
  image: string;
}

const Speaker = ({ name, role, topic, image }: SpeakerProps) => {
  return (
    <div className="group card-hover relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-96 object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-3xl transition-all duration-300">{name}</h3>
        <p className="text-[#f4a82e] font-semibold mb-2 group-hover:text-lg transition-all duration-300">{role}</p>
        <p className="text-white text-base group-hover:text-lg transition-all duration-300">{topic}</p>
      </div>
    </div>
  );
};

export default Speaker;
