export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  priceStart: number;
  originalPrice: number;
  unit: string;
  durationMins: number;
  image: string;
  tag?: string;
  rating: number;
  reviewCount: number;
  includes: string[];
  excludes: string[];
  popularAddons?: { name: string; price: number }[];
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  title: string;
  addressLine: string;
  landmark?: string;
  isDefault?: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceTitle: string;
  serviceImage: string;
  type: 'instant' | 'scheduled';
  status: 'searching' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  bookingTime: string;
  scheduledDateTime?: string;
  price: number;
  address: string;
  helper?: {
    name: string;
    photo: string;
    rating: number;
    completedJobs: number;
    phone: string;
    otp: string;
    etaMins?: number;
  };
}

export interface PromoOffer {
  id: string;
  code: string;
  title: string;
  discount: string;
  description: string;
  validTill: string;
}
