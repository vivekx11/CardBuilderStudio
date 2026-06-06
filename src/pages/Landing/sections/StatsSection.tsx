import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 1000, suffix: '+', label: 'Premium Templates', color: '#FFD93D', icon: '🎨' },
  { value: 50, suffix: '+', label: 'Industries Covered', color: '#4D96FF', icon: '🏭' },
  { value: 10000, suffix: '+', label: 'Cards Downloaded', color: '#6BCB77', icon: '📥' },
  { value: 50000, suffix: '+', label: 'Happy Designers', color: '#FF6B6B', icon: '😊' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction', color: '#A855F7', icon: '⭐' },
  { value: 300, suffix: ' DPI', label: 'Print-Ready Quality', color: '#FF8C42', icon: '🖨️' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const stepVal = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepVal;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section id="stats" style={{ padding: '5rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '3px solid var(--border-color)', borderBottom: '3px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-tag" style={{ background: '#6BCB77', display: 'inline-flex', marginBottom: '1rem' }}>
            📊 By The Numbers
          </div>
          <h2 className="section-title section-title-lg">
            Trusted by Thousands of Professionals
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
              style={{ padding: '1.75rem 1.5rem', textAlign: 'center', cursor: 'default' }}
              whileHover={{ y: -4, boxShadow: '8px 8px 0 #000' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2.25rem',
                color: stat.color, WebkitTextStroke: '1px #000', marginBottom: '0.375rem',
                lineHeight: 1.1,
              }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
