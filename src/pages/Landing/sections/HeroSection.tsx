import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Download, Star } from 'lucide-react';

const CARD_PREVIEW = {
  front: {
    bg: 'linear-gradient(135deg, #1A3C5E 0%, #0D2137 100%)',
    accent: '#FFD93D',
    name: 'Dr. Vivek Sawji',
    title: 'Chief Medical Officer',
    company: 'Apollo Hospitals',
    phone: '+91 98765 43210',
    email: 'vivek@apollo.com',
  },
};

function BusinessCardMockup() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      {/* Shadow card (back) */}
      <motion.div
        animate={{ rotate: [6, 8, 6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', inset: 0, background: '#FFD93D',
          border: '4px solid #000', borderRadius: '12px',
          boxShadow: '8px 8px 0 #000', transform: 'rotate(6deg)',
        }}
      />
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'relative', background: CARD_PREVIEW.front.bg,
          border: '4px solid #000', borderRadius: '12px',
          boxShadow: '8px 8px 0 #000', padding: '2rem', minHeight: '240px',
          zIndex: 2,
        }}
      >
        {/* Card content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', height: '100%' }}>
          <div style={{ fontFamily: 'Space Grotesk', fontSize: '1.375rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            {CARD_PREVIEW.front.name}
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#FFD93D', fontWeight: 600, marginBottom: '0.75rem' }}>
            {CARD_PREVIEW.front.title}
          </div>
          <div style={{ width: '80px', height: '3px', background: '#FFD93D', marginBottom: '0.75rem' }} />
          <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#CCDDEE', fontWeight: 600 }}>
            {CARD_PREVIEW.front.company}
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#99AABB' }}>{CARD_PREVIEW.front.phone}</div>
          <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#99AABB' }}>{CARD_PREVIEW.front.email}</div>
        </div>
        {/* QR corner */}
        <div style={{
          position: 'absolute', bottom: '1rem', right: '1rem',
          background: '#fff', border: '2px solid #000', borderRadius: '4px',
          padding: '6px', display: 'grid', gridTemplateColumns: 'repeat(4, 6px)', gap: '2px',
        }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, background: [0,1,4,5,2,3,6,7,8,10,11,14,15,12].includes(i) ? '#000' : 'transparent' }} />
          ))}
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute', top: '-28px', right: '-20px',
          background: '#6BCB77', border: '3px solid #000', borderRadius: '8px',
          padding: '0.5rem 1rem', boxShadow: '4px 4px 0 #000',
          fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: '#000',
          display: 'flex', alignItems: 'center', gap: '0.375rem', whiteSpace: 'nowrap',
        }}
      >
        <Sparkles size={14} /> AI Generated ✨
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', bottom: '-20px', left: '-24px',
          background: '#4D96FF', border: '3px solid #000', borderRadius: '8px',
          padding: '0.5rem 1rem', boxShadow: '4px 4px 0 #000',
          fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: '#fff',
          display: 'flex', alignItems: 'center', gap: '0.375rem', whiteSpace: 'nowrap',
        }}
      >
        <Download size={14} /> Print Ready
      </motion.div>
    </div>
  );
}

const HEADLINE_WORDS = ['Professional', 'Stunning', 'AI-Powered', 'Print-Ready'];

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', paddingTop: '80px', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Background patterns */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0 }} />
        {/* Colored blobs */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: '#FFD93D', borderRadius: '50%', opacity: 0.08, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', background: '#4D96FF', borderRadius: '50%', opacity: 0.08, filter: 'blur(60px)' }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="section-tag"
              style={{ background: '#FFD93D', display: 'inline-flex', marginBottom: '1.5rem' }}
            >
              <Star size={12} fill="#000" /> #1 Business Card Builder in India
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title section-title-xl"
              style={{ marginBottom: '1.5rem', lineHeight: 1.05 }}
            >
              Create{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ color: '#4D96FF' }}>Business Cards</span>
                <motion.span
                  layoutId="underline"
                  style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '5px', background: '#FFD93D', border: '2px solid #000', borderRadius: '2px',
                  }}
                />
              </span>
              {' '}That{' '}
              <span style={{ color: '#FF6B6B' }}>WOW</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: 'Inter', fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '520px' }}
            >
              Design professional business cards with AI, 1000+ templates, drag-and-drop editor, QR codes, and instant print-ready exports. Trusted by 50,000+ professionals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
            >
              <Link to="/signup" className="btn btn-primary btn-xl" style={{ textDecoration: 'none' }}>
                Start Designing Free <ArrowRight size={20} />
              </Link>
              <Link to="/dashboard/templates" className="btn btn-outline btn-xl" style={{ textDecoration: 'none' }}>
                Browse Templates
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex' }}>
                  {['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#A855F7'].map((c, i) => (
                    <div key={i} style={{
                      width: '32px', height: '32px', borderRadius: '50%', background: c,
                      border: '2px solid #000', marginLeft: i === 0 ? 0 : '-8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', color: '#000',
                    }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: '#FFD93D', fontSize: '14px' }}>★</span>)}
                  </div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>50,000+ happy users</div>
                </div>
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                ✓ No credit card required &nbsp; ✓ Free forever plan
              </div>
            </motion.div>
          </div>

          {/* Right - Card Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', padding: '3rem 1rem' }}
          >
            <BusinessCardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#FFD93D', border: '3px solid #000', borderLeft: 'none', borderRight: 'none',
        padding: '0.625rem 0', overflow: 'hidden',
      }}>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#000' }}>
              {['AI Card Generator', 'Drag & Drop Editor', '1000+ Templates', 'QR Codes', 'NFC Cards', 'Print Ready', 'Team Collaboration', 'Digital Cards', '50+ Industries', 'Instant Export'].map(item => (
                <span key={item}>&nbsp;&nbsp;⚡ {item} &nbsp;&nbsp;·</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
