import React from 'react';

interface GooseMascotProps {
  className?: string;
}

export function GooseMascot({ className = "w-16 h-16" }: GooseMascotProps) {
  return (
    <img 
      src="/goose.png" 
      alt="WatUDoin Goose Mascot" 
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
        backgroundColor: 'transparent'
      }}
    />
  );
}

export function GooseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src="/goose.png" 
      alt="WatUDoin Goose Icon" 
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
        backgroundColor: 'transparent'
      }}
    />
  );
}
