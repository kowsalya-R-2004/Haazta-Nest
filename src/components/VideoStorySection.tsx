import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const VideoStorySection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const stories = [
    {
      id: 1,
      name: 'Priyanka Ghatake',
      rating: 4.9,
      experience: '1.5 Years at Nest',
      monthlyEarned: '₹42,800/mo',
      thumbnail: '/assets/hero_worker.jpg',
      quote: 'Before Nest, I struggled with irregular household work. Now, I receive guaranteed jobs near Bellandur, weekly direct bank payments, and full dignity at every home.',
      videoDuration: '1:45 min'
    },
    {
      id: 2,
      name: 'Sunita Devi',
      rating: 4.88,
      experience: '2 Years at Nest',
      monthlyEarned: '₹39,500/mo',
      thumbnail: '/assets/instant_helper.jpg',
      quote: 'The 1-day training taught me modern chemical-safe cleaning. My family now has health insurance of ₹5 Lakhs, and I choose my working hours freely.',
      videoDuration: '2:10 min'
    }
  ];

  const currentStory = stories[activeStoryIdx];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section style={{ padding: '60px 0', background: '#FFFFFF' }} aria-label="Expert Video Stories">
      <div className="content-container">
        <div className="section-title-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FAF4FF', padding: '4px 12px', borderRadius: '9999px', color: '#6F1D9E', fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>
            <Sparkles size={14} />
            <span>REAL STORIES • REAL IMPACT</span>
          </div>
          <h2 className="section-main-title">See How Nest Makes Life Easy</h2>
          <p className="section-sub-title">Watch real Nest specialists share their daily routine, earnings, and safety experience.</p>
        </div>

        {/* Video Player Card Container */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#111827',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          position: 'relative'
        }}>
          {/* Main Video Viewport */}
          <div style={{ position: 'relative', height: '420px', width: '100%', overflow: 'hidden' }}>
            <img
              src={currentStory.thumbnail}
              alt={currentStory.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: isPlaying ? 'brightness(0.95)' : 'brightness(0.75)',
                transition: 'filter 0.3s ease'
              }}
            />

            {/* Overlay Center Play Button */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255, 223, 0, 0.95)',
                  border: '4px solid #FFFFFF',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
                aria-label="Play video"
              >
                <Play size={32} fill="#111827" style={{ marginLeft: '4px' }} />
              </button>
            )}

            {/* Specialist Tag Badge Top Left */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 800
            }}>
              <span>{currentStory.name}</span>
              <span style={{ color: '#FFDF00', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Star size={12} fill="#FFDF00" /> {currentStory.rating}
              </span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span style={{ color: '#10B981' }}>{currentStory.monthlyEarned}</span>
            </div>

            {/* Video Controls Bar Bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  type="button"
                  onClick={togglePlay}
                  style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} fill="#FFFFFF" />}
                </button>

                <div style={{ width: '220px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ width: isPlaying ? '65%' : '0%', height: '100%', background: '#FFE600', borderRadius: '2px', transition: 'width 0.4s ease' }} />
                </div>

                <span style={{ fontSize: '11px', color: '#E5E7EB' }}>
                  {isPlaying ? '0:42 / ' : '0:00 / '}{currentStory.videoDuration}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Quote Below Video */}
          <div style={{ padding: '24px 30px', background: '#1F2937', color: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ maxWidth: '600px' }}>
              <p style={{ fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic', color: '#F3F4F6' }}>
                "{currentStory.quote}"
              </p>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '6px' }}>
                — {currentStory.name} ({currentStory.experience})
              </div>
            </div>

            {/* Story Switcher Tabs */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {stories.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setActiveStoryIdx(idx);
                    setIsPlaying(false);
                  }}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    border: activeStoryIdx === idx ? '1.5px solid #FFE600' : '1px solid #374151',
                    background: activeStoryIdx === idx ? '#FFE600' : '#111827',
                    color: activeStoryIdx === idx ? '#000000' : '#D1D5DB',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  {s.name.split(' ')[0]}'s Story
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
