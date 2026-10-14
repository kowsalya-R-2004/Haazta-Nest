import React from 'react';
import { NestLogo } from './NestLogo';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Award } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenWallet: () => void;
  onOpenOffers: () => void;
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenWallet,
  onOpenOffers,
  onOpenPartnerModal,
}) => {
  return (
    <footer className="site-footer">
      <div className="content-container">
        {/* Brand Motto */}
        <div className="brand-motto-banner-row" style={{ paddingBottom: '30px', borderBottom: '1px solid #1F2937', marginBottom: '40px' }}>
          <div className="motto-tap-book" style={{ color: '#E5E7EB' }}>TAP – BOOK</div>
          <div className="motto-relax" style={{ background: 'linear-gradient(90deg, #FFE600 0%, #D48806 50%, #C084FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ....RELAX....
          </div>
          <p style={{ color: '#9CA3AF', fontSize: '13px', marginTop: '6px' }}>
            Bengaluru's fastest home-services platform. Help at your doorstep in 6–10 minutes.
          </p>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="footer-top-grid">
          {/* Col 1: About Nest */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <NestLogo size={28} color="#FFDF00" />
              <span style={{ fontSize: '22px', fontWeight: 900, color: '#FFFFFF', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>
                Nest
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9CA3AF', marginBottom: '16px' }}>
              Part of the Haatza ecosystem. Providing verified, trained, and prompt domestic assistance across Bangalore.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#10B981', fontWeight: 700 }}>
              <ShieldCheck size={16} />
              <span>100% Police Verified & Insured</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="footer-col-title">Popular Services</h4>
            <ul className="footer-links-list">
              <li><span className="footer-link" onClick={() => onSelectService('mopping-dusting')}>Mopping & Floor Care (₹49)</span></li>
              <li><span className="footer-link" onClick={() => onSelectService('meal-assistance')}>Meal Assistance (₹199)</span></li>
              <li><span className="footer-link" onClick={() => onSelectService('bathroom-cleaning')}>Bathroom Disinfection (₹129)</span></li>
              <li><span className="footer-link" onClick={() => onSelectService('laundry-ironing')}>Laundry & Steam Ironing (₹99)</span></li>
              <li><span className="footer-link" onClick={() => onSelectService('kitchen-utensils')}>Kitchen & Utensil Cleaning (₹89)</span></li>
              <li><span className="footer-link" onClick={() => onSelectService('deep-cleaning-more')}>Full House Deep Cleaning (₹499)</span></li>
            </ul>
          </div>

          {/* Col 3: Haatza Ecosystem & Careers */}
          <div>
            <h4 className="footer-col-title">Partners & Careers</h4>
            <ul className="footer-links-list">
              <li>
                <span 
                  className="footer-link" 
                  onClick={onOpenPartnerModal}
                  style={{ color: '#FFE600', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <Award size={13} />
                  <span>Join as Nest Expert (Earn ₹45k/mo)</span>
                </span>
              </li>
              <li><span className="footer-link">Haatza Instant Delivery</span></li>
              <li><span className="footer-link">Haatza Lite Saver</span></li>
              <li><span className="footer-link" onClick={onOpenWallet}>Haatza One Pay Wallet</span></li>
              <li><span className="footer-link" onClick={onOpenOffers}>Promotions & Coupons</span></li>
            </ul>
          </div>

          {/* Col 4: Service Areas & Contact */}
          <div>
            <h4 className="footer-col-title">Active Areas</h4>
            <ul className="footer-links-list" style={{ color: '#D1D5DB' }}>
              <li>Bellandur & Outer Ring Road</li>
              <li>Indiranagar & Domlur</li>
              <li>Koramangala & HSR Layout</li>
              <li>Whitefield & Marathahalli</li>
              <li>Sarjapur & Electronic City</li>
            </ul>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#9CA3AF' }}>
              Help Helpline: <strong>+91 80 4728 9000</strong>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Haatza India Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Terms of Service</span>
            <span className="footer-link">Safety Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
