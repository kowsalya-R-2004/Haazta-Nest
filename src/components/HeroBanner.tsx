import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap, Calendar, Star, ShieldCheck } from 'lucide-react';

interface HeroBannerProps {
  onInstantClick: () => void;
  onScheduleClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onInstantClick,
  onScheduleClick,
}) => {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="content-container">
        <div className="hero-layout-grid">
          {/* Left Column: Heading, Proposition & Actions */}
          <div className="hero-left-content">
            <div className="hero-speed-pill">
              <Zap size={15} fill="#6F1D9E" color="#6F1D9E" />
              <span className="hero-speed-text">House Help at Your Doorstep in 10 Minutes</span>
              <span style={{ background: '#F4E8FC', color: '#6F1D9E', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '9999px' }}>
                LIVE
              </span>
            </div>

            <h1 className="hero-main-heading">
              A Happier Home <br />
              <span style={{ color: '#6F1D9E' }}>Starts Here.</span>
            </h1>

            <p className="hero-sub-text">
              Reliable, background-checked home help whenever you need it. Instant 6-minute dispatch for floor mopping, vegetable chopping, bathroom cleaning, laundry, and kitchen care.
            </p>

            {/* Price Highlight Banner */}
            <div className="hero-price-highlight-card">
              <div className="hero-price-left">
                <span className="hero-first-visit-tag">&gt; First Visit Special &lt;</span>
                <div className="hero-price-numbers">
                  <span className="hero-price-current">₹49</span>
                  <span className="hero-price-original">₹99</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#4A0E66' }}>/First Visit</span>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: '#4B5563', maxWidth: '240px', lineHeight: 1.35 }}>
                Includes 45-min complete floor mopping, dusting, and trash clearing.
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-action-buttons-row">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={onInstantClick}
              >
                <Zap size={18} fill="#FFDF00" color="#FFDF00" />
                <span>Book Instant Helper (6 Mins)</span>
              </button>

              <button
                type="button"
                className="btn-hero-secondary"
                onClick={onScheduleClick}
              >
                <Calendar size={18} color="#6F1D9E" />
                <span>Schedule for Later</span>
              </button>
            </div>

            {/* Trust Bullets */}
            <div className="hero-trust-bullets">
              <div className="hero-trust-bullet-item">
                <CheckCircle2 size={15} color="#10B981" />
                <span>100% Police Verified</span>
              </div>
              <div className="hero-trust-bullet-item">
                <CheckCircle2 size={15} color="#10B981" />
                <span>50-Pt Standardized Checklist</span>
              </div>
              <div className="hero-trust-bullet-item">
                <Star size={15} fill="#FFDF00" color="#D48806" />
                <span>4.88/5 (50k+ Homes)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="hero-visual-container">
            <div className="hero-main-photo-card">
              <img
                src="/assets/hero_worker.jpg"
                alt="Professional Nest Domestic Specialist"
                className="hero-main-photo-img"
              />
            </div>

            {/* Floating Live Helper Profile Card */}
            <div className="hero-floating-card-helper">
              <img
                src="/assets/instant_helper.jpg"
                alt="Priya Sharma"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #6F1D9E' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>Priya Sharma</span>
                  <span style={{ background: '#10B981', color: '#FFFFFF', fontSize: '9px', fontWeight: 800, padding: '1px 6px', borderRadius: '9999px' }}>
                    Available Now
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <Star size={11} fill="#FFDF00" color="#D48806" />
                  <span style={{ fontWeight: 700, color: '#111827' }}>4.9★</span>
                  <span>• Uniform Verified Specialist</span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#6F1D9E', marginTop: '2px' }}>
                  ⚡ Arriving in 6 mins in Bellandur
                </div>
              </div>
            </div>

            {/* Floating Discount Tag */}
            <div className="hero-floating-card-discount">
              <Sparkles size={16} />
              <span>₹50 OFF Code: FIRST49</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
