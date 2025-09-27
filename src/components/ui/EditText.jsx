import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
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

const EditText = ({
  placeholder = "Name",
  text_font_size = "16",
  text_font_family = "Lato",
  text_font_weight = "500",
  text_line_height = "20px",
  text_text_align = "justify",
  text_text_transform = "capitalize",
  text_color = "#959595",
  fill_background_color = "#ffffff0a",
  border_border_radius = "8px",
  
  layout_width,
  padding,
  position,
  
  variant,
  size,
  type = "text",
  value,
  onChange,
  disabled = false,
  className,
  name,
  id,
  required = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const inputStyles = {
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

  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      disabled={disabled}
      name={name}
      id={id}
      required={required}
      style={inputStyles}
      className={twMerge(
        inputClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;