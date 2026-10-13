import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast will a Nest specialist arrive at my doorstep?',
      a: 'For instant bookings, our automated nearest-specialist dispatch system pairs you with an active verified professional who arrives in 6 to 10 minutes across our active Bengaluru service clusters (Bellandur, Indiranagar, Koramangala, Whitefield, HSR).'
    },
    {
      q: 'Do I need to provide cleaning liquids, sponges, or mops?',
      a: 'No! Every Nest specialist carries a standardized commercial-grade kit with hospital-safe disinfectants, microfiber cleaning cloths, dusters, scrubbers, and specialized brushes. You only need to provide water and electricity.'
    },
    {
      q: 'How are Nest specialists verified and trained?',
      a: '100% of specialists undergo rigorous Aadhaar biometric ID checks, permanent address verification, and local police verification. Before taking any jobs, they complete a hands-on training program covering our standardized 50-point cleaning protocol.'
    },
    {
      q: 'Can I schedule daily or weekly recurring services?',
      a: 'Yes! Use the "Schedule" option to book one-off future slots or set up recurring weekly chores between 8:00 AM and 8:00 PM.'
    },
    {
      q: 'What if I am not satisfied with the cleaning quality?',
      a: 'We offer a 100% Satisfaction Guarantee. If any area was missed according to our checklist, we will dispatch a specialist for an immediate free re-clean or issue a 100% refund to your Haatza One Pay wallet.'
    },
    {
      q: 'How does Haatza One Pay work?',
      a: 'Haatza One Pay is our integrated wallet. Enjoy instant 1-tap checkout, 5% cashback on every transaction, and instant auto-refunds in case of cancellations.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" style={{ padding: '60px 0', background: 'var(--bg-secondary)' }} aria-label="Frequently Asked Questions">
      <div className="content-container" style={{ maxWidth: '840px' }}>
        <div className="section-title-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F4E8FC', padding: '4px 12px', borderRadius: '9999px', color: '#6F1D9E', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
            <HelpCircle size={14} />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="section-main-title">Frequently Asked Questions</h2>
          <p className="section-sub-title">Everything you need to know about booking house help on Nest.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: isOpen ? '1.5px solid #6F1D9E' : '1px solid #ECEEF2',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 6px 20px rgba(111, 29, 158, 0.08)' : '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#6F1D9E"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 20px 18px 20px', fontSize: '14px', color: '#4B5563', lineHeight: 1.6, borderTop: '1px solid #F3F4F6', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
