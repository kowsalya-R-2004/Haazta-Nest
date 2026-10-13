import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <section id="why-nest" className="trust-section-wrapper" aria-label="Why Choose Nest">
      <div className="content-container">
        <div className="section-title-header">
          <h2 className="section-main-title">Built on Trust, Training & Safety</h2>
          <p className="section-sub-title">
            Every specialist entering your home is rigorously vetted, professionally equipped, and guaranteed by Nest.
          </p>
        </div>

        <div className="trust-desktop-grid">
          {/* 1. Top Rated Experts */}
          <div className="trust-feature-card">
            <div className="trust-feature-icon-box" style={{ background: '#FFFBE6', border: '1.5px solid #FFE58F' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#D48806" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFBE6"/>
                <path d="M12 18V13M12 13C12 13 14 11 16 12C16 14 14 16 12 16M12 13C12 13 10 11 8 12C8 14 10 16 12 16" stroke="#D48806" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-feature-title">Top Rated Experts</h3>
            <p className="trust-feature-desc">
              Over 50,000+ completed jobs with a consistent 4.88★ customer satisfaction rating across Bengaluru.
            </p>
          </div>

          {/* 2. Professionally Trained */}
          <div className="trust-feature-card">
            <div className="trust-feature-icon-box" style={{ background: '#FAF0FE', border: '1.5px solid #D3ADF7' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#6F1D9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FAF0FE"/>
                <path d="M9 11H15M9 14H13M9 17H11" stroke="#6F1D9E" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="15.5" cy="15.5" r="3" fill="#FFE600" stroke="#6F1D9E" strokeWidth="1.5"/>
                <path d="M14.5 15.5L15.2 16.2L16.5 14.8" stroke="#4A0E66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-feature-title">Professionally Trained</h3>
            <p className="trust-feature-desc">
              Trained on a 50-point standardized hygiene protocol, chemical-safe methods, and polite home etiquette.
            </p>
          </div>

          {/* 3. Background Verified */}
          <div className="trust-feature-card">
            <div className="trust-feature-icon-box" style={{ background: '#FFFBE6', border: '1.5px solid #FFE58F' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5V11C4 16.52 7.41 21.61 12 22.8C16.59 21.61 20 16.52 20 11V5L12 2Z" stroke="#D48806" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFBE6"/>
                <path d="M9 12L11 14L15 10" stroke="#6F1D9E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="trust-feature-title">Background Verified</h3>
            <p className="trust-feature-desc">
              100% Aadhaar biometric & Police background checked. Uniform badge verification required before entry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
