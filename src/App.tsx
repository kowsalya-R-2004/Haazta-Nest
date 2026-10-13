import React, { useState, useEffect, useRef, useMemo } from 'react';
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
import logoImg from './assets/LOGO1.png';
import haatzaWomanImg from './assets/haatza women.jpeg';

import { Language, LANGUAGE_LIST, translations } from './translations';
import { LanguageDropdown } from './components/LanguageDropdown';
import { CITIES_DATA, getCityLabel, getLocalityLabel } from './data/locations';
import { CustomBilingualSelect } from './components/CustomBilingualSelect';
import { getEmployeeStories } from './data/employeeStories';

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

  const t = translations[language] || translations.en;
  const employeeStories = useMemo(() => getEmployeeStories(language), [language]);

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [choresWillingness, setChoresWillingness] = useState<'yes' | 'no' | ''>('');
  const [gender, setGender] = useState<'female' | 'male' | 'other' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  type FormFieldKey = 'name' | 'mobile' | 'city' | 'area' | 'chores' | 'gender';

  const [fieldErrors, setFieldErrors] = useState<{
    name?: boolean;
    mobile?: boolean;
    city?: boolean;
    area?: boolean;
    chores?: boolean;
    gender?: boolean;
  }>({});

  const clearFieldError = (field: FormFieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // Reactive Status Types
  type SuccessStatus = 'new' | 'duplicate' | null;
  type FormErrorStatus = 'enterName' | 'enterMobile' | 'cityRequired' | 'areaRequired' | 'failed' | 'network' | null;

  type ToastState =
    | { type: 'langChanged'; langCode: Language }
    | { type: 'successNew' }
    | { type: 'duplicate' }
    | { type: 'enterName' }
    | { type: 'enterMobile' }
    | { type: 'cityRequired' }
    | { type: 'areaRequired' }
    | { type: 'failed' }
    | { type: 'network' }
    | { type: 'custom'; text: string }
    | null;

  const [successStatus, setSuccessStatus] = useState<SuccessStatus>(null);
  const [formErrorStatus, setFormErrorStatus] = useState<FormErrorStatus>(null);
  const [activeToast, setActiveToast] = useState<ToastState>(null);

  const successTimeoutRef = useRef<number | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  const showToast = (toastState: ToastState) => {
    if (toastTimeoutRef.current !== null) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    setActiveToast(toastState);
    toastTimeoutRef.current = window.setTimeout(() => {
      setActiveToast(null);
      toastTimeoutRef.current = null;
    }, 4000);
  };

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('nest_lang', newLang);
    showToast({ type: 'langChanged', langCode: newLang });
  };

  // Reactively derived banners based on current t (switches instantly on language change)
  const displayedSuccessMessage = useMemo(() => {
    if (successStatus === 'new') return t.regSuccessMessage;
    if (successStatus === 'duplicate') return t.alreadyExistsMessage;
    return null;
  }, [successStatus, t]);

  const displayedFormError = useMemo(() => {
    if (formErrorStatus === 'enterName') return t.enterNameError;
    if (formErrorStatus === 'enterMobile') return t.enterMobileError;
    if (formErrorStatus === 'cityRequired') return t.cityRequiredError;
    if (formErrorStatus === 'areaRequired') return t.areaRequiredError;
    if (formErrorStatus === 'failed') return t.regFailedError;
    if (formErrorStatus === 'network') return t.networkError;
    return null;
  }, [formErrorStatus, t]);

  const displayedToast = useMemo(() => {
    if (!activeToast) return null;
    switch (activeToast.type) {
      case 'langChanged': {
        const langMeta = LANGUAGE_LIST.find((l) => l.code === activeToast.langCode);
        return `${t.languageChangedToast} ${langMeta ? `${langMeta.nativeName} (${langMeta.englishName})` : activeToast.langCode}`;
      }
      case 'successNew':
        return t.regSuccessMessage;
      case 'duplicate':
        return t.alreadyExistsMessage;
      case 'enterName':
        return t.enterNameError;
      case 'enterMobile':
        return t.enterMobileError;
      case 'cityRequired':
        return t.cityRequiredError;
      case 'areaRequired':
        return t.areaRequiredError;
      case 'failed':
        return t.regFailedError;
      case 'network':
        return t.networkError;
      case 'custom':
        return activeToast.text;
      default:
        return null;
    }
  }, [activeToast, t]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current !== null) {
        window.clearTimeout(successTimeoutRef.current);
      }
      if (toastTimeoutRef.current !== null) {
        window.clearTimeout(toastTimeoutRef.current);
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

  const currentCityData = CITIES_DATA.find((c) => c.id === city);

  const handleCityChange = (newCityId: string) => {
    setCity(newCityId);
    setLocality('');
    if (newCityId) {
      clearFieldError('city');
    }
  };

  const cityOptions = CITIES_DATA.map((c) => ({
    value: c.id,
    label: getCityLabel(c, language)
  }));

  const localityOptions = currentCityData
    ? currentCityData.localities.map((loc) => ({
        value: loc.id,
        label: getLocalityLabel(loc, language)
      }))
    : [];

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || successStatus) return;

    if (successTimeoutRef.current !== null) {
      window.clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }

    setFormErrorStatus(null);
    setSuccessStatus(null);

    const trimmedName = fullName.trim();
    const cleanMobile = mobileNumber.replace(/\D/g, '');

    // Form Validation for all required fields
    const newErrors: {
      name?: boolean;
      mobile?: boolean;
      city?: boolean;
      area?: boolean;
      chores?: boolean;
      gender?: boolean;
    } = {};

    if (!trimmedName) {
      newErrors.name = true;
    }
    if (cleanMobile.length !== 10) {
      newErrors.mobile = true;
    }
    if (!city) {
      newErrors.city = true;
    }
    if (!locality) {
      newErrors.area = true;
    }
    if (!choresWillingness) {
      newErrors.chores = true;
    }
    if (!gender) {
      newErrors.gender = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const payload = {
        name: trimmedName,
        mobilenumber: cleanMobile,
        city: city || 'Bengaluru',
        area: locality || (currentCityData?.localities[0]?.id || 'Bellandur'),
        gender: gender === 'female' ? 'Female' : gender === 'male' ? 'Male' : gender === 'other' ? 'Other' : 'Female',
        interest: choresWillingness === 'no' ? 'No' : 'Yes',
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

      if (response.ok && data && (data.success === true || data.alreadyExists === true)) {
        if (data.alreadyExists === true) {
          setSuccessStatus('duplicate');
          setFormErrorStatus(null);
          showToast({ type: 'duplicate' });

          // For duplicate registrations, preserve the entered details
          successTimeoutRef.current = window.setTimeout(() => {
            setSuccessStatus(null);
            setActiveToast(null);
            successTimeoutRef.current = null;
          }, 3500);
        } else {
          // Genuinely new registration
          setSuccessStatus('new');
          setFormErrorStatus(null);
          showToast({ type: 'successNew' });

          // Automatically dismiss success message after 3–4 seconds, reset all form fields to initial state & restore Register Now button
          successTimeoutRef.current = window.setTimeout(() => {
            setSuccessStatus(null);
            setActiveToast(null);
            setFullName('');
            setMobileNumber('');
            setCity('');
            setLocality('');
            setGender('');
            setChoresWillingness('');
            setFieldErrors({});
            successTimeoutRef.current = null;
          }, 3500);
        }
      } else {
        setFormErrorStatus('failed');
        showToast({ type: 'failed' });
      }
    } catch (err) {
      setFormErrorStatus('network');
      showToast({ type: 'network' });
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
      {displayedToast && (
        <div className="toast-notification-banner" role="status" aria-live="polite">
          <CheckCircle2 size={18} color="#10B981" />
          <span>{displayedToast}</span>
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
              headerHint={t.selectLanguageHeader}
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
                  {translations.en.doodleHero}
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

              {displayedFormError && (
                <div className="form-error-alert-banner" role="alert">
                  {displayedFormError}
                </div>
              )}

              {displayedSuccessMessage && (
                <div className="form-success-alert-banner" role="status">
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>{displayedSuccessMessage}</span>
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
                        className={`custom-input-box ${fieldErrors.name ? 'has-error' : ''}`}
                        placeholder={t.fullNamePlaceholder}
                        value={fullName}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFullName(val);
                          if (val.trim()) {
                            clearFieldError('name');
                          }
                        }}
                        aria-invalid={fieldErrors.name ? 'true' : 'false'}
                        aria-describedby={fieldErrors.name ? 'reg-fullname-error' : undefined}
                        required
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      />
                    </div>
                    {fieldErrors.name && (
                      <span className="field-error-text" id="reg-fullname-error" role="alert">
                        {t.enterNameError}
                      </span>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="form-field-group">
                    <label htmlFor="reg-mobile" className="field-label-row">
                      <Phone size={14} color="#7E22CE" />
                      <span>{t.mobileNumberLabel}</span>
                    </label>
                    <div className="input-with-icon-wrap">
                      <input
                        id="reg-mobile"
                        type="tel"
                        className={`custom-input-box ${fieldErrors.mobile ? 'has-error' : ''}`}
                        placeholder={t.mobileNumberPlaceholder}
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setMobileNumber(val);
                          if (val.length === 10) {
                            clearFieldError('mobile');
                          }
                        }}
                        aria-invalid={fieldErrors.mobile ? 'true' : 'false'}
                        aria-describedby={fieldErrors.mobile ? 'reg-mobile-error' : undefined}
                        required
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      />
                    </div>
                    {fieldErrors.mobile && (
                      <span className="field-error-text" id="reg-mobile-error" role="alert">
                        {t.enterMobileError}
                      </span>
                    )}
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
                      placeholder={t.selectCityPlaceholder}
                      onChange={handleCityChange}
                      hasError={!!fieldErrors.city}
                      disabled={isSubmitting || !!displayedSuccessMessage}
                    />
                    {fieldErrors.city && (
                      <span className="field-error-text" id="reg-city-error" role="alert">
                        {t.cityRequiredError}
                      </span>
                    )}
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
                      placeholder={city ? t.selectAreaPlaceholder : t.firstSelectCityPlaceholder}
                      onChange={(newLoc) => {
                        setLocality(newLoc);
                        if (newLoc) {
                          clearFieldError('area');
                        }
                      }}
                      hasError={!!fieldErrors.area}
                      disabled={!city || isSubmitting || !!displayedSuccessMessage}
                    />
                    {fieldErrors.area && (
                      <span className="field-error-text" id="reg-locality-error" role="alert">
                        {t.areaRequiredError}
                      </span>
                    )}
                  </div>

                  {/* Household Chores Willingness */}
                  <div className="form-field-group">
                    <label className="field-label-row">
                      <HelpCircle size={14} color="#7E22CE" />
                      <span>{t.householdChoresLabel}</span>
                    </label>
                    <div className={`segmented-chips-row ${fieldErrors.chores ? 'has-error' : ''}`}>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${choresWillingness === 'yes' ? 'active' : ''}`}
                        onClick={() => {
                          setChoresWillingness('yes');
                          clearFieldError('chores');
                        }}
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      >
                        <span>{t.choresYes}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${choresWillingness === 'no' ? 'active' : ''}`}
                        onClick={() => {
                          setChoresWillingness('no');
                          clearFieldError('chores');
                        }}
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      >
                        <span>{t.choresNo}</span>
                      </button>
                    </div>
                    {fieldErrors.chores && (
                      <span className="field-error-text" id="reg-chores-error" role="alert">
                        {t.choresRequiredError}
                      </span>
                    )}
                  </div>

                  {/* Gender Selector */}
                  <div className="form-field-group">
                    <label className="field-label-row">
                      <User size={14} color="#7E22CE" />
                      <span>{t.genderLabel}</span>
                    </label>
                    <div className={`segmented-chips-row ${fieldErrors.gender ? 'has-error' : ''}`}>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'female' ? 'active' : ''}`}
                        onClick={() => {
                          setGender('female');
                          clearFieldError('gender');
                        }}
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      >
                        <span>{t.genderFemale}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'male' ? 'active' : ''}`}
                        onClick={() => {
                          setGender('male');
                          clearFieldError('gender');
                        }}
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      >
                        <span>{t.genderMale}</span>
                      </button>
                      <button
                        type="button"
                        className={`segmented-chip-btn ${gender === 'other' ? 'active' : ''}`}
                        onClick={() => {
                          setGender('other');
                          clearFieldError('gender');
                        }}
                        disabled={isSubmitting || !!displayedSuccessMessage}
                      >
                        <span>{t.genderOther}</span>
                      </button>
                    </div>
                    {fieldErrors.gender && (
                      <span className="field-error-text" id="reg-gender-error" role="alert">
                        {t.genderRequiredError}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button with Loading State */}
                <button 
                  type="submit" 
                  className="btn-register-now-yellow" 
                  disabled={isSubmitting || !!displayedSuccessMessage}
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
              {employeeStories.map((story, idx) => (
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
              {employeeStories.map((story, idx) => (
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
