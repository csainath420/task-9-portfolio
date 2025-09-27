import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const progressClasses = cva(
  'relative inline-flex items-center justify-center',
  {
    variants: {
      size: {
        small: 'w-16 h-16',
        medium: 'w-24 h-24',
        large: 'w-32 h-32',
        xlarge: 'w-40 h-40',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const CircularProgressbar = ({
  value = 0,
  
  size = 'medium',
  strokeWidth = 8,
  backgroundColor = '#e5e7eb',
  progressColor = '#fd6f00',
  textColor = '#ffffff',
  
  showText = true,
  text,
  textSize = '14px',
  textWeight = '600',
  
  className,
  style,
  
  animated = true,
  animationDuration = '1s',
  
  ...props
}) => {
  const normalizedValue = Math.min(100, Math.max(0, value));
  
  const sizeMap = {
    small: 64,
    medium: 96,
    large: 128,
    xlarge: 160,
  };
  
  const diameter = sizeMap?.[size] || sizeMap?.medium;
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div
      className={twMerge(progressClasses({ size }), className)}
      style={style}
      {...props}
    >
      <svg
        width={diameter}
        height={diameter}
        className="transform -rotate-90"
      >

        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        

        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={animated ? 'transition-all duration-1000 ease-out' : ''}
          style={{
            animationDuration: animated ? animationDuration : '0s',
          }}
        />
      </svg>

      {showText && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            color: textColor,
            fontSize: textSize,
            fontWeight: textWeight,
          }}
        >
          {text || `${Math.round(normalizedValue)}%`}
        </div>
      )}
    </div>
  );
};

export default CircularProgressbar;