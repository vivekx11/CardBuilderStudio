import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, CreditCard, Shield, Globe, Palette, Save, ExternalLink } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import toast from 'react-hot-toast';

const TABS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'digital-card', label: 'Digital Card', icon: Globe },
  { id: 'appearance', label: 'Appearance', icon: Palette },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, theme, toggleTheme } = useAppStore();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [slug, setSlug] = useState(user?.digitalCardSlug || 'viveksawji');

  return (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Settings</h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Manage your account, billing, and preferences</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1.5rem' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {TABS.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 0.875rem', border: active ? '3px solid #000' : '3px solid transparent', borderRadius: '6px', background: active ? '#FFD93D' : 'transparent', boxShadow: active ? '3px 3px 0 #000' : 'none', color: active ? '#000' : 'var(--text-secondary)', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <Icon size={16} /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.75rem' }}>

          {activeTab === 'profile' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Profile Information</h3>
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FFD93D', border: '4px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.5rem', color: '#000', boxShadow: '4px 4px 0 #000' }}>
                  {name.charAt(0) || 'V'}
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => toast('Profile photo upload — connect Cloudinary')}>Change Photo</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label">Full Name</label>
                  <input className="input" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label className="label">Email Address</label>
                  <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="label">Plan</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="badge badge-yellow" style={{ fontSize: '0.875rem', padding: '0.375rem 0.875rem' }}>✨ {user?.plan?.toUpperCase()}</span>
                    <a href="#" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: '#4D96FF', textDecoration: 'none' }}>Upgrade →</a>
                  </div>
                </div>
                <div>
                  <label className="label">Role</label>
                  <div className="badge badge-black" style={{ fontSize: '0.875rem', padding: '0.375rem 0.875rem', textTransform: 'capitalize' }}>{user?.role}</div>
                </div>
              </div>
              <button onClick={() => toast.success('Profile updated!')} className="btn btn-primary" style={{ width: 'fit-content', gap: '0.5rem' }}>
                <Save size={16} /> Save Changes
              </button>
            </div>
          )}

          {activeTab === 'digital-card' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Digital Business Card</h3>
              <div style={{ background: '#FFD93D', border: '3px solid #000', borderRadius: '8px', padding: '1rem', boxShadow: '4px 4px 0 #000' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#000', marginBottom: '0.375rem' }}>Your card URL:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <code style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: '#000' }}>
                    cardbuilderstudio.com/card/{slug}
                  </code>
                  <a href={`/card/${slug}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div>
                <label className="label">Custom URL Slug</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', padding: '0 0.875rem', background: 'var(--bg-secondary)', border: '3px solid var(--border-color)', borderRight: 'none', borderRadius: '4px 0 0 4px', fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    /card/
                  </span>
                  <input className="input" value={slug} onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))} style={{ borderRadius: '0 4px 4px 0', flex: 1 }} />
                </div>
              </div>
              <button onClick={() => toast.success('Digital card updated!')} className="btn btn-primary" style={{ width: 'fit-content' }}>
                <Save size={16} /> Save Card URL
              </button>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Appearance</h3>
              <div>
                <label className="label" style={{ marginBottom: '0.75rem' }}>Color Theme</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { id: 'light', label: 'Light Mode', bg: '#FFFFFF', border: '#000' },
                    { id: 'dark', label: 'Dark Mode', bg: '#0A0A0A', border: '#FFFFFF' },
                  ].map(t => (
                    <button key={t.id} onClick={() => theme !== t.id && toggleTheme()}
                      style={{ padding: '1rem 1.5rem', border: `4px solid ${theme === t.id ? '#FFD93D' : '#000'}`, borderRadius: '8px', background: t.bg, cursor: 'pointer', boxShadow: theme === t.id ? '5px 5px 0 #FFD93D' : '4px 4px 0 #000', transform: theme === t.id ? 'translate(-2px,-2px)' : 'none', transition: 'all 0.2s', minWidth: '130px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: t.bg, border: `3px solid ${t.border}`, margin: '0 auto 0.5rem' }} />
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: t.id === 'dark' ? '#fff' : '#000' }}>{t.label}</div>
                      {theme === t.id && <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.7rem', color: '#FFD93D', marginTop: '0.25rem' }}>✓ Active</div>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Billing & Subscription</h3>
              <div style={{ background: 'var(--bg-secondary)', border: '3px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Pro Plan · ₹499/month</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Next billing: July 1, 2025 · Auto-renews</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-outline btn-sm">Cancel</button>
                  <button className="btn btn-primary btn-sm" onClick={() => toast('Razorpay integration — add your key to activate')}>Upgrade to Business</button>
                </div>
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)', padding: '1rem', background: 'var(--bg-secondary)', border: '2px solid var(--border-color)', borderRadius: '6px' }}>
                💳 <strong>Payment Integration:</strong> Connect Razorpay by adding <code>VITE_RAZORPAY_KEY</code> to your .env file.
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Security</h3>
              <div>
                <label className="label">Current Password</label>
                <input className="input" type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="label">New Password</label>
                <input className="input" type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="label">Confirm New Password</label>
                <input className="input" type="password" placeholder="••••••••" />
              </div>
              <button onClick={() => toast.success('Password updated!')} className="btn btn-primary" style={{ width: 'fit-content' }}>
                <Save size={16} /> Update Password
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)' }}>Notification Preferences</h3>
              {[
                { label: 'Card Views', desc: 'When someone views your digital card', on: true },
                { label: 'QR Scans', desc: 'When your QR code is scanned', on: true },
                { label: 'Team Activity', desc: 'When team members make changes', on: false },
                { label: 'Order Updates', desc: 'Shipping and delivery notifications', on: true },
                { label: 'Weekly Report', desc: 'Weekly analytics summary email', on: true },
                { label: 'Product Updates', desc: 'New features and templates', on: false },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: '1px solid var(--bg-tertiary)' }}>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                  <button onClick={() => toast.success('Preference saved!')} style={{ width: '48px', height: '26px', borderRadius: '13px', background: item.on ? '#6BCB77' : 'var(--bg-tertiary)', border: '2px solid #000', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
                    <div style={{ position: 'absolute', top: '2px', left: item.on ? '22px' : '2px', width: '18px', height: '18px', borderRadius: '50%', background: '#fff', border: '2px solid #000', transition: 'left 0.2s' }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <style>{`@media (max-width: 640px) { div[style*="grid-template-columns: 200px 1fr"] { grid-template-columns: 1fr !important; } div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
