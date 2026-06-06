import { motion } from 'framer-motion';
import { Sparkles, MousePointer, QrCode, Nfc, Users, Printer, Download, Palette, Zap, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: Sparkles, color: '#FFD93D', bg: '#FFF9DB',
    title: 'AI Card Generator',
    desc: 'Enter your details and let AI create 4–8 stunning card designs in seconds. Choose colors, fonts, and layouts automatically.',
    badge: 'NEW ✨',
  },
  {
    icon: MousePointer, color: '#4D96FF', bg: '#EBF4FF',
    title: 'Drag & Drop Editor',
    desc: 'Canvas-based editor with layer management, snap-to-grid, undo/redo, text editing, image upload, and real-time preview.',
    badge: 'EDITOR',
  },
  {
    icon: QrCode, color: '#6BCB77', bg: '#EDFAF0',
    title: 'QR Code Generator',
    desc: 'Generate custom QR codes for websites, WhatsApp, UPI payments, contact cards, and locations with custom colors and logos.',
    badge: 'QR',
  },
  {
    icon: Nfc, color: '#FF6B6B', bg: '#FFF0F0',
    title: 'NFC Card Support',
    desc: 'Add NFC indicators to your card designs and create digital profiles that NFC cards can link to instantly.',
    badge: 'NFC',
  },
  {
    icon: Users, color: '#A855F7', bg: '#F5F0FF',
    title: 'Team Collaboration',
    desc: 'Invite designers, clients, and managers. Work on shared projects with role-based permissions and real-time feedback.',
    badge: 'TEAM',
  },
  {
    icon: Printer, color: '#FF8C42', bg: '#FFF4EB',
    title: 'Print Ready Exports',
    desc: 'Export at 300 DPI in PNG, JPG, SVG, or PDF format. Bleed marks, CMYK-safe colors, and print-ready specifications.',
    badge: 'PRINT',
  },
  {
    icon: Palette, color: '#00C896', bg: '#E6FBF5',
    title: '1000+ Templates',
    desc: 'Choose from over 1000 professionally designed templates across 50+ industries. Filter by style, color, and orientation.',
    badge: 'LIBRARY',
  },
  {
    icon: Download, color: '#F59E0B', bg: '#FFFBEB',
    title: 'Instant Download',
    desc: 'Download your finished cards instantly at any resolution. No watermarks on free plan. Print locally or order online.',
    badge: 'FAST',
  },
  {
    icon: Shield, color: '#10B981', bg: '#ECFDF5',
    title: 'Digital Business Cards',
    desc: 'Share a live digital profile page with one link. Include call, WhatsApp, save contact, and social links — no app needed.',
    badge: 'DIGITAL',
  },
  {
    icon: Zap, color: '#6366F1', bg: '#EEF2FF',
    title: 'Analytics Dashboard',
    desc: 'Track views, downloads, QR scans, and contact saves. Get insights on which cards perform best and optimize accordingly.',
    badge: 'ANALYTICS',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '6rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-tag" style={{ background: '#4D96FF', color: '#fff', display: 'inline-flex', marginBottom: '1rem' }}>
            ⚡ Powerful Features
          </div>
          <h2 className="section-title section-title-lg" style={{ marginBottom: '1rem' }}>
            Everything You Need to Build{' '}
            <span style={{ color: '#FF6B6B' }}>Perfect</span> Business Cards
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            From AI generation to print-ready exports, CardBuilderStudio is the complete toolkit for professional business card design.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card"
                style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden', cursor: 'default' }}
                whileHover={{ y: -5, boxShadow: '8px 8px 0 #000' }}
              >
                {/* Badge */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: feature.color, border: '2px solid #000', borderRadius: '4px',
                  padding: '2px 8px', fontFamily: 'Space Grotesk', fontWeight: 800,
                  fontSize: '0.65rem', letterSpacing: '0.08em', color: '#000',
                }}>
                  {feature.badge}
                </div>

                {/* Icon */}
                <div style={{
                  width: '52px', height: '52px', background: feature.bg,
                  border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} color={feature.color} />
                </div>

                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.625rem' }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
