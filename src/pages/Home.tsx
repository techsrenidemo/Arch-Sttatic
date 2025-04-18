
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import TestimonialSlider from '@/components/TestimonialSlider';
import StatsSection from '@/components/StatsSection';
import { Building2, PenTool, LayoutGrid, Ruler, Clock, Landmark } from 'lucide-react';

const Home = () => {
  // Sample data for featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'Azure Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 2,
      title: 'Harmony Residences',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
      year: '2022'
    },
    {
      id: 3,
      title: 'Eco Cultural Center',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
      year: '2022'
    }
  ];

  // Sample data for services
  const services = [
    {
      title: 'Architectural Design',
      description: 'We create innovative and functional designs that reflect your vision and requirements.',
      icon: <Building2 size={32} />
    },
    {
      title: 'Interior Design',
      description: 'Transform your spaces with our creative and ergonomic interior design solutions.',
      icon: <LayoutGrid size={32} />
    },
    {
      title: '3D Visualization',
      description: 'Experience your project before it's built with our high-quality 3D rendering services.',
      icon: <PenTool size={32} />
    },
    {
      title: 'Urban Planning',
      description: 'Comprehensive urban planning solutions for sustainable and livable communities.',
      icon: <Landmark size={32} />
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      quote: "PRECISION DESIGN transformed our vision into reality. Their attention to detail and innovative approach resulted in a building that exceeds our expectations.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "Nexus Properties"
    },
    {
      id: 2,
      quote: "Working with the team at PRECISION DESIGN was an absolute pleasure. Their expertise and creativity brought our project to life in ways we couldn't imagine.",
      author: "Michael Chen",
      position: "Director",
      company: "Urban Development Corp."
    },
    {
      id: 3,
      quote: "The team's ability to blend functionality with aesthetic appeal is remarkable. Our office space is now both beautiful and practical.",
      author: "Emma Rodriguez",
      position: "Facilities Manager",
      company: "InnovTech Solutions"
    }
  ];

  // Sample data for stats
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '25', label: 'Years Experience' },
    { value: '40', label: 'Team Members' },
    { value: '15', label: 'Design Awards' }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Creating Spaces That Inspire"
          subtitle="Award-winning architectural designs for residential, commercial, and cultural projects"
          backgroundImage="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&q=80"
          buttonText="Explore Our Projects"
          buttonLink="/projects"
          height="xl"
        />

        {/* About Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Innovative Architecture <span className="text-terracotta">& Design</span></h2>
                
                <div className="w-20 h-1 bg-terracotta mb-6" />
                
                <p className="text-slate/80 mb-6">
                  PRECISION DESIGN is a leading architectural firm dedicated to creating exceptional spaces that blend 
                  functionality, aesthetics, and sustainability. With 25 years of experience, we've established 
                  ourselves as innovative problem-solvers in the architectural landscape.
                </p>
                
                <p className="text-slate/80 mb-8">
                  Our multidisciplinary team of architects, designers, and planners work collaboratively to deliver 
                  projects that exceed expectations. From concept to completion, we're committed to excellence and 
                  client satisfaction.
                </p>
                
                <Button to="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&q=80" 
                  alt="Architecture Design" 
                  className="rounded-lg h-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&q=80" 
                  alt="Building Design" 
                  className="rounded-lg object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-concrete">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive architectural and design services tailored to meet your needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Featured Projects" 
              subtitle="Explore our latest and most impactful architectural projects"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  year={project.year}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button to="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* Testimonials Section */}
        <TestimonialSlider testimonials={testimonials} />

        {/* Contact CTA */}
        <section className="section-padding bg-concrete">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Ready to Start Your Project?</h2>
            <p className="text-slate/80 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how we can help bring your architectural vision to life.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
