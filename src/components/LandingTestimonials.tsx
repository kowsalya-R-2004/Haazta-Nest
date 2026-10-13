import React from 'react';

export const LandingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sharda Bai',
      role: 'Nest Specialist, Bellandur',
      avatar: '/assets/instant_helper.jpg',
      quote: 'I used to wash dishes and mop floors with irregular daily wages. Nest gave me fixed timings, weekly bank transfers, and complete respect at every household.'
    },
    {
      name: 'Priyanka Ghatake',
      role: 'Nest Specialist, HSR Layout',
      avatar: '/assets/hero_worker.jpg',
      quote: 'The 1-day free training taught me modern house cleaning techniques. Now I easily earn over ₹40,000 per month with complete safety and medical insurance.'
    }
  ];

  return (
    <section aria-label="What Our Experts Say">
      <div className="landing-container">
        <h2 className="section-center-heading">What Our Experts Say</h2>

        <div className="testimonials-row-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-quote-card">
              <div>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar-center"
                />
                <p className="testimonial-quote-text">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <h4 className="testimonial-author-name">{t.name}</h4>
                <div style={{ fontSize: '11px', color: '#6B7280', textAlign: 'center' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
