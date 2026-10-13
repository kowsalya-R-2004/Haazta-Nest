import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const LandingFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much money can I earn?',
      a: 'You can earn up to ₹45,000 per month depending on how many hours and jobs you choose to complete. Active full-time helpers easily earn between ₹35,000 to ₹45,000 every month.'
    },
    {
      q: 'Do I have to pay any fee to join?',
      a: 'No! Joining Nest is 100% free. Free training, free uniform, and free cleaning caddy kit are provided to all verified candidates.'
    },
    {
      q: 'How will I get work near my home?',
      a: 'Our smart mobile app assigns you verified household tasks within a 2 to 4 km radius of your selected work hub in Bengaluru (Bellandur, HSR, Indiranagar, Whitefield, etc.).'
    },
    {
      q: 'Is training needed before starting?',
      a: 'Yes, we provide 2 to 4 hours of free, easy hands-on training at our local Nest center to teach you our 50-point standardized cleaning checklist and safety rules.'
    },
    {
      q: 'What documents are needed to join?',
      a: 'You only need your Aadhaar Card (front & back), bank account details (or passbook copy) for direct weekly salary transfers, and an active mobile number.'
    },
    {
      q: 'When will I receive my payment?',
      a: 'All earnings and tips are automatically deposited directly into your bank account every single week without any delay or deduction.'
    },
    {
      q: 'What kind of work will I do at customer home?',
      a: 'Standard domestic tasks like sweeping, mopping floors, washing kitchen dishes, clothes folding/ironing, bathroom cleaning, or vegetable chopping for cooking.'
    },
    {
      q: 'How is safety ensured for female workers?',
      a: 'We have a strict Zero Tolerance Policy. All customer profiles are verified, SOS emergency assistance is built into the app, and you are covered by ₹5,00,000 accidental & medical insurance.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-label="Frequently Asked Questions">
      <div className="landing-container">
        <h2 className="section-center-heading">Frequently Asked Questions</h2>

        <div className="faq-list-container">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="faq-question-btn"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={16}
                    color="#6F1D9E"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    {f.a}
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
