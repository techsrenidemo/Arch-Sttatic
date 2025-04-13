
import React from 'react';

interface Award {
  year: string;
  title: string;
  project: string;
  organization: string;
}

interface AwardsProps {
  awards: Award[];
}

const Awards = ({ awards }: AwardsProps) => {
  return (
    <div className="space-y-8">
      {awards.map((award, index) => (
        <div 
          key={index}
          className="flex flex-col md:flex-row border-l-4 border-terracotta pl-6 py-2"
        >
          <div className="md:w-1/4 mb-2 md:mb-0">
            <span className="text-lg font-bold text-terracotta">{award.year}</span>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold text-charcoal">{award.title}</h3>
            <p className="text-slate/90 mt-1">{award.project}</p>
            <p className="text-sm text-slate/70 mt-1">{award.organization}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Awards;
