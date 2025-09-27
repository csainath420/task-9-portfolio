import React from 'react';

const CircleProgressBar = ({
  percentage = 85,
  size = 130,
  strokeWidth = 8,
  backgroundColor = '#d9d9d933',
  progressColor = 'linear-gradient(129deg, #fd6f00 0%, #e46400 100%)',
  className = '',
  children,
  ...props
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <defs>
          <linearGradient id={`gradient-${Math.random()}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fd6f00" />
            <stop offset="100%" stopColor="#e46400" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gradient-${Math.random()})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default CircleProgressBar;