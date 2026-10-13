export type Language = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'bn' | 'mr' | 'ml' | 'gu' | 'pa' | 'or' | 'as';

export interface LanguageMeta {
  code: Language;
  nativeName: string;
  englishName: string;
  region: string;
  badge?: string;
}

export const LANGUAGE_LIST: LanguageMeta[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', region: 'All India' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada', region: 'Karnataka', badge: 'Popular in BLR' },
  { code: 'hi', nativeName: 'हिंदी', englishName: 'Hindi', region: 'North & Central India', badge: 'Popular' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil', region: 'Tamil Nadu' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu', region: 'Andhra & Telangana' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', region: 'West Bengal & East' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi', region: 'Maharashtra' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam', region: 'Kerala' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati', region: 'Gujarat' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', region: 'Punjab & North' },
  { code: 'or', nativeName: 'ଓଡ଼ିଆ', englishName: 'Odia', region: 'Odisha' },
  { code: 'as', nativeName: 'অসমীয়া', englishName: 'Assamese', region: 'Assam & North East' },
];

export interface Translations {
  // Navigation
  brandName: string;
  brandTagline: string;
  selectLanguage: string;
  partnerLogin: string;
  openingPartnerLogin: string;

  // Hero Section
  heroHeadline1: string;
  heroHeadline2: string;
  heroHeadlineHighlight: string;
  heroDescription: string;
  trustedPlatform: string;
  flexibleOpportunities: string;
  professionalGrowth: string;
  joinNow: string;
  doodleHero: string;
  womenOnlyProgram: string;

  // Registration Section
  registerTitle: string;
  registerSubtitle: string;
  inviteNamaste: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  mobileNumberLabel: string;
  mobileNumberPlaceholder: string;
  cityLabel: string;
  areaLabel: string;
  householdChoresLabel: string;
  choresYes: string;
  choresNo: string;
  genderLabel: string;
  genderFemale: string;
  genderMale: string;
  genderOther: string;
  registerNowBtn: string;
  registeringBtn: string;
  privacyConscious: string;
  noJoiningFee: string;
  existingExpertPrompt: string;
  loginHere: string;

  // Validation & Form States
  enterNameError: string;
  enterMobileError: string;
  welcomePartner: string;
  regSuccessDesc: string;
  regAnotherPerson: string;

  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Benefits (6 Cards)
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  benefit4Title: string;
  benefit4Desc: string;
  benefit5Title: string;
  benefit5Desc: string;
  benefit6Title: string;
  benefit6Desc: string;

  // Why Experts Trust Nest Services (4 Cards)
  whyTrustTitle: string;
  whyTrustSubtitle: string;
  trust1Title: string;
  trust1Desc: string;
  trust2Title: string;
  trust2Desc: string;
  trust3Title: string;
  trust3Desc: string;
  trust4Title: string;
  trust4Desc: string;

  // Trust Highlights (4 Items)
  highlight1: string;
  highlight2: string;
  highlight3: string;
  highlight4: string;

  // Expert Stories & Testimonials
  storiesTitle: string;
  storiesSubtitle: string;
  storiesSampleTag: string;
  story1Quote: string;
  story1Author: string;
  story1Category: string;
  story2Quote: string;
  story2Author: string;
  story2Category: string;
  story3Quote: string;
  story3Author: string;
  story3Category: string;
  story4Quote: string;
  story4Author: string;
  story4Category: string;

  // FAQs (8 Questions)
  faqsTitle: string;
  faqsSubtitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
  faq7Q: string;
  faq7A: string;
  faq8Q: string;
  faq8A: string;

  // Final CTA
  ctaHeading: string;
  ctaSub: string;
  ctaButton: string;

  // Footer
  footerTagline: string;
  footerHome: string;
  footerHowItWorks: string;
  footerBenefits: string;
  footerWhyJoinUs: string;
  footerFaqs: string;
  footerContact: string;
  footerPrivacy: string;
  footerTerms: string;
  footerSupportInfo: string;
  backToTop: string;
  freeJoiningPill: string;
  verifiedPlatformPill: string;
  builtInBlr: string;
}

