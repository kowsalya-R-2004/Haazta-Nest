import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LandingHeroProps {
  onSuccess: (name: string) => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [hubArea, setHubArea] = useState('Bellandur & Outer Ring Road');
  const [isComfortable, setIsComfortable] = useState<'yes' | 'no'>('yes');
  const [gender, setGender] = useState<'female' | 'male' | 'other'>('female');
  const [submitted, setSubmitted] = useState(false);

  const bangaloreHubs = [
    'Bellandur & Outer Ring Road',
    'Indiranagar & Domlur',
    'Koramangala & HSR Layout',
    'Whitefield & Marathahalli',
    'Electronic City & BTM',
    'Hebbal & North Bengaluru'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFDF00', '#6F1D9E', '#10B981', '#8A2BE2']
    });
    onSuccess(name);
  };

  return (
    <section className="landing-hero" aria-label="Hero and Registration">
      <div className="landing-container">
        {/* Helper Avatar Circle */}
        <div className="hero-avatar-box">
          <img
            src="/assets/instant_helper.jpg"
            alt="Nest Expert Specialist"
            className="hero-avatar-img"
          />
        </div>

        {/* Option 2: Hero Pill Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #FFFDE7 0%, #FAF5FF 100%)',
            border: '1.5px solid #CE93D8',
            borderRadius: '9999px',
            padding: '6px 18px',
            boxShadow: '0 2px 10px rgba(156, 39, 176, 0.1)'
          }}>
            <span style={{ fontSize: '15px' }}>👩</span>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#4A148C' }}>
              Empowering Women Through Trusted Career Opportunities
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Become a Haatza Nest Expert and earn up to <br />
          <span style={{ color: '#6F1D9E' }}>₹45,000 per month.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Easy jobs: sweeping, mopping, washing clothes, washing dishes, kitchen help.
        </p>

        {/* Registration Form Card */}
        <div className="registration-form-card" id="register-form">
          {/* Option 1: Form Card Notice Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #FFFDE7 0%, #FAF5FF 100%)',
            border: '1.5px solid #CE93D8',
            borderLeft: '4.5px solid #7B1FA2',
            borderRadius: '12px',
            padding: '10px 14px',
            marginBottom: '16px',
            boxShadow: '0 2px 8px rgba(156, 39, 176, 0.06)'
          }}>
            <span style={{ fontSize: '18px', lineHeight: 1 }}>👩</span>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#4A148C' }}>
              Empowering Women Through Trusted Career Opportunities
            </span>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-grid-row">
                <div>
                  <label className="form-field-label">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="form-input-control"
                  />
                </div>

                <div>
                  <label className="form-field-label">Mobile Number *</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter 10-digit number"
                    maxLength={10}
                    required
                    className="form-input-control"
                  />
                </div>
              </div>

              <div className="form-grid-row">
                <div>
                  <label className="form-field-label">City *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-input-control"
                  >
                    <option>Bengaluru</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                    <option>Delhi NCR</option>
                  </select>
                </div>

                <div>
                  <label className="form-field-label">Work Location Hub *</label>
                  <select
                    value={hubArea}
                    onChange={(e) => setHubArea(e.target.value)}
                    className="form-input-control"
                  >
                    {bangaloreHubs.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label className="form-field-label" style={{ marginBottom: '8px' }}>
                  Are you comfortable with household tasks: mopping, clothes, dishwashing, dishes? *
                </label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="tasks_comfort"
                      checked={isComfortable === 'yes'}
                      onChange={() => setIsComfortable('yes')}
                      style={{ accentColor: '#6F1D9E', width: '16px', height: '16px' }}
                    />
                    <span>Yes</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="tasks_comfort"
                      checked={isComfortable === 'no'}
                      onChange={() => setIsComfortable('no')}
                      style={{ accentColor: '#6F1D9E', width: '16px', height: '16px' }}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label className="form-field-label" style={{ marginBottom: '8px' }}>
                  Gender *
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {(['female', 'male', 'other'] as const).map(g => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      style={{
                        flex: 1,
                        padding: '9px 12px',
                        borderRadius: '10px',
                        border: gender === g ? '2px solid #6F1D9E' : '1.5px solid #E5E7EB',
                        background: gender === g ? '#FAF4FF' : '#FFFFFF',
                        color: gender === g ? '#6F1D9E' : '#4B5563',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        textTransform: 'capitalize'
                      }}
                    >
                      {g === 'female' ? '👩 Female' : g === 'male' ? '👨 Male' : '✨ Other'}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ background: '#FFFDE7', border: '1px solid #FFE58F', borderRadius: '12px', padding: '10px 14px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Heart size={16} color="#D48806" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: '#78350F', fontWeight: 600 }}>
                  Safe workplace & women empowerment: Background verified homes only.
                </span>
              </div>

              <button type="submit" className="btn-join-now">
                <span>Join Now</span>
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#E8FDF3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                <CheckCircle2 size={32} color="#10B981" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#111827' }}>
                Thank you, {name}!
              </h3>
              <p style={{ fontSize: '13px', color: '#4B5563', marginTop: '6px', lineHeight: 1.5 }}>
                Our Nest Partner Team will contact you via WhatsApp at <strong>+91 {mobile}</strong> within 2 hours for free training & kit collection.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '16px', background: 'transparent', border: 'none', color: '#6F1D9E', fontSize: '12px', fontWeight: 800, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Register another person
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
