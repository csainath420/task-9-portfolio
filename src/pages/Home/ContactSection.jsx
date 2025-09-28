import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          timeline: "",
          details: "",
        });
      } else {
        toast.error("Failed to send message. Try again.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <section id='contact' className="w-full" style={{ backgroundColor: '#ffffff0a' }}>
      <div className="w-full max-w-[1440px] mx-auto px-[28px] md:px-[42px] lg:px-[56px] py-[24px]">
        <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-[11px] md:gap-[16px] lg:gap-[22px] justify-center items-center w-auto mx-[223px] md:mx-[334px] lg:mx-[446px]">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[34px] sm:leading-[38px] md:leading-[43px] lg:leading-[48px] text-center text-secondary-foreground" style={{ fontFamily: 'Lato', letterSpacing: '1px' }}>
              Contact me
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-medium capitalize" style={{ fontFamily: 'Lato' }}>
              Cultivating Connections: Reach Out and Connect with Me
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] md:gap-[22px] lg:gap-[30px] justify-start items-end w-[86%]">
            {/* Inputs (Name, Email) */}
            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-center w-full">
              <EditText placeholder="Name" name="name" value={formData?.name} onChange={handleInputChange} className="w-full" />
              <EditText placeholder="Email" name="email" type="email" value={formData?.email} onChange={handleInputChange} className="w-full" />
            </div>

            {/* Inputs (Phone, Service) */}
            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-center w-full">
              <EditText placeholder="Phone Number" name="phone" type="tel" value={formData?.phone} onChange={handleInputChange} className="w-full" />
              <Dropdown placeholder="Service of Interest" name="service" value={formData?.service} onChange={handleInputChange} className="w-full" />
            </div>

            <div className="flex flex-col md:flex-row gap-[15px] md:gap-[22px] lg:gap-[30px] justify-end items-start w-full">
              <EditText placeholder="Timeline" name="timeline" value={formData?.timeline} onChange={handleInputChange} className="w-full" />
              <TextArea placeholder="Project Details..." name="details" value={formData?.details} onChange={handleInputChange} className="w-full" rows={4} />
            </div>

            {/* <Button type="submit" text="Send" className="bg-transparent hover:bg-text-muted hover:bg-opacity-10 transition-all" /> */}
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

      <ToastContainer />
    </section>
  );
};

export default ContactSection;
