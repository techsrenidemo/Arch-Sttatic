
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import TeamMember from '@/components/TeamMember';
import Awards from '@/components/Awards';
import StatsSection from '@/components/StatsSection';

const About = () => {
  // Sample team members
  const teamMembers = [
    {
      name: 'David Chen',
      role: 'Principal Architect & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      bio: 'With over 25 years of experience, David leads our creative vision with passion and expertise.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'david@PRECISION DESIGN.com',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah specializes in sustainable design and has led some of our most innovative green projects.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'sarah@PRECISION DESIGN.com',
      },
    },
    {
      name: 'Michael Torres',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      bio: 'Michael brings a unique perspective to each project, focusing on both function and aesthetics.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'michael@PRECISION DESIGN.com',
      },
    },
    {
      name: 'Emma Rodriguez',
      role: 'Interior Design Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      bio: 'Emma transforms spaces with her innovative approach to interior architecture and design.',
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'emma@PRECISION DESIGN.com',
      },
    },
  ];

  // Sample awards
  const awards = [
    {
      year: '2023',
      title: 'Excellence in Urban Design',
      project: 'Metro Central Plaza',
      organization: 'International Design Association',
    },
    {
      year: '2022',
      title: 'Sustainable Architecture Award',
      project: 'EcoLiving Residences',
      organization: 'Green Building Council',
    },
    {
      year: '2021',
      title: 'Best Cultural Building',
      project: 'Harmony Arts Center',
      organization: 'Architectural Review Board',
    },
    {
      year: '2020',
      title: 'Innovation in Design',
      project: 'The Vertex Tower',
      organization: 'Design Excellence Awards',
    },
  ];

  // Sample stats
  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '25', label: 'Years Experience' },
    { value: '40', label: 'Team Members' },
    { value: '15', label: 'Design Awards' },
  ];

  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="About PRECISION DESIGN"
          subtitle="Designing the future through innovative architecture"
          backgroundImage="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80"
          height="lg"
        />

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <SectionTitle
                  title="Our Story"
                  subtitle=""
                  centered={false}
                />
                <p className="text-slate/80 mb-6">
                  Founded in 1998 by David Chen, PRECISION DESIGN began with a vision to create spaces that inspire and
                  transform lives. What started as a small studio has grown into a renowned architectural firm with a
                  global presence.
                </p>
                <p className="text-slate/80 mb-6">
                  Over the past 25 years, we've had the privilege of working on diverse projects across residential,
                  commercial, cultural, and public sectors. Each project reflects our commitment to excellence,
                  innovation, and sustainability.
                </p>
                <p className="text-slate/80">
                  Today, PRECISION DESIGN continues to push boundaries in architectural design, embracing new technologies and
                  methodologies while staying true to our founding principles of creating meaningful spaces that stand the
                  test of time.
                </p>
              </div>

              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=800&q=80"
                  alt="PRECISION DESIGN Office"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-concrete">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide our work and relationships"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-terracotta text-4xl font-bold mb-4">01</div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Innovation</h3>
                <p className="text-slate/80">
                  We constantly push boundaries, embrace new technologies, and find creative solutions to complex design
                  challenges.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-terracotta text-4xl font-bold mb-4">02</div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Sustainability</h3>
                <p className="text-slate/80">
                  We design with the future in mind, prioritizing environmental responsibility and sustainable practices
                  in all our projects.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-terracotta text-4xl font-bold mb-4">03</div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Collaboration</h3>
                <p className="text-slate/80">
                  We believe in the power of teamwork and partnership, working closely with clients and stakeholders to
                  achieve shared goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Leadership Team"
              subtitle="Meet the talented professionals behind our award-winning designs"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection stats={stats} background="dark" />

        {/* Awards Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Awards & Recognition"
              subtitle="Celebrating our achievements in architectural excellence"
            />

            <Awards awards={awards} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your architectural vision to life.
            </p>
            <Button to="/contact" size="lg" variant="primary">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