const en: Translations = {
  brandName: 'Nest Services',
  brandTagline: 'Trusted People. Happier Homes.',
  selectLanguage: 'Language',
  partnerLogin: 'Partner Login',
  openingPartnerLogin: 'Opening partner portal...',

  heroHeadline1: 'Find Meaningful',
  heroHeadline2: 'Work & Make a',
  heroHeadlineHighlight: 'Better Tomorrow',
  heroDescription: 'Join Nest Services and become a home-service expert. Build your skills, connect with customers in your area, and grow your professional career.',
  trustedPlatform: 'Trusted Platform',
  flexibleOpportunities: 'Flexible Work Opportunities',
  professionalGrowth: 'Professional Growth',
  joinNow: 'Join Now',
  doodleHero: 'Skilled People\nBuild Better Homes ⤷',
  womenOnlyProgram: 'Empowering Women Through Trusted Career Opportunities',

  registerTitle: 'Become a Nest Service Expert',
  registerSubtitle: 'Fill in your basic details to begin your journey with Nest Services.',
  inviteNamaste: 'Join our home-services expert team',
  fullNameLabel: 'Full Name *',
  fullNamePlaceholder: 'Enter your full name',
  mobileNumberLabel: 'Mobile Number *',
  mobileNumberPlaceholder: '10-digit Indian mobile number',
  cityLabel: 'City *',
  areaLabel: 'Area / Locality *',
  householdChoresLabel: 'Household Chores Willingness *',
  choresYes: 'Yes',
  choresNo: 'No',
  genderLabel: 'Gender *',
  genderFemale: 'Female',
  genderMale: 'Male',
  genderOther: 'Other',
  registerNowBtn: 'Register Now',
  registeringBtn: 'Registering...',
  privacyConscious: 'Privacy-conscious registration',
  noJoiningFee: 'No joining fee (Subject to platform policy)',
  existingExpertPrompt: 'Existing expert?',
  loginHere: 'Login here',

  enterNameError: 'Please enter your full name.',
  enterMobileError: 'Please enter a valid 10-digit Indian mobile number.',
  welcomePartner: 'Welcome to Nest Services',
  regSuccessDesc: 'Your registration details have been received. Our partner onboarding team will contact you regarding next steps.',
  regAnotherPerson: 'Register another person',

  howItWorksTitle: 'How It Works',
  howItWorksSubtitle: 'Three simple steps to start providing services with Nest.',
  step1Title: 'Step 1 — Register',
  step1Desc: 'Share your basic details and tell us which household services you can provide.',
  step2Title: 'Step 2 — Training & Verification',
  step2Desc: 'Complete the applicable onboarding, training, and identity verification requirements.',
  step3Title: 'Step 3 — Accept Bookings & Grow',
  step3Desc: 'Connect with customers, manage service requests, deliver quality work, and build your professional reputation.',

  benefitsTitle: 'Benefits of Joining Nest',
  benefitsSubtitle: 'Explore opportunities designed for professional development, flexibility, and steady connection with customers.',
  benefit1Title: 'Flexible Work Opportunities',
  benefit1Desc: 'Explore instant and scheduled service opportunities based on your availability.',
  benefit2Title: 'Earning Opportunities',
  benefit2Desc: 'Connect with customers and grow your income through completed service bookings.',
  benefit3Title: 'Professional Training',
  benefit3Desc: 'Develop your household service skills and learn good hygiene and service practices through available training.',
  benefit4Title: 'Multiple Service Categories',
  benefit4Desc: 'Explore mopping and dusting, meal assistance, bathroom cleaning, kitchen cleaning, and laundry services.',
  benefit5Title: 'Customer Connections',
  benefit5Desc: 'Showcase your skills and build relationships with customers through reliable service.',
  benefit6Title: 'Career Growth',
  benefit6Desc: 'Build your experience, strengthen your professional reputation, and explore future opportunities.',

  whyTrustTitle: 'Why Experts Trust Nest Services',
  whyTrustSubtitle: 'Built around professional skills, reliable service, safety, and opportunities for growth.',
  trust1Title: 'Verified Professionals',
  trust1Desc: 'Support customer confidence through an appropriate identity and verification process.',
  trust2Title: 'Professional Standards',
  trust2Desc: 'Encourage quality service, hygiene, punctuality, and respectful customer interactions.',
  trust3Title: 'Transparent Payments',
  trust3Desc: 'Provide clear information about applicable service rates, deductions, and payment schedules.',
  trust4Title: 'Professional Support',
  trust4Desc: 'Make it easy for experts to seek assistance and report service-related issues.',

  highlight1: 'Professional Training',
  highlight2: 'Identity Verification',
  highlight3: 'Clear Payment Information',
  highlight4: 'Customer-Focused Service',

  storiesTitle: 'Real People. Real Stories.',
  storiesSubtitle: 'Learn how household service professionals build their careers and work with customers.',
  storiesSampleTag: 'Sample Partner Experiences • Demonstration Only',
  story1Quote: 'Working with scheduled and on-demand household visits has helped me build steady professional experience and routine.',
  story1Author: 'Anita K.',
  story1Category: 'Floor Mopping & Dusting',
  story2Quote: 'Structured hygiene guidelines and clear customer communication make it straightforward to deliver quality kitchen help.',
  story2Author: 'Priya S.',
  story2Category: 'Meal Assistance & Prep',
  story3Quote: 'The platform helps me connect with households in my locality while allowing me to manage my schedule effectively.',
  story3Author: 'Sunita D.',
  story3Category: 'Complete Home Care',
  story4Quote: 'Clear service guidelines, punctual payment support, and helpful coordinators make it easy to deliver quality bathroom and kitchen cleaning.',
  story4Author: 'Kavita M.',
  story4Category: 'Kitchen & Bathroom Care',

  faqsTitle: 'Frequently Asked Questions',
  faqsSubtitle: 'Find answers to common questions about joining Nest Services as an expert.',
  faq1Q: 'How do I join Nest Services?',
  faq1A: 'You can submit your basic information through the registration form on this page. Our partner onboarding team reviews submissions and guides applicants through the orientation and verification process.',
  faq2Q: 'Do I need previous experience?',
  faq2A: 'Prior domestic service experience is valued, but structured training on service checklists, hygiene protocols, and respectful customer communication is provided as part of onboarding.',
  faq3Q: 'What household services can I provide?',
  faq3A: 'Nest Services covers household chores including floor mopping and dusting, meal assistance and kitchen prep, bathroom cleaning, kitchen cleaning, and laundry services.',
  faq4Q: 'How do instant and scheduled bookings work?',
  faq4A: 'Instant bookings allow available experts nearby to accept immediate customer requests, while scheduled bookings let you plan sessions booked in advance for designated time windows.',
  faq5Q: 'What documents are required?',
  faq5A: 'You will need government-issued identity documentation (such as an Aadhaar Card) for verification, bank account details for direct payment processing, and an active mobile number.',
  faq6Q: 'How are payments calculated?',
  faq6A: 'Payments are determined by completed service bookings according to applicable rate cards, category types, and transparent platform terms communicated during onboarding.',
  faq7Q: 'Are working hours fixed?',
  faq7A: 'No, working hours are flexible. You can declare your availability for morning, afternoon, or full-day sessions according to your personal routine.',
  faq8Q: 'Is there a registration fee?',
  faq8A: 'There is no registration fee charged to apply as an expert partner with Nest Services. Any onboarding materials and basic training guidelines are provided during orientation.',

  ctaHeading: 'Join Nest Services Today',
  ctaSub: 'Take the next step towards developing your skills, connecting with customers, and building your professional future.',
  ctaButton: 'Register Now',

  footerTagline: 'Your Skills. Your Growth. Your Opportunity',
  footerHome: 'Home',
  footerHowItWorks: 'How It Works',
  footerBenefits: 'Benefits',
  footerWhyJoinUs: 'Why Join Us',
  footerFaqs: 'FAQs',
  footerContact: 'Contact',
  footerPrivacy: 'Privacy Policy',
  footerTerms: 'Terms and Conditions',
  footerSupportInfo: 'Support & queries: Partner onboarding assistance is provided upon application registration.',
  backToTop: 'Back to Top ↑',
  freeJoiningPill: '100% Free Joining • No Brokerage',
  verifiedPlatformPill: 'Verified & Safe Platform',
  builtInBlr: 'Built with 💜 in Bengaluru'
};

