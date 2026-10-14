import React from 'react';
import { NestLogo } from './NestLogo';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="landing-footer">
      <div className="landing-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <NestLogo size={24} color="#FFDF00" />
          <span className="landing-footer-logo">Nest</span>
        </div>

        <p style={{ fontSize: '13px', color: '#D1D5DB', marginBottom: '14px', maxWidth: '480px', margin: '0 auto 14px auto' }}>
          Empowering thousands of household professionals across Bengaluru with dignity, safe workplaces, and guaranteed earnings.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '12px', color: '#9CA3AF', marginBottom: '18px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Phone size={13} color="#FFDF00" /> Partner Helpline: +91 80 4728 9000
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={13} color="#FFDF00" /> Bellandur, Bengaluru, Karnataka
          </span>
        </div>

        <div style={{ borderTop: '1px solid #1F2937', paddingTop: '16px', fontSize: '11px', color: '#6B7280' }}>
          © 2026 Haatza India Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
