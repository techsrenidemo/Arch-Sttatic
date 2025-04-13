
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

// Project interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const Projects = () => {
  // Sample projects data
  const allProjects: Project[] = [
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
    },
    {
      id: 4,
      title: 'The Vertex Offices',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80',
      year: '2021'
    },
    {
      id: 5,
      title: 'Lakeside Villas',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80',
      year: '2021'
    },
    {
      id: 6,
      title: 'Metro Public Library',
      category: 'Public',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80',
      year: '2020'
    },
    {
      id: 7,
      title: 'Riverside Apartments',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80',
      year: '2020'
    },
    {
      id: 8,
      title: 'Pacific Corporate Center',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80',
      year: '2019'
    },
    {
      id: 9,
      title: 'City Art Museum',
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80',
      year: '2019'
    },
    {
      id: 10,
      title: 'Modern Mosque',
      category: 'Religious',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80',
      year: '2018'
    },
    {
      id: 11,
      title: 'Stellar Observatory',
      category: 'Scientific',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80',
      year: '2018'
    }
  ];

  // State for category filter
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Cultural', 'Public', 'Religious', 'Scientific'];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Our Projects"
          subtitle="Explore our portfolio of architectural excellence"
          backgroundImage="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&q=80"
          height="md"
        />

        {/* Project Filters */}
        <section className="py-8 bg-concrete">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-terracotta text-white'
                      : 'bg-white text-charcoal hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-slate/70">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-concrete">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Have a Project in Mind?</h2>
            <p className="text-slate/80 max-w-2xl mx-auto mb-8">
              We'd love to hear about your vision and discuss how we can help bring it to life.
            </p>
            <Button to="/contact" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;
