import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Award, DollarSign, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [serviceSpecialty, setServiceSpecialty] = useState('All Household Services');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFDF00', '#6F1D9E', '#10B981']
    });

    onShowToast(`Thank you ${fullName}! Our Nest Partner Team will contact you within 2 hours.`);
    onClose();
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#FFE600', padding: '6px', borderRadius: '50%' }}>
              <Award size={20} color="#000000" />
            </div>
            <div>
              <h3 className="drawer-title" style={{ fontSize: '20px' }}>Join Nest as an Expert Partner</h3>
              <p style={{ fontSize: '12px', color: '#6F1D9E', fontWeight: 800 }}>Earn up to ₹45,000 / month with instant weekly payouts</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '18px' }}>
          <div style={{ background: '#FAF4FF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E9D5FF' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#6F1D9E' }}>₹45,000+</div>
            <div style={{ fontSize: '11px', color: '#4B5563' }}>Monthly earning potential</div>
          </div>
          <div style={{ background: '#FAF4FF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E9D5FF' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#6F1D9E' }}>₹5,00,000</div>
            <div style={{ fontSize: '11px', color: '#4B5563' }}>Free accidental insurance</div>
          </div>
          <div style={{ background: '#FAF4FF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E9D5FF' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#6F1D9E' }}>Free Kit & Uniform</div>
            <div style={{ fontSize: '11px', color: '#4B5563' }}>Complete cleaning gear provided</div>
          </div>
          <div style={{ background: '#FAF4FF', padding: '10px 12px', borderRadius: '12px', border: '1px solid #E9D5FF' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#6F1D9E' }}>Flexible Hours</div>
            <div style={{ fontSize: '11px', color: '#4B5563' }}>Work when you want (Full/Part time)</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Full Name (as per Aadhaar)</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #D1D5DB', fontSize: '13px' }}
              required
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>WhatsApp Mobile Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #D1D5DB', fontSize: '13px' }}
              required
            />
          </div>

          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Primary Service Skill</label>
            <select
              value={serviceSpecialty}
              onChange={(e) => setServiceSpecialty(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #D1D5DB', fontSize: '13px' }}
            >
              <option>Mopping, Dusting & Deep Cleaning</option>
              <option>Cooking & Meal Preparation</option>
              <option>Bathroom Disinfection & Tile Scrubbing</option>
              <option>Laundry & Ironing Care</option>
              <option>All Household Services</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #6F1D9E 0%, #8A2BE2 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(111, 29, 158, 0.3)'
            }}
          >
            <span>Submit Partner Application</span>
          </button>
        </form>
      </div>
    </div>
  );
};
