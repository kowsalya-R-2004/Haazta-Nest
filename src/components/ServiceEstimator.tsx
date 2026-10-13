import React, { useState } from 'react';
import { Calculator, Check, Zap, Sparkles, Clock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServiceEstimatorProps {
  onBookEstimatedPlan: (planDetails: { name: string; price: number; duration: number }) => void;
}

export const ServiceEstimator: React.FC<ServiceEstimatorProps> = ({ onBookEstimatedPlan }) => {
  const [homeSize, setHomeSize] = useState<'1bhk' | '2bhk' | '3bhk' | 'villa'>('2bhk');
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    mopping: true,
    dishes: true,
    bathroom: false,
    cooking: false
  });
  const [frequency, setFrequency] = useState<'onetime' | 'pass'>('onetime');

  const homeBase = {
    '1bhk': { baseTime: 30, baseMultiplier: 1, label: '1 BHK Apartment' },
    '2bhk': { baseTime: 45, baseMultiplier: 1.3, label: '2 BHK Apartment' },
    '3bhk': { baseTime: 65, baseMultiplier: 1.7, label: '3 BHK Apartment' },
    'villa': { baseTime: 90, baseMultiplier: 2.2, label: '4+ BHK / Villa' },
  };

  const servicesList = [
    { id: 'mopping', name: 'Floor Mopping & Dusting', addPrice: 49, addMins: 20 },
    { id: 'dishes', name: 'Kitchen Utensils & Sink', addPrice: 60, addMins: 20 },
    { id: 'bathroom', name: 'Bathroom Disinfection', addPrice: 90, addMins: 25 },
    { id: 'cooking', name: 'Meal Prep & Chopping', addPrice: 120, addMins: 30 },
  ];

  const toggleService = (id: string) => {
    setSelectedServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate estimated price & duration
  const activeServices = servicesList.filter(s => selectedServices[s.id]);
  const rawMins = homeBase[homeSize].baseTime + activeServices.reduce((sum, s) => sum + s.addMins, 0);
  const rawPrice = Math.round((activeServices.reduce((sum, s) => sum + s.addPrice, 49)) * homeBase[homeSize].baseMultiplier);

  const finalPrice = frequency === 'pass' ? Math.round(rawPrice * 0.8) : rawPrice;

  const handleBookNow = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FFDF00', '#6F1D9E', '#10B981']
    });

    onBookEstimatedPlan({
      name: `${homeBase[homeSize].label} Custom Care`,
      price: finalPrice,
      duration: rawMins
    });
  };

  return (
    <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF4FE 50%, #FFFFFF 100%)' }} aria-label="Estimate Service Cost">
      <div className="content-container">
        <div className="section-title-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FFF9C4', padding: '4px 12px', borderRadius: '9999px', color: '#D48806', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
            <Calculator size={14} />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="section-main-title">Estimate Your House Help in 30 Seconds</h2>
          <p className="section-sub-title">Calculate exact duration and instant pricing with zero hidden charges.</p>
        </div>

        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid #E9D5FF',
          borderRadius: '28px',
          padding: '36px',
          boxShadow: '0 16px 40px rgba(111, 29, 158, 0.08)',
          maxWidth: '960px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '36px',
          alignItems: 'center'
        }}>
          {/* Controls */}
          <div>
            {/* 1. Home Size */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '8px', display: 'block' }}>
                1. Select Home Size:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {(['1bhk', '2bhk', '3bhk', 'villa'] as const).map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setHomeSize(size)}
                    style={{
                      padding: '10px 6px',
                      borderRadius: '12px',
                      border: homeSize === size ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                      background: homeSize === size ? '#FAF4FF' : '#F9FAFB',
                      color: homeSize === size ? '#6F1D9E' : '#374151',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Needed Services */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '8px', display: 'block' }}>
                2. Select Required Tasks:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {servicesList.map(s => {
                  const isChecked = !!selectedServices[s.id];
                  return (
                    <div
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: isChecked ? '1.5px solid #6F1D9E' : '1px solid #E5E7EB',
                        background: isChecked ? '#FAF4FF' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '5px',
                        border: isChecked ? 'none' : '1.5px solid #9CA3AF',
                        background: isChecked ? '#6F1D9E' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF'
                      }}>
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{s.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Frequency */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '8px', display: 'block' }}>
                3. Booking Type:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setFrequency('onetime')}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '10px',
                    border: frequency === 'onetime' ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                    background: frequency === 'onetime' ? '#6F1D9E' : '#FFFFFF',
                    color: frequency === 'onetime' ? '#FFFFFF' : '#374151',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  One-time Instant / Slot
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('pass')}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '10px',
                    border: frequency === 'pass' ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                    background: frequency === 'pass' ? '#6F1D9E' : '#FFFFFF',
                    color: frequency === 'pass' ? '#FFFFFF' : '#374151',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Monthly Pass (Save 20%)
                </button>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div style={{
            background: 'linear-gradient(135deg, #FAF0FE 0%, #FFFDE7 100%)',
            border: '2px solid #E9D5FF',
            borderRadius: '20px',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(111, 29, 158, 0.08)'
          }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#6F1D9E', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Estimated Total
            </span>

            <div style={{ margin: '12px 0' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 900, color: '#6F1D9E', lineHeight: 1 }}>
                ₹{finalPrice}
              </div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Clock size={13} />
                <span>Estimated Duration: <strong>~{rawMins} mins</strong></span>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '12px', border: '1px solid #ECEEF2', fontSize: '11px', color: '#4B5563', marginBottom: '16px' }}>
              ✓ Specialist brings all floor & kitchen cleaning solutions.<br />
              ✓ 100% satisfaction guarantee or free re-clean.
            </div>

            <button
              type="button"
              className="btn-hero-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleBookNow}
            >
              <Zap size={16} fill="#FFDF00" color="#FFDF00" />
              <span>Book Estimated Plan</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