const kn: Translations = {
  ...en,
  heroHeadline1: 'ಅರ್ಥಪೂರ್ಣ ಕೆಲಸ ಪಡೆಯಿರಿ',
  heroHeadline2: 'ಮತ್ತು ನಿರ್ಮಿಸಿ ನಿಮ್ಮದೇ ಆದ',
  heroHeadlineHighlight: 'ಉತ್ತಮ ನಾಳೆ',
  heroDescription: 'ನೆಸ್ಟ್ ಸರ್ವಿಸಸ್‌ಗೆ ಸೇರಿ ಮತ್ತು ಹೋಮ್-ಸರ್ವಿಸ್ ಎಕ್ಸ್‌ಪರ್ಟ್ ಆಗಿ. ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಮುನ್ನಡೆಸಿ.',
  trustedPlatform: 'ವಿಶ್ವಾಸಾರ್ಹ ವೇದಿಕೆ',
  flexibleOpportunities: 'ಹೊಂದಿಕೊಳ್ಳುವ ಕೆಲಸದ ಅವಕಾಶಗಳು',
  professionalGrowth: 'ವೃತ್ತಿಪರ ಬೆಳವಣಿಗೆ',
  joinNow: 'ಈಗಲೇ ಸೇರಿ',
  womenOnlyProgram: 'ವಿಶ್ವಾಸಾರ್ಹ ವೃತ್ತಿ ಅವಕಾಶಗಳ ಮೂಲಕ ಮಹಿಳೆಯರ ಸಬಲೀಕರಣ',
  registerTitle: 'ನೆಸ್ಟ್ ಸರ್ವಿಸ್ ಎಕ್ಸ್‌ಪರ್ಟ್ ಆಗಿ',
  registerSubtitle: 'ನೆಸ್ಟ್ ಸರ್ವಿಸಸ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಮೂಲ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
  fullNameLabel: 'ಪೂರ್ಣ ಹೆಸರು *',
  fullNamePlaceholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
  mobileNumberLabel: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *',
  mobileNumberPlaceholder: '10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
  cityLabel: 'ನಗರ *',
  areaLabel: 'ಪ್ರದೇಶ / ಬಡಾವಣೆ *',
  householdChoresLabel: 'ಮನೆ ಕೆಲಸ ಮಾಡಲು ಸಿದ್ಧತೆ *',
  choresYes: 'ಹೌದು',
  choresNo: 'ಇಲ್ಲ',
  genderLabel: 'ಲಿಂಗ *',
  genderFemale: 'ಮಹಿಳೆ',
  genderMale: 'ಪುರುಷ',
  genderOther: 'ಇತರ',
  registerNowBtn: 'ಈಗಲೇ ನೋಂದಾಯಿಸಿ',
  registeringBtn: 'ನೋಂದಾಯಿಸಲಾಗುತ್ತಿದೆ...',
  privacyConscious: 'ಗೌಪ್ಯತೆ-ಕೇಂದ್ರಿತ ನೋಂದಣಿ',
  noJoiningFee: 'ಯಾವುದೇ ನೋಂದಣಿ ಶುಲ್ಕವಿಲ್ಲ',
  existingExpertPrompt: 'ಈಗಾಗಲೇ ಎಕ್ಸ್‌ಪರ್ಟ್ ಆಗಿದ್ದೀರಾ?',
  loginHere: 'ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ',
  howItWorksTitle: 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
  howItWorksSubtitle: 'ನೆಸ್ಟ್‌ನೊಂದಿಗೆ ಸೇವೆ ಪ್ರಾರಂಭಿಸಲು 3 ಸುಲಭ ಹಂತಗಳು.',
  benefitsTitle: 'ನೆಸ್ಟ್ ಸೇರುವ ಪ್ರಯೋಜನಗಳು',
  whyTrustTitle: 'ಎಕ್ಸ್‌ಪರ್ಟ್‌ಗಳು ನೆಸ್ಟ್ ಅನ್ನು ಏಕೆ ನಂಬುತ್ತಾರೆ',
  whyTrustSubtitle: 'ವೃತ್ತಿಪರ ಕೌಶಲ್ಯಗಳು, ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆ, ಸುರಕ್ಷತೆ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಆಧಾರದ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
  faqsTitle: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
  faqsSubtitle: 'ನೆಸ್ಟ್ ಸರ್ವಿಸಸ್‌ಗೆ ಸೇರುವ ಕುರಿತು ಪ್ರಮುಖ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ.',
  ctaHeading: 'ಇಂದೇ ನೆಸ್ಟ್ ಸರ್ವಿಸಸ್‌ಗೆ ಸೇರಿ',
  ctaSub: 'ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು ಮತ್ತು ವೃತ್ತಿಪರ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಲು ಮುಂದಿನ ಹೆಜ್ಜೆ ಇರಿಸಿ.',
  ctaButton: 'ಈಗಲೇ ನೋಂದಾಯಿಸಿ',
  backToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ ↑',
  freeJoiningPill: '100% ಉಚಿತ ನೋಂದಣಿ • ಶುಲ್ಕವಿಲ್ಲ',
  verifiedPlatformPill: 'ಸುರಕ್ಷಿತ & ವಿಶ್ವಾಸಾರ್ಹ',
  builtInBlr: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ 💜 ಪ್ರೀತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ'
};

