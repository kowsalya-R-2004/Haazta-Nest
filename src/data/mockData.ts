import { ServiceCategory, Address, Booking, PromoOffer } from '../types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'mopping-dusting',
    title: 'Mopping, Dusting & Wiping',
    shortDesc: 'Deep floor care, vacuuming & dusting',
    fullDesc: 'Comprehensive floor cleaning with hospital-grade disinfectant, microfiber wiping of tables, shelves, electronics, and ceiling fan dusting.',
    priceStart: 49,
    originalPrice: 99,
    unit: 'first visit',
    durationMins: 45,
    image: '/assets/service_mopping.jpg',
    tag: 'Popular',
    rating: 4.88,
    reviewCount: 14200,
    includes: [
      'Wet & dry floor mopping with eco disinfectant',
      'Dusting of tables, chairs, cabinets, and appliances',
      'Cobweb removal and ceiling fan cleaning',
      'Balcony sweeping and trash disposal'
    ],
    excludes: [
      'Heavy furniture shifting (> 25 kg)',
      'Exterior window ledge cleaning at height'
    ],
    popularAddons: [
      { name: 'Under-bed deep vacuuming', price: 49 },
      { name: 'Balcony floor jet scrub', price: 79 }
    ]
  },
  {
    id: 'meal-assistance',
    title: 'Meal Assistance',
    shortDesc: 'Chopping, prep & home cooking help',
    fullDesc: 'Trained kitchen helpers to wash, peel, and finely chop vegetables, knead dough (atta), prepare fresh gravies, and assist with home cooking.',
    priceStart: 199,
    originalPrice: 299,
    unit: 'per session',
    durationMins: 60,
    image: '/assets/service_meal.jpg',
    tag: 'Chef Choice',
    rating: 4.92,
    reviewCount: 9800,
    includes: [
      'Washing & sanitizing raw vegetables / fruits',
      'Precision chopping, slicing, and grating',
      'Atta kneading & chapati rolling support',
      'Countertop wipe down after prep'
    ],
    excludes: [
      'Raw meat butchering',
      'Gourmet pastry baking from scratch'
    ],
    popularAddons: [
      { name: 'Specialty Salad & Raita Prep', price: 49 },
      { name: 'Post-cooking spice jar organization', price: 39 }
    ]
  },
  {
    id: 'bathroom-cleaning',
    title: 'Bathroom cleaning',
    shortDesc: 'Disinfection, hard water stain removal',
    fullDesc: 'Intense chemical-safe scrubbing of toilet commode, ceramic wall tiles, glass shower partition, sink basin, mirror, and chrome fixtures.',
    priceStart: 129,
    originalPrice: 199,
    unit: 'per bathroom',
    durationMins: 40,
    image: '/assets/service_bathroom.jpg',
    tag: 'Hygiene Pro',
    rating: 4.85,
    reviewCount: 18500,
    includes: [
      'Acid-free deep commode & rim sanitization',
      'Hard water scale removal from taps & showerheads',
      'Wall tile grout scrubbing & mirror polishing',
      'Floor drain clearing & lemon fresh fragrance spray'
    ],
    excludes: [
      'Plumbing repair / leakage fixes'
    ],
    popularAddons: [
      { name: 'Exhaust fan deep degrease', price: 49 },
      { name: 'Glass cubicle nano-coating wipe', price: 69 }
    ]
  },
  {
    id: 'laundry-ironing',
    title: 'Laundry & Ironing',
    shortDesc: 'Washing, folding & steam press',
    fullDesc: 'Machine load sorting, delicate hand-wash care, sun-drying setup, crisp steam ironing for shirts/trousers, and wardrobe stacking.',
    priceStart: 99,
    originalPrice: 149,
    unit: 'up to 12 items',
    durationMins: 45,
    image: '/assets/service_laundry.jpg',
    tag: 'Express',
    rating: 4.89,
    reviewCount: 11200,
    includes: [
      'Color-separated washing machine loading',
      'Crisp heavy-steam ironing for formals & ethnics',
      'Neat KonMari-style clothes folding',
      'Hanger placement and wardrobe organization'
    ],
    excludes: [
      'Dry-cleaning delicate wedding lehengas / suits'
    ],
    popularAddons: [
      { name: 'Saree pleating & steam press', price: 59 },
      { name: 'Shoe cleaning & deodorizing', price: 79 }
    ]
  },
  {
    id: 'kitchen-utensils',
    title: 'Kitchen & utensil cleaning',
    shortDesc: 'Utensil wash, sink scrub & stove wipe',
    fullDesc: 'Grease-cutting wash for everyday pots, pans, cookware, crockery, followed by gas stove degreasing, backsplash wipe, and sink sanitization.',
    priceStart: 89,
    originalPrice: 139,
    unit: 'per sink load',
    durationMins: 35,
    image: '/assets/service_kitchen.jpg',
    tag: 'Quick Help',
    rating: 4.87,
    reviewCount: 16400,
    includes: [
      'Hot water utensil scrub with lime grease-cutter',
      'Dry wipe and cabinet stacking of plates & cutlery',
      'Gas stove top, chimney filter & backsplash wipe',
      'Stainless steel sink basin deep sanitization'
    ],
    excludes: [
      'Oven interior carbon burnout (> 2 hrs)'
    ],
    popularAddons: [
      { name: 'Refrigerator interior shelf wipe', price: 79 },
      { name: 'Microwave steam clean', price: 49 }
    ]
  },
  {
    id: 'deep-cleaning-more',
    title: 'And Many More',
    shortDesc: 'Full house deep cleaning & custom help',
    fullDesc: 'All-inclusive home rejuvenation! Move-in / move-out cleaning, sofa upholstery shampooing, balcony deep scrub, and kitchen cabinets.',
    priceStart: 499,
    originalPrice: 799,
    unit: 'starting pack',
    durationMins: 120,
    image: '/assets/service_deep_clean.jpg',
    tag: 'All-in-One',
    rating: 4.94,
    reviewCount: 8900,
    includes: [
      'Complete 2BHK/3BHK customized cleaning protocol',
      '2 to 3 Nest trained experts with professional caddy kits',
      'Appliance exterior & interior sanitization',
      'Windows, fans, switchboards & doors polish'
    ],
    excludes: [
      'Wall repainting & civil repair'
    ],
    popularAddons: [
      { name: 'Fabric Sofa shampooing (3 seater)', price: 299 },
      { name: 'Mattress anti-allergen steam', price: 249 }
    ]
  }
];

