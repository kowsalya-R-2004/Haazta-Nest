import React from 'react';
import { Booking } from '../types';
import { Phone, Star, ShieldCheck, CheckCircle2, Clock, Calendar, AlertCircle, RotateCcw } from 'lucide-react';

interface BookingsViewProps {
  bookings: Booking[];
  onRebook: (serviceId: string) => void;
  onCancelBooking: (bookingId: string) => void;
  onBackToHome: () => void;
}

export const BookingsView: React.FC<BookingsViewProps> = ({
  bookings,
  onRebook,
  onCancelBooking,
  onBackToHome,
}) => {
  const activeBookings = bookings.filter(b => b.status === 'assigned' || b.status === 'in_progress' || b.status === 'searching');
  const pastBookings = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

  return (
    <div className="bookings-view-container" style={{ paddingBottom: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#111827', fontFamily: 'var(--font-heading)' }}>
          Your Bookings
        </h2>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#6F1D9E', background: '#F4E8FC', padding: '3px 10px', borderRadius: '9999px' }}>
          {activeBookings.length} Active
        </span>
      </div>

      {/* Active Live Booking Card */}
      {activeBookings.length > 0 ? (
        activeBookings.map((booking) => (
          <div key={booking.id} className="booking-active-banner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#6F1D9E', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {booking.type === 'instant' ? '⚡ Instant Dispatch' : '📅 Scheduled Service'}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', marginTop: '2px' }}>
                  {booking.serviceTitle}
                </h3>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, background: '#FFE600', color: '#000000', padding: '3px 8px', borderRadius: '9999px' }}>
                {booking.helper?.etaMins ? `ETA ${booking.helper.etaMins} mins` : 'Assigned'}
              </span>
            </div>

            {/* Step Tracker */}
            <div className="booking-step-progress">
              <div className="booking-step-bar">
                <div className="booking-step-bar-fill" />
              </div>
              <div className="step-node">
                <div className="step-dot completed">✓</div>
                <span className="step-label">Booked</span>
              </div>
              <div className="step-node">
                <div className="step-dot active">⚡</div>
                <span className="step-label">On the way</span>
              </div>
              <div className="step-node">
                <div className="step-dot">3</div>
                <span className="step-label">Cleaning</span>
              </div>
              <div className="step-node">
                <div className="step-dot">4</div>
                <span className="step-label">Done</span>
              </div>
            </div>

            {/* Helper Info & OTP */}
            {booking.helper && (
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '12px', border: '1px solid #ECEEF2', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={booking.helper.photo}
                      alt={booking.helper.name}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #6F1D9E' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>{booking.helper.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#4B5563' }}>
                        <Star size={11} fill="#FFDF00" color="#D48806" />
                        <span>{booking.helper.rating} ({booking.helper.completedJobs} jobs)</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${booking.helper.phone}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      textDecoration: 'none'
                    }}
                    title="Call Specialist"
                  >
                    <Phone size={16} />
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FAF4FF', padding: '8px 12px', borderRadius: '10px', marginTop: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#4A0E66' }}>Start OTP (Share on arrival):</span>
                  <span style={{ fontSize: '15px', fontWeight: 900, color: '#6F1D9E', letterSpacing: '2px' }}>{booking.helper.otp}</span>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>Amount Payable: ₹{booking.price}</span>
              <button
                type="button"
                onClick={() => onCancelBooking(booking.id)}
                style={{ background: 'transparent', border: 'none', color: '#EF4444', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))
      ) : (
        <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px 16px', textAlign: 'center', border: '1px solid #ECEEF2' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FAF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
            <Calendar size={24} color="#6F1D9E" />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827' }}>No Active Bookings</h3>
          <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px', marginBottom: '14px' }}>
            Need help with cleaning, dishes, or cooking prep? Book instantly in 6 mins!
          </p>
          <button
            type="button"
            onClick={onBackToHome}
            style={{
              background: '#6F1D9E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '10px 20px',
              fontSize: '13px',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            Explore Services
          </button>
        </div>
      )}

      {/* Past Completed Bookings */}
      <div style={{ marginTop: '14px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', marginBottom: '10px' }}>Past Services</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {pastBookings.map((past) => (
            <div
              key={past.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '12px 14px',
                border: '1px solid #ECEEF2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <img
                src={past.serviceImage}
                alt={past.serviceTitle}
                style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }}
              />

              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#111827' }}>{past.serviceTitle}</h4>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>{past.bookingTime} • ₹{past.price}</div>
                <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                  <CheckCircle2 size={11} /> Completed by {past.helper?.name}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRebook(past.serviceId)}
                style={{
                  background: '#F4E8FC',
                  color: '#6F1D9E',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '6px 12px',
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={11} />
                <span>Rebook</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
