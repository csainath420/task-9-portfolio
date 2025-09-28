import React from 'react';
import Header from '../../components/common/Header';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <>
        <title>Sainath portfolio using react</title>
        <meta 
          name="description"  
        />

      <main className="w-full bg-primary-background">
        <div className="flex flex-col gap-[15px] md:gap-[22px] lg:gap-[30px] justify-start items-center w-full">
          <Header />
          
          <div className="flex flex-col gap-[75px] md:gap-[112px] lg:gap-[150px] justify-start items-center w-full">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
          </div>
          
          <FooterSection />
        </div>
      </main>
    </>
  );
};

export default Home;