// ============================================
// CORE TYPES — CardBuilderStudio
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'manager' | 'designer' | 'client';
  plan: 'free' | 'pro' | 'business';
  createdAt: string;
  digitalCardSlug?: string;
}

export interface Template {
  id: string;
  name: string;
  industry: Industry;
  thumbnail: string;
  orientation: 'horizontal' | 'vertical';
  style: TemplateStyle;
  colorScheme: string[];
  isPremium: boolean;
  isFavorite?: boolean;
  downloadCount: number;
  tags: string[];
  frontDesign: DesignData;
  backDesign?: DesignData;
}

export type Industry =
  | 'doctors' | 'lawyers' | 'restaurants' | 'salons' | 'gyms'
  | 'real-estate' | 'it-companies' | 'coaches' | 'photographers'
  | 'freelancers' | 'education' | 'finance' | 'fashion' | 'food'
  | 'construction' | 'automotive' | 'beauty' | 'travel' | 'events'
  | 'architecture' | 'marketing' | 'music' | 'sports' | 'retail'
  | 'healthcare' | 'legal' | 'tech' | 'nonprofit' | 'consulting';

export type TemplateStyle =
  | 'minimal' | 'bold' | 'elegant' | 'playful' | 'corporate'
  | 'creative' | 'luxury' | 'modern' | 'retro' | 'brutalist' | 'warm';

export interface DesignData {
  width: number;
  height: number;
  background: string;
  objects: DesignObject[];
  version?: string;
}

export interface DesignObject {
  id: string;
  type: 'text' | 'image' | 'shape' | 'icon' | 'qrcode' | 'line';
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  opacity?: number;
  zIndex: number;
  locked?: boolean;
  visible?: boolean;
  // Text
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  textAlign?: 'left' | 'center' | 'right';
  fill?: string;
  gradient?: Gradient;
  letterSpacing?: number;
  lineHeight?: number;
  // Shape
  shape?: 'rect' | 'circle' | 'triangle' | 'line' | 'arrow';
  stroke?: string;
  strokeWidth?: number;
  rx?: number;
  // Image
  src?: string;
  // QR
  qrValue?: string;
  qrColor?: string;
  qrBgColor?: string;
}

export interface Gradient {
  type: 'linear' | 'radial';
  colorStops: { offset: number; color: string }[];
  angle?: number;
}

export interface Design {
  id: string;
  userId: string;
  name: string;
  thumbnail?: string;
  template?: string;
  frontDesign: DesignData;
  backDesign?: DesignData;
  createdAt: string;
  updatedAt: string;
  views: number;
  downloads: number;
}

export interface QRCode {
  id: string;
  userId: string;
  type: QRType;
  value: string;
  label: string;
  fgColor: string;
  bgColor: string;
  size: number;
  logoUrl?: string;
  createdAt: string;
  scans: number;
}

export type QRType = 'website' | 'whatsapp' | 'upi' | 'contact' | 'location';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'manager' | 'designer' | 'client';
  status: 'active' | 'pending' | 'inactive';
  joinedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  designId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  quantity: number;
  price: number;
  currency: 'INR' | 'USD';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
}

export interface AnalyticsData {
  date: string;
  views: number;
  downloads: number;
  qrScans: number;
  contactSaves: number;
  shares: number;
}

export interface DashboardStats {
  totalDesigns: number;
  totalDownloads: number;
  totalQRScans: number;
  totalViews: number;
  activeProjects: number;
  teamMembers: number;
}

export interface AIGenerationParams {
  name: string;
  company: string;
  profession: string;
  phone: string;
  email: string;
  website?: string;
  address?: string;
  stylePreference: TemplateStyle;
  colorPreference?: string;
}

export interface DigitalCard {
  slug: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  coverImage?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  address?: string;
  bio?: string;
  socialLinks: SocialLink[];
  portfolioLinks: PortfolioLink[];
  theme: string;
  isPublic: boolean;
  views: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioLink {
  title: string;
  url: string;
  thumbnail?: string;
}

export type ThemeMode = 'light' | 'dark';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  createdAt: string;
  read: boolean;
}
