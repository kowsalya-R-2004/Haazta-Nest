import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  User, 
  Phone, 
  MapPin, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Plus, 
  Minus, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Sparkles,
  Lock,
  CalendarCheck,
  CreditCard,
  Users,
  Compass,
  Check,
  Award,
  ChevronDown,
  ArrowUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import logoImg from './assets/LOGO1.png';
import haatzaWomanImg from './assets/haatza women.jpeg';

// Real Partner Employee Images from src/assets/images
import dhavanamaniImg from './assets/images/Dhavanamani.png';
import ritaChetryImg from './assets/images/Rita Chetry.png';
import joymotiBhorImg from './assets/images/Joymoti Bhor.png';
import sabitaNewarImg from './assets/images/Sabita Newar.png';
import karmiHansdahImg from './assets/images/Karmi Hansdah.png';
import rumpaDasImg from './assets/images/Rumpa Das.png';
import mohimaBibiImg from './assets/images/Mohima Bibi.png';
import jaliShilImg from './assets/images/Jali Shil.png';

import { Language, translations } from './translations';
import { LanguageDropdown } from './components/LanguageDropdown';
import { CITIES_DATA, getCityLabel, getLocalityLabel } from './data/locations';
import { CustomBilingualSelect } from './components/CustomBilingualSelect';

const EMPLOYEE_STORIES = [
  {
    name: 'Dhavanamani',
    category: 'Home Care & Cleaning Specialist • Bengaluru',
    quote: 'The professional training taught me modern house cleaning techniques and etiquette. Customers appreciate my work and treat me with immense respect.',
    avatar: dhavanamaniImg
  },
  {
    name: 'Rita Chetry',
    category: 'Cooking & Kitchen Care Expert • Bengaluru',
    quote: 'With Nest Services, my payments are transferred directly to my bank account every week without delay. Everything is clear, transparent, and hassle-free.',
    avatar: ritaChetryImg
  },
  {
    name: 'Joymoti Bhor',
    category: 'Daily Household Helper • Bengaluru',
    quote: 'I choose the localities and working hours that fit my family schedule. The flexible work opportunities have given me financial independence.',
    avatar: joymotiBhorImg
  },
  {
    name: 'Sabita Newar',
    category: 'Deep Cleaning Specialist • Bengaluru',
    quote: 'Joining was 100% free with no brokerage fees. Nest provided high-quality uniforms and safety training that makes us feel proud every day.',
    avatar: sabitaNewarImg
  },
  {
    name: 'Karmi Hansdah',
    category: 'Kitchen & Meal Partner • Bengaluru',
    quote: 'Being part of a verified, women-focused platform gives me confidence and security. My customers always give high ratings for my service.',
    avatar: karmiHansdahImg
  },
  {
    name: 'Rumpa Das',
    category: 'Housekeeping Professional • Bengaluru',
    quote: 'Customer satisfaction is always recognized here. The steady bookings and supportive partner team have helped me provide for my children.',
    avatar: rumpaDasImg
  },
  {
    name: 'Mohima Bibi',
    category: 'Home Organization & Care • Bengaluru',
    quote: 'The onboarding was so welcoming and fast. Having verified households and clear payment information makes every working day dignified.',
    avatar: mohimaBibiImg
  },
  {
    name: 'Jali Shil',
    category: 'Housekeeping & Sanitization Expert • Bengaluru',
    quote: 'Nest Services gave me steady work opportunities close to my home. Getting regular bookings and transparent earnings transformed my confidence.',
    avatar: jaliShilImg
  }
];

const FAQ_ICONS = [
  <FileText size={16} />,
  <Briefcase size={16} />,
  <Sparkles size={16} />,
  <CalendarCheck size={16} />,
  <Award size={16} />,
  <CreditCard size={16} />,
  <Clock size={16} />,
  <ShieldCheck size={16} />
];

