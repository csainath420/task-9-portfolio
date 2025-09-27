import React, { useState } from 'react';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';
import Dropdown from '../../components/ui/Dropdown';
import Button from '../../components/ui/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact' className="w-full" style={{ backgroundColor: '#ffffff0a' }}>
      <div className="w-full max-w-[1440px] mx-auto px-[28px] md:px-[42px] lg:px-[56px] py-[24px]">
        <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full">
          <div className="flex flex-col gap-[11px] md:gap-[16px] lg:gap-[22px] justify-center items-center w-auto mx-[223px] md:mx-[334px] lg:mx-[446px]">
            <h2 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[34px] sm:leading-[38px] md:leading-[43px] lg:leading-[48px] text-center text-secondary-foreground"
              style={{ 
                fontFamily: 'Lato',
                letterSpacing: '1px'
              }}
            >
              Contact me
            </h2>
            <p 
              className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-medium capitalize"
              style={{ fontFamily: 'Lato' }}
            >
              Cultivating Connections: Reach Out and Connect with Me
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] md:gap-[22px] lg:gap-[30px] justify-start items-end w-[86%]">
            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-center w-full">
              <EditText
                placeholder="Name"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="14px 24px"
                layout_width="full"
                className="w-full"
                position="relative"
                variant="default"
                size="medium"
                id="name-input"
              />
              <EditText
                placeholder="Email"
                name="email"
                type="email"
                value={formData?.email}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="14px 24px"
                layout_width="full"
                className="w-full"
                position="relative"
                variant="default"
                size="medium"
                id="email-input"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-center w-full">
              <EditText
                placeholder="Phone Number"
                name="phone"
                type="tel"
                value={formData?.phone}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="14px 24px"
                layout_width="full"
                className="w-full"
                position="relative"
                variant="default"
                size="medium"
                id="phone-input"
              />
              <Dropdown
                placeholder="Service of Interest"
                name="service"
                value={formData?.service}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="14px 24px 14px 48px"
                layout_gap="16px"
                layout_width="full"
                className="w-full"
                position="relative"
                variant="default"
                size="medium"
                id="service-dropdown"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-start w-full">
              <EditText
                placeholder="Timeline"
                name="timeline"
                value={formData?.timeline}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="14px 24px"
                layout_width="full"
                className="w-full"
                position="relative"
                variant="default"
                size="medium"
                id="timeline-input"
              />
              <TextArea
                placeholder="Project Details..."
                name="details"
                value={formData?.details}
                onChange={handleInputChange}
                text_font_size="16"
                text_font_family="Lato"
                text_font_weight="500"
                text_line_height="20px"
                text_text_align="left"
                text_text_transform="capitalize"
                text_color="#959595"
                fill_background_color="#ffffff0a"
                border_border_radius="8px"
                padding="16px 24px 12px 24px"
                layout_align_self="center"
                layout_width="full"
                className="w-full"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              text="Send"
              text_font_size="20"
              text_font_family="Lato"
              text_font_weight="700"
              text_line_height="24px"
              text_text_align="center"
              text_text_transform="none"
              text_color="#959595"
              fill_background_color="transparent"
              border_border="2px solid #99999"
              border_border_radius="8px"
              padding="12px 34px"
              layout_width="auto"
              position="relative"
              margin="0"
              layout_gap="0"
              variant="default"
              size="medium"
              onClick={() => {}}
              className="bg-transparent hover:bg-text-muted hover:bg-opacity-10 transition-all"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;