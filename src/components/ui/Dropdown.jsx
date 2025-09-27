import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'w-full cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed relative',
  {
    variants: {
      variant: {
        default: 'border border-gray-300',
        filled: 'border-0',
        outline: 'border-2 border-gray-300 bg-transparent',
      },
      size: {
        small: 'px-3 py-2 text-sm',
        medium: 'px-4 py-3 text-base',
        large: 'px-5 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const Dropdown = ({
  placeholder = "Service of Interest",
  text_font_size = "16",
  text_font_family = "Lato",
  text_font_weight = "500",
  text_line_height = "20px",
  text_text_align = "justify",
  text_text_transform = "capitalize",
  text_color = "#959595",
  fill_background_color = "#ffffff0a",
  border_border_radius = "8px",
  
  layout_gap,
  layout_width,
  padding,
  position,
  
  variant,
  size,
  options = [
    "App Design",
    "App Usage",
    "UI/UX Design",
    "Web Development",
    "Branding",
    "Consultation"
  ],
  value,
  onChange,
  disabled = false,
  className,
  name,
  id,
  required = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const dropdownStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    textTransform: text_text_transform,
    color: text_color,
    backgroundColor: fill_background_color,
    borderRadius: border_border_radius,
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange({ target: { value: option, name } });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event?.key === 'Enter' || event?.key === ' ') {
      event?.preventDefault();
      setIsOpen(!isOpen);
    } else if (event?.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        style={dropdownStyles}
        className={twMerge(
          dropdownClasses({ variant, size }),
          optionalClasses,
          'flex items-center justify-between',
          className
        )}
        aria-disabled={disabled}
        {...props}
      >
        <span className={selectedValue ? 'text-current' : 'opacity-70'}>
          {selectedValue || placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
          style={{ borderRadius: border_border_radius }}
        >
          <ul role="listbox" className="py-1">
            {options?.map((option, index) => (
              <li
                key={index}
                role="option"
                aria-selected={selectedValue === option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150 text-gray-800"
                onClick={() => handleOptionSelect(option)}
                style={{
                  fontSize: `${text_font_size}px`,
                  fontFamily: text_font_family,
                  fontWeight: text_font_weight,
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="hidden"
        name={name}
        id={id}
        value={selectedValue}
        required={required}
      />
    </div>
  );
};

export default Dropdown;