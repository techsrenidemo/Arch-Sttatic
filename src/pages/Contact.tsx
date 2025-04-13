
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your architectural needs"
          backgroundImage="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1920&q=80"
          height="md"
        />

        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <div className="lg:w-1/3">
                <SectionTitle 
                  title="Get In Touch"
                  subtitle="We'd love to hear from you. Here's how you can reach us."
                  centered={false}
                />
                
                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 text-terracotta">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                      <p className="text-slate/80">
                        123 Architecture St<br />
                        Design City, DC 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 text-terracotta">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                      <p className="text-slate/80">
                        +1 (123) 456-7890<br />
                        +1 (123) 456-7891
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 text-terracotta">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                      <p className="text-slate/80">
                        info@archvista.com<br />
                        careers@archvista.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mr-4 text-terracotta">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                      <p className="text-slate/80">
                        Monday-Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: By appointment only<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[500px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060353238!2d-74.25987368715491!3d40.697149422055685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1681684254151!5m2!1sen!2s" 
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ARCHVISTA office location"
          ></iframe>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
