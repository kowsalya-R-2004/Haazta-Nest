import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  secondaryText?: string;
}

interface CustomBilingualSelectProps {
  id: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const CustomBilingualSelect: React.FC<CustomBilingualSelectProps> = ({
  id,
  value,
  options,
  placeholder = 'Select option',
  onChange,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="custom-bilingual-select-container" ref={containerRef}>
      {/* Hidden input to maintain native form validation if needed */}
      <input type="hidden" id={id} name={id} value={value} />

      {/* Trigger Button */}
      <button
        type="button"
        id={`${id}-trigger`}
        className={`custom-select-trigger ${isOpen ? 'active-open' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className={`trigger-display-text ${!selectedOption ? 'placeholder' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`select-chevron-icon ${isOpen ? 'rotate' : ''}`} 
          color="#6B7280"
        />
      </button>

      {/* Floating Dropdown Menu (Styled like Screenshot 3) */}
      {isOpen && (
        <div 
          className="custom-select-dropdown-menu" 
          role="listbox" 
          tabIndex={-1}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option-item ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
              >
                <span className="option-label-text">{opt.label}</span>
                {isSelected && <Check size={16} className="option-check-icon" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