const hi: Translations = {
  ...en,
  heroHeadline1: 'सम्मानजनक काम पाएं',
  heroHeadline2: 'और बनाएं अपना',
  heroHeadlineHighlight: 'बेहतर कल',
  heroDescription: 'नेस्ट सर्विसेज से जुड़ें और एक होम-सर्विस एक्सपर्ट बनें। अपना कौशल बढ़ाएं, अपने क्षेत्र के ग्राहकों से जुड़ें और अपने करियर को आगे बढ़ाएं।',
  trustedPlatform: 'भरोसेमंद प्लेटफॉर्म',
  flexibleOpportunities: 'लचीले काम के अवसर',
  professionalGrowth: 'पेशेवर विकास',
  joinNow: 'अभी जुड़ें',
  womenOnlyProgram: 'भरोसेमंद करियर अवसरों के माध्यम से महिलाओं का सशक्तिकरण',
  registerTitle: 'नेस्ट सर्विस एक्सपर्ट बनें',
  registerSubtitle: 'नेस्ट सर्विसेज के साथ अपनी यात्रा शुरू करने के लिए अपना विवरण भरें।',
  fullNameLabel: 'पूरा नाम *',
  fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
  mobileNumberLabel: 'मोबाइल नंबर *',
  mobileNumberPlaceholder: '10 अंकों का मोबाइल नंबर',
  cityLabel: 'शहर *',
  areaLabel: 'इलाका / क्षेत्र *',
  householdChoresLabel: 'घरेलू काम करने की इच्छा *',
  choresYes: 'हाँ',
  choresNo: 'नहीं',
  genderLabel: 'लिंग *',
  genderFemale: 'महिला',
  genderMale: 'पुरुष',
  genderOther: 'अन्य',
  registerNowBtn: 'अभी रजिस्टर करें',
  registeringBtn: 'रजिस्टर हो रहा है...',
  privacyConscious: 'गोपनीयता-सजग पंजीकरण',
  noJoiningFee: 'कोई जॉइनिंग फीस नहीं',
  existingExpertPrompt: 'पहले से एक्सपर्ट हैं?',
  loginHere: 'यहाँ लॉगिन करें',
  howItWorksTitle: 'यह कैसे काम करता है',
  howItWorksSubtitle: 'नेस्ट के साथ काम शुरू करने के 3 आसान कदम।',
  benefitsTitle: 'नेस्ट से जुड़ने के फायदे',
  whyTrustTitle: 'एक्सपर्ट्स नेस्ट पर क्यों भरोसा करते हैं',
  whyTrustSubtitle: 'पेशेवर कौशल, विश्वसनीय सेवा, सुरक्षा और विकास के अवसरों पर आधारित।',
  faqsTitle: 'अक्सर पूछे जाने वाले प्रश्न',
  faqsSubtitle: 'नेस्ट सर्विसेज में शामिल होने के बारे में महत्वपूर्ण जानकारी।',
  ctaHeading: 'आज ही नेस्ट सर्विसेज से जुड़ें',
  ctaSub: 'अपने कौशल को निखारने और एक बेहतर भविष्य बनाने की ओर कदम बढ़ाएं।',
  ctaButton: 'अभी रजिस्टर करें',
  backToTop: 'वापस ऊपर जाएं ↑',
  freeJoiningPill: '100% मुफ्त पंजीकरण • कोई एजेंट फीस नहीं',
  verifiedPlatformPill: 'सत्यापित और सुरक्षित प्लेटफॉर्म',
  builtInBlr: 'बेंगलुरु में 💜 से निर्मित'
};

