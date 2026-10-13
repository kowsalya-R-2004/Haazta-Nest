import React from 'react';
import { DollarSign, CreditCard, ShieldCheck, Heart } from 'lucide-react';

export const LandingBenefits: React.FC = () => {
  const benefits = [
    {
      title: '₹45,000 per month',
      icon: <DollarSign size={24} color="#6F1D9E" />
    },
    {
      title: 'Weekly bank payout',
      icon: <CreditCard size={24} color="#6F1D9E" />
    },
    {
      title: 'Up to ₹5 Lakh insurance',
      icon: <ShieldCheck size={24} color="#6F1D9E" />
    },
    {
      title: 'Guaranteed safety & dignity',
      icon: <Heart size={24} color="#6F1D9E" />
    }
  ];

  return (
    <section aria-label="Nest Expert Benefits">
      <div className="landing-container">
        <h2 className="section-center-heading">Nest Expert Benefits</h2>

        <div className="benefits-grid-4">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card-clean">
              <div className="benefit-icon-circle">
                {b.icon}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
