import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Ananya Deshmukh',
      location: 'Bellandur, Bengaluru',
      role: 'Working Parent',
      service: 'Mopping & Dusting',
      rating: 5,
      comment: 'Nest has been a lifesaver! Booked instant mopping at 7:30 PM after a busy work day and Priya arrived in exactly 7 minutes with her cleaning kit. The floors were sparkling.',
      date: '2 days ago'
    },
    {
      name: 'Rohit Kulkarni',
      location: 'Indiranagar, Bengaluru',
      role: 'Tech Lead',
      service: 'Meal Prep & Kitchen Care',
      rating: 5,
      comment: 'The meal assistance helper washed and chopped all veggies for 4 dishes in under 40 minutes and cleaned the sink afterward. Extremely professional and courteous.',
      date: '1 week ago'
    },
    {
      name: 'Megha & Siddharth',
      location: 'Koramangala, Bengaluru',
      role: 'Homeowners',
      service: 'Bathroom Deep Clean',
      rating: 5,
      comment: 'Hard water stains on our glass shower door had been bothering us for months. The Nest specialist completely scrubbed and removed them with eco solutions. Outstanding service!',
      date: '3 days ago'
    }
  ];

  return (
    <section style={{ padding: '60px 0', background: '#FFFFFF' }} aria-label="Customer Testimonials">
      <div className="content-container">
        <div className="section-title-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8FDF3', padding: '4px 12px', borderRadius: '9999px', color: '#065F46', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
            <CheckCircle2 size={14} color="#10B981" />
            <span>50,000+ HAPPY HOMES</span>
          </div>
          <h2 className="section-main-title">Loved by Bengaluru Residents</h2>
          <p className="section-sub-title">Read genuine, verified feedback from everyday customers.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {reviews.map((rev, idx) => (
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
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#E9D5FF';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(111, 29, 158, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#F0F1F5';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FFDF00" color="#D48806" />
                    ))}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#b43cf9ff', background: '#F4E8FC', padding: '2px 8px', borderRadius: '9999px' }}>
                    {rev.service}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.55, fontStyle: 'italic', marginBottom: '18px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #EAEBEF', paddingTop: '14px' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>{rev.name}</h4>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>{rev.location}</div>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{rev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
