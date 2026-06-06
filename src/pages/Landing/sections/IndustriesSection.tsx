import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../../../data/templates';

const COLORS = ['#FFD93D', '#4D96FF', '#6BCB77', '#FF6B6B', '#A855F7', '#FF8C42', '#00C896', '#F59E0B', '#6366F1', '#10B981'];

export default function IndustriesSection() {
  return (
    <section id="industries" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '3px solid var(--border-color)', borderBottom: '3px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-tag" style={{ background: '#FF6B6B', color: '#fff', display: 'inline-flex', marginBottom: '1rem' }}>
            🏭 100+ Templates Per Industry
          </div>
          <h2 className="section-title section-title-lg" style={{ marginBottom: '1rem' }}>
            Templates for Every{' '}
            <span style={{ color: '#4D96FF' }}>Industry</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>
            Whether you're a doctor, lawyer, chef, or developer — we have professionally designed templates for your industry.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '8px 8px 0 #000' }}
              style={{
                background: 'var(--bg-primary)', border: '3px solid #000', borderRadius: '8px',
                padding: '1.75rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: '5px 5px 0 #000', display: 'flex', flexDirection: 'column',
                alignItems: 'center', textAlign: 'center', gap: '0.75rem', textDecoration: 'none',
                position: 'relative', overflow: 'hidden',
              }}
              onClick={() => {}}
            >
              {/* Color accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: COLORS[i % COLORS.length] }} />

              <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>{industry.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                {industry.label}
              </div>
              <div style={{
                background: COLORS[i % COLORS.length], border: '2px solid #000',
                borderRadius: '20px', padding: '2px 10px',
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', color: '#000',
              }}>
                {industry.count}+ templates
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <Link to="/dashboard/templates" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>
            Browse All 1000+ Templates <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
