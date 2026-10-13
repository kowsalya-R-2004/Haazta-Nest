import React from 'react';
import { Smartphone, Clock, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC<{ onBookInstant: () => void }> = ({ onBookInstant }) => {
  const steps = [
    {
      step: '01',
      title: 'Tap & Select Service',
      desc: 'Choose from instant 6-minute emergency dispatch or schedule your preferred date & time slot.',
      icon: <Smartphone size={24} color="#6F1D9E" />,
      badge: '1-Tap Booking'
    },
    {
      step: '02',
      title: 'Verified Specialist Dispatched',
      desc: 'Uniformed, 100% police & Aadhaar-verified specialist arrives with sanitized cleaning kit & supplies.',
      icon: <Clock size={24} color="#6F1D9E" />,
      badge: '6-10 Mins ETA'
    },
    {
      step: '03',
      title: 'Inspect & Relax',
      desc: 'Enjoy a spotless home backed by our 50-point checklist. Pay securely after full satisfaction.',
      icon: <ShieldCheck size={24} color="#6F1D9E" />,
      badge: '100% Guarantee'
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '60px 0', background: '#FFFFFF' }} aria-label="How Nest Works">
      <div className="content-container">
        <div className="section-title-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FAF4FF', padding: '4px 12px', borderRadius: '9999px', color: '#6F1D9E', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
            <Sparkles size={14} />
            <span>SEAMLESS EXPERIENCE</span>
          </div>
          <h2 className="section-main-title">How Nest Works in 3 Simple Steps</h2>
          <p className="section-sub-title">From tapping your phone to a sparkling home in minutes.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          position: 'relative'
        }}>
          {steps.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#FAFAFC',
                border: '1.5px solid #F0F1F5',
                borderRadius: '24px',
                padding: '32px 24px',
                position: 'relative',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#C084FC';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(111, 29, 158, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#F0F1F5';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#FAF0FE', border: '1px solid #E9D5FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: '#E5E7EB' }}>
                    {item.step}
                  </span>
                </div>

                <span style={{ fontSize: '11px', fontWeight: 800, color: '#6F1D9E', background: '#F4E8FC', padding: '2px 8px', borderRadius: '9999px', display: 'inline-block', marginBottom: '8px' }}>
                  {item.badge}
                </span>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            type="button"
            className="btn-hero-primary"
            onClick={onBookInstant}
          >
            <span>Experience Nest Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
