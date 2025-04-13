
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, className = '' }: SectionTitleProps) => {
  return (
    <div className={cn(`mb-12 ${centered ? 'text-center' : 'text-left'}`, className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate/80 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-terracotta mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
