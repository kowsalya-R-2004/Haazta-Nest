import React from 'react';
import { Calendar, ChevronRight, Zap, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingOptionCardsProps {
  onScheduleClick: () => void;
  onInstantClick: () => void;
}

export const BookingOptionCards: React.FC<BookingOptionCardsProps> = ({
  onScheduleClick,
  onInstantClick,
}) => {
  return (
    <section id="booking-options" className="booking-hub-section" aria-label="Booking Options">
      <div className="content-container">
        <div className="section-title-header" style={{ marginBottom: '28px' }}>
          <h2 className="section-main-title">Choose Your Way to Book</h2>
          <p className="section-sub-title">Whether you need urgent emergency help or want to schedule ahead for the week</p>
        </div>

        <div className="booking-hub-grid">
          {/* 1. Instant Booking Card */}
          <div
            className="booking-hub-card booking-hub-card-instant"
            onClick={onInstantClick}
            role="button"
            tabIndex={0}
            aria-label="Book instant home help arriving in 6 minutes"
          >
            <div>
              <div className="hub-card-top-row">
                <span className="hub-badge-instant">
                  <Zap size={14} fill="#000000" color="#000000" />
                  <span>Instant • 6 to 10 Mins</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#6F1D9E', background: '#F4E8FC', padding: '3px 10px', borderRadius: '9999px' }}>
                  ⚡ High Priority
                </span>
              </div>

              <h3 className="hub-card-title">
                Instant Help
                <ChevronRight size={22} color="#6F1D9E" />
              </h3>

              <p className="hub-card-desc">
                Specialist arrives at your doorstep in 6–10 minutes. Ideal for immediate kitchen help, sudden guests, or quick floor mopping.
              </p>
            </div>

            <div>
              <button type="button" className="hub-card-action-btn hub-btn-purple">
                <Zap size={16} fill="#FFDF00" color="#FFDF00" />
                <span>Get Help Now</span>
              </button>
            </div>

            {/* Namaste Helper Visual */}
            <img
              src="/assets/instant_helper.jpg"
              alt="Nest Instant Helper Namaste"
              className="hub-card-namaste-img"
            />
          </div>

          {/* 2. Schedule Booking Card */}
          <div
            className="booking-hub-card booking-hub-card-schedule"
            onClick={onScheduleClick}
            role="button"
            tabIndex={0}
            aria-label="Schedule home services for a future date and time"
          >
            <div>
              <div className="hub-card-top-row">
                <span className="hub-badge-schedule">
                  <Calendar size={14} />
                  <span>Scheduled Booking</span>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280' }}>
                  Flexible Slots (8 AM - 8 PM)
                </span>
              </div>

              <h3 className="hub-card-title">
                Schedule Service
                <ChevronRight size={22} color="#4B5563" />
              </h3>

              <p className="hub-card-desc">
                Pick your preferred date and time slot. Book regular weekday cooking assistance, weekend deep bathroom cleaning, or batch laundry care.
              </p>
            </div>

            <div>
              <button type="button" className="hub-card-action-btn hub-btn-outline">
                <Calendar size={16} color="#6F1D9E" />
                <span>Pick Date & Time</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
