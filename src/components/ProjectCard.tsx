
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const ProjectCard = ({ id, title, category, image, year }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-sm text-terracotta font-medium">{category}</span>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{year}</p>
          
          <Link 
            to={`/projects/${id}`}
            className="inline-flex items-center mt-4 text-terracotta hover:text-white transition-colors duration-200"
          >
            View Project <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