const ta: Translations = {
  ...en,
  heroHeadline1: 'மரியாதையான வேலை பெற்று',
  heroHeadline2: 'உருவாக்குங்கள் உங்கள்',
  heroHeadlineHighlight: 'சிறந்த நாளை',
  heroDescription: 'நெஸ்ட் சர்வீசஸில் இணைந்து வீட்டுச் சேவை நிபுணராகுங்கள். உங்கள் திறமைகளை வளர்த்து, உள்ளூர் வாடிக்கையாளர்களுடன் இணைந்து பயன் பெறுங்கள்.',
  trustedPlatform: 'நம்பகமான தளம்',
  flexibleOpportunities: 'வளைந்து கொடுக்கும் பணி வாய்ப்புகள்',
  professionalGrowth: 'தொழில்முறை வளர்ச்சி',
  joinNow: 'இப்போதே சேருங்கள்',
  womenOnlyProgram: 'நம்பகமான தொழில் வாய்ப்புகள் மூலம் பெண்களுக்கு அதிகாரமளித்தல்',
  registerTitle: 'நெஸ்ட் சர்வீஸ் நிபுணராகுங்கள்',
  registerSubtitle: 'நெஸ்ட் சர்வீசஸுடன் உங்கள் பயணத்தைத் தொடங்க அடிப்படை விவரங்களைப் பதிவு செய்யுங்கள்.',
  fullNameLabel: 'முழு பெயர் *',
  mobileNumberLabel: 'மொபைல் எண் *',
  cityLabel: 'நகரம் *',
  areaLabel: 'பகுதி *',
  householdChoresLabel: 'வீட்டு வேலை செய்ய விருப்பம் *',
  choresYes: 'ஆம்',
  choresNo: 'இல்லை',
  genderLabel: 'பாலினம் *',
  genderFemale: 'பெண்',
  genderMale: 'ஆண்',
  genderOther: 'மற்றவை',
  registerNowBtn: 'இப்போதே பதிவு செய்யுங்கள்',
  registeringBtn: 'பதிவு செய்யப்படுகிறது...',
  privacyConscious: 'பாதுகாப்பான பதிவு',
  noJoiningFee: 'சேர்க்கை கட்டணம் இல்லை',
  existingExpertPrompt: 'ஏற்கனவே பதிந்துள்ளீர்களா?',
  loginHere: 'இங்கே உள்நுழையவும்',
  howItWorksTitle: 'இது எவ்வாறு செயல்படுகிறது',
  benefitsTitle: 'நெஸ்ட்டில் இணைவதன் நன்மைகள்',
  whyTrustTitle: 'நெஸ்ட்டை நிபுணர்கள் ஏன் நம்புகிறார்கள்',
  faqsTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  ctaHeading: 'இன்றே நெஸ்ட் சர்வீசஸில் இணையுங்கள்',
  ctaButton: 'இப்போதே பதிவு செய்யுங்கள்',
  backToTop: 'மேலே செல்லவும் ↑',
  freeJoiningPill: '100% இலவச பதிவு • கட்டணம் இல்லை',
  verifiedPlatformPill: 'பாதுகாப்பான மற்றும் சரிபார்க்கப்பட்ட தளம்',
  builtInBlr: 'பெங்களூரில் 💜 உடன் உருவாக்கப்பட்டது'
};

