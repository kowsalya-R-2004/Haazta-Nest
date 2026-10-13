import React, { useState } from 'react';
import { NestLogo } from './NestLogo';
import { ArrowRight, Globe } from 'lucide-react';

interface LandingHeaderProps {
  onApplyClick: () => void;
  onLanguageChange: (lang: string) => void;
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({ onApplyClick, onLanguageChange }) => {
  const [selectedLang, setSelectedLang] = useState('English');

  const languages = ['English', 'हिन्दी', 'ಕನ್ನಡ', 'తెలుగు'];

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
    onLanguageChange(lang);
  };

  return (
    <header className="landing-header">
      <div className="landing-container landing-header-inner">
        {/* Logo */}
        <div className="landing-logo">
          <NestLogo size={28} color="#6F1D9E" />
          <span className="landing-logo-text">Nest</span>
        </div>

        {/* Center Language Selector */}
        <div className="lang-selector-group">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              className={`lang-btn ${selectedLang === lang ? 'active' : ''}`}
              onClick={() => handleSelectLang(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Apply CTA */}
        <button
          type="button"
          className="landing-apply-cta"
          onClick={onApplyClick}
        >
          <span>Join Now</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </header>
  );
};
