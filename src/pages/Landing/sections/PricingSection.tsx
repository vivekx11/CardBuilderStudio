import { motion } from 'framer-motion';
import { Check, Zap, Building2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: 'Free', price: '₹0', period: '/forever', color: '#6BCB77',
    icon: Star, badge: 'START HERE',
    features: [
      '5 Business Card Designs',
      '50+ Free Templates',
      'PNG & JPG Export (72 DPI)',
      'QR Code Generator (3/month)',
      'Digital Business Card',
      'Community Support',
    ],
    cta: 'Get Started Free', ctaStyle: 'btn-outline',
    highlight: false,
  },
  {
    name: 'Pro', price: '₹499', period: '/month', color: '#FFD93D',
    icon: Zap, badge: '🔥 MOST POPULAR',
    features: [
      'Unlimited Card Designs',
      '500+ Premium Templates',
      'PNG, JPG, SVG, PDF Export',
      'Print-Ready 300 DPI',
      'Unlimited QR Codes',
      'AI Card Generator (20/month)',
      'Mockup Generator',
      'Analytics Dashboard',
      'Priority Support',
    ],
    cta: 'Start Pro Trial', ctaStyle: 'btn-primary',
    highlight: true,
  },
  {
    name: 'Business', price: '₹1499', period: '/month', color: '#4D96FF',
    icon: Building2, badge: 'TEAMS',
    features: [
      'Everything in Pro',
      'Team Workspace (10 members)',
      'Client Sharing & Feedback',
      '1000+ All Templates',
      'AI Generator (Unlimited)',
      'White-label Digital Cards',
      'Custom Domain',
      'Order Management',
      'Dedicated Account Manager',
      'API Access',
    ],
    cta: 'Contact Sales', ctaStyle: 'btn-secondary',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: '6rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-tag" style={{ background: '#A855F7', color: '#fff', display: 'inline-flex', marginBottom: '1rem' }}>
            💎 Simple Pricing
          </div>
          <h2 className="section-title section-title-lg" style={{ marginBottom: '1rem' }}>
            Start Free, Scale as You <span style={{ color: '#FFD93D', WebkitTextStroke: '1px #000' }}>Grow</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            No hidden fees. Cancel anytime. All plans include a 14-day money-back guarantee.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: plan.highlight ? plan.color : 'var(--bg-primary)',
                  border: '4px solid #000', borderRadius: '12px',
                  boxShadow: plan.highlight ? '10px 10px 0 #000' : '6px 6px 0 #000',
                  padding: '2rem', position: 'relative', overflow: 'hidden',
                  transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {/* Badge */}
                <div style={{
                  position: 'absolute', top: '-1px', right: '1.5rem',
                  background: plan.highlight ? '#000' : plan.color,
                  color: plan.highlight ? plan.color : '#000',
                  border: '3px solid #000', borderTop: 'none', borderRadius: '0 0 8px 8px',
                  padding: '4px 12px', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.08em',
                }}>
                  {plan.badge}
                </div>

                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px', background: plan.highlight ? '#000' : plan.color,
                  border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
                }}>
                  <Icon size={22} color={plan.highlight ? plan.color : '#000'} />
                </div>

                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: plan.highlight ? '#000' : 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2.5rem', color: plan.highlight ? '#000' : 'var(--text-primary)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: plan.highlight ? '#333' : 'var(--text-muted)' }}>
                    {plan.period}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <div style={{
                        width: '20px', height: '20px', background: plan.highlight ? '#000' : plan.color,
                        border: '2px solid #000', borderRadius: '4px', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                      }}>
                        <Check size={12} color={plan.highlight ? plan.color : '#000'} />
                      </div>
                      <span style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: plan.highlight ? '#000' : 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/signup"
                  className={`btn ${plan.ctaStyle}`}
                  style={{
                    textDecoration: 'none', width: '100%', display: 'block', textAlign: 'center',
                    background: plan.highlight ? '#000' : undefined,
                    color: plan.highlight ? plan.color : undefined,
                    borderColor: '#000',
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2.5rem' }}
        >
          All prices in INR. GST applicable. Annual plans save up to 40%.{' '}
          <a href="#" style={{ color: '#4D96FF', fontWeight: 600 }}>View Annual Pricing →</a>
        </motion.p>
      </div>
    </section>
  );
}
