interface SponsorProps {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community';
}

const Sponsor = ({ name, logo, tier }: SponsorProps) => {
  const sizeClass = {
    platinum: 'h-28 md:h-36',
    gold: 'h-24 md:h-32',
    silver: 'h-20 md:h-28',
    community: 'h-16 md:h-24'
  }[tier];

  return (
    <div className="relative overflow-hidden rounded-2xl p-8">
      <div className="relative flex flex-col items-center justify-center">
        <img 
          src={logo} 
          alt={name} 
          className={`${sizeClass} object-contain`}
        />
        <span className="mt-4 text-white/80 text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default Sponsor;
