import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = [
    'All',
    'Website design',
    'App mobile design',
    'App desktop',
    'Braiding'
  ];

  const portfolioItems = [
    {
      image: "/images/img_rectangle_21.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_26.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_22.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_26.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_21.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_22.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_21.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_22.png",
      title: "Name Project",
      category: "Categories"
    },
    {
      image: "/images/img_rectangle_26.png",
      title: "Name Project",
      category: "Categories"
    }
  ];

  return (
    <section id='portfolio' className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-[40px] md:px-[56px] lg:px-[80px]">
        <div className="flex flex-col gap-[35px] md:gap-[52px] lg:gap-[70px] justify-start items-center w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full mx-[84px] md:mx-[126px] lg:mx-[168px]">
            <h2 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[34px] sm:leading-[38px] md:leading-[43px] lg:leading-[48px] text-center text-secondary-foreground"
              style={{ 
                fontFamily: 'Lato',
                letterSpacing: '1px'
              }}
            >
              Portfolio
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-[12px] md:gap-[18px] lg:gap-[24px] w-auto">
              {filterButtons?.map((filter, index) => (
                <Button
                  key={index}
                  text={filter}
                  text_font_size="16"
                  text_font_family="Lato"
                  text_font_weight="700"
                  text_line_height="20px"
                  text_text_align="center"
                  text_text_transform="capitalize"
                  text_color={activeFilter === filter ? "#ffffff" : "#c6c6c6"}
                  fill_background={activeFilter === filter ? "linear-gradient(129deg, #fd6f00 0%, #e46400 100%)" : "#ffffff14"}
                  fill_background_color={activeFilter === filter ? "#fd6f00" : "#ffffff14"}
                  border_border="none"
                  border_border_radius="8px"
                  layout_width="auto"
                  layout_gap="0px"
                  position="relative"
                  margin="0px"
                  variant="primary"
                  size="medium"
                  padding="14px 34px"
                  className="hover:opacity-90 transition-all"
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[40px] w-full">
            {portfolioItems?.map((item, index) => (
              <div key={index} className="flex flex-col justify-start items-center w-full">
                <img 
                  src={item?.image} 
                  alt={`${item?.title} portfolio item`} 
                  className="w-full max-w-[310px] md:max-w-[362px] lg:max-w-[414px] h-[310px] md:h-[362px] lg:h-[414px] object-cover rounded-t-[21px] md:rounded-t-[24px] lg:rounded-t-[28px]"
                />
                <div 
                  className="flex justify-between items-center w-full max-w-[310px] md:max-w-[362px] lg:max-w-[414px] rounded-b-[12px] md:rounded-b-[14px] lg:rounded-b-[16px] p-[10px] md:p-[12px] lg:p-[14px] px-[12px] md:px-[14px] lg:px-[16px]"
                  style={{ backgroundColor: '#ffffff14' }}
                >
                  <span 
                    className="text-[14px] md:text-[15px] lg:text-[16px] font-bold leading-[18px] md:leading-[19px] lg:leading-[20px] text-left text-text-light capitalize self-end"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item?.title}
                  </span>
                  <span 
                    className="text-[14px] md:text-[15px] lg:text-[16px] font-bold leading-[18px] md:leading-[19px] lg:leading-[20px] text-left text-text-muted capitalize self-end"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item?.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;