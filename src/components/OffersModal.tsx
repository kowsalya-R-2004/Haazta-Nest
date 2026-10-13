import React, { useState } from 'react';
import { X, Gift, Check, Tag, Sparkles } from 'lucide-react';
import { PromoOffer } from '../types';
import { OFFERS_DATA } from '../data/mockData';

interface OffersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPromo: (code: string) => void;
}

export const OffersModal: React.FC<OffersModalProps> = ({
  isOpen,
  onClose,
  onApplyPromo,
}) => {
  const [appliedCode, setAppliedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApply = (code: string) => {
    setAppliedCode(code);
    onApplyPromo(code);
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
              <h3 className="drawer-title" style={{ fontSize: '18px' }}>Available Offers & Coupons</h3>
              <p style={{ fontSize: '11px', color: '#6F1D9E', fontWeight: 700 }}>Exclusive savings on Nest services</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {OFFERS_DATA.map((offer) => {
            const isApplied = appliedCode === offer.code;
            return (
              <div
                key={offer.id}
                style={{
                  border: isApplied ? '2px solid #10B981' : '1.5px dashed #C084FC',
                  background: isApplied ? '#E8FDF3' : '#FAF4FF',
                  borderRadius: '16px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Tag size={14} color="#6F1D9E" />
                    <span style={{ fontSize: '14px', fontWeight: 900, color: '#6F1D9E', letterSpacing: '1px' }}>{offer.code}</span>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#D48806', background: '#FFF9C4', padding: '1px 6px', borderRadius: '9999px' }}>{offer.discount}</span>
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#111827', marginTop: '4px' }}>{offer.title}</h4>
                  <p style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', lineHeight: 1.3 }}>{offer.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleApply(offer.code)}
                  style={{
                    background: isApplied ? '#10B981' : '#6F1D9E',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {isApplied ? 'Applied ✓' : 'Apply'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
