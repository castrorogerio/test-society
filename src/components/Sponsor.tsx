interface SponsorProps {
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community';
}

const Sponsor = ({ logo, tier }: SponsorProps) => {
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
          alt="Sponsor logo" 
          className={`${sizeClass} object-contain`}
        />
      </div>
    </div>
  );
};

export default Sponsor;
