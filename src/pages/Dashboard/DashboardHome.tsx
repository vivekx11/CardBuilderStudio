import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileImage, Download, QrCode, Eye, FolderOpen, Users, ArrowRight, Sparkles, Plus, TrendingUp } from 'lucide-react';
import { useAppStore } from '../../store/appStore';

const RECENT_DESIGNS = [
  { id: '1', name: 'My Doctor Card', industry: 'Medical', thumb: '#1A3C5E', updated: '2h ago' },
  { id: '2', name: 'Restaurant Card', industry: 'Food', thumb: '#3D2B1F', updated: '1d ago' },
  { id: '3', name: 'Tech Startup Card', industry: 'IT', thumb: '#0A0A0A', updated: '3d ago' },
  { id: '4', name: 'Salon Card', industry: 'Beauty', thumb: '#FCE4EC', updated: '5d ago' },
];

const QUICK_ACTIONS = [
  { label: 'New Design', icon: Plus, color: '#FFD93D', href: '/editor', desc: 'Start from scratch' },
  { label: 'Browse Templates', icon: Sparkles, color: '#4D96FF', href: '/dashboard/templates', desc: '1000+ templates' },
  { label: 'AI Generator', icon: Sparkles, color: '#6BCB77', href: '/dashboard/ai-generator', desc: 'AI-powered cards' },
  { label: 'QR Generator', icon: QrCode, color: '#FF6B6B', href: '/dashboard/qr-generator', desc: 'Custom QR codes' },
];

function StatCard({ icon: Icon, label, value, change, color }: any) {
  return (
    <motion.div
      className="card"
      style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', cursor: 'default' }}
      whileHover={{ y: -4, boxShadow: '8px 8px 0 var(--border-color)' }}
    >
      <div style={{ width: '48px', height: '48px', background: color, border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={22} color="#000" />
      </div>
      <div>
        <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: 'var(--text-primary)', lineHeight: 1 }}>{value}</div>
        {change && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.375rem', fontFamily: 'Inter', fontSize: '0.8125rem', color: '#6BCB77', fontWeight: 700 }}>
            <TrendingUp size={14} /> +{change}% this month
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function DashboardHome() {
  const { stats, user } = useAppStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px' }}>
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        style={{ background: '#FFD93D', border: '4px solid #000', borderRadius: '12px', boxShadow: '8px 8px 0 #000', padding: '2rem', position: 'relative', overflow: 'hidden' }}
      >
        <div className="stripe-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.75rem', color: '#000', marginBottom: '0.375rem' }}>
              Welcome back, {user?.name?.split(' ')[0] || 'Vivek'}! 👋
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#333' }}>
              You have <strong>6 active projects</strong>. Create a new design or continue where you left off.
            </p>
          </div>
          <Link to="/editor" className="btn btn-lg" style={{ textDecoration: 'none', background: '#000', color: '#FFD93D', borderColor: '#000' }}>
            <Plus size={20} /> Create New Card
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div>
        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          📊 Overview
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <StatCard icon={FileImage} label="Total Designs" value={stats.totalDesigns} change={12} color="#FFD93D" />
          <StatCard icon={Download} label="Downloads" value={stats.totalDownloads.toLocaleString()} change={8} color="#4D96FF" />
          <StatCard icon={QrCode} label="QR Scans" value={stats.totalQRScans.toLocaleString()} change={23} color="#6BCB77" />
          <StatCard icon={Eye} label="Card Views" value={stats.totalViews.toLocaleString()} change={15} color="#FF6B6B" />
          <StatCard icon={FolderOpen} label="Active Projects" value={stats.activeProjects} color="#A855F7" />
          <StatCard icon={Users} label="Team Members" value={stats.teamMembers} color="#FF8C42" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Quick Actions */}
        <div>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            ⚡ Quick Actions
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} to={action.href} style={{ textDecoration: 'none' }}>
                  <motion.div
                    className="card"
                    style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', cursor: 'pointer', height: '100%' }}
                    whileHover={{ y: -3, boxShadow: '6px 6px 0 var(--border-color)' }}
                  >
                    <div style={{ width: '40px', height: '40px', background: action.color, border: '3px solid #000', borderRadius: '6px', boxShadow: '2px 2px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color="#000" />
                    </div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{action.label}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{action.desc}</div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Designs */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🕒 Recent Designs
            </h3>
            <Link to="/dashboard/designs" style={{ textDecoration: 'none', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: '#4D96FF', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {RECENT_DESIGNS.map((design, i) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-flat"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', cursor: 'pointer' }}
                whileHover={{ x: 4 }}
                onClick={() => {}}
              >
                <div style={{ width: '48px', height: '30px', background: design.thumb, border: '2px solid #000', borderRadius: '4px', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{design.name}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{design.industry} · {design.updated}</div>
                </div>
                <Link to={`/editor/${design.id}`} className="btn btn-outline btn-sm" style={{ textDecoration: 'none', flexShrink: 0, fontSize: '0.75rem', padding: '0.25rem 0.625rem' }}>Edit</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
