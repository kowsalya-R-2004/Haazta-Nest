import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sharda Bai',
      location: 'HSR Layout, Bengaluru',
      earning: '₹38,000/month',
      rating: 5,
      avatar: '/assets/instant_helper.jpg',
      quote: 'I used to wash dishes in 4 separate houses with no fixed timings. Nest gave me guaranteed slots in Bellandur, weekly payments right in my bank, and respect.'
    },
    {
      name: 'Kavitha Devi',
      location: 'Whitefield, Bengaluru',
      earning: '₹44,200/month',
      rating: 5,
      avatar: '/assets/hero_worker.jpg',
      quote: 'The free uniform and professional caddy kit make customers trust me immediately. Plus the ₹5 Lakh insurance cover gives my family complete peace of mind.'
    }
  ];

  return (
    <section style={{ padding: '60px 0', background: '#FFFFFF' }} aria-label="What Our Experts Say">
      <div className="content-container">
        <div className="section-title-header">
          <h2 className="section-main-title">What Our Experts Say</h2>
          <p className="section-sub-title">Listen to our community of verified household professionals.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: '#FAFAFC',
                border: '1.5px solid #F0F1F5',
                borderRadius: '24px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C084FC';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#F0F1F5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FFDF00" color="#D48806" />
                    ))}
                  </div>
                  <span style={{ background: '#E8FDF3', color: '#065F46', fontSize: '11px', fontWeight: 800, padding: '3px 8px', borderRadius: '9999px' }}>
                    Earns {t.earning}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '18px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #ECEEF2', paddingTop: '14px' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #6F1D9E' }}
                />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>{t.name}</h4>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
