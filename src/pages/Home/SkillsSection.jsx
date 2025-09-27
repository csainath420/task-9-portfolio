import React from 'react';
import CircleProgressBar from '../../components/ui/CircleProgressBar';

const SkillsSection = () => {
  const skills = [
    {
      name: "Figma",
      percentage: 100,
      icon: "/images/img_group_3.png"
    },
    {
      name: "Adobe XD",
      percentage: 100,
      icon: "/images/img_group_4.png"
    },
    {
      name: "Adobe Photoshop",
      percentage: 85,
      icon: "/images/img_iconoir_adobe_photoshop.png"
    },
    {
      name: "Adobe Illustrator",
      percentage: 60,
      icon: "/images/img_iconoir_adobe_illustrator.png"     
    },
    {
      name: "Adobe Premiere",
      percentage: 70,
      icon: "/images/img_basil_adobe_premiere_outline.png"
    }
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-[40px] md:px-[56px] lg:px-[80px]">
        <div className="flex flex-row gap-[34px] md:gap-[51px] lg:gap-[68px] w-full ml-[6px] md:ml-[9px] lg:ml-[12px] overflow-x-auto lg:overflow-x-visible">
          {skills?.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] justify-start items-center min-w-[150px] md:min-w-[175px] lg:min-w-[200px] px-[17px] md:px-[25px] lg:px-[34px]"
            >
              <div className="relative">
                {skill?.name === "Figma" || skill?.name === "Adobe XD" ? (
                  <img 
                    src={skill?.icon} 
                    alt={`${skill?.name} icon`} 
                    className="w-[97px] h-[97px] md:w-[113px] md:h-[113px] lg:w-[130px] lg:h-[130px]"
                  />
                ) : (
                  <div className="relative mx-[16px] md:mx-[21px] lg:mx-[26px]">
                    <CircleProgressBar
                      percentage={skill?.percentage}
                      size={98}
                      strokeWidth={8}
                      backgroundColor="#d9d9d933"
                      className="w-[98px] h-[98px] md:w-[113px] md:h-[113px] lg:w-[130px] lg:h-[130px]"
                    >
                      <img 
                        src={skill?.icon} 
                        alt={`${skill?.name} icon`} 
                        className="w-[45px] h-[45px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
                      />
                    </CircleProgressBar>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-[4px] md:gap-[6px] lg:gap-[8px] justify-start items-center w-full">
                <span 
                  className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold leading-[26px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] text-left"
                  style={{
                    fontFamily: 'Lato',
                    background: 'linear-gradient(129deg, #fd6f00 0%, #e46400 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {skill?.percentage}%
                </span>
                <span 
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-left text-text-muted text-center"
                  style={{ fontFamily: 'Lato' }}
                >
                  {skill?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;