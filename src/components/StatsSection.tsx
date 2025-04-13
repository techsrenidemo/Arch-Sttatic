
import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  background?: 'light' | 'dark';
}

const StatsSection = ({ stats, background = 'light' }: StatsSectionProps) => {
  const bgClass = background === 'dark' 
    ? 'bg-charcoal text-white' 
    : 'bg-concrete text-charcoal';

  return (
    <div className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${background === 'dark' ? 'text-terracotta' : 'text-terracotta'}`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base uppercase tracking-wider ${background === 'dark' ? 'text-white/80' : 'text-charcoal/80'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
