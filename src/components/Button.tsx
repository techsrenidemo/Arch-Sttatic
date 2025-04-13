
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-terracotta text-white hover:bg-terracotta/90',
    secondary: 'bg-charcoal text-white hover:bg-charcoal/90',
    outline: 'bg-transparent border-2 border-terracotta text-terracotta hover:bg-terracotta/10'
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2.5 px-6 text-base',
    lg: 'py-3 px-8 text-lg'
  };

  const baseClasses = 'inline-block font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/50';
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
