import React from 'react';

export const LandingHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Fill the form',
      desc: 'Quickly fill 4 questions and we will reach out to you.'
    },
    {
      num: '2',
      title: 'Take training',
      desc: '2 to 4 hours of easy, hands-on training at our center.'
    },
    {
      num: '3',
      title: 'Get work',
      desc: 'Through Nest App on your mobile, get nearby jobs and weekly pay.'
    }
  ];

  return (
    <section aria-label="How It Works">
      <div className="landing-container">
        <h2 className="section-center-heading">How It Works</h2>

        <div className="how-it-works-box">
          {steps.map((s) => (
            <div key={s.num} className="step-card-horizontal">
              <div className="step-number-circle">{s.num}</div>
              <div>
                <h3 className="step-content-title">{s.title}</h3>
                <p className="step-content-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