const te: Translations = {
  ...en,
  heroHeadline1: 'అర్థవంతమైన పనిని పొంది',
  heroHeadline2: 'నిర్మించుకోండి మీ',
  heroHeadlineHighlight: 'మంచి భవిష్యత్తు',
  heroDescription: 'నెస్ట్ సర్వీసెస్‌లో చేరి హోమ్ సర్వీస్ నిపుణుడిగా మారండి. మీ నైపుణ్యాలను మెరుగుపరుచుకుని గౌరవప్రదమైన వృత్తిని నిర్మించుకోండి.',
  trustedPlatform: 'విశ్వసనీయ వేదిక',
  flexibleOpportunities: 'సౌకర్యవంతమైన పని అవకాశాలు',
  professionalGrowth: 'వృత్తిపరమైన అభివృద్ధి',
  joinNow: 'ఇప్పుడే చేరండి',
  womenOnlyProgram: 'విశ్వసనీయ వృత్తి అవకాశాల ద్వారా మహిళల సాధికారత',
  registerTitle: 'నెస్ట్ సర్వీస్ ఎక్స్‌పర్ట్ అవ్వండి',
  registerSubtitle: 'నెస్ట్ సర్వీసెస్‌తో మీ ప్రయాణాన్ని ప్రారంభించడానికి వివరాలను పూరించండి.',
  fullNameLabel: 'పూర్తి పేరు *',
  mobileNumberLabel: 'మొబైల్ నంబర్ *',
  cityLabel: 'నగరం *',
  areaLabel: 'ప్రాంతం *',
  householdChoresLabel: 'ఇంటి పనులకు సంసిద్ధత *',
  choresYes: 'అవును',
  choresNo: 'లేదు',
  genderLabel: 'లింగం *',
  genderFemale: 'మహిళ',
  genderMale: 'పురుషుడు',
  genderOther: 'ఇతరులు',
  registerNowBtn: 'ఇప్పుడే నమోదు చేసుకోండి',
  registeringBtn: 'నమోదు అవుతోంది...',
  privacyConscious: 'గోప్యతతో కూడిన నమోదు',
  noJoiningFee: 'ఎలాంటి చేరిక రుసుము లేదు',
  existingExpertPrompt: 'ఇప్పటికే ఎక్స్‌పర్ట్‌గా ఉన్నారా?',
  loginHere: 'ఇక్కడ లాగిన్ అవ్వండి',
  howItWorksTitle: 'ఇది ఎలా పనిచేస్తుంది',
  benefitsTitle: 'నెస్ట్‌లో చేరడం వల్ల కలిగే ప్రయోజనాలు',
  whyTrustTitle: 'నిపుణులు నెస్ట్‌ను ఎందుకు విశ్వసిస్తారు',
  faqsTitle: 'తరచుగా అడిగే ప్రశ్నలు',
  ctaHeading: 'ఈరోజే నెస్ట్ సర్వీసెస్‌లో చేరండి',
  ctaButton: 'ఇప్పుడే నమోదు చేసుకోండి',
  backToTop: 'పైకి వెళ్లండి ↑',
  freeJoiningPill: '100% ఉచిత చేరిక • ఎలాంటి రుసుము లేదు',
  verifiedPlatformPill: 'సురక్షితమైన మరియు ధృవీకరించబడిన వేదిక',
  builtInBlr: 'బెంగళూరులో 💜 తో నిర్మించబడింది'
};

