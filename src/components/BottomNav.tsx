import React from 'react';
import { NestLogo } from './NestLogo';
import { ClipboardList } from 'lucide-react';

interface BottomNavProps {
  currentTab: 'nest' | 'bookings';
  onSelectTab: (tab: 'nest' | 'bookings') => void;
  onOpenOnePay: () => void;
  activeBookingsCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenOnePay,
  activeBookingsCount
}) => {
  return (
    <nav className="bottom-nav-bar" aria-label="Bottom Navigation">
      {/* 1. Nest Tab */}
      <button 
        type="button" 
        className={`nav-tab-item ${currentTab === 'nest' ? 'active' : ''}`}
        onClick={() => onSelectTab('nest')}
      >
        <NestLogo size={22} color={currentTab === 'nest' ? '#6F1D9E' : '#6B7280'} />
        <span style={{ fontSize: '14px', fontWeight: 800 }}>Nest</span>
      </button>

      {/* 2. Bookings Tab */}
      <button 
        type="button" 
        className={`nav-tab-item ${currentTab === 'bookings' ? 'active' : ''}`}
        onClick={() => onSelectTab('bookings')}
      >
        <ClipboardList size={20} color={currentTab === 'bookings' ? '#6F1D9E' : '#6B7280'} />
        <span style={{ fontSize: '14px', fontWeight: 700 }}>Bookings</span>
        {activeBookingsCount > 0 && (
          <span className="nav-badge">{activeBookingsCount}</span>
        )}
      </button>

      {/* 3. Haatza One Pay Pill */}
      <div 
        className="haatza-one-pay-pill"
        onClick={onOpenOnePay}
        role="button"
        tabIndex={0}
        aria-label="Open Haatza One Pay"
      >
        <div className="haatza-pay-card-thumb">
          💳
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span className="haatza-pay-title">Haatza</span>
          <span className="haatza-pay-sub">— One Pay —</span>
        </div>
      </div>
    </nav>
  );
};
