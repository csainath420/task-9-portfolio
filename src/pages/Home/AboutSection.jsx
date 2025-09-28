import React from 'react';
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section id="about" className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-[40px] md:px-[56px] lg:px-[80px]">
        <div className="flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] justify-start items-center w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full">
            <div className="flex flex-col gap-[11px] md:gap-[16px] lg:gap-[22px] justify-center items-center w-auto mx-[222px] md:mx-[333px] lg:mx-[444px]">
              <h2 
                className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[34px] sm:leading-[38px] md:leading-[43px] lg:leading-[48px] text-center text-secondary-foreground"
                style={{ 
                  fontFamily: 'Lato',
                  letterSpacing: '1px'
                }}
              >
                About Me
              </h2>
              <p 
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-medium capitalize"
                style={{ fontFamily: 'Lato' }}
              >
                User Interface and User Experience and Also video editing
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-[30px] lg:gap-0">
              <div className="relative w-full lg:w-[44%] order-2 lg:order-1">
                <div className="relative w-full max-w-[283px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[566px] h-[404px] sm:h-[570px] md:h-[710px] lg:h-[808px] mx-auto">
                  <div 
                    className="absolute top-[66px] sm:top-[93px] md:top-[116px] lg:top-[132px] left-1/2 transform -translate-x-1/2 w-[261px] sm:w-[368px] md:w-[460px] lg:w-[522px] h-[338px] sm:h-[477px] md:h-[596px] lg:h-[676px]"
                    style={{ 
                      backgroundColor: '#ffffff0a',
                      borderRadius: '260px 260px 12px 12px'
                    }}
                  />

                  <img 
                    src="/images/img_man_in_black_suit_808x566.png" 
                    alt="Sainath chowdary - About" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-start w-full lg:w-[48%] order-1 lg:order-2">
                <p 
                  className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[28px] sm:leading-[33px] md:leading-[35px] lg:leading-[38px] text-justify text-text-muted w-full"
                  style={{ fontFamily: 'Lato' }}
                >
                  <span>
  I’m Challa Sainath Chowdary, a passionate Software Engineer with a 
  B.Tech in Computer Science and Engineering. I specialize as a 
  Full Stack Developer, with hands-on expertise in 
  Java Full Stack, React.js, Node.js, and the PERN stack (PostgreSQL, Express, React, Node). 
   My journey in technology has equipped me to build 
  scalable web applications, craft clean and efficient code, and deliver 
  end-to-end solutions — from intuitive front-end interfaces to powerful 
  back-end systems. I thrive on solving challenges, debugging complex issues, 
  and turning ideas into impactful digital experiences.   
</span>
                  {/* <span>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. </span> */}
                  <span>Beyond just writing code, I see development as an art — blending logic, design, 
  and innovation to create solutions that truly make a difference. With a drive 
  to continuously learn and grow, I aim to contribute to projects that push 
  boundaries and create value in the digital world.  </span>
                </p>
                
                <Button
                  text="Download CV"
                  text_font_size="20"
                  text_font_family="Lato"
                  text_font_weight="700"
                  text_line_height="24px"
                  text_text_align="center"
                  text_color="#ffffff"
                  text_text_transform="none"
                  fill_background="linear-gradient(129deg, #fd6f00 0%, #e46400 100%)"
                  fill_background_color="#fd6f00"
                  border_border="none"
                  border_border_radius="8px"
                  padding="12px 30px 12px 64px"
                  margin="0"
                  layout_gap="10px"
                  layout_width="auto"
                  position="relative"
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv.pdf";
                    link.download = "Sainath_CV.pdf"; // suggested file name
                    link.click();
                    }}
                  className="flex items-center gap-[10px] hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="/images/img_download.png" 
                    alt="Download icon" 
                    className="w-[24px] h-[24px]"
                  />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;