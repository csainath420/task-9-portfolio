// import React from 'react';

// const FooterSection = () => {
//   const navigationItems = [
//     'Home',
//     'Services', 
//     'About me',
//     'Portfolio',
//     'Contact me'
//   ];

//   return (
//     <footer id='footer' className="w-full" style={{ backgroundColor: '#ffffff0a' }}>
//       <div className="w-full max-w-[1440px] mx-auto">
//         <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full py-[24px]">
//           <div className="w-full max-w-[1280px] px-[28px] md:px-[42px] lg:px-[56px]">
//             <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full mt-[8px] md:mt-[12px] lg:mt-[16px]">
//               <h2 
//                 className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-bold leading-[26px] sm:leading-[31px] md:leading-[35px] lg:leading-[39px] text-center"
//                 style={{
//                   fontFamily: 'K2D',
//                   background: 'linear-gradient(90deg, #fa6e00 0%, #e60025 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 LOGO
//               </h2>

//               <nav className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[45px] lg:gap-[60px] w-[56%]">
//                 {navigationItems?.map((item, index) => (
//                   <button
//                     key={index}
//                     className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted hover:text-text-accent transition-colors"
//                     style={{ fontFamily: 'Lato' }}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>

//           <div className="w-full max-w-[1280px] px-[28px] md:px-[42px] lg:px-[56px]">
//             <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full">
//               <div className="flex justify-center items-center gap-[10px] md:gap-[15px] lg:gap-[20px] w-auto">
//                 <a 
//                         href="https://www.instagram.com/csainathchowdary?igsh=MThzaHpwbWJubHoyYg==" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                       >
//                         <img 
//                           src="/images/img_frame_52.png" 
//                           alt="Instagram" 
//                           className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
//                         />
//                       </a>

//                       <a 
//                         href="https://www.linkedin.com/in/sainath-chowdary-5b3ba3244/" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                       >
//                       <img 
//                         src="/images/img_frame_53.png" 
//                         alt="LinkedIn" 
//                         className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
//                       />
//                       </a>
//                       <a 
//                         href="https://dribbble.com/sainathchowdary-challa" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                       >
//                       <img 
//                         src="/images/img_frame_54.png" 
//                         alt="dribbble" 
//                         className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
//                       />
//                       </a>
//                       <a 
//                         href="https://www.behance.net/challasainath" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                       >
//                       <img 
//                         src="/images/img_frame_55.png" 
//                         alt="Behance" 
//                         className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
//                       />
//                       </a>
//               </div>

//               <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[30px] lg:gap-[40px] w-auto">
//                 <div className="flex justify-center items-center w-auto">
//                   <div className="flex justify-center items-center w-auto">
//                     <img 
//                       src="/images/img_mail.png" 
//                       alt="Email icon" 
//                       className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] lg:w-[24px] lg:h-[24px]"
//                     />
//                     <span 
//                       className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted ml-[7px] md:ml-[10px] lg:ml-[14px]"
//                       style={{ fontFamily: 'Lato' }}
//                     >
//                       csainath63@gmail.com
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex justify-center items-center w-auto">
//                   <img 
//                     src="/images/img_phone.png" 
//                     alt="Phone icon" 
//                     className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] lg:w-[24px] lg:h-[24px]"
//                   />
//                   <span 
//                     className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted ml-[7px] md:ml-[10px] lg:ml-[14px]"
//                     style={{ fontFamily: 'Lato' }}
//                   >
//                     +91 6303031420
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full border-t border-text-medium pt-[8px] md:pt-[12px] lg:pt-[16px] pb-[-2px] md:pb-[-3px] lg:pb-[-4px] px-[17px] md:px-[25px] lg:px-[34px]">
//             <p 
//               className="text-[14px] md:text-[15px] lg:text-[16px] font-bold leading-[18px] md:leading-[19px] lg:leading-[20px] text-center text-text-medium"
//               style={{ fontFamily: 'Lato' }}
//             >
//               Designed by @Sainath.chowdary UI/UX designer
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;


import React from 'react';
import { Link } from 'react-scroll';

const FooterSection = () => {
  const navigationItems = [
    { text: 'Home', path: 'home' },
    { text: 'Services', path: 'services' },
    { text: 'About me', path: 'about' },
    { text: 'Portfolio', path: 'portfolio' },
    { text: 'Contact me', path: 'contact' },
  ];

  return (
    <footer id="footer" className="w-full" style={{ backgroundColor: '#ffffff0a' }}>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full py-[24px]">
          {/* Logo + Navigation */}
          <div className="w-full max-w-[1280px] px-[28px] md:px-[42px] lg:px-[56px]">
            <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full mt-[8px] md:mt-[12px] lg:mt-[16px]">
              <h2
                className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-bold leading-[26px] sm:leading-[31px] md:leading-[35px] lg:leading-[39px] text-center"
                style={{
                  fontFamily: 'K2D',
                  background: 'linear-gradient(90deg, #fa6e00 0%, #e60025 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                LOGO
              </h2>

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[45px] lg:gap-[60px] w-[56%]">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted hover:text-text-accent transition-colors"
                    style={{ fontFamily: 'Lato' }}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Icons */}
          <div className="w-full max-w-[1280px] px-[28px] md:px-[42px] lg:px-[56px]">
            <div className="flex flex-col gap-[25px] md:gap-[37px] lg:gap-[50px] justify-start items-center w-full">
              <div className="flex justify-center items-center gap-[10px] md:gap-[15px] lg:gap-[20px] w-auto">
                <a
                  href="https://www.instagram.com/csainathchowdary?igsh=MThzaHpwbWJubHoyYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/img_frame_52.png"
                    alt="Instagram"
                    className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/sainath-chowdary-5b3ba3244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/img_frame_53.png"
                    alt="LinkedIn"
                    className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://dribbble.com/sainathchowdary-challa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/img_frame_54.png"
                    alt="Dribbble"
                    className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                  />
                </a>

                <a
                  href="https://www.behance.net/challasainath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/img_frame_55.png"
                    alt="Behance"
                    className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                  />
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[30px] lg:gap-[40px] w-auto">
                <div className="flex justify-center items-center w-auto">
                  <img
                    src="/images/img_mail.png"
                    alt="Email icon"
                    className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] lg:w-[24px] lg:h-[24px]"
                  />
                  <span
                    className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted ml-[7px] md:ml-[10px] lg:ml-[14px]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    csainath63@gmail.com
                  </span>
                </div>

                <div className="flex justify-center items-center w-auto">
                  <img
                    src="/images/img_phone.png"
                    alt="Phone icon"
                    className="w-[18px] h-[18px] md:w-[21px] md:h-[21px] lg:w-[24px] lg:h-[24px]"
                  />
                  <span
                    className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-text-muted ml-[7px] md:ml-[10px] lg:ml-[14px]"
                    style={{ fontFamily: 'Lato' }}
                  >
                    +91 6303031420
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom text */}
          <div className="w-full border-t border-text-medium pt-[8px] md:pt-[12px] lg:pt-[16px] px-[17px] md:px-[25px] lg:px-[34px]">
            <p
              className="text-[14px] md:text-[15px] lg:text-[16px] font-bold leading-[18px] md:leading-[19px] lg:leading-[20px] text-center text-text-medium"
              style={{ fontFamily: 'Lato' }}
            >
              Designed by @Sainath.chowdary UI/UX designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;