const bn: Translations = {
  ...en,
  heroHeadline1: 'মর্যাদাপূর্ণ কাজ পান',
  heroHeadline2: 'ও গড়ে তুলুন একটি',
  heroHeadlineHighlight: 'উজ্জ্বল ভবিষ্যৎ',
  heroDescription: 'নেস্ট সার্ভিসেসে যোগ দিন এবং একজন হোম সার্ভিস এক্সপার্ট হন। আপনার দক্ষতা বাড়ান এবং উজ্জ্বল ক্যারিয়ার গড়ে তুলুন।',
  trustedPlatform: 'বিশ্বস্ত প্ল্যাটফর্ম',
  flexibleOpportunities: 'সুবিধাজনক কাজের সুযোগ',
  professionalGrowth: 'পেশাদার উন্নতি',
  joinNow: 'এখনই যোগ দিন',
  womenOnlyProgram: 'বিশ্বস্ত ক্যারিয়ারের সুযোগের মাধ্যমে নারীদের ক্ষমতায়ন',
  registerTitle: 'নেস্ট সার্ভিস এক্সপার্ট হন',
  registerSubtitle: 'নেস্ট সার্ভিসেসে যোগ দিতে আপনার প্রাথমিক তথ্য দিন।',
  fullNameLabel: 'পুরো নাম *',
  mobileNumberLabel: 'মোবাইল নম্বর *',
  cityLabel: 'শহর *',
  areaLabel: 'এলাকা *',
  householdChoresLabel: 'গৃহস্থালির কাজের সম্মতি *',
  choresYes: 'হ্যাঁ',
  choresNo: 'না',
  genderLabel: 'লিঙ্গ *',
  genderFemale: 'মহিলা',
  genderMale: 'পুরুষ',
  genderOther: 'অন্যান্য',
  registerNowBtn: 'এখনই রেজিস্টার করুন',
  registeringBtn: 'রেজিস্টার হচ্ছে...',
  privacyConscious: 'নিরাপদ ও গোপনীয় রেজিস্ট্রেশন',
  noJoiningFee: 'কোনো ফি নেই',
  existingExpertPrompt: 'ইতিমধ্যেই রেজিস্টার করেছেন?',
  loginHere: 'এখানে লগইন করুন',
  howItWorksTitle: 'এটি কীভাবে কাজ করে',
  benefitsTitle: 'নেস্টে যোগদানের সুবিধা',
  whyTrustTitle: 'কেন কর্মীরা নেস্টকে বিশ্বাস করেন',
  faqsTitle: 'সাধারণ প্রশ্নাবলী',
  ctaHeading: 'আজই নেস্ট সার্ভিসেসে যোগ দিন',
  ctaButton: 'এখনই রেজিস্টার করুন',
  backToTop: 'উপরে যান ↑',
  freeJoiningPill: '১০০% বিনামূল্যে যোগদান • কোনো ফি নেই',
  verifiedPlatformPill: 'যাচাইকৃত ও নিরাপদ প্ল্যাটফর্ম',
  builtInBlr: 'বেঙ্গালুরুতে 💜 দিয়ে নির্মিত'
};

