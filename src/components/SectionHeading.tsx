
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  textColor?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  textColor = 'text-black'
}: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${textColor} animate-slide-in relative inline-block`}>
        {title}
        <span className="block h-1 w-16 bg-tram mt-3 rounded-full"></span>
      </h2>
      {subtitle && <p className={`text-lg md:text-xl opacity-80 ${textColor} max-w-2xl mx-auto animate-fade-in`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
