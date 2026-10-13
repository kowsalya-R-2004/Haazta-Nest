import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Share2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReferralBannerProps {
  onReferClick: () => void;
  onShowToast?: (msg: string) => void;
}

export const ReferralBanner: React.FC<ReferralBannerProps> = ({ onReferClick, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const code = 'NESTFRIEND100';

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`Use code ${code} for ₹50 off your first Nest service: https://nest.haatza.com/ref/${code}`);
    setCopied(true);
    if (onShowToast) onShowToast('Referral code copied to clipboard!');
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FFDF00', '#6F1D9E']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="content-container">
      <section
        className="referral-desktop-banner"
        onClick={onReferClick}
        role="button"
        tabIndex={0}
        aria-label="Refer a friend and earn 100 rupees"
      >
        <div className="referral-left-content">
          <div className="referral-heading-group">
            <span className="referral-earn-label">Earn</span>
            <span className="referral-bonus-amount">₹100</span>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#111827' }}>for Every Friend You Refer!</span>
          </div>

          <p className="referral-description">
            Your friends get <strong>₹50 OFF</strong> on their first booking, and you receive <strong>₹100</strong> directly in your Haatza One Pay wallet immediately upon completion.
          </p>

          <div className="referral-code-pill-row">
            <div className="referral-code-badge">
              CODE: {code}
            </div>

            <button
              type="button"
              className="btn-hero-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
              onClick={handleCopy}
            >
              {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>

            <button
              type="button"
              className="btn-hero-primary"
              style={{ padding: '8px 18px', fontSize: '13px' }}
              onClick={(e) => {
                e.stopPropagation();
                onReferClick();
              }}
            >
              <span>Refer Friends Now</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <img
          src="/assets/referral_reward.jpg"
          alt="Happy Friends with Reward Badges"
          className="referral-banner-art"
        />
      </section>
    </div>
  );
};
