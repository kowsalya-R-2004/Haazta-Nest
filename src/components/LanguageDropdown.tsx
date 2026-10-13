import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language, LANGUAGE_LIST } from '../translations';

interface LanguageDropdownProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  headerHint?: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  currentLanguage,
  onSelectLanguage,
  headerHint
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLangMeta = LANGUAGE_LIST.find(l => l.code === currentLanguage) || LANGUAGE_LIST[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const handleSelect = (code: Language) => {
    onSelectLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown-wrapper" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        className={`lang-dropdown-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe size={16} color="#6F1D9E" className="lang-globe-icon" />
        <div className="lang-trigger-text-col">
          <span className="lang-trigger-native">{activeLangMeta.nativeName}</span>
          <span className="lang-trigger-english">({activeLangMeta.englishName})</span>
        </div>
        <ChevronDown 
          size={14} 
          color="#6F1D9E" 
          className={`lang-chevron-icon ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div className="lang-dropdown-menu" role="listbox">
          <div className="lang-dropdown-header-hint">
            <span>{headerHint || 'Select Language / भाषा चुनें'}</span>
          </div>

          <div className="lang-dropdown-items-list">
            {LANGUAGE_LIST.map((item) => {
              const isSelected = item.code === currentLanguage;
              return (
                <button
                  key={item.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`lang-dropdown-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(item.code)}
                >
                  <div className="lang-item-text-box">
                    <span className="lang-item-native">{item.nativeName}</span>
                    <span className="lang-item-meta">{item.englishName} • {item.region}</span>
                  </div>

                  {isSelected && (
                    <div className="lang-item-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
