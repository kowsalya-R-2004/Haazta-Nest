import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { ServiceCategory, Address, Booking } from '../types';
import confetti from 'canvas-confetti';

interface ScheduleBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceCategory[];
  currentAddress: Address;
  onConfirmBooking: (booking: Booking) => void;
}

export const ScheduleBookingModal: React.FC<ScheduleBookingModalProps> = ({
  isOpen,
  onClose,
  services,
  currentAddress,
  onConfirmBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(services[0]?.id || 'mopping-dusting');
  const [selectedDate, setSelectedDate] = useState<'today' | 'tomorrow' | 'weekend'>('today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:00 AM - 10:30 AM');

  const selectedService = services.find(s => s.id === selectedServiceId) || services[0];

  const timeSlots = [
    '08:00 AM - 09:30 AM',
    '09:00 AM - 10:30 AM',
    '11:00 AM - 12:30 PM',
    '02:00 PM - 03:30 PM',
    '04:30 PM - 06:00 PM',
    '06:30 PM - 08:00 PM'
  ];

  const handleConfirm = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FFDF00', '#6F1D9E', '#10B981']
    });

    const dateLabel = selectedDate === 'today' ? 'Today' : selectedDate === 'tomorrow' ? 'Tomorrow' : 'Saturday';

    const newBooking: Booking = {
      id: `NEST-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      serviceImage: selectedService.image,
      type: 'scheduled',
      status: 'assigned',
      bookingTime: 'Just now',
      scheduledDateTime: `${dateLabel}, ${selectedTimeSlot}`,
      price: selectedService.priceStart,
      address: `${currentAddress.title} - ${currentAddress.addressLine}`,
      helper: {
        name: 'Sunita Devi',
        photo: '/assets/hero_worker.jpg',
        rating: 4.88,
        completedJobs: 489,
        phone: '+91 98450 12345',
        otp: `${Math.floor(1000 + Math.random() * 9000)}`
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
            <div style={{ background: '#F3E8FF', padding: '6px', borderRadius: '50%' }}>
              <Calendar size={18} color="#6F1D9E" />
            </div>
            <div>
              <h3 className="drawer-title" style={{ fontSize: '18px' }}>Schedule a Service</h3>
              <p style={{ fontSize: '11px', color: '#6B7280' }}>Pick your convenient date & time</p>
            </div>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Service Picker */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '6px', display: 'block' }}>
              1. Select Service:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {services.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedServiceId(svc.id)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '10px',
                    border: selectedServiceId === svc.id ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                    background: selectedServiceId === svc.id ? '#FAF4FF' : '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#111827'
                  }}
                >
                  {svc.title}
                </button>
              ))}
            </div>
          </div>

          {/* Date Picker Tabs */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '6px', display: 'block' }}>
              2. Choose Date:
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setSelectedDate('today')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '10px',
                  border: selectedDate === 'today' ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                  background: selectedDate === 'today' ? '#6F1D9E' : '#FFFFFF',
                  color: selectedDate === 'today' ? '#FFFFFF' : '#111827',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => setSelectedDate('tomorrow')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '10px',
                  border: selectedDate === 'tomorrow' ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                  background: selectedDate === 'tomorrow' ? '#6F1D9E' : '#FFFFFF',
                  color: selectedDate === 'tomorrow' ? '#FFFFFF' : '#111827',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Tomorrow
              </button>
              <button
                type="button"
                onClick={() => setSelectedDate('weekend')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '10px',
                  border: selectedDate === 'weekend' ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                  background: selectedDate === 'weekend' ? '#6F1D9E' : '#FFFFFF',
                  color: selectedDate === 'weekend' ? '#FFFFFF' : '#111827',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Weekend
              </button>
            </div>
          </div>

          {/* Time Slot Picker */}
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '6px', display: 'block' }}>
              3. Select Time Slot:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTimeSlot(slot)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: selectedTimeSlot === slot ? '1.5px solid #6F1D9E' : '1px solid #E5E7EB',
                    background: selectedTimeSlot === slot ? '#FAF4FF' : '#F9FAFB',
                    color: selectedTimeSlot === slot ? '#6F1D9E' : '#374151',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Clock size={12} color={selectedTimeSlot === slot ? '#6F1D9E' : '#6B7280'} />
                  <span>{slot}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Address review */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8F9FB', padding: '8px 12px', borderRadius: '10px', border: '1px solid #ECEEF2' }}>
            <MapPin size={15} color="#6F1D9E" />
            <span style={{ fontSize: '11px', color: '#374151' }}>
              {currentAddress.title}: {currentAddress.addressLine}
            </span>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
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
              boxShadow: '0 4px 15px rgba(111, 29, 158, 0.3)',
              marginTop: '4px'
            }}
          >
            <span>Confirm Schedule • ₹{selectedService.priceStart}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
