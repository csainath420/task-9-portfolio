import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', path: 'home' },
    { text: 'Services', path: 'services' },
    { text: 'About me', path: 'about' },
    { text: 'Portfolio', path: 'portfolio' },
    { text: 'Contact me', path: 'contact' },
  ];

  return (
    <header className="w-full bg-bg-header-background z-50 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-[31px] md:px-[56px] lg:px-[80px]">
        <div className="flex justify-between items-center py-4 lg:py-0 lg:mt-[56px]">
          <div className="flex-shrink-0">
            <h1
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold"
              style={{
                fontFamily: 'K2D',
                background: 'linear-gradient(90deg, #fa6e00 0%, #e60025 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              LOGO
            </h1>
          </div>

          <button
            className="block lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-[30px]">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}  
                    spy={true}
                    smooth={true}
                    offset={-80}    
                    duration={500}
                    className="cursor-pointer text-[18px] text-text-text-muted hover:text-text-text-accent transition-colors"
                    activeClass="text-text-text-accent font-bold"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button text="Hire Me" />
          </div>
        </div>

        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="block py-2 px-4 cursor-pointer text-text-text-muted hover:text-text-text-accent"
                  activeClass="text-text-text-accent font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button text="Hire Me" /* ...props */ onClick={() => setMenuOpen(false)} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

