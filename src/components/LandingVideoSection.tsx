import React, { useState } from 'react';
import { Play, Pause, Star } from 'lucide-react';

export const LandingVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section aria-label="Video Story">
      <div className="landing-container">
        <h2 className="section-center-heading">See how Nest makes life easy</h2>

        <div className="video-section-container">
          <div className="video-frame-card">
            <div style={{ position: 'relative', height: '340px', width: '100%' }}>
              <img
                src="/assets/hero_worker.jpg"
                alt="Priyanka Ghatake Nest Expert Story"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isPlaying ? 'brightness(0.95)' : 'brightness(0.7)' }}
              />

              {/* Center Play Button */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: '#FFDF00',
                    border: '3px solid #FFFFFF',
                    color: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
                  }}
                  aria-label="Play video story"
                >
                  <Play size={28} fill="#111827" style={{ marginLeft: '4px' }} />
                </button>
              )}

              {/* Specialist Name & Rating Label */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(6px)',
                color: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>PRIYANKA GHATAKE</span>
                <span style={{ color: '#FFDF00', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <Star size={11} fill="#FFDF00" /> 4.9
                </span>
              </div>

              {/* Video Bottom Progress Bar */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '16px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#FFFFFF" />}
                </button>
                <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: isPlaying ? '70%' : '0%', height: '100%', background: '#FFDF00', transition: 'width 0.4s ease' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#FFFFFF' }}>0:45 / 1:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
