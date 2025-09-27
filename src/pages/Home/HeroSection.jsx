import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section id='home' className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-[33px] md:px-[46px] lg:px-[66px] xl:px-[66px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[75px] md:gap-[100px] lg:gap-[150px]">
          <div className="relative w-full lg:w-[46%] order-2 lg:order-1">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/img_vector.png" 
                alt="Background vector" 
                className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
              />
            </div>
            
            <div className="relative z-10 flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] pt-[12px] md:pt-[18px] lg:pt-[23px] pl-[6px] md:pl-[9px] lg:pl-[13px]">
              <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-[60px] items-center">
                <div className="flex flex-col gap-[8px] md:gap-[12px] lg:gap-[16px] items-center w-full">
                  <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] items-start w-full">
                    <div className="flex flex-col gap-[5px] md:gap-[7px] lg:gap-[10px] items-start w-full">
                      <h2 
                        className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-left text-text-medium"
                        style={{ fontFamily: 'Lato' }}
                      >
                        Hi I am
                      </h2>
                      <h3 
                        className="text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-bold leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px] text-left text-text-muted"
                        style={{ fontFamily: 'Lato' }}
                      >
                        Sainath Chowdary
                      </h3>
                    </div>
                    <h1 
                      className="text-[35px] sm:text-[45px] md:text-[57px] lg:text-[70px] font-black leading-[42px] sm:leading-[54px] md:leading-[68px] lg:leading-[84px] text-left"
                      style={{
                        fontFamily: 'Lato',
                        letterSpacing: '1px',
                        background: 'linear-gradient(109deg, #984300 0%, #fd6f00 50%, #ca5900 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      UI/UX designer
                    </h1>
                  </div>
                  
                  <div className="flex justify-start items-end w-full mt-[8px] md:mt-[12px] lg:mt-[16px]">
                    <div className="flex items-center gap-[10px] md:gap-[15px] lg:gap-[20px]">
                      <img 
                        src="/images/img_frame_52.png" 
                        alt="Social icon 1" 
                        className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                      <img 
                        src="/images/img_frame_53.png" 
                        alt="Social icon 2" 
                        className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                      <img 
                        src="/images/img_frame_54.png" 
                        alt="Social icon 3" 
                        className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                      <img 
                        src="/images/img_frame_55.png" 
                        alt="Social icon 4" 
                        className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-start items-center gap-[12px] md:gap-[18px] lg:gap-[24px] w-full">
                  <Button
                    text="Hire Me"
                    text_font_size="20"
                    text_font_family="Lato"
                    text_font_weight="700"
                    text_line_height="24px"
                    text_text_align="center"
                    text_text_transform="none"
                    text_color="#ffffff"
                    fill_background="linear-gradient(129deg, #fd6f00 0%, #e46400 100%)"
                    fill_background_color=""
                    border_border=""
                    border_border_radius="8px"
                    padding="12px 34px"
                    layout_width="auto"
                    layout_gap="0px"
                    position="relative"
                    margin="0px"
                    variant="primary"
                    size="medium"
                    onClick={() => {}}
                    className="w-full sm:w-auto hover:opacity-90 transition-opacity"
                  />
                  <Button
                    text="Download CV"
                    text_font_size="20"
                    text_font_family="Lato"
                    text_font_weight="700"
                    text_line_height="24px"
                    text_text_align="center"
                    text_text_transform="none"
                    text_color="#959595"
                    fill_background=""
                    fill_background_color="transparent"
                    border_border="2px solid #959595"
                    border_border_radius="8px"
                    padding="12px 34px"
                    layout_width="auto"
                    layout_gap="0px"
                    position="relative"
                    margin="0px"
                    variant="secondary"
                    size="medium"
                    onClick={() => {}}
                    className="w-full sm:w-auto bg-transparent hover:bg-text-muted hover:bg-opacity-10 transition-all"
                  />
                </div>
              </div>
              
              <div className="flex justify-center items-center w-[92%] mx-auto">
                <div 
                  className="flex gap-[15px] md:gap-[22px] lg:gap-[30px] justify-center items-center w-full rounded-[8px] p-[12px] md:p-[18px] lg:p-[24px]"
                  style={{ backgroundColor: '#ffffff0a' }}
                >
                  <div className="flex flex-col gap-[6px] md:gap-[9px] lg:gap-[12px] justify-start items-start w-full border-r border-text-muted py-[3px] md:py-[4px] lg:py-[6px]">
                    <span 
                      className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-extrabold leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-text-accent"
                      style={{ fontFamily: 'Lato' }}
                    >
                      5+
                    </span>
                    <span 
                      className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-text-lighter"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Experiences
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] md:gap-[9px] lg:gap-[12px] justify-start items-start w-full border-r border-text-muted py-[3px] md:py-[4px] lg:py-[6px]">
                    <span 
                      className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-extrabold leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-text-accent"
                      style={{ fontFamily: 'Lato' }}
                    >
                      20+
                    </span>
                    <span 
                      className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-text-lighter"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Project done
                    </span>
                  </div>
                  <div className="flex flex-col gap-[6px] md:gap-[9px] lg:gap-[12px] justify-start items-start w-full py-[3px] md:py-[4px] lg:py-[6px]">
                    <span 
                      className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-extrabold leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-text-accent"
                      style={{ fontFamily: 'Lato' }}
                    >
                      80+
                    </span>
                    <span 
                      className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-text-lighter"
                      style={{ fontFamily: 'Lato' }}
                    >
                      Happy Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full lg:w-[48%] order-1 lg:order-2">
            <div className="relative w-full max-w-[309px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[618px] h-[390px] sm:h-[500px] md:h-[650px] lg:h-[780px] mx-auto">
              <div 
                className="absolute top-[82px] sm:top-[105px] md:top-[135px] lg:top-[163px] left-1/2 transform -translate-x-1/2 w-[309px] sm:w-[400px] md:w-[500px] lg:w-[618px] h-[309px] sm:h-[400px] md:h-[500px] lg:h-[618px] rounded-full"
                style={{ 
                  backgroundColor: '#ffffff0a',
                  borderRadius: '50%'
                }}
              />
              
              <img 
                src="/images/img_man_in_black_suit.png" 
                alt="Mahmood Fazile - UI/UX Designer" 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[260px] sm:w-[336px] md:w-[420px] lg:w-[520px] h-[390px] sm:h-[500px] md:h-[650px] lg:h-[780px] object-cover rounded-[122px] sm:rounded-[158px] md:rounded-[196px] lg:rounded-[244px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;