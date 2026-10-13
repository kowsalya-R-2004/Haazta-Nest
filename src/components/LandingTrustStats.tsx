import React from 'react';

export const LandingTrustStats: React.FC = () => {
  const stats = [
    {
      number: '50,000+',
      label: 'happy customers'
    },
    {
      number: '₹45,000+',
      label: 'top monthly income'
    },
    {
      number: '10,000+',
      label: 'active experts'
    }
  ];

  return (
    <section aria-label="Trust by Thousands">
      <div className="landing-container">
        <h2 className="section-center-heading">Nest Trusted by Thousands</h2>

        <div className="stats-row-3">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-pill-card">
              <div className="stat-number-big">{s.number}</div>
              <div className="stat-label-small">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