export const App: React.FC = () => {
  // Language State
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('nest_lang') as Language) || 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('nest_lang', newLang);
    showToast(`Language: ${translations[newLang].selectLanguage}`);
  };

  const t = translations[language] || translations.en;

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [locality, setLocality] = useState('Bellandur');
  const [choresWillingness, setChoresWillingness] = useState<'yes' | 'no'>('yes');
  const [gender, setGender] = useState<'female' | 'male' | 'other'>('female');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const successTimeoutRef = useRef<number | null>(null);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current !== null) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  // FAQ Accordion State (8 Questions - all closed by default)
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  });

  // Navbar background based on scroll activity:
  // Transparent ONLY when idle at the very top (scrollY === 0 and not scrolling).
  // Immediately solid white on ANY scroll activity (even within hero or moving upward).
  // White continuously while idle anywhere below top.
  // Restores transparent only when scrolling has stopped at the very top.
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const scrollStopTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // As soon as scrolling is triggered, turn white immediately
      setIsNavbarWhite(true);

      // Reset scroll-stop detection timer
      if (scrollStopTimeoutRef.current !== null) {
        window.clearTimeout(scrollStopTimeoutRef.current);
      }

      // Check when scrolling stops (150ms debounce)
      scrollStopTimeoutRef.current = window.setTimeout(() => {
        // If user has stopped scrolling and is at the very top, restore transparent
        if (window.scrollY <= 0) {
          setIsNavbarWhite(false);
        } else {
          // If stopped anywhere below top, keep white
          setIsNavbarWhite(true);
        }
      }, 150);
    };

    // Initial check on mount
    if (window.scrollY > 0) {
      setIsNavbarWhite(true);
    } else {
      setIsNavbarWhite(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollStopTimeoutRef.current !== null) {
        window.clearTimeout(scrollStopTimeoutRef.current);
      }
    };
  }, []);

  // Toast Notification State
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const currentCityData = CITIES_DATA.find((c) => c.id === city) || CITIES_DATA[0];

  const handleCityChange = (newCityId: string) => {
    setCity(newCityId);
    const targetCity = CITIES_DATA.find((c) => c.id === newCityId) || CITIES_DATA[0];
    if (targetCity.localities.length > 0) {
      setLocality(targetCity.localities[0].id);
    }
  };

  const cityOptions = CITIES_DATA.map((c) => ({
    value: c.id,
    label: getCityLabel(c, language)
  }));

  const localityOptions = currentCityData.localities.map((loc) => ({
    value: loc.id,
    label: getLocalityLabel(loc, language)
  }));

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || successMessage) return;

    if (successTimeoutRef.current !== null) {
      window.clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }

    setFormError(null);
    setSuccessMessage(null);

    const trimmedName = fullName.trim();
    const cleanMobile = mobileNumber.replace(/\D/g, '');

    // Form Validation
    if (!trimmedName) {
      const err = t.enterNameError || 'Please enter your full name.';
      setFormError(err);
      showToast(err);
      return;
    }

    if (cleanMobile.length !== 10) {
      const err = t.enterMobileError || 'Please enter a valid 10-digit Indian mobile number.';
      setFormError(err);
      showToast(err);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: trimmedName,
        mobilenumber: cleanMobile,
        city: city,
        area: locality,
        gender: gender === 'female' ? 'Female' : gender === 'male' ? 'Male' : 'Other',
        interest: choresWillingness === 'yes' ? 'Yes' : 'No',
        status: true
      };

      const response = await fetch('https://haatza.com/_functions/expertEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && data.success === true) {
        const succMsg = data.message || 'Registration submitted successfully! Thank you for your interest in Nest Services.';
        setSuccessMessage(succMsg);
        setFormError(null);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7E22CE', '#FFD43B', '#10B981', '#F59E0B']
        });
        showToast(succMsg);

        // Automatically dismiss success message after 3 seconds, reset form fields & restore Register Now button
        successTimeoutRef.current = window.setTimeout(() => {
          setSuccessMessage(null);
          setFullName('');
          setMobileNumber('');
          successTimeoutRef.current = null;
        }, 3000);
      } else {
        const errorMsg = data?.message || 'Registration failed. Please verify your information and try again.';
        setFormError(errorMsg);
        showToast(errorMsg);
      }
    } catch (err) {
      const networkMsg = 'Unable to connect to the server. Please check your internet connection and try again.';
      setFormError(networkMsg);
      showToast(networkMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const scrollToRegistration = () => {
    const el = document.getElementById('register-section-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="site-page-container">
      {/* Toast Notification */}
      {toast && (
        <div className="toast-notification-banner" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#10B981" />
          <span>{toast}</span>
        </div>
      )}

      {/* =========================================================================
          0. TOP BRAND NAVIGATION & LANGUAGE DROPDOWN
          ========================================================================= */}
      <nav 
        className={`top-lang-navbar ${isNavbarWhite ? 'is-scrolled' : 'is-top'}`} 
        aria-label="Main Navigation"
      >
        <div className="layout-content-wrap">
          <div className="top-lang-nav-inner">
            {/* Top Left Nest Services Brand Header */}
            <div className="top-navbar-brand-header">
              <img
                src={logoImg}
                alt={t.brandName}
                className="top-navbar-logo-img"
              />
            </div>

            {/* Language Dropdown Selector */}
            <LanguageDropdown
              currentLanguage={language}
              onSelectLanguage={handleLanguageChange}
            />
          </div>
        </div>
      </nav>

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="hero-top-section" aria-label="Hero Section">
        <div className="layout-content-wrap">
          <div className="hero-wide-layout">
            
            {/* Left Hero Content */}
            <div className="hero-left-col">
              {/* Option 2: Hero Pill Badge */}
              <div className="hero-women-badge" role="status">
                <span className="hero-women-badge-icon">👩</span>
                <span>{t.womenOnlyProgram}</span>
              </div>

              <h1 className="hero-headline-main">
                {t.heroHeadline1}<br />
                {t.heroHeadline2}<br />
                <span className="headline-highlight-yellow">{t.heroHeadlineHighlight}</span>
              </h1>

              <p className="hero-paragraph-desc">
                {t.heroDescription}
              </p>

              {/* Three Benefit Highlights */}
              <div className="hero-trust-points-row">
                <div className="trust-point-item">
                  <ShieldCheck size={16} color="#7E22CE" />
                  <span>{t.trustedPlatform}</span>
                </div>
                <div className="trust-point-item">
                  <Clock size={16} color="#7E22CE" />
                  <span>{t.flexibleOpportunities}</span>
                </div>
                <div className="trust-point-item">
                  <TrendingUp size={16} color="#7E22CE" />
                  <span>{t.professionalGrowth}</span>
                </div>
              </div>

              {/* Primary Yellow CTA Join Now */}
              <div>
                <button 
                  type="button" 
                  className="btn-hero-join-now"
                  onClick={scrollToRegistration}
                  aria-label="Join Nest Services"
                >
                  <span>{t.joinNow}</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Right Hero Visual with Haatza Nest Uniform Specialist */}
            <div className="hero-right-visual-col">
              <div className="hero-visual-relative-wrapper">
                <div className="doodle-handwritten-hero" style={{ whiteSpace: 'pre-line' }}>
                  {t.doodleHero}
                </div>
                
                <div className="hero-visual-card-frame">
                  <img
                    src={haatzaWomanImg}
                    alt="Haza woman expert in Haatza Nest Uniform"
                    className="hero-specialist-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EXPERT REGISTRATION SECTION
          ========================================================================= */}
      <section className="section-centered-form-wrap" id="register-section-anchor" aria-label="Expert Registration">
        <div className="layout-content-wrap">
          <div className="registration-split-layout">
            
            {/* Left Column: Haatza Nest Uniform Helper Welcome Card */}
            <div className="registration-left-invite-card">
              <div className="invite-badge-bubble">
                <Heart size={14} color="#7E22CE" fill="#7E22CE" />
                <span>{t.inviteNamaste}</span>
              </div>
              
              <div className="invite-image-frame">
                <img
                  src="/assets/instant_helper.jpg"
                  alt="Nest Home Service Expert Welcoming Applicants"
                  className="invite-helper-photo"
                  loading="lazy"
                />
                <div className="invite-overlay-tag">
                  <div className="invite-tag-brand">{t.brandName}</div>
                  <div className="invite-tag-sub">{t.brandTagline}</div>
                </div>
              </div>

              <div className="invite-benefits-list">
                <div className="invite-benefit-pill">
                  <CheckCircle2 size={15} color="#7E22CE" />
                  <span>{t.trustedPlatform}</span>
                </div>
                <div className="invite-benefit-pill">
                  <Clock size={15} color="#7E22CE" />
                  <span>{t.flexibleOpportunities}</span>
                </div>
                <div className="invite-benefit-pill">
                  <TrendingUp size={15} color="#7E22CE" />
                  <span>{t.professionalGrowth}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form Card */}
            <div className="centered-registration-card">
              
              <div className="card-title-main">{t.registerTitle}</div>
              <div className="card-subtitle-main">{t.registerSubtitle}</div>

              {/* Option 1: Registration Card Notice Banner */}
              <div className="registration-women-banner" role="note">
                <span className="registration-women-banner-icon">👩</span>
                <div className="registration-women-banner-text">
                  {t.womenOnlyProgram}
                </div>
              </div>

              {formError && (
                <div className="form-error-alert-banner" role="alert">
                  {formError}
                </div>
              )}

              {successMessage && (
                <div className="form-success-alert-banner" role="status">
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>{successMessage}</span>
                </div>
              )}

              <form onSubmit={handleRegisterSubmit} className="register-form-centered" noValidate>
                <div className="form-fields-grid-2col">
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="reg-fullname" className="field-label-row">
                      <User size={14} color="#7E22CE" />
                      <span>{t.fullNameLabel}</span>
                    </label>
                    <div className="input-with-icon-wrap">
                      <input
                        id="reg-fullname"
                        type="text"
                        className="custom-input-box"
                        placeholder={t.fullNamePlaceholder}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        disabled={isSubmitting || !!successMessage}
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="form-field-group">
                    <label htmlFor="reg-mobile" className="field-label-row">
                      <Phone size={14} color="#7E22CE" />
                      <span>{t.mobileNumberLabel}</span>
                    </label>
                    <div className="input-with-icon-wrap">
                      <div className="phone-prefix-tag">+91</div>
                      <input
                        id="reg-mobile"
                        type="tel"
                        className="custom-input-box input-has-prefix"
                        placeholder={t.mobileNumberPlaceholder}
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                        required
                        disabled={isSubmitting || !!successMessage}
                      />
                    </div>
                  </div>

                  {/* City Dropdown with Bilingual Label (Matches Reference Image 3) */}
                  <div className="form-field-group">
                    <label htmlFor="reg-city" className="field-label-row">
                      <MapPin size={14} color="#7E22CE" />
                      <span>{t.cityLabel}</span>
                    </label>
                    <CustomBilingualSelect
                      id="reg-city"
                      value={city}
                      options={cityOptions}
                      placeholder={t.cityLabel}
                      onChange={handleCityChange}
                      disabled={isSubmitting || !!successMessage}
                    />
                  </div>

                  {/* Area / Locality Dropdown with Bilingual Label */}
                  <div className="form-field-group">
                    <label htmlFor="reg-locality" className="field-label-row">
                      <MapPin size={14} color="#7E22CE" />
                      <span>{t.areaLabel}</span>
                    </label>
                    <CustomBilingualSelect
                      id="reg-locality"
                      value={locality}
                      options={localityOptions}
                      placeholder={t.areaLabel}
                      onChange={(newLoc) => setLocality(newLoc)}
                      disabled={isSubmitting || !!successMessage}
                    />
                  </div>

                  {/* Household Chores Willingness */}
                  <div className="form-field-group">
                    <label className="field-label-row">
                      <HelpCircle size={14} color="#7E22CE" />
                      <span>{t.householdChoresLabel}</span>
                    </label>
                    <div className="segmented-chips-row">
                      <button
                        type="button"
                        className={`segmented-chip-btn ${choresWillingness === 'yes' ? 'active' : ''}`}
                        onClick={() => setChoresWillingness('yes')}
                        disabled={isSubmitting || !!successMessage}
                      >
                        <span>{t.choresYes}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${choresWillingness === 'no' ? 'active' : ''}`}
                        onClick={() => setChoresWillingness('no')}
                        disabled={isSubmitting || !!successMessage}
                      >
                        <span>{t.choresNo}</span>
                      </button>
                    </div>
                  </div>

                  {/* Gender Selector */}
                  <div className="form-field-group">
                    <label className="field-label-row">
                      <User size={14} color="#7E22CE" />
                      <span>{t.genderLabel}</span>
                    </label>
                    <div className="segmented-chips-row">
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'female' ? 'active' : ''}`}
                        onClick={() => setGender('female')}
                        disabled={isSubmitting || !!successMessage}
                      >
                        <span>{t.genderFemale}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'male' ? 'active' : ''}`}
                        onClick={() => setGender('male')}
                        disabled={isSubmitting || !!successMessage}
                      >
                        <span>{t.genderMale}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'other' ? 'active' : ''}`}
                        onClick={() => setGender('other')}
                        disabled={isSubmitting || !!successMessage}
                      >
                        <span>{t.genderOther}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button with Loading State */}
                <button 
                  type="submit" 
                  className="btn-register-now-yellow" 
                  disabled={isSubmitting || !!successMessage}
                >
                  <span>{isSubmitting ? t.registeringBtn : t.registerNowBtn}</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS (3 ENGAGING STEPS)
          ========================================================================= */}
      <section className="section-padding-wrap bg-soft-lavender-section" id="how-it-works" aria-label="How It Works">
        <div className="layout-content-wrap">
          <div className="section-header-block">
            <h2 className="section-title-bold">{t.howItWorksTitle}</h2>
            <p className="section-subtitle-muted">{t.howItWorksSubtitle}</p>
          </div>

          <div className="how-it-works-row">
            {/* Step 1 */}
            <div className="step-card-box">
              <div className="step-number-yellow-pill">1</div>
              <div className="step-icon-inner">
                <FileText size={26} color="#7E22CE" />
              </div>
              <h3 className="step-card-title">{t.step1Title}</h3>
              <p className="step-card-desc">{t.step1Desc}</p>
            </div>

            <div className="step-connector-arrow">➔</div>

            {/* Step 2 */}
            <div className="step-card-box">
              <div className="step-number-yellow-pill">2</div>
              <div className="step-icon-inner">
                <GraduationCap size={26} color="#7E22CE" />
              </div>
              <h3 className="step-card-title">{t.step2Title}</h3>
              <p className="step-card-desc">{t.step2Desc}</p>
            </div>

            <div className="step-connector-arrow">➔</div>

            {/* Step 3 */}
            <div className="step-card-box">
              <div className="step-number-yellow-pill">3</div>
              <div className="step-icon-inner">
                <Briefcase size={26} color="#7E22CE" />
              </div>
              <h3 className="step-card-title">{t.step3Title}</h3>
              <p className="step-card-desc">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BENEFITS OF JOINING NEST (6 BENEFIT CARDS)
          ========================================================================= */}
      <section className="section-padding-wrap" id="benefits" aria-label="Benefits of Joining Nest">
        <div className="layout-content-wrap">
          <div className="section-header-block">
            <h2 className="section-title-bold">{t.benefitsTitle}</h2>
            <p className="section-subtitle-muted">{t.benefitsSubtitle}</p>
          </div>

          <div className="benefits-grid-6col">
            {/* Benefit 1 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <Clock size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit1Title}</h3>
              <p className="benefit-box-desc">{t.benefit1Desc}</p>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <TrendingUp size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit2Title}</h3>
              <p className="benefit-box-desc">{t.benefit2Desc}</p>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <GraduationCap size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit3Title}</h3>
              <p className="benefit-box-desc">{t.benefit3Desc}</p>
            </div>

            {/* Benefit 4 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <Sparkles size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit4Title}</h3>
              <p className="benefit-box-desc">{t.benefit4Desc}</p>
            </div>

            {/* Benefit 5 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <Users size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit5Title}</h3>
              <p className="benefit-box-desc">{t.benefit5Desc}</p>
            </div>

            {/* Benefit 6 */}
            <div className="benefit-feature-box">
              <div className="benefit-icon-badge">
                <Award size={24} color="#7E22CE" />
              </div>
              <h3 className="benefit-box-title">{t.benefit6Title}</h3>
              <p className="benefit-box-desc">{t.benefit6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY EXPERTS TRUST NEST SERVICES (4 CARDS)
          ========================================================================= */}
      <section className="section-padding-wrap bg-soft-lavender-section" id="why-trust" aria-label="Why Experts Trust Nest Services">
        <div className="layout-content-wrap">
          <div className="section-header-block">
            <h2 className="section-title-bold">{t.whyTrustTitle}</h2>
            <p className="section-subtitle-muted">{t.whyTrustSubtitle}</p>
          </div>

          <div className="trust-four-grid">
            {/* Card 1 */}
            <div className="trust-four-card">
              <div className="trust-four-icon-badge">
                <ShieldCheck size={24} color="#7E22CE" />
              </div>
              <h3 className="trust-four-title">{t.trust1Title}</h3>
              <p className="trust-four-desc">{t.trust1Desc}</p>
            </div>

            {/* Card 2 */}
            <div className="trust-four-card">
              <div className="trust-four-icon-badge">
                <Award size={24} color="#7E22CE" />
              </div>
              <h3 className="trust-four-title">{t.trust2Title}</h3>
              <p className="trust-four-desc">{t.trust2Desc}</p>
            </div>

            {/* Card 3 */}
            <div className="trust-four-card">
              <div className="trust-four-icon-badge">
                <CreditCard size={24} color="#7E22CE" />
              </div>
              <h3 className="trust-four-title">{t.trust3Title}</h3>
              <p className="trust-four-desc">{t.trust3Desc}</p>
            </div>

            {/* Card 4 */}
            <div className="trust-four-card">
              <div className="trust-four-icon-badge">
                <Compass size={24} color="#7E22CE" />
              </div>
              <h3 className="trust-four-title">{t.trust4Title}</h3>
              <p className="trust-four-desc">{t.trust4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TRUST HIGHLIGHTS (4 COMPACT ITEMS)
          ========================================================================= */}
      <section className="section-trust-highlights" aria-label="Trust Highlights">
        <div className="layout-content-wrap">
          <div className="trust-highlights-row">
            <div className="trust-highlight-item">
              <div className="highlight-icon-circle">
                <GraduationCap size={20} color="#7E22CE" />
              </div>
              <span className="highlight-text">{t.highlight1}</span>
            </div>

            <div className="trust-highlight-item">
              <div className="highlight-icon-circle">
                <ShieldCheck size={20} color="#7E22CE" />
              </div>
              <span className="highlight-text">{t.highlight2}</span>
            </div>

            <div className="trust-highlight-item">
              <div className="highlight-icon-circle">
                <CreditCard size={20} color="#7E22CE" />
              </div>
              <span className="highlight-text">{t.highlight3}</span>
            </div>

            <div className="trust-highlight-item">
              <div className="highlight-icon-circle">
                <Heart size={20} color="#7E22CE" />
              </div>
              <span className="highlight-text">{t.highlight4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. EXPERT STORIES AND TESTIMONIALS (SAMPLE DEMONSTRATION CONTENT)
          ========================================================================= */}
      <section className="section-padding-wrap" id="stories" aria-label="Real People Real Stories">
        <div className="layout-content-wrap">
          <div className="section-header-block">
            <h2 className="section-title-bold">{t.storiesTitle}</h2>
            <p className="section-subtitle-muted">{t.storiesSubtitle}</p>
          </div>

          {/* Seamless Infinite Horizontal Marquee Track (Moving Right to Left) */}
          <div className="testimonials-marquee-viewport">
            <div className="testimonials-marquee-track">
              {/* Set 1: Real Partner Employee Testimonials */}
              {EMPLOYEE_STORIES.map((story, idx) => (
                <div key={`story-1-${idx}`} className="expert-testimonial-card marquee-card">
                  <p className="quote-text-italic">
                    "{story.quote}"
                  </p>
                  <div className="expert-profile-row">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="expert-avatar-round"
                      loading="lazy"
                    />
                    <div>
                      <div className="expert-name-text">{story.name}</div>
                      <div className="expert-role-text">{story.category}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Set 2: Duplicate Set of 8 Boxes for 100% Seamless Infinite Loop */}
              {EMPLOYEE_STORIES.map((story, idx) => (
                <div key={`story-2-${idx}`} className="expert-testimonial-card marquee-card" aria-hidden="true">
                  <p className="quote-text-italic">
                    "{story.quote}"
                  </p>
                  <div className="expert-profile-row">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="expert-avatar-round"
                      loading="lazy"
                    />
                    <div>
                      <div className="expert-name-text">{story.name}</div>
                      <div className="expert-role-text">{story.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (8 QUESTIONS ACCORDION)
          ========================================================================= */}
      <section className="section-padding-wrap bg-soft-lavender-section" id="faqs" aria-label="Frequently Asked Questions">
        <div className="layout-content-wrap">
          <div className="section-header-block">
            <h2 className="section-title-bold">{t.faqsTitle}</h2>
            <p className="section-subtitle-muted">{t.faqsSubtitle}</p>
          </div>

          <div className="faqs-grid-2col">
            {/* Column 1 (Questions 1 - 4) */}
            <div className="faq-column-stack">
              {[0, 1, 2, 3].map((idx) => {
                const qKey = `faq${idx + 1}Q` as keyof typeof t;
                const aKey = `faq${idx + 1}A` as keyof typeof t;
                const isOpen = openFaqs[idx];

                return (
                  <div key={idx} className={`faq-pill-box ${isOpen ? 'open' : ''}`}>
                    <div 
                      className="faq-trigger-btn" 
                      onClick={() => toggleFaq(idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleFaq(idx);
                        }
                      }}
                    >
                      <div className="faq-q-text-row">
                        <div className="faq-q-icon-badge">
                          {FAQ_ICONS[idx]}
                        </div>
                        <span className="faq-question-text">{t[qKey]}</span>
                      </div>
                      <button
                        type="button"
                        className="faq-arrow-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFaq(idx);
                        }}
                        aria-label={isOpen ? "Collapse question" : "Expand question"}
                      >
                        <ChevronDown size={18} className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="faq-answer-container">
                        {t[aKey]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 (Questions 5 - 8) */}
            <div className="faq-column-stack">
              {[4, 5, 6, 7].map((idx) => {
                const qKey = `faq${idx + 1}Q` as keyof typeof t;
                const aKey = `faq${idx + 1}A` as keyof typeof t;
                const isOpen = openFaqs[idx];

                return (
                  <div key={idx} className={`faq-pill-box ${isOpen ? 'open' : ''}`}>
                    <div 
                      className="faq-trigger-btn" 
                      onClick={() => toggleFaq(idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleFaq(idx);
                        }
                      }}
                    >
                      <div className="faq-q-text-row">
                        <div className="faq-q-icon-badge">
                          {FAQ_ICONS[idx]}
                        </div>
                        <span className="faq-question-text">{t[qKey]}</span>
                      </div>
                      <button
                        type="button"
                        className="faq-arrow-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFaq(idx);
                        }}
                        aria-label={isOpen ? "Collapse question" : "Expand question"}
                      >
                        <ChevronDown size={18} className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} />
                      </button>
                    </div>
                    {isOpen && (
                      <div className="faq-answer-container">
                        {t[aKey]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FINAL CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="section-final-cta-wrap" aria-label="Final Call to Action">
        <div className="layout-content-wrap">
          <div className="cta-banner-card">
            <div className="cta-content-center">
              <h2 className="cta-banner-heading">{t.ctaHeading}</h2>
              <p className="cta-banner-sub">
                {t.ctaSub}
              </p>
              <div className="cta-buttons-row">
                <button
                  type="button"
                  className="btn-cta-register-yellow"
                  onClick={scrollToRegistration}
                  aria-label="Register Now Button"
                >
                  <span>{t.ctaButton}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FOOTER
          ========================================================================= */}
      <footer className="simple-purple-footer" aria-label="Footer">
        <div className="layout-content-wrap">
          <div className="footer-clean-center">
            {/* Logo in Footer */}
            <div className="footer-logo-row">
              <img
                src={logoImg}
                alt={t.brandName}
                className="footer-logo-img"
              />
            </div>

            {/* Tagline */}
            <div className="footer-clean-tagline">{t.footerTagline}</div>

            {/* Trust Badges Pill Row */}
            <div className="footer-trust-pills-row" role="list" aria-label="Key highlights">
              <div className="footer-trust-pill" role="listitem">
                <ShieldCheck size={14} color="#FFFFFF" />
                <span>{t.verifiedPlatformPill}</span>
              </div>
              <div className="footer-trust-pill" role="listitem">
                <Sparkles size={14} color="#FFFFFF" />
                <span>{t.freeJoiningPill}</span>
              </div>
            </div>

            {/* In-Page Quick Action Buttons */}
            <div className="footer-quick-actions-row">
              <button
                type="button"
                className="footer-action-btn-secondary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll back to top"
              >
                <ArrowUp size={14} color="#FFFFFF" />
                <span>{t.backToTop}</span>
              </button>

              <button
                type="button"
                className="footer-action-btn-primary"
                onClick={scrollToRegistration}
                aria-label="Jump to registration form"
              >
                <span>{t.joinNow}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Thin Divider Line */}
            <div className="footer-divider-line" aria-hidden="true" />

            {/* Copyright & Bengaluru Signature */}
            <div className="footer-clean-copyright">
              <span>© {new Date().getFullYear()} {t.brandName}.</span>
              <span>•</span>
              <span>{t.builtInBlr}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
