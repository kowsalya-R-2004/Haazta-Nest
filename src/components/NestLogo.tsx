import React from 'react';

interface NestLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Exact 3-Piece Stylized House Nest Origami Icon matching brand reference
 */
export const NestOrigamiIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 32, 
  color = '#FFFFFF', 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size * 0.95} 
      viewBox="0 0 100 95" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Roof Shard */}
      <path 
        d="M51 12.5C49.5 10.5 46.5 10.5 45 12.5L25 29C23.5 30.2 23 32.2 23.8 34C24.5 35.8 26.2 37 28.2 37H46.5C48.5 37 50.2 35.5 50.8 33.5L53.2 24.5C53.8 22.2 53 19.8 51.5 18L51 12.5Z" 
        fill={color} 
      />
      {/* Bottom Left Shard */}
      <path 
        d="M21 42C19.3 42 18 43.3 18 45V64C18 67.3 20.7 70 24 70H44C46.2 70 48 68.2 48 66V47C48 44.5 45.8 42.8 43.5 43.2C38 44.2 31 44.5 24 42.4C23 42.1 22 42 21 42Z" 
        fill={color} 
      />
      {/* Right Tall Shard (Roof right + right wall) */}
      <path 
        d="M56 16.5C54.8 17.8 54.2 19.5 54.5 21.2L57.5 46C57.8 48.5 56.5 51 54.8 53L53.5 54.5C52.2 56 52 58 52.8 59.8L55 64C56 66 58 67.2 60.2 67.2H74C77.3 67.2 80 64.5 80 61.2V32C80 30.2 79.2 28.5 77.8 27.2L62 13.8C59.8 12 57.2 13.8 56 16.5Z" 
        fill={color} 
      />
    </svg>
  );
};

export const NestLogo: React.FC<NestLogoProps> = ({ size = 32, color = '#8A2BE2', className = '' }) => {
  return (
    <div className={`nest-logo-inline ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <NestOrigamiIcon size={size} color={color} />
    </div>
  );
};

/**
 * Exact Nest App Badge matching user's purple rounded badge with 3-piece house and bold italic "Nest"
 */
export const NestAppBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md',
  className = '' 
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const width = isSm ? '64px' : isLg ? '96px' : '80px';
  const height = isSm ? '42px' : isLg ? '62px' : '52px';
  const iconSize = isSm ? 22 : isLg ? 32 : 26;
  const fontSize = isSm ? '13px' : isLg ? '18px' : '15px';

  return (
    <div 
      className={`nest-app-button-badge ${className}`}
      style={{
        width,
        height,
        backgroundColor: '#7E22CE', // Vibrant rich purple as shown in brand logo
        backgroundImage: 'linear-gradient(135deg, #8B25D4 0%, #6F1D9E 100%)',
        borderRadius: isSm ? '14px' : '18px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(126, 34, 206, 0.35)',
        padding: '3px 4px',
        userSelect: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        flexShrink: 0
      }}
    >
      <div style={{ marginTop: '1px' }}>
        <NestOrigamiIcon size={iconSize} color="#FFFFFF" />
      </div>
      <span 
        style={{
          color: '#FFFFFF',
          fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize,
          lineHeight: 1,
          marginTop: '-1px',
          letterSpacing: '-0.2px'
        }}
      >
        Nest
      </span>
    </div>
  );
};

export const HaatzaLogo: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LiteLogo: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FF7A00" />
    <path d="M7 6V18H17" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
