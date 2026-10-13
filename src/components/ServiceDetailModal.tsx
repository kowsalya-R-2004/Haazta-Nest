import React, { useState } from 'react';
import { X, Star, CheckCircle2, XCircle, Clock, Zap, Calendar, Plus, Check } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onInstantBook: (service: ServiceCategory, addonTotal: number) => void;
  onScheduleBook: (service: ServiceCategory, addonTotal: number) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInstantBook,
  onScheduleBook,
}) => {
  const [selectedAddons, setSelectedAddons] = useState<{ [name: string]: boolean }>({});

  if (!service) return null;

  const toggleAddon = (name: string) => {
    setSelectedAddons(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const addonTotal = (service.popularAddons || []).reduce((sum, addon) => {
    return selectedAddons[addon.name] ? sum + addon.price : sum;
  }, 0);

  const finalPrice = service.priceStart + addonTotal;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header" style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#6F1D9E', background: '#F4E8FC', padding: '3px 10px', borderRadius: '9999px' }}>
            {service.tag || 'Nest Certified'}
          </span>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Hero Image */}
        <div style={{ position: 'relative', width: '100%', height: '170px', borderRadius: '16px', overflow: 'hidden', marginBottom: '12px' }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', color: '#FFFFFF', padding: '4px 8px', borderRadius: '9999px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} />
            <span>Approx. {service.durationMins} mins</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>{service.title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '12px', fontWeight: 700, color: '#D48806' }}>
                <Star size={13} fill="#FFDF00" color="#D48806" />
                {service.rating}
              </span>
              <span style={{ fontSize: '11px', color: '#6B7280' }}>({service.reviewCount.toLocaleString()} verified ratings)</span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#6F1D9E' }}>₹{finalPrice}</div>
            <div style={{ fontSize: '11px', color: '#9CA3AF', textDecoration: 'line-through' }}>₹{service.originalPrice}</div>
          </div>
        </div>

        <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: 1.45, marginBottom: '14px' }}>
          {service.fullDesc}
        </p>

        {/* What is included */}
        <div style={{ marginBottom: '14px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>What's Included:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {service.includes.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#374151' }}>
                <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions */}
        {service.excludes && service.excludes.length > 0 && (
          <div style={{ marginBottom: '14px', background: '#F9FAFB', padding: '10px 12px', borderRadius: '12px', border: '1px solid #ECEEF2' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', marginBottom: '6px' }}>Not Included:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {service.excludes.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#9CA3AF' }}>
                  <XCircle size={13} color="#9CA3AF" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular Addons */}
        {service.popularAddons && service.popularAddons.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Optional Add-ons:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {service.popularAddons.map((addon) => {
                const isSelected = !!selectedAddons[addon.name];
                return (
                  <div
                    key={addon.name}
                    onClick={() => toggleAddon(addon.name)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      border: isSelected ? '1.5px solid #6F1D9E' : '1px solid #E5E7EB',
                      background: isSelected ? '#FAF4FF' : '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        border: isSelected ? 'none' : '1.5px solid #9CA3AF',
                        background: isSelected ? '#6F1D9E' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF'
                      }}>
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#1F2937' }}>{addon.name}</span>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#6F1D9E' }}>+₹{addon.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dual Booking Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
          <button
            type="button"
            onClick={() => onScheduleBook(service, addonTotal)}
            style={{
              background: '#FFFFFF',
              color: '#111827',
              border: '1.5px solid #D1D5DB',
              borderRadius: '9999px',
              padding: '12px 10px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Calendar size={15} />
            <span>Schedule</span>
          </button>

          <button
            type="button"
            onClick={() => onInstantBook(service, addonTotal)}
            style={{
              background: '#6F1D9E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '12px 10px',
              fontSize: '13px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(111, 29, 158, 0.3)'
            }}
          >
            <Zap size={15} fill="#FFDF00" color="#FFDF00" />
            <span>Instant (6m)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
