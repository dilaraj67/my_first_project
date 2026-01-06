export interface Cafe {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone?: string;
  website?: string;
  google_place_id?: string;
  operating_hours?: OperatingHours;
  has_wifi?: boolean;
  wifi_quality?: 'excellent' | 'good' | 'fair' | 'poor';
  allows_laptops?: boolean;
  laptop_policy?: string;
  power_outlets?: boolean;
  noise_level?: 'quiet' | 'moderate' | 'loud';
  seating_capacity?: number;
  has_outdoor_seating?: boolean;
  coffee_quality?: 'excellent' | 'good' | 'fair';
  price_range?: '$' | '$$' | '$$$' | '$$$$';
  rating?: number;
  total_reviews?: number;
  image_url?: string;
  verified?: boolean;
  distance?: number;
}

export interface OperatingHours {
  monday?: DayHours;
  tuesday?: DayHours;
  wednesday?: DayHours;
  thursday?: DayHours;
  friday?: DayHours;
  saturday?: DayHours;
  sunday?: DayHours;
}

export interface DayHours {
  open: string;
  close: string;
  closed?: boolean;
}

export interface User {
  id: number;
  email: string;
  name?: string;
  subscriptionStatus?: string;
  subscriptionEndDate?: string;
}

export interface SearchFilters {
  lat: number;
  lng: number;
  radius?: number;
  wifi?: boolean;
  laptops?: boolean;
  openNow?: boolean;
}
