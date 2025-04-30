
interface SponsorProps {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
}

const Sponsor = ({ name, logo, tier }: SponsorProps) => {
  const sizeClass = {
    platinum: 'h-20 md:h-24',
    gold: 'h-16 md:h-20',
    silver: 'h-12 md:h-16'
  }[tier];

  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={logo} 
        alt={name} 
        className={`${sizeClass} object-contain opacity-80 hover:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default Sponsor;
