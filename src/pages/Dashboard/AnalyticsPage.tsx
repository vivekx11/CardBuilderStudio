import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Eye, Download, QrCode, Users, Share2, TrendingUp } from 'lucide-react';

const DAILY_DATA = [
  { date: 'May 1', views: 120, downloads: 8, qrScans: 45, shares: 12 },
  { date: 'May 5', views: 230, downloads: 15, qrScans: 78, shares: 24 },
  { date: 'May 10', views: 180, downloads: 10, qrScans: 56, shares: 18 },
  { date: 'May 15', views: 340, downloads: 22, qrScans: 102, shares: 35 },
  { date: 'May 20', views: 290, downloads: 18, qrScans: 89, shares: 28 },
  { date: 'May 25', views: 410, downloads: 28, qrScans: 134, shares: 42 },
  { date: 'Jun 1', views: 520, downloads: 35, qrScans: 178, shares: 56 },
  { date: 'Jun 6', views: 480, downloads: 31, qrScans: 156, shares: 48 },
];

const INDUSTRY_DATA = [
  { name: 'Medical', value: 35, color: '#4D96FF' },
  { name: 'IT/Tech', value: 28, color: '#FFD93D' },
  { name: 'Food', value: 18, color: '#FF6B6B' },
  { name: 'Beauty', value: 12, color: '#A855F7' },
  { name: 'Others', value: 7, color: '#6BCB77' },
];

const TOP_DESIGNS = [
  { name: 'My Doctor Card', views: 4521, downloads: 234, qr: 891 },
  { name: 'Tech Startup', views: 3210, downloads: 178, qr: 567 },
  { name: 'Salon Beauty', views: 2340, downloads: 123, qr: 345 },
  { name: 'Restaurant', views: 1890, downloads: 89, qr: 234 },
];

const TOOLTIPSTYLE = {
  contentStyle: { border: '3px solid #000', borderRadius: '6px', fontFamily: 'Space Grotesk', fontWeight: 600, boxShadow: '4px 4px 0 #000' },
};

export default function AnalyticsPage() {
  const [range, setRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Analytics</h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Track your card performance and engagement</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(['7d', '30d', '90d'] as const).map(r => (
            <button key={r} onClick={() => setRange(r)} className={`btn btn-sm ${range === r ? 'btn-primary' : 'btn-outline'}`}>
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
        {[
          { icon: Eye, label: 'Total Views', value: '12,560', change: '+15%', color: '#4D96FF' },
          { icon: Download, label: 'Downloads', value: '847', change: '+8%', color: '#6BCB77' },
          { icon: QrCode, label: 'QR Scans', value: '3,241', change: '+23%', color: '#FFD93D' },
          { icon: Users, label: 'Contact Saves', value: '456', change: '+31%', color: '#FF6B6B' },
          { icon: Share2, label: 'Total Shares', value: '234', change: '+12%', color: '#A855F7' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="card" style={{ padding: '1.25rem', cursor: 'default' }}
              whileHover={{ y: -3, boxShadow: '7px 7px 0 var(--border-color)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', background: stat.color, border: '2.5px solid #000', borderRadius: '6px', boxShadow: '2px 2px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} color="#000" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{stat.label}</div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>{stat.value}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'Inter', fontSize: '0.75rem', color: '#6BCB77', fontWeight: 700, marginTop: '0.25rem' }}>
                    <TrendingUp size={12} /> {stat.change}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Line Chart */}
        <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            📈 Views & Downloads Over Time
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={DAILY_DATA} {...TOOLTIPSTYLE}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-tertiary)" />
              <XAxis dataKey="date" style={{ fontFamily: 'Inter', fontSize: 11 }} />
              <YAxis style={{ fontFamily: 'Inter', fontSize: 11 }} />
              <Tooltip {...TOOLTIPSTYLE} />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#4D96FF" strokeWidth={3} dot={{ fill: '#4D96FF', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="downloads" stroke="#6BCB77" strokeWidth={3} dot={{ fill: '#6BCB77', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="qrScans" stroke="#FFD93D" strokeWidth={3} strokeDasharray="5 5" dot={{ fill: '#FFD93D', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
            🏭 By Industry
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={INDUSTRY_DATA} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false} style={{ fontFamily: 'Space Grotesk', fontSize: 10, fontWeight: 700 }}>
                {INDUSTRY_DATA.map((entry, i) => <Cell key={i} fill={entry.color} stroke="#000" strokeWidth={2} />)}
              </Pie>
              <Tooltip {...TOOLTIPSTYLE} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.5rem' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
          📊 QR Scans & Shares
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={DAILY_DATA} {...TOOLTIPSTYLE}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-tertiary)" />
            <XAxis dataKey="date" style={{ fontFamily: 'Inter', fontSize: 11 }} />
            <YAxis style={{ fontFamily: 'Inter', fontSize: 11 }} />
            <Tooltip {...TOOLTIPSTYLE} />
            <Legend />
            <Bar dataKey="qrScans" fill="#FFD93D" stroke="#000" strokeWidth={2} radius={[3, 3, 0, 0]} />
            <Bar dataKey="shares" fill="#FF6B6B" stroke="#000" strokeWidth={2} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Designs */}
      <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '3px solid var(--border-color)' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>🏆 Top Performing Designs</h3>
        </div>
        {TOP_DESIGNS.map((design, i) => (
          <div key={design.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderBottom: i < TOP_DESIGNS.length - 1 ? '2px solid var(--bg-tertiary)' : 'none', flexWrap: 'wrap' }}>
            <div style={{ width: '28px', height: '28px', background: ['#FFD93D', '#C0C0C0', '#CD7F32', '#AAAAAA'][i], border: '2px solid #000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.8rem', color: '#000', flexShrink: 0 }}>
              {i + 1}
            </div>
            <div style={{ flex: 1, minWidth: '120px', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{design.name}</div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[{ icon: Eye, value: design.views, color: '#4D96FF' }, { icon: Download, value: design.downloads, color: '#6BCB77' }, { icon: QrCode, value: design.qr, color: '#FFD93D' }].map(({ icon: Icon, value, color }) => (
                <div key={color} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <div style={{ width: '24px', height: '24px', background: color, border: '2px solid #000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={12} color="#000" />
                  </div>
                  {value.toLocaleString()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
