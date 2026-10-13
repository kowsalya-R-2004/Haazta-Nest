import React, { useState } from 'react';
import { X, MapPin, Check, Plus, Home, Briefcase, Compass } from 'lucide-react';
import { Address } from '../types';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  addresses: Address[];
  currentAddress: Address;
  onSelectAddress: (address: Address) => void;
  onAddNewAddress: (newAddr: Address) => void;
}

export const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  onClose,
  addresses,
  currentAddress,
  onSelectAddress,
  onAddNewAddress,
}) => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newLine, setNewLine] = useState('');
  const [newType, setNewType] = useState<'Home' | 'Work' | 'Other'>('Home');

  if (!isOpen) return null;

  const handleSaveNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newLine.trim()) return;

    const newAddr: Address = {
      id: `addr-${Date.now()}`,
      title: newTitle.trim(),
      type: newType,
      addressLine: newLine.trim(),
    };

    onAddNewAddress(newAddr);
    onSelectAddress(newAddr);
    setIsAddingNew(false);
    setNewTitle('');
    setNewLine('');
    onClose();
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} color="#6F1D9E" />
            <h3 className="drawer-title" style={{ fontSize: '18px' }}>Select Delivery Address</h3>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {!isAddingNew ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {addresses.map((addr) => {
              const isSelected = currentAddress.id === addr.id;
              return (
                <div
                  key={addr.id}
                  onClick={() => {
                    onSelectAddress(addr);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    border: isSelected ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                    background: isSelected ? '#FAF4FF' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isSelected ? '#6F1D9E' : '#F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#FFFFFF' : '#4B5563',
                    flexShrink: 0
                  }}>
                    {addr.type === 'Home' ? <Home size={16} /> : addr.type === 'Work' ? <Briefcase size={16} /> : <Compass size={16} />}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#111827' }}>{addr.title}</span>
                      {isSelected && <span style={{ fontSize: '11px', color: '#6F1D9E', fontWeight: 800 }}>Delivering Here</span>}
                    </div>
                    <p style={{ fontSize: '12px', color: '#4B5563', marginTop: '2px', lineHeight: 1.3 }}>{addr.addressLine}</p>
                    {addr.landmark && (
                      <span style={{ fontSize: '11px', color: '#6B7280', display: 'block', marginTop: '2px' }}>Landmark: {addr.landmark}</span>
                    )}
                  </div>
                </div>
              );
            })}

            <button
              type="button"
              onClick={() => setIsAddingNew(true)}
              style={{
                background: '#F9FAFB',
                border: '1.5px dashed #D1D5DB',
                borderRadius: '14px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#6F1D9E',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '6px'
              }}
            >
              <Plus size={16} />
              <span>Add New Address</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSaveNew} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Address Title (e.g. My Apartment)</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Home, Studio, Guest Room"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #D1D5DB', fontSize: '13px' }}
                required
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Full House/Flat Address</label>
              <textarea
                value={newLine}
                onChange={(e) => setNewLine(e.target.value)}
                placeholder="Flat No, Building Name, Street, Bellandur, Bangalore"
                rows={3}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #D1D5DB', fontSize: '13px', fontFamily: 'inherit' }}
                required
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '4px' }}>Type</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['Home', 'Work', 'Other'] as const).map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setNewType(type)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: newType === type ? '2px solid #6F1D9E' : '1px solid #E5E7EB',
                      background: newType === type ? '#FAF4FF' : '#FFFFFF',
                      color: newType === type ? '#6F1D9E' : '#4B5563',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button
                type="button"
                onClick={() => setIsAddingNew(false)}
                style={{ flex: 1, padding: '12px', borderRadius: '9999px', border: '1px solid #D1D5DB', background: '#FFFFFF', fontWeight: 700, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{ flex: 1, padding: '12px', borderRadius: '9999px', border: 'none', background: '#6F1D9E', color: '#FFFFFF', fontWeight: 800, cursor: 'pointer' }}
              >
                Save & Deliver
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