export const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    type: 'Home',
    title: 'Home',
    addressLine: 'Flat 402, Green Glen Layout, Outer Ring Rd, Bellandur, Bengaluru',
    landmark: 'Opposite Cloudnine Hospital',
    isDefault: true
  },
  {
    id: 'addr-2',
    type: 'Work',
    title: 'Office',
    addressLine: 'Block 3B, Ecospace Business Park, Marathahalli - Sarjapur Rd',
    landmark: 'Gate 2'
  },
  {
    id: 'addr-3',
    type: 'Other',
    title: "Parent's Place",
    addressLine: 'No 78, 4th Cross, 2nd Main, Indiranagar, Bengaluru',
    landmark: 'Near 100ft Road BDA Complex'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'NEST-8821',
    serviceId: 'mopping-dusting',
    serviceTitle: 'Mopping, Dusting & Wiping',
    serviceImage: '/assets/service_mopping.jpg',
    type: 'instant',
    status: 'assigned',
    bookingTime: 'Today, 2:45 PM',
    price: 49,
    address: 'Flat 402, Green Glen Layout, Bellandur',
    helper: {
      name: 'Priya Sharma',
      photo: '/assets/instant_helper.jpg',
      rating: 4.9,
      completedJobs: 342,
      phone: '+91 98765 43210',
      otp: '4829',
      etaMins: 6
    }
  },
  {
    id: 'NEST-7910',
    serviceId: 'bathroom-cleaning',
    serviceTitle: 'Bathroom cleaning (2 Bathrooms)',
    serviceImage: '/assets/service_bathroom.jpg',
    type: 'scheduled',
    status: 'completed',
    bookingTime: 'Yesterday, 10:00 AM',
    scheduledDateTime: 'Yesterday, 10:00 AM',
    price: 249,
    address: 'Flat 402, Green Glen Layout, Bellandur',
    helper: {
      name: 'Sunita Devi',
      photo: '/assets/hero_worker.jpg',
      rating: 4.8,
      completedJobs: 512,
      phone: '+91 98450 12345',
      otp: '7712'
    }
  }
];

export const OFFERS_DATA: PromoOffer[] = [
  {
    id: 'FIRST49',
    code: 'FIRST49',
    title: 'First House Help at ₹49',
    discount: '₹50 OFF',
    description: 'Get your first 45-minute house mopping & dusting session at just ₹49!',
    validTill: 'Valid till 31 Oct'
  },
  {
    id: 'NESTWEEKEND',
    code: 'WEEKEND50',
    title: 'Weekend Deep Clean Bonanza',
    discount: '20% OFF',
    description: 'Save up to ₹150 on scheduled weekend full-house and bathroom services.',
    validTill: 'Valid Fri - Sun'
  },
  {
    id: 'PAYONE',
    code: 'HAATZAONE',
    title: 'Haatza One Pay Cashback',
    discount: '5% Instant Cashback',
    description: 'Pay via Haatza One Pay wallet and earn guaranteed cashback on every order.',
    validTill: 'Always Active'
  }
];
