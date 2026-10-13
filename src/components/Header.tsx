import React from 'react';
import { NestLogo, HaatzaLogo, LiteLogo } from './NestLogo';
import { MapPin, ChevronDown, CreditCard, Gift, ClipboardList, Zap, Award } from 'lucide-react';
import { Address } from '../types';

interface HeaderProps {
  currentAddress: Address;
  activeBrandTab: 'haatza' | 'lite' | 'nest';
  onBrandChange: (brand: 'haatza' | 'lite' | 'nest') => void;
  onOpenAddressModal: () => void;
  onOpenWalletModal: () => void;
  onOpenOffersModal: () => void;
  onOpenBookings: () => void;
  onOpenPartnerModal: () => void;
  onInstantBookingClick: () => void;
  activeBookingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentAddress,
  activeBrandTab,
  onBrandChange,
  onOpenAddressModal,
  onOpenWalletModal,
  onOpenOffersModal,
  onOpenBookings,
  onOpenPartnerModal,
  onInstantBookingClick,
  activeBookingsCount,
}) => {
  return (
    <header className="site-navbar">
      {/* Top Brand Ecosystem & Announcement Bar */}
      <div className="nav-top-row">
        <div className="content-container nav-top-inner">
          <div className="brand-ecosystem-tabs">
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', marginRight: '4px' }}>Haatza Ecosystem:</span>

            <button
              type="button"
              className={`eco-tab-btn ${activeBrandTab === 'haatza' ? 'active-nest' : ''}`}
              onClick={() => onBrandChange('haatza')}
            >
              <HaatzaLogo size={14} />
              <span>Haatza</span>
            </button>

            <button
              type="button"
              className={`eco-tab-btn ${activeBrandTab === 'lite' ? 'active-nest' : ''}`}
              onClick={() => onBrandChange('lite')}
            >
              <LiteLogo size={13} />
              <span>Lite</span>
            </button>

            <button
              type="button"
              className={`eco-tab-btn ${activeBrandTab === 'nest' ? 'active-nest' : ''}`}
              onClick={() => onBrandChange('nest')}
            >
              <NestLogo size={14} color={activeBrandTab === 'nest' ? '#FFFFFF' : '#6F1D9E'} />
              <span>Nest</span>
            </button>
          </div>

          <div className="top-announcement-text">
            <span>⚡ First Visit Special: Mopping & Dusting at just <strong>₹49</strong>!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="nav-main-row">
        <div className="content-container nav-main-inner">
          {/* Logo & Address */}
          <div className="nav-brand-group">
            <a href="#" className="nav-logo-link" aria-label="Nest Home">
              <NestLogo size={32} color="#6F1D9E" />
              <span className="nav-logo-text">Nest</span>
            </a>

            <button
              type="button"
              className="nav-address-trigger"
              onClick={onOpenAddressModal}
              title="Change location"
            >
              <MapPin size={15} color="#6F1D9E" style={{ flexShrink: 0 }} />
              <span className="nav-address-text">
                {currentAddress.title ? `${currentAddress.title} - ${currentAddress.addressLine.split(',')[0]}` : 'Add address'}
              </span>
              <ChevronDown size={14} color="#6B7280" style={{ flexShrink: 0 }} />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links-list">
            <li>
              <a href="#services" className="nav-link-item">Services</a>
            </li>
            <li>
              <a href="#how-it-works" className="nav-link-item">How It Works</a>
            </li>
            <li>
              <a href="#why-nest" className="nav-link-item">Why Nest</a>
            </li>
            <li>
              <a href="#faqs" className="nav-link-item">FAQs</a>
            </li>
            <li>
              <button type="button" className="nav-link-item" onClick={onOpenPartnerModal} style={{ color: '#6F1D9E', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Award size={14} />
                <span>Join as Expert</span>
              </button>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions-group">
            <button
              type="button"
              className="nav-btn-wallet"
              onClick={onOpenWalletModal}
              title="Haatza One Pay Balance"
            >
              <CreditCard size={15} color="#4A148C" />
              <span>₹250</span>
            </button>

            <button
              type="button"
              className="nav-btn-bookings"
              onClick={onOpenBookings}
              title="My Bookings"
            >
              <ClipboardList size={16} color="#6F1D9E" />
              <span style={{ fontSize: '13px' }}>Bookings</span>
              {activeBookingsCount > 0 && (
                <span style={{
                  background: '#6F1D9E',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: 900,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: '2px'
                }}>
                  {activeBookingsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="nav-btn-instant-cta"
              onClick={onInstantBookingClick}
            >
              <Zap size={15} fill="#FFDF00" color="#FFDF00" />
              <span>Book in 6 Mins</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
