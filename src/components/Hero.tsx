
import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlay = true,
  height = 'lg',
  centered = true,
}: HeroProps) => {
  const heightClasses = {
    sm: 'h-[40vh]',
    md: 'h-[60vh]',
    lg: 'h-[80vh]',
    xl: 'h-[90vh]',
    full: 'h-screen',
  };

  return (
    <div
      className={`relative w-full flex items-center ${heightClasses[height]} bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-charcoal/40" />
      )}
      
      <div className={`container mx-auto px-4 relative z-10 ${centered ? 'text-center' : 'text-left'}`}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 animate-slideUp">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button to={buttonLink} size="lg">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
