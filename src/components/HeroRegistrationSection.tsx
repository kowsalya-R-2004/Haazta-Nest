import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap, Phone, Sparkles, MapPin, User, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegistrationFormProps {
  onFormSubmitted: (name: string) => void;
}

export const HeroRegistrationSection: React.FC<RegistrationFormProps> = ({ onFormSubmitted }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [hubArea, setHubArea] = useState('Bellandur & Outer Ring Road');
  const [isComfortable, setIsComfortable] = useState<'yes' | 'no'>('yes');
  const [gender, setGender] = useState<'female' | 'male' | 'other'>('female');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFDF00', '#6F1D9E', '#10B981', '#8A2BE2']
      });
      onFormSubmitted(name);
    }, 800);
  };

  return (
    <section className="hero-section" aria-label="Hero and Registration">
      <div className="content-container">
        {/* Top Hero Heading & Worker Banner */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 28px auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FFFFFF',
              border: '1.5px solid #FFDF00',
              borderRadius: '9999px',
              padding: '6px 16px',
              boxShadow: '0 2px 10px rgba(255, 223, 0, 0.25)'
            }}>
              <Zap size={15} fill="#6F1D9E" color="#6F1D9E" />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#111827' }}>
                Nest Expert Partner Program • Bengaluru
              </span>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #FFFDE7 0%, #FAF5FF 100%)',
              border: '1.5px solid #CE93D8',
              borderRadius: '9999px',
              padding: '6px 16px',
              boxShadow: '0 2px 10px rgba(156, 39, 176, 0.1)'
            }}>
              <span style={{ fontSize: '14px' }}>👩</span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#4A148C' }}>
                Empowering Women Through Trusted Career Opportunities
              </span>
            </div>
          </div>

          <h1 className="hero-main-heading" style={{ fontSize: '42px', marginBottom: '12px' }}>
            Become a Nest Expert and earn up to <br />
            <span style={{ color: '#6F1D9E', background: 'linear-gradient(90deg, #6F1D9E 0%, #8A2BE2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ₹45,000 per month.
            </span>
          </h1>

          <p className="hero-sub-text" style={{ margin: '0 auto', fontSize: '16px' }}>
            Easy jobs: Mopping, dusting, clothes folding, washing dishes, and kitchen assistance. Free training, zero commission joining fee, and weekly direct bank payouts.
          </p>
        </div>

        {/* 2-Column Hero: Specialist Photo Left, Registration Card Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '32px',
          alignItems: 'center',
          maxWidth: '1060px',
          margin: '0 auto'
        }}>
          {/* Left: Specialist Namaste Visual with Floating Perks */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '480px',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(111, 29, 158, 0.15)',
              border: '4px solid #FFFFFF',
              background: 'linear-gradient(180deg, #FFF9C4 0%, #FAF4FE 100%)'
            }}>
              <img
                src="/assets/instant_helper.jpg"
                alt="Smiling Nest Expert in Uniform Namaste"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            {/* Floating Earnings Badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '-16px',
              background: '#FFE600',
              color: '#000000',
              padding: '10px 18px',
              borderRadius: '9999px',
              fontWeight: 900,
              fontSize: '14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              border: '2px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={16} />
              <span>₹1,500/day Earning Potential</span>
            </div>

            {/* Floating Insurance Pill */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              right: '-12px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '12px 18px',
              borderRadius: '18px',
              border: '1.5px solid #E9D5FF',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E8FDF3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} color="#10B981" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 900, color: '#111827' }}>₹5,00,000 Insurance</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Free medical & accident cover</div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form Card */}
          <div style={{
            background: '#FFFFFF',
            border: '2px solid #E9D5FF',
            borderRadius: '28px',
            padding: '32px',
            boxShadow: '0 16px 40px rgba(111, 29, 158, 0.08)'
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ borderBottom: '1px solid #F3F4F6', paddingBottom: '12px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', fontFamily: 'var(--font-heading)' }}>
                    Quick Partner Registration
                  </h3>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>
                    Join 10,000+ experts. Start earning within 24 hours of quick verification.
                  </p>
                </div>

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
                  boxShadow: '0 2px 8px rgba(156, 39, 176, 0.06)'
                }}>
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>👩</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#4A148C' }}>
                    Empowering Women Through Trusted Career Opportunities
                  </span>
                </div>

                {/* Name & Mobile in 2 columns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '13px', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#6F1D9E'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '4px' }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      required
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '13px', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#6F1D9E'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                </div>

                {/* City & Hub Area */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '4px' }}>
                      City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '13px', background: '#FFFFFF' }}
                    >
                      <option>Bengaluru</option>
                      <option>Hyderabad</option>
                      <option>Mumbai</option>
                      <option>Delhi NCR</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '4px' }}>
                      Preferred Work Area *
                    </label>
                    <select
                      value={hubArea}
                      onChange={(e) => setHubArea(e.target.value)}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '12px', border: '1.5px solid #E5E7EB', fontSize: '13px', background: '#FFFFFF' }}
                    >
                      {bangaloreHubs.map(hub => (
                        <option key={hub} value={hub}>{hub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comfortable doing household tasks */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '6px' }}>
                    Are you comfortable doing domestic tasks (cleaning, sweeping, dishes)? *
                  </label>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="comfortable"
                        checked={isComfortable === 'yes'}
                        onChange={() => setIsComfortable('yes')}
                        style={{ accentColor: '#6F1D9E', width: '16px', height: '16px' }}
                      />
                      <span>Yes, absolutely</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="comfortable"
                        checked={isComfortable === 'no'}
                        onChange={() => setIsComfortable('no')}
                        style={{ accentColor: '#6F1D9E', width: '16px', height: '16px' }}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Gender selector */}
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 800, color: '#374151', display: 'block', marginBottom: '6px' }}>
                    Gender *
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {(['female', 'male', 'other'] as const).map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGender(g)}
                        style={{
                          flex: 1,
                          padding: '9px 12px',
                          borderRadius: '10px',
                          border: gender === g ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
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

                {/* Safety & respect banner */}
                <div style={{ background: '#FFFDE7', border: '1px solid #FFE58F', borderRadius: '12px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Heart size={16} color="#D48806" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: '#78350F', fontWeight: 600 }}>
                    100% Dignity & Safety Guarantee: Zero tolerance for misconduct, verified customer homes only.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(90deg, #6F1D9E 0%, #8A2BE2 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '14px',
                    fontSize: '15px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 6px 20px rgba(111, 29, 158, 0.3)',
                    marginTop: '4px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{isSubmitting ? 'Registering...' : 'Join as Nest Expert Now'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E8FDF3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle2 size={36} color="#10B981" />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#111827' }}>
                  Application Received, {name}!
                </h3>
                <p style={{ fontSize: '14px', color: '#4B5563', marginTop: '6px', lineHeight: 1.5 }}>
                  Our Nest Partner Team will contact you via WhatsApp at <strong>+91 {mobile}</strong> within 2 hours for free training & kit collection.
                </p>
                <div style={{ background: '#FAF4FF', padding: '12px', borderRadius: '14px', border: '1px solid #E9D5FF', marginTop: '16px', fontSize: '12px', color: '#6F1D9E', fontWeight: 700 }}>
                  Training Location: Nest Hub Bellandur, Outer Ring Rd, Bengaluru
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px', background: 'transparent', border: 'none', color: '#6F1D9E', fontSize: '12px', fontWeight: 800, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Register another candidate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
