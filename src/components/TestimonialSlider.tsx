
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-charcoal text-white py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="text-terracotta/30 absolute top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2" />
          
          <div className="text-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentSlide ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <cite className="not-italic font-semibold text-lg">{testimonial.author}</cite>
                  <p className="text-terracotta mt-1">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
