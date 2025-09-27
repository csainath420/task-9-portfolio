import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textAreaClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-vertical',
  {
    variants: {
      variant: {
        default: 'border border-gray-300',
        filled: 'border-0',
        outline: 'border-2 border-gray-300 bg-transparent',
      },
      size: {
        small: 'px-3 py-2 text-sm min-h-[80px]',
        medium: 'px-4 py-3 text-base min-h-[120px]',
        large: 'px-5 py-4 text-lg min-h-[160px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const TextArea = ({
  placeholder = "Project Details...",
  text_font_size = "16",
  text_font_family = "Lato",
  text_font_weight = "500",
  text_line_height = "20px",
  text_text_align = "justify",
  text_text_transform = "capitalize",
  text_color = "#959595",
  fill_background_color = "#ffffff0a",
  border_border_radius = "8px",
  layout_align_self = "center",
  
  layout_width,
  padding,
  position,
  
  variant,
  size,
  value,
  onChange,
  disabled = false,
  className,
  name,
  id,
  required = false,
  rows = 4,
  cols,
  ...props
}) => {
  const [textValue, setTextValue] = useState(value || '');

  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    layout_align_self ? `self-${layout_align_self}` : '',
  ]?.filter(Boolean)?.join(' ');

  const textAreaStyles = {
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
    setTextValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value !== undefined ? value : textValue}
      onChange={handleChange}
      disabled={disabled}
      name={name}
      id={id}
      required={required}
      rows={rows}
      cols={cols}
      style={textAreaStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default TextArea;