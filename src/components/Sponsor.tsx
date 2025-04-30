
interface SponsorProps {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
}

const Sponsor = ({ name, logo, tier }: SponsorProps) => {
  const sizeClass = {
    platinum: 'h-20 md:h-28',
    gold: 'h-16 md:h-24',
    silver: 'h-12 md:h-20'
  }[tier];

  const hoverEffect = {
    platinum: 'hover:shadow-[0_0_25px_rgba(255,208,44,0.5)]',
    gold: 'hover:shadow-[0_0_20px_rgba(255,208,44,0.4)]',
    silver: 'hover:shadow-[0_0_15px_rgba(255,208,44,0.3)]'
  }[tier];

  return (
    <div className={`flex items-center justify-center p-6 rounded-lg transition-all duration-300 glass-card ${hoverEffect}`}>
      <img 
        src={logo} 
        alt={name} 
        className={`${sizeClass} object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0`}
      />
    </div>
  );
};

export default Sponsor;
