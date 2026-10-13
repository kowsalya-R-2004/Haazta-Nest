import React, { useState } from 'react';
import { X, Copy, Check, Share2, Users, Gift, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'NESTFRIEND100';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Use my code ${referralCode} to get ₹50 off your first Nest home service! https://nest.haatza.com/ref/${referralCode}`);
    setCopied(true);
    onShowToast('Referral link copied to clipboard!');
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hey! Try Nest for instant house cleaning & domestic help in 10 mins. Use code *${referralCode}* to get ₹50 off on first visit: https://nest.haatza.com/ref/${referralCode}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#FFF9C4', padding: '6px', borderRadius: '50%' }}>
              <Gift size={20} color="#D48806" />
            </div>
            <div>
              <h3 className="drawer-title" style={{ fontSize: '18px' }}>Refer & Earn ₹100</h3>
              <p style={{ fontSize: '11px', color: '#6F1D9E', fontWeight: 700 }}>Unlimited rewards for every friend</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'center' }}>
          <img
            src="/assets/referral_reward.jpg"
            alt="Refer Friends"
            style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '16px' }}
          />

          <div style={{ background: '#FAF4FF', border: '1.5px dashed #C084FC', borderRadius: '16px', padding: '12px' }}>
            <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>YOUR EXCLUSIVE INVITE CODE</div>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#6F1D9E', letterSpacing: '2px', margin: '4px 0' }}>
              {referralCode}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                background: copied ? '#10B981' : '#6F1D9E',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Code Copied!' : 'Copy Code & Link'}</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
            <div style={{ background: '#F9FAFB', padding: '10px 6px', borderRadius: '12px', border: '1px solid #ECEEF2' }}>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#6F1D9E' }}>1</div>
              <div style={{ fontSize: '10px', color: '#4B5563', marginTop: '2px' }}>Share your invite link</div>
            </div>
            <div style={{ background: '#F9FAFB', padding: '10px 6px', borderRadius: '12px', border: '1px solid #ECEEF2' }}>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#6F1D9E' }}>2</div>
              <div style={{ fontSize: '10px', color: '#4B5563', marginTop: '2px' }}>Friend books 1st service</div>
            </div>
            <div style={{ background: '#F9FAFB', padding: '10px 6px', borderRadius: '12px', border: '1px solid #ECEEF2' }}>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#10B981' }}>₹100</div>
              <div style={{ fontSize: '10px', color: '#4B5563', marginTop: '2px' }}>Added to OnePay wallet</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhatsApp}
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
            }}
          >
            <Share2 size={16} />
            <span>Share via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
