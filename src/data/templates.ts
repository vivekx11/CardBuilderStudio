import type { Template } from '../types';

// ============================================
// TEMPLATE LIBRARY — 50 Professionally Designed Templates
// Across 10 Industries
// ============================================

export const TEMPLATES: Template[] = [
  // ────────────────── DOCTORS ──────────────────
  {
    id: 'doc-001', name: 'Medical Prestige', industry: 'doctors',
    thumbnail: '', orientation: 'horizontal', style: 'elegant',
    colorScheme: ['#1A3C5E', '#FFFFFF', '#2DD4BF'], isPremium: false,
    downloadCount: 2341, tags: ['medical', 'clean', 'professional'],
    frontDesign: {
      width: 1050, height: 600,
      background: 'linear-gradient(135deg, #1A3C5E 0%, #0D2137 100%)',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: 'Dr. John Smith', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '700', fill: '#FFFFFF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 130, text: 'MBBS, MD | Cardiologist', fontFamily: 'Inter', fontSize: 16, fontWeight: '400', fill: '#2DD4BF', zIndex: 1 },
        { id: 'o3', type: 'shape', x: 60, y: 170, width: 120, height: 3, shape: 'rect', fill: '#2DD4BF', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 200, text: '+91 98765 43210', fontFamily: 'Inter', fontSize: 14, fill: '#CCDDEE', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 225, text: 'john@cityhospital.com', fontFamily: 'Inter', fontSize: 14, fill: '#CCDDEE', zIndex: 1 },
        { id: 'o6', type: 'text', x: 60, y: 250, text: 'City Hospital, Mumbai', fontFamily: 'Inter', fontSize: 14, fill: '#CCDDEE', zIndex: 1 },
      ],
    },
  },
  {
    id: 'doc-002', name: 'Clean Health', industry: 'doctors',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#FFFFFF', '#000000', '#4D96FF'], isPremium: false,
    downloadCount: 1892, tags: ['minimal', 'white', 'health'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 8, height: 600, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 80, text: 'Dr. Sarah Patel', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 126, text: 'Pediatrician | MBBS, DCH', fontFamily: 'Inter', fontSize: 15, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 40, y: 200, text: 'Apollo Childrens Hospital', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 40, y: 224, text: '+91 90000 12345', fontFamily: 'Inter', fontSize: 14, fill: '#555555', zIndex: 2 },
        { id: 'o6', type: 'text', x: 40, y: 248, text: 'sarah@apollohealth.in', fontFamily: 'Inter', fontSize: 14, fill: '#555555', zIndex: 2 },
      ],
    },
  },
  {
    id: 'doc-003', name: 'Gold Medical', industry: 'doctors',
    thumbnail: '', orientation: 'horizontal', style: 'luxury',
    colorScheme: ['#1A1A1A', '#C9A84C', '#FFFFFF'], isPremium: true,
    downloadCount: 987, tags: ['luxury', 'gold', 'premium'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A1A',
      objects: [
        { id: 'o1', type: 'shape', x: 40, y: 40, width: 970, height: 520, shape: 'rect', fill: 'transparent', stroke: '#C9A84C', strokeWidth: 1, rx: 2, zIndex: 1 },
        { id: 'o2', type: 'text', x: 80, y: 100, text: 'DR. RAJESH KUMAR', fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: '700', fill: '#C9A84C', letterSpacing: 3, zIndex: 2 },
        { id: 'o3', type: 'text', x: 80, y: 148, text: 'Neurologist · DM · AIIMS Delhi', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 80, y: 178, width: 200, height: 1, shape: 'rect', fill: '#C9A84C', zIndex: 2 },
        { id: 'o5', type: 'text', x: 80, y: 210, text: '+91 80000 55555', fontFamily: 'Inter', fontSize: 14, fill: '#DDDDDD', zIndex: 2 },
        { id: 'o6', type: 'text', x: 80, y: 234, text: 'rajesh.kumar@maxhospital.com', fontFamily: 'Inter', fontSize: 14, fill: '#DDDDDD', zIndex: 2 },
      ],
    },
  },
  {
    id: 'doc-004', name: 'Wellness Bold', industry: 'doctors',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#6BCB77', '#000000', '#FFFFFF'], isPremium: false,
    downloadCount: 654, tags: ['bold', 'green', 'wellness'],
    frontDesign: {
      width: 1050, height: 600, background: '#6BCB77',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 90, text: 'DR. PRIYA NAIR', fontFamily: 'Space Grotesk', fontSize: 38, fontWeight: '900', fill: '#000000', letterSpacing: -1, zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 142, text: 'Gynecologist & Obstetrician', fontFamily: 'Poppins', fontSize: 16, fontWeight: '600', fill: '#000000', zIndex: 1 },
        { id: 'o3', type: 'shape', x: 60, y: 172, width: 400, height: 4, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 200, text: 'Fortis Hospital · Bangalore', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 224, text: '+91 70000 88888 · priya@fortis.in', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 1 },
      ],
    },
  },
  {
    id: 'doc-005', name: 'Modern Clinic', industry: 'doctors',
    thumbnail: '', orientation: 'vertical', style: 'modern',
    colorScheme: ['#F8F9FA', '#4D96FF', '#1A1A1A'], isPremium: true,
    downloadCount: 1123, tags: ['vertical', 'modern', 'blue'],
    frontDesign: {
      width: 600, height: 1050, background: '#F8F9FA',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 600, height: 320, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 360, text: 'Dr. Anita Sharma', fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: '700', fill: '#1A1A1A', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 405, text: 'Dermatologist', fontFamily: 'Inter', fontSize: 16, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 480, text: '+91 99999 00000', fontFamily: 'Inter', fontSize: 14, fill: '#555555', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 504, text: 'anita@skinclinic.in', fontFamily: 'Inter', fontSize: 14, fill: '#555555', zIndex: 2 },
      ],
    },
  },

  // ────────────────── LAWYERS ──────────────────
  {
    id: 'law-001', name: 'Legal Authority', industry: 'lawyers',
    thumbnail: '', orientation: 'horizontal', style: 'corporate',
    colorScheme: ['#1C1C1C', '#8B6914', '#FFFFFF'], isPremium: false,
    downloadCount: 1567, tags: ['legal', 'dark', 'corporate'],
    frontDesign: {
      width: 1050, height: 600, background: '#1C1C1C',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 320, height: 600, shape: 'rect', fill: '#8B6914', zIndex: 1 },
        { id: 'o2', type: 'text', x: 360, y: 90, text: 'ARJUN MEHTA', fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: '800', fill: '#FFFFFF', letterSpacing: 2, zIndex: 2 },
        { id: 'o3', type: 'text', x: 360, y: 135, text: 'Senior Advocate, High Court', fontFamily: 'Inter', fontSize: 15, fill: '#AAAAAA', zIndex: 2 },
        { id: 'o4', type: 'text', x: 360, y: 195, text: 'Mehta & Associates', fontFamily: 'Poppins', fontSize: 16, fontWeight: '600', fill: '#8B6914', zIndex: 2 },
        { id: 'o5', type: 'text', x: 360, y: 225, text: '+91 88888 11111', fontFamily: 'Inter', fontSize: 14, fill: '#CCCCCC', zIndex: 2 },
        { id: 'o6', type: 'text', x: 360, y: 248, text: 'arjun@mehtaassociates.in', fontFamily: 'Inter', fontSize: 14, fill: '#CCCCCC', zIndex: 2 },
      ],
    },
  },
  {
    id: 'law-002', name: 'Justice White', industry: 'lawyers',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#FFFFFF', '#1C1C1C', '#C9A84C'], isPremium: false,
    downloadCount: 834, tags: ['white', 'minimal', 'gold'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 560, width: 1050, height: 40, shape: 'rect', fill: '#1C1C1C', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 90, text: 'NEHA VERMA', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '800', fill: '#1C1C1C', letterSpacing: 1, zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 140, text: 'Corporate Lawyer · LLB, LLM', fontFamily: 'Inter', fontSize: 15, fill: '#C9A84C', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 170, width: 240, height: 3, shape: 'rect', fill: '#C9A84C', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 200, text: '+91 77777 22222', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 224, text: 'neha@vermalaw.in', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
      ],
    },
  },
  {
    id: 'law-003', name: 'Scales Bold', industry: 'lawyers',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FF6B6B', '#000000', '#FFFFFF'], isPremium: true,
    downloadCount: 432, tags: ['bold', 'red', 'striking'],
    frontDesign: {
      width: 1050, height: 600, background: '#FF6B6B',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: 'ROHAN\nSINGH', fontFamily: 'Space Grotesk', fontSize: 56, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 220, text: 'Criminal Defense Attorney', fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', fill: '#000000', zIndex: 1 },
        { id: 'o3', type: 'shape', x: 60, y: 248, width: 600, height: 4, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 270, text: '+91 66666 33333 · rohan@singhlaw.in', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 1 },
      ],
    },
  },
  {
    id: 'law-004', name: 'Prestige Dark', industry: 'lawyers',
    thumbnail: '', orientation: 'horizontal', style: 'elegant',
    colorScheme: ['#0D1B2A', '#E8D5A3', '#FFFFFF'], isPremium: true,
    downloadCount: 765, tags: ['dark', 'elegant', 'premium'],
    frontDesign: {
      width: 1050, height: 600, background: '#0D1B2A',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: 'KAVYA KRISHNAN', fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: '700', fill: '#E8D5A3', letterSpacing: 2, zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 128, text: 'Family & Divorce Law Specialist', fontFamily: 'Inter', fontSize: 14, fill: '#8899AA', zIndex: 1 },
        { id: 'o3', type: 'shape', x: 60, y: 158, width: 300, height: 1, shape: 'rect', fill: '#E8D5A3', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 185, text: 'Krishnan Legal LLP', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', fill: '#FFFFFF', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 210, text: '+91 55555 44444', fontFamily: 'Inter', fontSize: 13, fill: '#8899AA', zIndex: 1 },
        { id: 'o6', type: 'text', x: 60, y: 233, text: 'kavya@krishnanlegal.com', fontFamily: 'Inter', fontSize: 13, fill: '#8899AA', zIndex: 1 },
      ],
    },
  },
  {
    id: 'law-005', name: 'Blue Law', industry: 'lawyers',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#4D96FF', '#FFFFFF', '#000000'], isPremium: false,
    downloadCount: 923, tags: ['blue', 'modern', 'clean'],
    frontDesign: {
      width: 1050, height: 600, background: '#4D96FF',
      objects: [
        { id: 'o1', type: 'shape', x: 500, y: 0, width: 550, height: 600, shape: 'rect', fill: '#FFFFFF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 90, text: 'AMIT\nDESAI', fontFamily: 'Space Grotesk', fontSize: 48, fontWeight: '900', fill: '#FFFFFF', lineHeight: 1.1, zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 220, text: 'IP & Tech Lawyer', fontFamily: 'Inter', fontSize: 15, fill: '#DDEEFF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 540, y: 90, text: 'Desai Law Partners', fontFamily: 'Space Grotesk', fontSize: 20, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'text', x: 540, y: 145, text: '+91 44444 55555', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
        { id: 'o6', type: 'text', x: 540, y: 168, text: 'amit@desailaw.in', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
      ],
    },
  },

  // ────────────────── RESTAURANTS ──────────────────
  {
    id: 'rest-001', name: 'Bistro Chic', industry: 'restaurants',
    thumbnail: '', orientation: 'horizontal', style: 'elegant',
    colorScheme: ['#3D2B1F', '#FFD93D', '#FFFFFF'], isPremium: false,
    downloadCount: 3421, tags: ['food', 'warm', 'elegant'],
    frontDesign: {
      width: 1050, height: 600, background: '#3D2B1F',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 70, text: '🍽', fontSize: 48, fontFamily: 'Inter', fill: '#FFD93D', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 140, text: 'La Maison', fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: '800', fill: '#FFD93D', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 192, text: 'Fine Dining & Wine Bar', fontFamily: 'Inter', fontSize: 15, fill: '#CCAA88', zIndex: 1 },
        { id: 'o4', type: 'shape', x: 60, y: 222, width: 200, height: 2, shape: 'rect', fill: '#FFD93D', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 248, text: 'Open: 12PM – 11PM', fontFamily: 'Inter', fontSize: 13, fill: '#AAAAAA', zIndex: 1 },
        { id: 'o6', type: 'text', x: 60, y: 270, text: '+91 33333 66666 | Bandra, Mumbai', fontFamily: 'Inter', fontSize: 13, fill: '#AAAAAA', zIndex: 1 },
      ],
    },
  },
  {
    id: 'rest-002', name: 'Fast & Fresh', industry: 'restaurants',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FF6B6B', '#FFD93D', '#000000'], isPremium: false,
    downloadCount: 2100, tags: ['fast food', 'bold', 'colorful'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFD93D',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 12, shape: 'rect', fill: '#FF6B6B', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 588, width: 1050, height: 12, shape: 'rect', fill: '#FF6B6B', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 90, text: 'BURGER\nBASH', fontFamily: 'Space Grotesk', fontSize: 56, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 225, text: 'Gourmet Burgers & Shakes', fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', fill: '#FF6B6B', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 265, text: '+91 22222 77777 · Koramangala, Bangalore', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
      ],
    },
  },
  {
    id: 'rest-003', name: 'Spice Route', industry: 'restaurants',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#FF8C42', '#2C2C2C', '#FFF8F0'], isPremium: true,
    downloadCount: 987, tags: ['indian', 'spice', 'orange'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFF8F0',
      objects: [
        { id: 'o1', type: 'shape', x: 700, y: 0, width: 350, height: 600, shape: 'rect', fill: '#FF8C42', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 100, text: 'Spice Route', fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: '700', fill: '#2C2C2C', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 155, text: 'Authentic Indian Cuisine', fontFamily: 'Inter', fontSize: 16, fill: '#FF8C42', zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 210, text: '+91 11111 88888', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 234, text: 'Connaught Place, Delhi', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 258, text: 'info@spiceroute.in', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
      ],
    },
  },
  {
    id: 'rest-004', name: 'Cafe Minimal', industry: 'restaurants',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#F5EFE6', '#8B5E3C', '#000000'], isPremium: false,
    downloadCount: 1678, tags: ['cafe', 'coffee', 'minimal'],
    frontDesign: {
      width: 1050, height: 600, background: '#F5EFE6',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 5, height: 600, shape: 'rect', fill: '#8B5E3C', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 100, text: 'BREW & CO.', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '800', fill: '#8B5E3C', letterSpacing: 3, zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 150, text: 'Specialty Coffee & Artisan Bakes', fontFamily: 'Inter', fontSize: 14, fill: '#666666', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 50, y: 180, width: 260, height: 2, shape: 'rect', fill: '#8B5E3C', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 208, text: 'Mon–Sun: 7AM to 10PM', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
        { id: 'o6', type: 'text', x: 50, y: 230, text: 'Indiranagar, Bangalore', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'rest-005', name: 'Dark Diner', industry: 'restaurants',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#1A1A1A', '#6BCB77', '#FFFFFF'], isPremium: true,
    downloadCount: 543, tags: ['dark', 'green', 'modern'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A1A',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 6, height: 600, shape: 'rect', fill: '#6BCB77', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 90, text: 'GREEN\nGARDEN', fontFamily: 'Space Grotesk', fontSize: 50, fontWeight: '900', fill: '#FFFFFF', lineHeight: 1.0, zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 220, text: 'Vegan · Organic · Delicious', fontFamily: 'Poppins', fontSize: 15, fontWeight: '600', fill: '#6BCB77', zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 270, text: '+91 00000 99999 · Andheri, Mumbai', fontFamily: 'Inter', fontSize: 14, fill: '#888888', zIndex: 2 },
      ],
    },
  },

  // ────────────────── SALONS ──────────────────
  {
    id: 'sal-001', name: 'Glam Studio', industry: 'salons',
    thumbnail: '', orientation: 'horizontal', style: 'elegant',
    colorScheme: ['#FCE4EC', '#880E4F', '#FFFFFF'], isPremium: false,
    downloadCount: 2876, tags: ['beauty', 'pink', 'feminine'],
    frontDesign: {
      width: 1050, height: 600, background: '#FCE4EC',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 8, shape: 'rect', fill: '#880E4F', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 592, width: 1050, height: 8, shape: 'rect', fill: '#880E4F', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 90, text: '✨ GLAM STUDIO', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '800', fill: '#880E4F', letterSpacing: 1, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 140, text: 'Hair · Nails · Skincare · Makeup', fontFamily: 'Poppins', fontSize: 14, fill: '#AD1457', zIndex: 2 },
        { id: 'o5', type: 'shape', x: 60, y: 168, width: 280, height: 2, shape: 'rect', fill: '#880E4F', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 195, text: 'Deepika Sharma | Senior Stylist', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#555555', zIndex: 2 },
        { id: 'o7', type: 'text', x: 60, y: 220, text: '+91 91234 56789 | Bandra, Mumbai', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'sal-002', name: 'Unisex Bold', industry: 'salons',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FFD93D', '#000000', '#FFFFFF'], isPremium: false,
    downloadCount: 1543, tags: ['unisex', 'yellow', 'bold'],
    frontDesign: {
      width: 1050, height: 600, background: '#000000',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 300, shape: 'rect', fill: '#FFD93D', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 70, text: 'CHOP\nSHOP', fontFamily: 'Space Grotesk', fontSize: 60, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 330, text: 'The Premier Unisex Salon', fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', fill: '#FFD93D', zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 370, text: '+91 98765 12345 · Hitech City, Hyderabad', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
      ],
    },
  },
  {
    id: 'sal-003', name: 'Luxury Spa', industry: 'salons',
    thumbnail: '', orientation: 'horizontal', style: 'luxury',
    colorScheme: ['#1A1A2E', '#C9A84C', '#E8D5A3'], isPremium: true,
    downloadCount: 876, tags: ['spa', 'luxury', 'gold'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A2E',
      objects: [
        { id: 'o1', type: 'shape', x: 40, y: 40, width: 970, height: 520, shape: 'rect', fill: 'transparent', stroke: '#C9A84C', strokeWidth: 1, zIndex: 1 },
        { id: 'o2', type: 'text', x: 80, y: 100, text: 'SERENITY SPA', fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: '700', fill: '#C9A84C', letterSpacing: 4, zIndex: 2 },
        { id: 'o3', type: 'text', x: 80, y: 150, text: '& BEAUTY LOUNGE', fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: '400', fill: '#E8D5A3', letterSpacing: 4, zIndex: 2 },
        { id: 'o4', type: 'shape', x: 80, y: 180, width: 240, height: 1, shape: 'rect', fill: '#C9A84C', zIndex: 2 },
        { id: 'o5', type: 'text', x: 80, y: 210, text: 'Reena Kapoor | Wellness Expert', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
        { id: 'o6', type: 'text', x: 80, y: 240, text: '+91 88888 22222 · Juhu, Mumbai', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'sal-004', name: 'Green Beauty', industry: 'salons',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#E8F5E9', '#2E7D32', '#1A1A1A'], isPremium: false,
    downloadCount: 1234, tags: ['organic', 'green', 'natural'],
    frontDesign: {
      width: 1050, height: 600, background: '#E8F5E9',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 6, height: 600, shape: 'rect', fill: '#2E7D32', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 100, text: 'Natura Beauty', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '700', fill: '#2E7D32', zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 150, text: 'Organic · Cruelty-Free · Natural', fontFamily: 'Poppins', fontSize: 14, fill: '#4CAF50', zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 210, text: 'Sunita Joshi | Head Beautician', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 234, text: '+91 77777 33333 · Koregaon Park, Pune', fontFamily: 'Inter', fontSize: 13, fill: '#666666', zIndex: 2 },
      ],
    },
  },
  {
    id: 'sal-005', name: 'Retro Barber', industry: 'salons',
    thumbnail: '', orientation: 'horizontal', style: 'retro',
    colorScheme: ['#1B1B3A', '#E63946', '#FFFFFF'], isPremium: false,
    downloadCount: 987, tags: ['barber', 'retro', 'navy'],
    frontDesign: {
      width: 1050, height: 600, background: '#1B1B3A',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 12, shape: 'rect', fill: '#E63946', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 300, width: 1050, height: 12, shape: 'rect', fill: '#E63946', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 80, text: 'THE BARBER ROOM', fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: '800', fill: '#FFFFFF', letterSpacing: 3, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 128, text: 'Classic Cuts & Modern Styles', fontFamily: 'Poppins', fontSize: 14, fill: '#CCCCCC', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 180, text: 'Vijay Kumar | Master Barber', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#FFFFFF', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 330, text: '+91 66666 44444 · T Nagar, Chennai', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
      ],
    },
  },

  // ────────────────── GYMS ──────────────────
  {
    id: 'gym-001', name: 'Power House', industry: 'gyms',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FF6B6B', '#1A1A1A', '#FFFFFF'], isPremium: false,
    downloadCount: 2543, tags: ['fitness', 'bold', 'red'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A1A',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 8, shape: 'rect', fill: '#FF6B6B', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 80, text: '💪 POWER HOUSE', fontFamily: 'Space Grotesk', fontSize: 38, fontWeight: '900', fill: '#FF6B6B', letterSpacing: -1, zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 135, text: 'GYM & FITNESS CENTER', fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', fill: '#FFFFFF', letterSpacing: 3, zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 163, width: 320, height: 3, shape: 'rect', fill: '#FF6B6B', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 195, text: 'Rahul Fitness | Personal Trainer', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 220, text: '+91 99999 55555 · Andheri West, Mumbai', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'gym-002', name: 'Yellow Energy', industry: 'gyms',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FFD93D', '#000000', '#FFFFFF'], isPremium: false,
    downloadCount: 1876, tags: ['energy', 'yellow', 'bold'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFD93D',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: 'IRON\nZONE', fontFamily: 'Space Grotesk', fontSize: 72, fontWeight: '900', fill: '#000000', lineHeight: 0.9, zIndex: 1 },
        { id: 'o2', type: 'shape', x: 60, y: 235, width: 500, height: 5, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 260, text: 'Strength Training · CrossFit · Yoga', fontFamily: 'Poppins', fontSize: 15, fontWeight: '700', fill: '#000000', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 295, text: '+91 88888 66666 · Sector 18, Noida', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 1 },
      ],
    },
  },
  {
    id: 'gym-003', name: 'Dark Beast', industry: 'gyms',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#0D0D0D', '#6BCB77', '#FFFFFF'], isPremium: true,
    downloadCount: 765, tags: ['dark', 'green', 'premium'],
    frontDesign: {
      width: 1050, height: 600, background: '#0D0D0D',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 6, height: 600, shape: 'rect', fill: '#6BCB77', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 90, text: 'BEAST MODE', fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: '900', fill: '#FFFFFF', letterSpacing: 2, zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 145, text: 'ELITE FITNESS STUDIO', fontFamily: 'Poppins', fontSize: 13, fontWeight: '700', fill: '#6BCB77', letterSpacing: 4, zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 210, text: 'Arjun Fitness | NSCA Certified', fontFamily: 'Inter', fontSize: 14, fill: '#CCCCCC', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 234, text: '+91 77777 77777 · Koramangala', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'gym-004', name: 'Wellness White', industry: 'gyms',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#FFFFFF', '#4D96FF', '#000000'], isPremium: false,
    downloadCount: 1123, tags: ['white', 'wellness', 'minimal'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 6, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 90, text: 'FLEX FITNESS', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '800', fill: '#000000', letterSpacing: 1, zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 140, text: 'Your Wellness Journey Starts Here', fontFamily: 'Inter', fontSize: 14, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 168, width: 220, height: 2, shape: 'rect', fill: '#4D96FF', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 195, text: 'Meera Singh | Yoga & Pilates', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 220, text: '+91 66666 88888 · Vasant Kunj, Delhi', fontFamily: 'Inter', fontSize: 13, fill: '#666666', zIndex: 2 },
      ],
    },
  },
  {
    id: 'gym-005', name: 'MMA Club', industry: 'gyms',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FF6B6B', '#FFD93D', '#000000'], isPremium: true,
    downloadCount: 654, tags: ['mma', 'martial arts', 'intense'],
    frontDesign: {
      width: 1050, height: 600, background: '#000000',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 525, height: 600, shape: 'rect', fill: '#FF6B6B', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 80, text: 'FIGHT\nCLUB', fontFamily: 'Space Grotesk', fontSize: 58, fontWeight: '900', fill: '#000000', lineHeight: 0.95, zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 240, text: 'MMA & Boxing Academy', fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o4', type: 'text', x: 565, y: 100, text: 'Karan Bose', fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: '700', fill: '#FFD93D', zIndex: 2 },
        { id: 'o5', type: 'text', x: 565, y: 140, text: 'Head Coach & Trainer', fontFamily: 'Inter', fontSize: 14, fill: '#FFFFFF', zIndex: 2 },
        { id: 'o6', type: 'text', x: 565, y: 180, text: '+91 55555 99999', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
      ],
    },
  },

  // ────────────────── REAL ESTATE ──────────────────
  {
    id: 're-001', name: 'Property Pro', industry: 'real-estate',
    thumbnail: '', orientation: 'horizontal', style: 'corporate',
    colorScheme: ['#0A3D62', '#FFFFFF', '#F0B429'], isPremium: false,
    downloadCount: 3211, tags: ['real estate', 'blue', 'professional'],
    frontDesign: {
      width: 1050, height: 600, background: '#0A3D62',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 8, shape: 'rect', fill: '#F0B429', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 90, text: 'Sundar Realty', fontFamily: 'Space Grotesk', fontSize: 38, fontWeight: '800', fill: '#FFFFFF', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 142, text: 'Your Dream Home Awaits', fontFamily: 'Poppins', fontSize: 14, fill: '#F0B429', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 170, width: 200, height: 2, shape: 'rect', fill: '#F0B429', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 198, text: 'Anil Sundar | Senior Broker', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#CCDDEE', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 224, text: '+91 44444 00000 · anil@sundarrealty.in', fontFamily: 'Inter', fontSize: 13, fill: '#99AABB', zIndex: 2 },
        { id: 'o7', type: 'text', x: 60, y: 248, text: 'RERA Registered: REG/2024/001', fontFamily: 'Inter', fontSize: 12, fill: '#667788', zIndex: 2 },
      ],
    },
  },
  {
    id: 're-002', name: 'Premium Homes', industry: 'real-estate',
    thumbnail: '', orientation: 'horizontal', style: 'luxury',
    colorScheme: ['#1A1A1A', '#C9A84C', '#FFFFFF'], isPremium: true,
    downloadCount: 1456, tags: ['luxury', 'gold', 'premium homes'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A1A',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: 'PRESTIGE\nHOMES', fontFamily: 'Space Grotesk', fontSize: 52, fontWeight: '900', fill: '#C9A84C', lineHeight: 1.0, zIndex: 1 },
        { id: 'o2', type: 'shape', x: 60, y: 228, width: 420, height: 3, shape: 'rect', fill: '#C9A84C', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 258, text: 'Luxury Properties · Premium Locations', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 300, text: 'Sneha Joshi | Property Consultant', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#FFFFFF', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 326, text: '+91 33333 11111 · sneha@prestigehomes.in', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 1 },
      ],
    },
  },
  {
    id: 're-003', name: 'Modern Realtor', industry: 'real-estate',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#4D96FF', '#FFFFFF', '#000000'], isPremium: false,
    downloadCount: 987, tags: ['modern', 'blue', 'clean'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 600, y: 0, width: 450, height: 600, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 90, text: 'Vikram\nMalhotra', fontFamily: 'Space Grotesk', fontSize: 42, fontWeight: '800', fill: '#000000', lineHeight: 1.1, zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 210, text: 'Certified Real Estate Agent', fontFamily: 'Inter', fontSize: 14, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 255, text: '+91 22222 88888', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 278, text: 'vikram@dreaestates.in', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
      ],
    },
  },
  {
    id: 're-004', name: 'Green Realty', industry: 'real-estate',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#F1FFF3', '#2E7D32', '#1A1A1A'], isPremium: false,
    downloadCount: 765, tags: ['green', 'eco', 'sustainable'],
    frontDesign: {
      width: 1050, height: 600, background: '#F1FFF3',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 8, height: 600, shape: 'rect', fill: '#2E7D32', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 90, text: 'EcoHome Realty', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#2E7D32', zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 142, text: 'Sustainable · Eco-Friendly · Modern', fontFamily: 'Poppins', fontSize: 14, fill: '#4CAF50', zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 200, text: 'Pooja Agarwal | Eco Property Specialist', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 225, text: '+91 11111 22222 · Whitefield, Bangalore', fontFamily: 'Inter', fontSize: 13, fill: '#666666', zIndex: 2 },
      ],
    },
  },
  {
    id: 're-005', name: 'Red Agency', industry: 'real-estate',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#FF6B6B', '#000000', '#FFFFFF'], isPremium: true,
    downloadCount: 543, tags: ['bold', 'red', 'agency'],
    frontDesign: {
      width: 1050, height: 600, background: '#FF6B6B',
      objects: [
        { id: 'o1', type: 'shape', x: 500, y: 0, width: 550, height: 600, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 90, text: 'PRIME\nESTATES', fontFamily: 'Space Grotesk', fontSize: 52, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 2 },
        { id: 'o3', type: 'text', x: 540, y: 100, text: 'Ravi Sharma', fontFamily: 'Space Grotesk', fontSize: 26, fontWeight: '700', fill: '#FFFFFF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 540, y: 144, text: 'Sales Director', fontFamily: 'Inter', fontSize: 15, fill: '#FF6B6B', zIndex: 2 },
        { id: 'o5', type: 'text', x: 540, y: 200, text: '+91 00000 33333', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
        { id: 'o6', type: 'text', x: 540, y: 225, text: 'ravi@primeestates.in', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
      ],
    },
  },

  // ────────────────── IT COMPANIES ──────────────────
  {
    id: 'it-001', name: 'Tech Minimal', industry: 'it-companies',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#0A0A0A', '#4D96FF', '#FFFFFF'], isPremium: false,
    downloadCount: 4521, tags: ['tech', 'dark', 'minimal'],
    frontDesign: {
      width: 1050, height: 600, background: '#0A0A0A',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 4, height: 600, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 80, text: 'Aakash Gupta', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#FFFFFF', zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 128, text: 'Full Stack Developer', fontFamily: 'Inter', fontSize: 15, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 40, y: 158, width: 180, height: 2, shape: 'rect', fill: '#4D96FF', zIndex: 2 },
        { id: 'o5', type: 'text', x: 40, y: 185, text: 'TechNova Solutions Pvt. Ltd.', fontFamily: 'Poppins', fontSize: 14, fontWeight: '600', fill: '#CCCCCC', zIndex: 2 },
        { id: 'o6', type: 'text', x: 40, y: 210, text: '+91 99999 11111', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
        { id: 'o7', type: 'text', x: 40, y: 232, text: 'aakash@technova.io', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
        { id: 'o8', type: 'text', x: 40, y: 254, text: 'technova.io', fontFamily: 'Inter', fontSize: 13, fill: '#4D96FF', zIndex: 2 },
      ],
    },
  },
  {
    id: 'it-002', name: 'Startup Brutalist', industry: 'it-companies',
    thumbnail: '', orientation: 'horizontal', style: 'brutalist',
    colorScheme: ['#FFD93D', '#000000', '#4D96FF'], isPremium: false,
    downloadCount: 2134, tags: ['startup', 'brutalist', 'yellow'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFD93D',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 6, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 594, width: 1050, height: 6, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 80, text: '{ DEVCRAFT }', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '900', fill: '#000000', zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 135, text: 'Software · Design · Innovation', fontFamily: 'Poppins', fontSize: 15, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'shape', x: 60, y: 165, width: 400, height: 4, shape: 'rect', fill: '#000000', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 200, text: 'Prashant Tiwari | CTO', fontFamily: 'Inter', fontSize: 16, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o7', type: 'text', x: 60, y: 228, text: '+91 88888 00000 · prashant@devcraft.io', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
      ],
    },
  },
  {
    id: 'it-003', name: 'SaaS Blue', industry: 'it-companies',
    thumbnail: '', orientation: 'horizontal', style: 'corporate',
    colorScheme: ['#EEF2FF', '#4361EE', '#1A1A1A'], isPremium: false,
    downloadCount: 1876, tags: ['saas', 'blue', 'corporate'],
    frontDesign: {
      width: 1050, height: 600, background: '#EEF2FF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 8, shape: 'rect', fill: '#4361EE', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 90, text: 'CloudStack Inc.', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#1A1A1A', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 140, text: 'Enterprise SaaS · AI Solutions · Cloud', fontFamily: 'Inter', fontSize: 14, fill: '#4361EE', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 168, width: 240, height: 2, shape: 'rect', fill: '#4361EE', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 195, text: 'Divya Nair | Product Manager', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 220, text: '+91 77777 44444 · divya@cloudstack.io', fontFamily: 'Inter', fontSize: 13, fill: '#666666', zIndex: 2 },
        { id: 'o7', type: 'text', x: 60, y: 244, text: 'cloudstack.io', fontFamily: 'Inter', fontSize: 13, fill: '#4361EE', zIndex: 2 },
      ],
    },
  },
  {
    id: 'it-004', name: 'Green Tech', industry: 'it-companies',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#000000', '#6BCB77', '#FFFFFF'], isPremium: true,
    downloadCount: 987, tags: ['green', 'tech', 'modern'],
    frontDesign: {
      width: 1050, height: 600, background: '#000000',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 6, shape: 'rect', fill: '#6BCB77', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 90, text: 'GreenByte', fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: '800', fill: '#6BCB77', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 145, text: 'Sustainable Tech Solutions', fontFamily: 'Inter', fontSize: 15, fill: '#FFFFFF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 210, text: 'Rohit Sharma | Solutions Architect', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#CCCCCC', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 235, text: '+91 66666 55555 · rohit@greenbyte.io', fontFamily: 'Inter', fontSize: 13, fill: '#888888', zIndex: 2 },
      ],
    },
  },
  {
    id: 'it-005', name: 'Agency Creative', industry: 'it-companies',
    thumbnail: '', orientation: 'horizontal', style: 'creative',
    colorScheme: ['#FF6B6B', '#FFD93D', '#4D96FF'], isPremium: true,
    downloadCount: 1234, tags: ['creative', 'agency', 'colorful'],
    frontDesign: {
      width: 1050, height: 600, background: '#FF6B6B',
      objects: [
        { id: 'o1', type: 'shape', x: 350, y: 0, width: 350, height: 600, shape: 'rect', fill: '#FFD93D', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 700, y: 0, width: 350, height: 600, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o3', type: 'text', x: 40, y: 80, text: 'PIXEL\nCRAFT', fontFamily: 'Space Grotesk', fontSize: 52, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 2 },
        { id: 'o4', type: 'text', x: 40, y: 225, text: 'Web & Brand Agency', fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'text', x: 40, y: 260, text: 'Kiran Rao | Creative Director', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 2 },
        { id: 'o6', type: 'text', x: 40, y: 285, text: '+91 55555 66666', fontFamily: 'Inter', fontSize: 13, fill: '#333333', zIndex: 2 },
      ],
    },
  },

  // ────────────────── PHOTOGRAPHERS ──────────────────
  {
    id: 'photo-001', name: 'Lens Dark', industry: 'photographers',
    thumbnail: '', orientation: 'horizontal', style: 'elegant',
    colorScheme: ['#1A1A1A', '#FFFFFF', '#FFD93D'], isPremium: false,
    downloadCount: 2987, tags: ['photography', 'dark', 'elegant'],
    frontDesign: {
      width: 1050, height: 600, background: '#1A1A1A',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 80, text: '◉', fontFamily: 'Inter', fontSize: 60, fill: '#FFD93D', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 175, text: 'SHUTTER\nSTORIES', fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: '900', fill: '#FFFFFF', lineHeight: 1.0, zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 290, text: 'Ishaan Mehta | Photographer', fontFamily: 'Poppins', fontSize: 15, fontWeight: '600', fill: '#FFD93D', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 330, text: '+91 44444 77777 · Goa & Mumbai', fontFamily: 'Inter', fontSize: 14, fill: '#888888', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 354, text: 'ishaan@shutterstories.in', fontFamily: 'Inter', fontSize: 14, fill: '#888888', zIndex: 1 },
      ],
    },
  },
  {
    id: 'photo-002', name: 'White Frame', industry: 'photographers',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#FFFFFF', '#000000', '#FF6B6B'], isPremium: false,
    downloadCount: 1876, tags: ['white', 'minimal', 'frame'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 20, y: 20, width: 1010, height: 560, shape: 'rect', fill: 'transparent', stroke: '#000000', strokeWidth: 3, zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 100, text: 'Ananya Krishnan', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o3', type: 'text', x: 60, y: 150, text: 'Wedding & Lifestyle Photography', fontFamily: 'Inter', fontSize: 15, fill: '#FF6B6B', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 60, y: 178, width: 240, height: 2, shape: 'rect', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 205, text: '+91 33333 88888', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 230, text: 'ananya@ananyaphotography.in', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
      ],
    },
  },
  {
    id: 'photo-003', name: 'Golden Hour', industry: 'photographers',
    thumbnail: '', orientation: 'horizontal', style: 'warm',
    colorScheme: ['#FFF3E0', '#E65100', '#1A1A1A'], isPremium: true,
    downloadCount: 1123, tags: ['warm', 'orange', 'golden hour'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFF3E0',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 8, height: 600, shape: 'rect', fill: '#E65100', zIndex: 1 },
        { id: 'o2', type: 'text', x: 50, y: 90, text: 'Golden Hour', fontFamily: 'Space Grotesk', fontSize: 38, fontWeight: '800', fill: '#E65100', zIndex: 2 },
        { id: 'o3', type: 'text', x: 50, y: 145, text: 'Photography Studio', fontFamily: 'Inter', fontSize: 16, fill: '#BF360C', zIndex: 2 },
        { id: 'o4', type: 'text', x: 50, y: 200, text: 'Rohan Bajaj | Portrait & Events', fontFamily: 'Inter', fontSize: 14, fontWeight: '600', fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 50, y: 225, text: '+91 22222 99999 · Pune', fontFamily: 'Inter', fontSize: 13, fill: '#666666', zIndex: 2 },
      ],
    },
  },
  {
    id: 'photo-004', name: 'Commercial Pro', industry: 'photographers',
    thumbnail: '', orientation: 'horizontal', style: 'corporate',
    colorScheme: ['#000000', '#4D96FF', '#FFFFFF'], isPremium: false,
    downloadCount: 876, tags: ['commercial', 'professional', 'blue'],
    frontDesign: {
      width: 1050, height: 600, background: '#000000',
      objects: [
        { id: 'o1', type: 'shape', x: 500, y: 0, width: 550, height: 600, shape: 'rect', fill: '#4D96FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 100, text: 'FOCUS\nLABS', fontFamily: 'Space Grotesk', fontSize: 52, fontWeight: '900', fill: '#FFFFFF', lineHeight: 1.0, zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 240, text: 'Product & Commercial Photography', fontFamily: 'Poppins', fontSize: 14, fill: '#4D96FF', zIndex: 2 },
        { id: 'o4', type: 'text', x: 540, y: 100, text: 'Neha Pillai', fontFamily: 'Space Grotesk', fontSize: 26, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'text', x: 540, y: 145, text: 'Lead Photographer', fontFamily: 'Inter', fontSize: 14, fill: '#1A1A1A', zIndex: 2 },
        { id: 'o6', type: 'text', x: 540, y: 200, text: '+91 11111 00000', fontFamily: 'Inter', fontSize: 14, fill: '#1A1A1A', zIndex: 2 },
      ],
    },
  },
  {
    id: 'photo-005', name: 'Film Retro', industry: 'photographers',
    thumbnail: '', orientation: 'horizontal', style: 'retro',
    colorScheme: ['#F5DEB3', '#8B4513', '#1A1A1A'], isPremium: true,
    downloadCount: 654, tags: ['film', 'retro', 'vintage'],
    frontDesign: {
      width: 1050, height: 600, background: '#F5DEB3',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 10, shape: 'rect', fill: '#8B4513', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 590, width: 1050, height: 10, shape: 'rect', fill: '#8B4513', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 85, text: 'ANALOG\nDREAMS', fontFamily: 'Space Grotesk', fontSize: 46, fontWeight: '900', fill: '#8B4513', lineHeight: 1.0, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 230, text: 'Film Photography & Dark Room', fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', fill: '#5D2E0C', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 265, text: 'Arya Nambiar | Film Photographer', fontFamily: 'Inter', fontSize: 14, fill: '#4A3728', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 290, text: '+91 00000 44444 · Kochi', fontFamily: 'Inter', fontSize: 13, fill: '#6B4C35', zIndex: 2 },
      ],
    },
  },

  // ────────────────── FREELANCERS ──────────────────
  {
    id: 'free-001', name: 'Creative Freelance', industry: 'freelancers',
    thumbnail: '', orientation: 'horizontal', style: 'creative',
    colorScheme: ['#6BCB77', '#000000', '#FFD93D'], isPremium: false,
    downloadCount: 3876, tags: ['freelance', 'creative', 'green'],
    frontDesign: {
      width: 1050, height: 600, background: '#6BCB77',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 6, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 594, width: 1050, height: 6, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 80, text: 'MAYA\nCREATIVE', fontFamily: 'Space Grotesk', fontSize: 52, fontWeight: '900', fill: '#000000', lineHeight: 1.0, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 228, text: 'UI/UX · Brand Design · Illustration', fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'shape', x: 60, y: 256, width: 380, height: 3, shape: 'rect', fill: '#000000', zIndex: 2 },
        { id: 'o6', type: 'text', x: 60, y: 282, text: 'maya@mayacreative.design', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 2 },
        { id: 'o7', type: 'text', x: 60, y: 307, text: '+91 98765 00001 · mayacreative.design', fontFamily: 'Inter', fontSize: 13, fill: '#1A4A1A', zIndex: 2 },
      ],
    },
  },
  {
    id: 'free-002', name: 'Minimal Card', industry: 'freelancers',
    thumbnail: '', orientation: 'horizontal', style: 'minimal',
    colorScheme: ['#FFFFFF', '#000000', '#FF6B6B'], isPremium: false,
    downloadCount: 2543, tags: ['minimal', 'white', 'clean'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFFFFF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 4, height: 600, shape: 'rect', fill: '#FF6B6B', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 90, text: 'Samir Verma', fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 140, text: 'Content Writer & Copywriter', fontFamily: 'Inter', fontSize: 15, fill: '#FF6B6B', zIndex: 2 },
        { id: 'o4', type: 'shape', x: 40, y: 168, width: 200, height: 2, shape: 'rect', fill: '#EEEEEE', zIndex: 2 },
        { id: 'o5', type: 'text', x: 40, y: 196, text: 'samir@writewithsamir.in', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o6', type: 'text', x: 40, y: 220, text: '+91 87654 32109', fontFamily: 'Inter', fontSize: 14, fill: '#444444', zIndex: 2 },
        { id: 'o7', type: 'text', x: 40, y: 244, text: 'writewithsamir.in', fontFamily: 'Inter', fontSize: 14, fill: '#FF6B6B', zIndex: 2 },
      ],
    },
  },
  {
    id: 'free-003', name: 'Dev Dark', industry: 'freelancers',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#0D1117', '#58A6FF', '#FFFFFF'], isPremium: false,
    downloadCount: 1987, tags: ['developer', 'dark', 'github'],
    frontDesign: {
      width: 1050, height: 600, background: '#0D1117',
      objects: [
        { id: 'o1', type: 'text', x: 60, y: 70, text: '< />', fontFamily: 'Space Grotesk', fontSize: 48, fontWeight: '900', fill: '#58A6FF', zIndex: 1 },
        { id: 'o2', type: 'text', x: 60, y: 145, text: 'Kartik Dev', fontFamily: 'Space Grotesk', fontSize: 34, fontWeight: '700', fill: '#FFFFFF', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 195, text: 'Freelance React & Node Developer', fontFamily: 'Inter', fontSize: 15, fill: '#58A6FF', zIndex: 1 },
        { id: 'o4', type: 'text', x: 60, y: 255, text: '+91 76543 21098', fontFamily: 'Inter', fontSize: 14, fill: '#8B949E', zIndex: 1 },
        { id: 'o5', type: 'text', x: 60, y: 280, text: 'kartik@kartikdev.io', fontFamily: 'Inter', fontSize: 14, fill: '#8B949E', zIndex: 1 },
        { id: 'o6', type: 'text', x: 60, y: 305, text: 'github.com/kartikdev', fontFamily: 'Inter', fontSize: 13, fill: '#58A6FF', zIndex: 1 },
      ],
    },
  },
  {
    id: 'free-004', name: 'Bold Brand', industry: 'freelancers',
    thumbnail: '', orientation: 'horizontal', style: 'bold',
    colorScheme: ['#4D96FF', '#FFD93D', '#000000'], isPremium: true,
    downloadCount: 1234, tags: ['bold', 'brand', 'colorful'],
    frontDesign: {
      width: 1050, height: 600, background: '#4D96FF',
      objects: [
        { id: 'o1', type: 'shape', x: 0, y: 0, width: 1050, height: 10, shape: 'rect', fill: '#000000', zIndex: 1 },
        { id: 'o2', type: 'shape', x: 0, y: 590, width: 1050, height: 10, shape: 'rect', fill: '#FFD93D', zIndex: 1 },
        { id: 'o3', type: 'text', x: 60, y: 80, text: 'BRAND\nMARKETER', fontFamily: 'Space Grotesk', fontSize: 54, fontWeight: '900', fill: '#FFFFFF', lineHeight: 1.0, zIndex: 2 },
        { id: 'o4', type: 'text', x: 60, y: 240, text: 'Nisha Reddy | Social Media & Growth', fontFamily: 'Poppins', fontSize: 15, fontWeight: '700', fill: '#000000', zIndex: 2 },
        { id: 'o5', type: 'text', x: 60, y: 272, text: '+91 65432 10987 · nisha@nishabrands.in', fontFamily: 'Inter', fontSize: 14, fill: '#000000', zIndex: 2 },
      ],
    },
  },
  {
    id: 'free-005', name: 'Yellow Consult', industry: 'freelancers',
    thumbnail: '', orientation: 'horizontal', style: 'modern',
    colorScheme: ['#FFD93D', '#1A1A1A', '#FFFFFF'], isPremium: false,
    downloadCount: 876, tags: ['consultant', 'yellow', 'modern'],
    frontDesign: {
      width: 1050, height: 600, background: '#FFD93D',
      objects: [
        { id: 'o1', type: 'shape', x: 560, y: 0, width: 490, height: 600, shape: 'rect', fill: '#1A1A1A', zIndex: 1 },
        { id: 'o2', type: 'text', x: 40, y: 90, text: 'Prakash\nKumar', fontFamily: 'Space Grotesk', fontSize: 44, fontWeight: '900', fill: '#1A1A1A', lineHeight: 1.0, zIndex: 2 },
        { id: 'o3', type: 'text', x: 40, y: 225, text: 'Business Consultant', fontFamily: 'Poppins', fontSize: 15, fontWeight: '700', fill: '#1A1A1A', zIndex: 2 },
        { id: 'o4', type: 'text', x: 40, y: 265, text: '+91 54321 09876', fontFamily: 'Inter', fontSize: 14, fill: '#333333', zIndex: 2 },
        { id: 'o5', type: 'text', x: 600, y: 100, text: 'prakash.in', fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: '700', fill: '#FFD93D', zIndex: 2 },
        { id: 'o6', type: 'text', x: 600, y: 148, text: 'prakash@prakash.in', fontFamily: 'Inter', fontSize: 14, fill: '#AAAAAA', zIndex: 2 },
      ],
    },
  },
];

// Industry metadata
export const INDUSTRIES = [
  { id: 'doctors', label: 'Doctors', icon: '🏥', count: 100 },
  { id: 'lawyers', label: 'Lawyers', icon: '⚖️', count: 100 },
  { id: 'restaurants', label: 'Restaurants', icon: '🍽️', count: 100 },
  { id: 'salons', label: 'Salons', icon: '💇', count: 100 },
  { id: 'gyms', label: 'Gyms', icon: '💪', count: 100 },
  { id: 'real-estate', label: 'Real Estate', icon: '🏡', count: 100 },
  { id: 'it-companies', label: 'IT Companies', icon: '💻', count: 100 },
  { id: 'coaches', label: 'Coaches', icon: '🎯', count: 100 },
  { id: 'photographers', label: 'Photographers', icon: '📷', count: 100 },
  { id: 'freelancers', label: 'Freelancers', icon: '🚀', count: 100 },
] as const;

export const TEMPLATE_STYLES = [
  'minimal', 'bold', 'elegant', 'playful', 'corporate',
  'creative', 'luxury', 'modern', 'retro', 'brutalist',
] as const;
