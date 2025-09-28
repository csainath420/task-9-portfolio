import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "/images/img_2_user.png",
      title: "App Design",
      description: "Crafting intuitive and engaging mobile app designs that balance aesthetics with usability."
    },
    {
      icon: "/images/img_2_user.png",
      title: "Web Design",
      description: "Designing responsive, user-friendly websites that deliver seamless digital experiences."
    },
    {
      icon: "/images/img_2_user.png",
      title: "UI/UX Design",
      description: "Creating wireframes, prototypes, and design systems that enhance user satisfaction."
    },
    {
      icon: "/images/img_2_user.png",
      title: "Product Design",
      description: "Transforming ideas into market-ready products with design thinking and user research."
    },
    {
      icon: "/images/img_2_user.png",
      title: "Graphic Design",
      description: "Delivering impactful visuals for social media, marketing, and promotional materials.."
    },
    {
      icon: "/images/img_2_user.png",
      title: "Brand Identity",
      description: "Building strong visual identities through logo design, typography, and color systems."
    }
  ];

  return (
    <section id='services' className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-[40px] md:px-[56px] lg:px-[80px]">
        <div className="flex flex-col gap-[75px] md:gap-[112px] lg:gap-[150px] justify-start items-center w-full">
          <div className="w-full max-w-[1280px]">
            <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] justify-start items-center w-full">
              <div className="flex flex-col gap-[11px] md:gap-[16px] lg:gap-[22px] justify-center items-center mx-[118px] md:mx-[177px] lg:mx-[236px]">
                <h2 
                  className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[34px] sm:leading-[38px] md:leading-[43px] lg:leading-[48px] text-center text-secondary-foreground"
                  style={{ 
                    fontFamily: 'Lato',
                    letterSpacing: '1px'
                  }}
                >
                  Services
                </h2>
                <p 
                  className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-medium"
                  style={{ fontFamily: 'Lato' }}
                >
                  What I Can Do For You
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[40px] w-full ml-[2px] md:ml-[3px] lg:ml-[4px]">
                {services?.map((service, index) => (
                  <div 
                    key={index}
                    className="flex flex-col gap-[17px] md:gap-[25px] lg:gap-[34px] justify-start items-center w-full h-auto rounded-[24px] p-[17px] md:p-[25px] lg:p-[34px]"
                    style={{ backgroundColor: '#ffffff0a' }}
                  >
                    <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] justify-center items-center w-auto">
                      <img 
                        src={service?.icon} 
                        alt={`${service?.title} icon`} 
                        className="w-[52px] h-[52px] md:w-[61px] md:h-[61px] lg:w-[70px] lg:h-[70px] mx-[15px] md:mx-[22px] lg:mx-[30px]"
                      />
                      <h3 
                        className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-center text-text-accent"
                        style={{ fontFamily: 'Lato' }}
                      >
                        {service?.title}
                      </h3>
                    </div>
                    <p 
                      className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-center text-text-dark w-full"
                      style={{ fontFamily: 'Lato' }}
                    >
                      {service?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;