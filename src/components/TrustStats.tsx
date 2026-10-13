import React from 'react';
import { Users, DollarSign, Award, Star, ShieldCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      number: '50,000+',
      label: 'Happy Customers',
      sub: 'Served across Bengaluru',
      icon: <Users size={22} color="#6F1D9E" />
    },
    {
      number: '₹45,000+',
      label: 'Top Monthly Earning',
      sub: 'Transparent weekly payouts',
      icon: <DollarSign size={22} color="#D48806" />
    },
    {
      number: '10,000+',
      label: 'Verified Helpers',
      sub: '100% Police checked',
      icon: <ShieldCheck size={22} color="#10B981" />
    },
    {
      number: '4.88★',
      label: 'Average Rating',
      sub: 'From 120,000+ reviews',
      icon: <Star size={22} fill="#FFDF00" color="#D48806" />
    }
  ];

  return (
    <section style={{ padding: '50px 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF4FE 50%, #FFFFFF 100%)' }} aria-label="Trust and Statistics">
      <div className="content-container">
        <div className="section-title-header" style={{ marginBottom: '32px' }}>
          <h2 className="section-main-title">Nest Trusted by Thousands</h2>
          <p className="section-sub-title">Empowering thousands of domestic helpers with steady income and dignity.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {stats.map((st, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #E9D5FF',
                borderRadius: '20px',
                padding: '24px 20px',
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(111, 29, 158, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#FAF0FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {st.icon}
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 900, color: '#6F1D9E', lineHeight: 1.1 }}>
                {st.number}
              </div>

              <div style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>
                {st.label}
              </div>

              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                {st.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