const mr: Translations = {
  ...en,
  heroHeadline1: 'सन्मानजनक काम मिळवा',
  heroHeadline2: 'आणि घडवा स्वतःचे',
  heroHeadlineHighlight: 'उज्ज्वल भविष्य',
  heroDescription: 'नेस्ट सर्व्हिसेसमध्ये सामील व्हा आणि एक होम सर्व्हिस एक्सपर्ट बना. आपले कौशल्य वाढवा आणि करिअरमध्ये प्रगती करा.',
  trustedPlatform: 'विश्वासू प्लॅटफॉर्म',
  flexibleOpportunities: 'लवचिक कामाच्या संधी',
  professionalGrowth: 'व्यावसायिक प्रगती',
  joinNow: 'आता सामील व्हा',
  womenOnlyProgram: 'विश्वासार्ह करिअर संधींद्वारे महिलांचे सक्षमीकरण',
  registerTitle: 'नेस्ट सर्व्हिस एक्सपर्ट बना',
  registerSubtitle: 'नेस्ट सर्व्हिसेससोबत आपला प्रवास सुरू करण्यासाठी आपले तपशील भरा.',
  fullNameLabel: 'पूर्ण नाव *',
  mobileNumberLabel: 'मोबाईल नंबर *',
  cityLabel: 'शहर *',
  areaLabel: 'परिसर *',
  householdChoresLabel: 'घरकामाची तयारी *',
  choresYes: 'होय',
  choresNo: 'नाही',
  genderLabel: 'लिंग *',
  genderFemale: 'महिला',
  genderMale: 'पुरुष',
  genderOther: 'इतर',
  registerNowBtn: 'आताच नोंदणी करा',
  registeringBtn: 'नोंदणी होत आहे...',
  privacyConscious: 'गोपनीयता-केंद्रित नोंदणी',
  noJoiningFee: 'नोंदणी फी नाही',
  existingExpertPrompt: 'आधीच नोंदणी केली आहे का?',
  loginHere: 'येथे लॉगिन करा',
  howItWorksTitle: 'हे कसे कार्य करते',
  benefitsTitle: 'नेस्टमध्ये सामील होण्याचे फायदे',
  whyTrustTitle: 'सहकारी नेस्टवर का विश्वास ठेवतात',
  faqsTitle: 'वारंवार विचारले जाणारे प्रश्न',
  ctaHeading: 'आजच नेस्ट सर्व्हिसेसमध्ये सामील व्हा',
  ctaButton: 'आताच नोंदणी करा',
  backToTop: 'वर जा ↑',
  freeJoiningPill: '१००% मोफत नोंदणी • कोणतेही शुल्क नाही',
  verifiedPlatformPill: 'सत्यापित आणि सुरक्षित प्लॅटफॉर्म',
  builtInBlr: 'बेंगळुरूमध्ये 💜 ने निर्मित'
};

const ml: Translations = { ...en };
const gu: Translations = { ...en };
const pa: Translations = { ...en };
const or: Translations = { ...en };
const as: Translations = { ...en };

export const translations: Record<Language, Translations> = {
  en,
  kn,
  hi,
  ta,
  te,
  bn,
  mr,
  ml,
  gu,
  pa,
  or,
  as
};
