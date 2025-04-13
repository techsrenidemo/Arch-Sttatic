
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-terracotta/40 group">
      <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6 text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-terracotta transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate/80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
