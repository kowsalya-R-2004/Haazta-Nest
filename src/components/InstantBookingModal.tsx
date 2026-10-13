import React, { useState, useEffect } from 'react';
import { X, Zap, CheckCircle2, Star, ShieldCheck, MapPin, Phone, Sparkles } from 'lucide-react';
import { ServiceCategory, Address, Booking } from '../types';
import confetti from 'canvas-confetti';

interface InstantBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceCategory[];
  currentAddress: Address;
  onConfirmBooking: (booking: Booking) => void;
}

export const InstantBookingModal: React.FC<InstantBookingModalProps> = ({
  isOpen,
  onClose,
  services,
  currentAddress,
  onConfirmBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || 'mopping-dusting');
  const [matchingState, setMatchingState] = useState<'selecting' | 'searching' | 'matched'>('selecting');

  const selectedService = services.find(s => s.id === selectedServiceId) || services[0];

  useEffect(() => {
    if (!isOpen) {
      setMatchingState('selecting');
    }
  }, [isOpen]);

  const handleStartSearch = () => {
    setMatchingState('searching');
    setTimeout(() => {
      setMatchingState('matched');
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FFDF00', '#6F1D9E', '#FFC700', '#8A2BE2']
      });
    }, 2400);
  };

  const handleFinalConfirm = () => {
    const newBooking: Booking = {
      id: `NEST-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      serviceImage: selectedService.image,
      type: 'instant',
      status: 'assigned',
      bookingTime: 'Just now',
      price: selectedService.priceStart,
      address: `${currentAddress.title} - ${currentAddress.addressLine}`,
      helper: {
        name: 'Priya Sharma',
        photo: '/assets/instant_helper.jpg',
        rating: 4.9,
        completedJobs: 342,
        phone: '+91 98765 43210',
        otp: `${Math.floor(1000 + Math.random() * 9000)}`,
        etaMins: 6
      }
    };
    onConfirmBooking(newBooking);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: '#FFE600', padding: '6px', borderRadius: '50%' }}>
              <Zap size={18} fill="#6F1D9E" color="#6F1D9E" />
            </div>
            <div>
              <h3 className="drawer-title" style={{ fontSize: '18px' }}>Instant House Help</h3>
              <p style={{ fontSize: '11px', color: '#6F1D9E', fontWeight: 700 }}>⚡ Specialist arrives in 6-10 minutes</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {matchingState === 'selecting' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Address confirmation pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8F9FB', padding: '10px 12px', borderRadius: '12px', border: '1px solid #ECEEF2' }}>
              <MapPin size={16} color="#6F1D9E" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '12px', color: '#1F2937' }}>
                <strong>Arriving at: </strong>{currentAddress.title} ({currentAddress.addressLine.slice(0, 38)}...)
              </div>
            </div>

            {/* Service selector */}
            <div>
              <label style={{ fontSize: '13px', fontWeight: 700, color: '#111827', marginBottom: '8px', display: 'block' }}>
                Select Instant Service:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedServiceId(svc.id)}
                    style={{
                      padding: '10px',
                      borderRadius: '12px',
                      border: selectedServiceId === svc.id ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                      background: selectedServiceId === svc.id ? '#FAF4FF' : '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{svc.title}</span>
                    <span style={{ fontSize: '11px', color: '#6F1D9E', fontWeight: 800 }}>₹{svc.priceStart} <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 500 }}>({svc.durationMins}m)</span></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantee note */}
            <div style={{ background: '#FFFDE7', border: '1px solid #FFE58F', padding: '10px 12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#D48806" />
              <span style={{ fontSize: '11px', color: '#78350F', fontWeight: 600 }}>
                100% Satisfaction Guarantee. Pay only after service is completed!
              </span>
            </div>

            <button
              type="button"
              onClick={handleStartSearch}
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
                boxShadow: '0 4px 15px rgba(111, 29, 158, 0.3)',
                marginTop: '6px'
              }}
            >
              <Zap size={18} fill="#FFDF00" color="#FFDF00" />
              <span>Find Nearest Helper (6 Mins) • ₹{selectedService.priceStart}</span>
            </button>
          </div>
        )}

        {matchingState === 'searching' && (
          <div className="radar-container">
            <div className="radar-pulse-ring" />
            <div className="radar-pulse-ring" style={{ animationDelay: '0.8s' }} />
            <div className="radar-center-avatar">
              <Zap size={36} fill="#6F1D9E" color="#6F1D9E" />
            </div>
            <h4 style={{ marginTop: '24px', fontSize: '16px', fontWeight: 800, color: '#111827' }}>
              Locating nearest Nest Specialist...
            </h4>
            <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
              Checking active specialists in Bellandur area
            </p>
          </div>
        )}

        {matchingState === 'matched' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ textAlign: 'center', background: '#E8FDF3', border: '1px solid #A7F3D0', padding: '10px', borderRadius: '12px', color: '#065F46', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10B981" />
              <span>Nest Specialist Found & Assigned!</span>
            </div>

            {/* Helper Profile Card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FAF4FF', border: '1.5px solid #E9D5FF', borderRadius: '16px', padding: '12px' }}>
              <img
                src="/assets/instant_helper.jpg"
                alt="Helper Priya Sharma"
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #6F1D9E' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111827' }}>Priya Sharma</h4>
                  <span style={{ background: '#FFE600', color: '#000000', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '9999px' }}>
                    ETA 6 Mins
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#4B5563', marginTop: '3px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#D48806', fontWeight: 700 }}>
                    <Star size={11} fill="#FFDF00" color="#D48806" /> 4.9 (342 jobs)
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#6F1D9E', fontWeight: 700 }}>
                    <ShieldCheck size={12} /> Police Verified
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>
                  Uniform ID: #HN-9042
                </div>
              </div>
            </div>

            {/* OTP & Summary */}
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#F9FAFB', padding: '12px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <div>
                <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>Service</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>{selectedService.title}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>Total Payable</div>
                <div style={{ fontSize: '14px', fontWeight: 900, color: '#6F1D9E' }}>₹{selectedService.priceStart}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinalConfirm}
              style={{
                background: '#6F1D9E',
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
                boxShadow: '0 4px 15px rgba(111, 29, 158, 0.3)'
              }}
            >
              <span>Confirm & Dispatch Priya</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
