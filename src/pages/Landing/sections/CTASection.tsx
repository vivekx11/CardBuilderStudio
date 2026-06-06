import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '3px solid var(--border-color)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          {/* Big card */}
          <div style={{
            background: '#FFD93D', border: '5px solid #000', borderRadius: '16px',
            boxShadow: '12px 12px 0 #000', padding: '3.5rem 2rem', position: 'relative', overflow: 'hidden',
          }}>
            {/* BG pattern */}
            <div className="stripe-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🚀</div>
              <h2 className="section-title section-title-lg" style={{ color: '#000', marginBottom: '1rem' }}>
                Ready to Create Your{' '}
                <span style={{ textDecoration: 'underline', textDecorationStyle: 'wavy', textDecorationColor: '#FF6B6B' }}>
                  Perfect Card?
                </span>
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '1.125rem', color: '#333', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                Join 50,000+ professionals who use CardBuilderStudio to make lasting first impressions. Start for free — no credit card required.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <Link to="/signup" className="btn btn-xl" style={{
                  textDecoration: 'none', background: '#000', color: '#FFD93D',
                  border: '4px solid #000', boxShadow: '6px 6px 0 #333',
                }}>
                  <Sparkles size={20} /> Start Designing Free
                </Link>
                <Link to="/dashboard/templates" className="btn btn-xl btn-outline" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.5)' }}>
                  View Templates <ArrowRight size={18} />
                </Link>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
                {['✓ Free forever plan', '✓ No credit card needed', '✓ Export in minutes', '✓ Print-ready quality'].map(item => (
                  <span key={item} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#000' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
