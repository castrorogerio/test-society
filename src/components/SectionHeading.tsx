
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
    <div className={`mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
      {subtitle && <p className={`text-lg opacity-80 ${textColor}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
