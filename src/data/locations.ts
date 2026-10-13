import { Language } from '../translations';

export interface LocationItem {
  id: string;
  en: string;
  translations?: Partial<Record<Language, string>>;
}

export interface CityData {
  id: string;
  en: string;
  translations: Partial<Record<Language, string>>;
  localities: LocationItem[];
}

export const CITIES_DATA: CityData[] = [
  {
    id: 'Bengaluru',
    en: 'Bengaluru',
    translations: {
      hi: 'बैंगलोर',
      kn: 'ಬೆಂಗಳೂರು',
      te: 'బెంగళూరు',
      ta: 'பெங்களூரு',
      mr: 'बंगळुरू',
      bn: 'বেঙ্গালুরু',
      gu: 'બેંગલુરુ',
      ml: 'ബെംഗളൂരു',
      pa: 'ਬੰਗਲੌਰ',
      as: 'বেংগালুৰু',
      or: 'ବେଙ୍ଗାଲୁରୁ'
    },
    localities: [
      { id: 'Bellandur', en: 'Bellandur', translations: { hi: 'बेलंदूर', kn: 'ಬೆಳ್ಳಂದೂರು', te: 'బెల్లందూరు', ta: 'பெல்லந்தூர்', mr: 'बेलंदूर' } },
      { id: 'HSR Layout', en: 'HSR Layout', translations: { hi: 'एचएसआर लेआउट', kn: 'ಹೆಚ್.ಎಸ್.ಆರ್ ಲೇಔಟ್', te: 'హెచ్ఎస్ఆర్ లేఅవుట్', ta: 'எச்எஸ்ஆர் லேஅவுட்', mr: 'एचएसआर लेआउट' } },
      { id: 'Koramangala', en: 'Koramangala', translations: { hi: 'कोरमंगला', kn: 'ಕೋರಮಂಗಲ', te: 'కోరమంగళ', ta: 'கோரமங்களா', mr: 'कोरमंगला' } },
      { id: 'Indiranagar', en: 'Indiranagar', translations: { hi: 'इंदिरानगर', kn: 'ಇಂದಿರಾನಗರ', te: 'ఇందిరానగర్', ta: 'இந்திரா நகர்', mr: 'इंदिरानगर' } },
      { id: 'Whitefield', en: 'Whitefield', translations: { hi: 'व्हाइटफील्ड', kn: 'ವೈಟ್‌ಫೀಲ್ಡ್', te: 'వైట్‌ఫీల్ಡ್', ta: 'ஒயிட்பீல்ட்', mr: 'व्हाइटफील्ड' } },
      { id: 'Marathahalli', en: 'Marathahalli', translations: { hi: 'मराठाहल्ली', kn: 'ಮಾರತಹಳ್ಳಿ', te: 'మారతಹల్లి', ta: 'மாரத்தஹள்ளி', mr: 'मराठाहल्ली' } },
      { id: 'Electronic City', en: 'Electronic City', translations: { hi: 'इलेक्ट्रॉनिक सिटी', kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ', te: 'ఎలక్ట్రానిక్ సిటీ', ta: 'எலக்ட்ரானிக் சிட்டி', mr: 'इलेक्ट्रॉनिक सिटी' } },
      { id: 'Hebbal', en: 'Hebbal', translations: { hi: 'हेब्बाल', kn: 'ಹೆಬ್ಬಾಳ', te: 'హెబ్బాల్', ta: 'ஹெப்பால்', mr: 'हेब्बाल' } },
      { id: 'Jayanagar', en: 'Jayanagar', translations: { hi: 'जयनगर', kn: 'ಜಯನಗರ', te: 'జయనగర్', ta: 'ஜெயநகர்', mr: 'जयनगर' } },
      { id: 'BTM Layout', en: 'BTM Layout', translations: { hi: 'बीटीएम लेआउट', kn: 'ಬಿಟಿಎಂ ಲೇಔಟ್', te: 'బిటిఎం లేఅవుట్', ta: 'பிடிஎம் ಲೇஅவுட்', mr: 'बीटीएम लेआउट' } }
    ]
  },
  {
    id: 'Mumbai',
    en: 'Mumbai',
    translations: {
      hi: 'मुंबई',
      kn: 'ಮುಂಬೈ',
      te: 'ముంబై',
      ta: 'மும்பை',
      mr: 'मुंबई',
      bn: 'মুম্বাই',
      gu: 'મુંબઈ',
      ml: 'മുംബൈ',
      pa: 'ਮੁੰਬਈ',
      as: 'মুম্বাই',
      or: 'ମୁମ୍ବାଇ'
    },
    localities: [
      { id: 'Andheri West', en: 'Andheri West', translations: { hi: 'अंधेरी पश्चिम', kn: 'ಅಂಧೇರಿ ಪಶ್ಚಿಮ', mr: 'अंधेरी पश्चिम' } },
      { id: 'Bandra', en: 'Bandra', translations: { hi: 'बांद्रा', kn: 'ಬಾಂದ್ರಾ', mr: 'वांद्रे' } },
      { id: 'Powai', en: 'Powai', translations: { hi: 'पवई', kn: 'ಪೊವೈ', mr: 'पवई' } },
      { id: 'Goregaon', en: 'Goregaon', translations: { hi: 'गोरेगांव', kn: 'ಗೊರೆಗಾಂವ್', mr: 'गोरेगाव' } },
      { id: 'Borivali', en: 'Borivali', translations: { hi: 'बोरिवली', kn: 'ಬೊರಿವಲಿ', mr: 'बोरिवली' } },
      { id: 'Malad', en: 'Malad', translations: { hi: 'मलाड', kn: 'ಮಲಾಡ್', mr: 'मालाड' } },
      { id: 'Dadar', en: 'Dadar', translations: { hi: 'दादर', kn: 'ದಾದರ್', mr: 'दादर' } },
      { id: 'Kurla', en: 'Kurla', translations: { hi: 'कुर्ला', kn: 'ಕುರ್ಲಾ', mr: 'कुर्ला' } }
    ]
  },
  {
    id: 'Thane',
    en: 'Thane',
    translations: {
      hi: 'ठाणे',
      kn: 'ಠಾಣೆ',
      te: 'థానే',
      ta: 'தானே',
      mr: 'ठाणे',
      bn: 'থানে',
      gu: 'થાણે',
      ml: 'താനെ',
      pa: 'ਠਾਣੇ',
      as: 'থানে',
      or: 'ଥାନେ'
    },
    localities: [
      { id: 'Thane West', en: 'Thane West', translations: { hi: 'ठाणे पश्चिम', kn: 'ಠಾಣೆ ಪಶ್ಚಿಮ', mr: 'ठाणे पश्चिम' } },
      { id: 'Majiwada', en: 'Majiwada', translations: { hi: 'माजीवाडा', kn: 'ಮಾಜಿವಾಡ', mr: 'माजीवाडा' } },
      { id: 'Ghodbunder Road', en: 'Ghodbunder Road', translations: { hi: 'घोडबंदर रोड', kn: 'ಘೋಡ್‌ಬಂದರ್ ರಸ್ತೆ', mr: 'घोडबंदर रोड' } },
      { id: 'Vartak Nagar', en: 'Vartak Nagar', translations: { hi: 'वर्तक नगर', kn: 'ವರ್ತಕ್ ನಗರ', mr: 'वर्तक नगर' } },
      { id: 'Naupada', en: 'Naupada', translations: { hi: 'नौपाड़ा', kn: 'ನೌಪಾಡಾ', mr: 'नौपाडा' } }
    ]
  },
  {
    id: 'Gurugram',
    en: 'Gurugram',
    translations: {
      hi: 'गुरुग्राम',
      kn: 'ಗುರುಗ್ರಾಮ್',
      te: 'గురుగ్రామ్',
      ta: 'குருகிராம்',
      mr: 'गुरुग्राम',
      bn: 'গুরুগ্রাম',
      gu: 'ગુરુગ્રામ',
      ml: 'ഗുരുഗ്രാം',
      pa: 'ਗੁਰੂਗ੍ਰਾਮ',
      as: 'গুৰুগ্ৰাম',
      or: 'ଗୁରୁଗ୍ରାମ'
    },
    localities: [
      { id: 'Cyber City', en: 'Cyber City', translations: { hi: 'साइबर सिटी', kn: 'ಸೈಬರ್ ಸಿಟಿ' } },
      { id: 'DLF Phase 1-5', en: 'DLF Phase 1-5', translations: { hi: 'डीएलएफ फेज 1-5', kn: 'ಡಿಎಲ್ಎಫ್ ಫೇಸ್ 1-5' } },
      { id: 'Sector 29', en: 'Sector 29', translations: { hi: 'सेक्टर 29', kn: 'ಸೆಕ್ಟರ್ 29' } },
      { id: 'Sector 56', en: 'Sector 56', translations: { hi: 'सेक्टर 56', kn: 'ಸೆಕ್ಟರ್ 56' } },
      { id: 'Sohna Road', en: 'Sohna Road', translations: { hi: 'सोहना रोड', kn: 'ಸೋಹ್ನಾ ರಸ್ತೆ' } },
      { id: 'Golf Course Road', en: 'Golf Course Road', translations: { hi: 'गोल्फ कोर्स रोड', kn: 'ಗಾಲ್ಫ್ ಕೋರ್ಸ್ ರಸ್ತೆ' } }
    ]
  },
  {
    id: 'Delhi',
    en: 'Delhi',
    translations: {
      hi: 'दिल्ली',
      kn: 'ದೆಹಲಿ',
      te: 'ఢిల్లీ',
      ta: 'டெல்லி',
      mr: 'दिल्ली',
      bn: 'দিল্লি',
      gu: 'દિલ્હી',
      ml: 'ഡൽഹി',
      pa: 'ਦਿੱਲੀ',
      as: 'দিল্লী',
      or: 'ଦିଲ୍ଲୀ'
    },
    localities: [
      { id: 'Connaught Place', en: 'Connaught Place', translations: { hi: 'कनॉट प्लेस', kn: 'ಕನ್ನಾಟ್ ಪ್ಲೇಸ್' } },
      { id: 'Dwarka', en: 'Dwarka', translations: { hi: 'द्वारका', kn: 'ದ್ವಾರಕಾ' } },
      { id: 'South Extension', en: 'South Extension', translations: { hi: 'साउथ एक्सटेंशन', kn: 'ಸೌತ್ ಎಕ್ಸ್‌ಟೆನ್ಶನ್' } },
      { id: 'Saket', en: 'Saket', translations: { hi: 'साकेत', kn: 'ಸಾಕೇತ್' } },
      { id: 'Rohini', en: 'Rohini', translations: { hi: 'रोहिणी', kn: 'ರೋಹಿಣಿ' } },
      { id: 'Lajpat Nagar', en: 'Lajpat Nagar', translations: { hi: 'लाजपत नगर', kn: 'ಲಾಜ್‌ಪತ್ ನಗರ' } },
      { id: 'Karol Bagh', en: 'Karol Bagh', translations: { hi: 'करोल बाग', kn: 'ಕರೋಲ್ ಬಾಗ್' } }
    ]
  },
  {
    id: 'Pune',
    en: 'Pune',
    translations: {
      hi: 'पुणे',
      kn: 'ಪುಣೆ',
      te: 'పూణే',
      ta: 'புனே',
      mr: 'पुणे',
      bn: 'পুনে',
      gu: 'પુણે',
      ml: 'പുണെ',
      pa: 'ਪੁਣੇ',
      as: 'পুনে',
      or: 'ପୁଣେ'
    },
    localities: [
      { id: 'Hinjewadi', en: 'Hinjewadi', translations: { hi: 'हिंजवडी', kn: 'ಹಿಂಜವಡಿ', mr: 'हिंजवडी' } },
      { id: 'Kothrud', en: 'Kothrud', translations: { hi: 'कोथरूड', kn: 'ಕೊಥ್ರೂಡ್', mr: 'कोथरूड' } },
      { id: 'Viman Nagar', en: 'Viman Nagar', translations: { hi: 'विमान नगर', kn: 'ವಿಮಾನ ನಗರ', mr: 'विमान नगर' } },
      { id: 'Wakad', en: 'Wakad', translations: { hi: 'वाकड', kn: 'ವಾಕಡ್', mr: 'वाकड' } },
      { id: 'Baner', en: 'Baner', translations: { hi: 'बाणेर', kn: 'ಬಾನೇರ್', mr: 'बाणेर' } },
      { id: 'Kalyani Nagar', en: 'Kalyani Nagar', translations: { hi: 'कल्याणी नगर', kn: 'ಕಲ್ಯಾಣಿ ನಗರ', mr: 'कल्याणी नगर' } },
      { id: 'Hadapsar', en: 'Hadapsar', translations: { hi: 'हडपसर', kn: 'हडपसर', mr: 'हडपसर' } }
    ]
  },
  {
    id: 'Noida',
    en: 'Noida',
    translations: {
      hi: 'नोएडा',
      kn: 'ನೋಯ್ಡಾ',
      te: 'నోయిడా',
      ta: 'நொய்டா',
      mr: 'नोएडा',
      bn: 'নয়ডা',
      gu: 'નોઈડા',
      ml: 'നോയിഡ',
      pa: 'ਨੋਇਡਾ',
      as: 'নয়ডা',
      or: 'ନୋଇଡା'
    },
    localities: [
      { id: 'Sector 18', en: 'Sector 18', translations: { hi: 'सेक्टर 18', kn: 'ಸೆಕ್ಟರ್ 18' } },
      { id: 'Sector 62', en: 'Sector 62', translations: { hi: 'सेक्टर 62', kn: 'ಸೆಕ್ಟರ್ 62' } },
      { id: 'Sector 137', en: 'Sector 137', translations: { hi: 'सेक्टर 137', kn: 'ಸೆಕ್ಟರ್ 137' } },
      { id: 'Sector 50', en: 'Sector 50', translations: { hi: 'सेक्टर 50', kn: 'ಸೆಕ್ಟರ್ 50' } },
      { id: 'Greater Noida', en: 'Greater Noida', translations: { hi: 'ग्रेटर नोएडा', kn: 'ಗ್ರೇಟರ್ ನೋಯ್ಡಾ' } }
    ]
  },
  {
    id: 'Navi Mumbai',
    en: 'Navi Mumbai',
    translations: {
      hi: 'नवी मुंबई',
      kn: 'ನವಿ ಮುಂಬೈ',
      te: 'నవీ ముంబై',
      ta: 'நவி மும்பை',
      mr: 'नवी मुंबई',
      bn: 'নভি মুম্বাই',
      gu: 'નવી મુંબઈ',
      ml: 'നവി മുംബൈ',
      pa: 'ਨਵੀਂ ਮੁੰਬਈ',
      as: 'নৱী মুম্বাই',
      or: 'ନଭି ମୁମ୍ବାଇ'
    },
    localities: [
      { id: 'Vashi', en: 'Vashi', translations: { hi: 'वाशी', kn: 'ವಾಶಿ', mr: 'वाशी' } },
      { id: 'Nerul', en: 'Nerul', translations: { hi: 'नेरूळ', kn: 'ನೇರುಲ್', mr: 'नेरूळ' } },
      { id: 'Kharghar', en: 'Kharghar', translations: { hi: 'खारघर', kn: 'ಖಾರ್ಘರ್', mr: 'खारघर' } },
      { id: 'Panvel', en: 'Panvel', translations: { hi: 'पनवेल', kn: 'ಪನ್ವೇಲ್', mr: 'पनवेल' } },
      { id: 'Belapur', en: 'Belapur', translations: { hi: 'बेलापुर', kn: 'ಬೆಲಾಪುರ', mr: 'बेलापूर' } }
    ]
  },
  {
    id: 'Ghaziabad',
    en: 'Ghaziabad',
    translations: {
      hi: 'गाज़ियाबाद',
      kn: 'ಗಾಜಿಯಾಬಾದ್',
      te: 'ఘజియాబాద్',
      ta: 'காசியாபாத்',
      mr: 'गाझियाबाद',
      bn: 'গাজিয়াবাদ',
      gu: 'ગાઝિયાબાદ',
      ml: 'ഗാസിയാബാദ്',
      pa: 'ਗਾਜ਼ੀਆਬਾਦ',
      as: 'গাজিয়াবাদ',
      or: 'ଗାଜିଆବାଦ'
    },
    localities: [
      { id: 'Indirapuram', en: 'Indirapuram', translations: { hi: 'इंदिरापुरम', kn: 'ಇಂದಿರಾಪುರಂ' } },
      { id: 'Vaishali', en: 'Vaishali', translations: { hi: 'वैशाली', kn: 'ವೈಶಾಲಿ' } },
      { id: 'Raj Nagar Extension', en: 'Raj Nagar Extension', translations: { hi: 'राज नगर एक्सटेंशन', kn: 'ರಾಜ್ ನಗರ ಎಕ್ಸ್‌ಟೆನ್ಶನ್' } },
      { id: 'Crossings Republik', en: 'Crossings Republik', translations: { hi: 'क्रॉसिंग्स रिपब्लिक', kn: 'ಕ್ರಾಸ್ಸಿಂಗ್ಸ್ ರಿಪಬ್ಲಿಕ್' } },
      { id: 'Vasundhara', en: 'Vasundhara', translations: { hi: 'वसुंधरा', kn: 'ವಸುಂಧರಾ' } }
    ]
  },
  {
    id: 'Hyderabad',
    en: 'Hyderabad',
    translations: {
      hi: 'हैदराबाद',
      kn: 'ಹೈದರಾಬಾದ್',
      te: 'హైదరాబాద్',
      ta: 'ஹைதராபாத்',
      mr: 'हैदराबाद',
      bn: 'হায়দ্রাবাদ',
      gu: 'હૈદરાબાદ',
      ml: 'ഹൈദരാബാദ്',
      pa: 'ਹੈਦਰਾਬਾਦ',
      as: 'হায়দৰাবাদ',
      or: 'ହାଇଦ୍ରାବାଦ'
    },
    localities: [
      { id: 'Gachibowli', en: 'Gachibowli', translations: { te: 'గచ్చిబౌలి', hi: 'गच्चीबाउली', kn: 'ಗಚ್ಚಿಬೌಲಿ' } },
      { id: 'Hitec City', en: 'Hitec City', translations: { te: 'హైటెక్ సిటీ', hi: 'हाईटेक सिटी', kn: 'ಹೈಟೆಕ್ ಸಿಟಿ' } },
      { id: 'Madhapur', en: 'Madhapur', translations: { te: 'మాదాపూర్', hi: 'माधापुर', kn: 'ಮಾದಾಪುರ' } },
      { id: 'Kondapur', en: 'Kondapur', translations: { te: 'కొండాపూర్', hi: 'कोंडापुर', kn: 'ಕೊಂಡಾಪುರ' } },
      { id: 'Jubilee Hills', en: 'Jubilee Hills', translations: { te: 'జూబ్లీ హिल्स', hi: 'जुबली हिल्स', kn: 'ಜುಬಿಲಿ ಹಿಲ್ಸ್' } },
      { id: 'Banjara Hills', en: 'Banjara Hills', translations: { te: 'బంజారా హिल्स', hi: 'బంజારા ಹिल्स', kn: 'ಬಂಜಾರಾ ಹಿಲ್ಸ್' } },
      { id: 'Kukatpally', en: 'Kukatpally', translations: { te: 'కూకట్‌పల్లి', hi: 'कुकटपल्ली', kn: 'ಕೂಕಟ್‌ಪಲ್ಲಿ' } },
      { id: 'Miyapur', en: 'Miyapur', translations: { te: 'మియాపూర్', hi: 'मियापुर', kn: 'ಮಿಯಾಪುರ' } }
    ]
  },
  {
    id: 'Chennai',
    en: 'Chennai',
    translations: {
      hi: 'चेन्नई',
      kn: 'ಚೆನ್ನೈ',
      te: 'చెన్నై',
      ta: 'சென்னை',
      mr: 'चेन्नई',
      bn: 'চেন্নাই',
      gu: 'ચેન્નઈ',
      ml: 'ചെന്നൈ',
      pa: 'ਚੇਨਈ',
      as: 'চেন্নাই',
      or: 'ଚେନ୍ନାଇ'
    },
    localities: [
      { id: 'Adyar', en: 'Adyar', translations: { ta: 'அடையாறு', hi: 'अडयार', kn: 'ಅಡ್ಯಾರ್' } },
      { id: 'Anna Nagar', en: 'Anna Nagar', translations: { ta: 'அண்ணா நகர்', hi: 'अन्ना नगर', kn: 'ಅಣ್ಣಾ ನಗರ' } },
      { id: 'Velachery', en: 'Velachery', translations: { ta: 'வேளச்சேரி', hi: 'वेलाचेरी', kn: 'ವೇಲಚೇರಿ' } },
      { id: 'T. Nagar', en: 'T. Nagar', translations: { ta: 'டி. நகர்', hi: 'टी. नगर', kn: 'ಟಿ. ನಗರ' } },
      { id: 'OMR', en: 'OMR', translations: { ta: 'ஓஎம்ஆர்', hi: 'ओएमआर', kn: 'ಒಎಂಆರ್' } },
      { id: 'Mylapore', en: 'Mylapore', translations: { ta: 'மயிலாப்பூர்', hi: 'मायलापुर', kn: 'ಮೈಲಾಪುರ' } },
      { id: 'Guindy', en: 'Guindy', translations: { ta: 'கிண்டி', hi: 'गिडी', kn: 'ಗಿಂಡಿ' } },
      { id: 'Porur', en: 'Porur', translations: { ta: 'போரூர்', hi: 'पोरुर', kn: 'ಪೋರೂರ್' } }
    ]
  }
];

/**
 * Returns formatted bilingual label like:
 * "बैंगलोर / Bangalore" or "ಬೆಂಗಳೂರು / Bengaluru" or "Mumbai"
 */
export function getCityLabel(city: CityData, lang: Language): string {
  if (lang === 'en') {
    return city.en;
  }
  const translated = city.translations[lang] || city.translations['hi'];
  if (translated) {
    return `${translated} / ${city.en}`;
  }
  return city.en;
}

/**
 * Returns formatted bilingual label for a locality:
 * "ಬೆಳ್ಳಂದೂರು / Bellandur" or "Bellandur"
 */
export function getLocalityLabel(locality: LocationItem, lang: Language): string {
  if (lang === 'en') {
    return locality.en;
  }
  const translated = locality.translations?.[lang] || locality.translations?.['hi'];
  if (translated) {
    return `${translated} / ${locality.en}`;
  }
  return locality.en;
}
