import React from 'react';
import { NestLogo, HaatzaLogo, LiteLogo } from './NestLogo';

interface TopSwitcherProps {
  onTabChange?: (tab: 'haatza' | 'lite' | 'nest') => void;
  activeTab?: 'haatza' | 'lite' | 'nest';
}

export const TopSwitcher: React.FC<TopSwitcherProps> = ({ 
  onTabChange, 
  activeTab = 'nest' 
}) => {
  return (
    <div className="top-switcher-container">
      <button 
        type="button" 
        className={`switcher-tab ${activeTab === 'haatza' ? 'active-nest' : ''}`}
        onClick={() => onTabChange && onTabChange('haatza')}
      >
        <HaatzaLogo size={18} />
        <span style={{ fontStyle: 'italic', fontWeight: 800 }}>Haatza</span>
      </button>

      <button 
        type="button" 
        className={`switcher-tab ${activeTab === 'lite' ? 'active-nest' : ''}`}
        onClick={() => onTabChange && onTabChange('lite')}
      >
        <LiteLogo size={16} />
        <span style={{ fontStyle: 'italic', fontWeight: 800 }}>Lite</span>
      </button>

      <button 
        type="button" 
        className={`switcher-tab ${activeTab === 'nest' ? 'active-nest' : ''}`}
        onClick={() => onTabChange && onTabChange('nest')}
      >
        <NestLogo size={18} color={activeTab === 'nest' ? '#FFFFFF' : '#6F1D9E'} />
        <span style={{ fontStyle: 'italic', fontWeight: 800 }}>Nest</span>
      </button>
    </div>
  );
};
