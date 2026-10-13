import React, { useState } from 'react';
import { X, CreditCard, ArrowUpRight, Plus, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [balance, setBalance] = useState(250);

  if (!isOpen) return null;

  const handleTopup = (amount: number) => {
    setBalance(prev => prev + amount);
    onShowToast(`₹${amount} added successfully to Haatza One Pay!`);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#7E57C2', '#FFDF00', '#10B981']
    });
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#EDE7F6', padding: '6px', borderRadius: '50%' }}>
              <CreditCard size={20} color="#512DA8" />
            </div>
            <div>
              <h3 className="drawer-title" style={{ fontSize: '18px' }}>Haatza One Pay</h3>
              <p style={{ fontSize: '11px', color: '#7E57C2', fontWeight: 700 }}>Universal 1-Tap Checkout</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Card Visual */}
          <div style={{
            background: 'linear-gradient(135deg, #6F1D9E 0%, #4A0E66 60%, #1F072D 100%)',
            borderRadius: '20px',
            padding: '20px',
            color: '#FFFFFF',
            position: 'relative',
            boxShadow: '0 8px 24px rgba(74, 14, 102, 0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', letterSpacing: '1px', opacity: 0.8, textTransform: 'uppercase', fontWeight: 700 }}>Haatza One Pay</span>
              <span style={{ background: '#FFDF00', color: '#000000', fontSize: '10px', fontWeight: 900, padding: '2px 8px', borderRadius: '9999px' }}>5% CASHBACK</span>
            </div>

            <div style={{ margin: '18px 0 10px 0' }}>
              <div style={{ fontSize: '11px', opacity: 0.75 }}>Available Balance</div>
              <div style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.5px' }}>₹{balance.toFixed(2)}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.85 }}>
              <span>Priya Sharma</span>
              <span>•••• 8421</span>
            </div>
          </div>

          {/* Quick Recharge */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>Quick Add Money:</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[100, 250, 500, 1000].map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleTopup(amt)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '10px',
                    border: '1px solid #E5E7EB',
                    background: '#FAF5FF',
                    color: '#6F1D9E',
                    fontSize: '13px',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  +₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Benefit pill */}
          <div style={{ background: '#F9FAFB', border: '1px solid #ECEEF2', borderRadius: '12px', padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="#6F1D9E" />
            <span style={{ fontSize: '11px', color: '#4B5563', lineHeight: 1.3 }}>
              Zero payment failure guarantee, automatic refund on cancellation, and instant 1-tap booking.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
