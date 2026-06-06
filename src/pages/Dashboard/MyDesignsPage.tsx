import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Search, Grid, MoreVertical, Edit, Download, Trash2, Copy, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const MOCK_DESIGNS = [
  { id: '1', name: 'My Doctor Card', industry: 'Medical', thumb: '#1A3C5E', views: 234, downloads: 12, updated: '2h ago', status: 'published' },
  { id: '2', name: 'Restaurant Promo', industry: 'Food', thumb: '#3D2B1F', views: 89, downloads: 5, updated: '1d ago', status: 'draft' },
  { id: '3', name: 'Tech Startup Card', industry: 'IT', thumb: '#0A0A0A', views: 567, downloads: 34, updated: '3d ago', status: 'published' },
  { id: '4', name: 'Salon Beauty Card', industry: 'Beauty', thumb: '#FCE4EC', views: 123, downloads: 8, updated: '5d ago', status: 'published' },
  { id: '5', name: 'Gym Trainer Card', industry: 'Fitness', thumb: '#1A1A1A', views: 45, downloads: 3, updated: '1w ago', status: 'draft' },
  { id: '6', name: 'Lawyer Professional', industry: 'Legal', thumb: '#1C1C1C', views: 398, downloads: 21, updated: '2w ago', status: 'published' },
];

export default function MyDesignsPage() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const filtered = MOCK_DESIGNS.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1400px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>My Designs</h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{MOCK_DESIGNS.length} saved designs</p>
        </div>
        <Link to="/editor" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          <Plus size={16} /> New Design
        </Link>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: '400px' }}>
        <Search size={15} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input className="input" placeholder="Search designs..." style={{ paddingLeft: '2.5rem', fontSize: '0.875rem' }}
          value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {/* New Design Card */}
        <Link to="/editor" style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ y: -5, boxShadow: '8px 8px 0 var(--border-color)' }}
            style={{ border: '3px dashed var(--border-color)', borderRadius: '8px', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', cursor: 'pointer', background: 'var(--bg-secondary)', transition: 'all 0.2s' }}>
            <div style={{ width: '48px', height: '48px', background: '#FFD93D', border: '3px solid #000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0 #000' }}>
              <Plus size={24} color="#000" />
            </div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>Create New Design</span>
            <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Start from scratch or template</span>
          </motion.div>
        </Link>

        {filtered.map((design, i) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            style={{ border: '3px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-primary)', boxShadow: '5px 5px 0 var(--border-color)', overflow: 'hidden', position: 'relative' }}
          >
            {/* Thumbnail */}
            <div style={{ height: '140px', background: design.thumb, position: 'relative' }}>
              <span style={{ position: 'absolute', top: '8px', left: '8px', background: design.status === 'published' ? '#6BCB77' : '#FFD93D', border: '2px solid #000', borderRadius: '4px', padding: '2px 8px', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.06em', color: '#000', textTransform: 'uppercase' }}>
                {design.status}
              </span>
              {/* Actions menu */}
              <button onClick={() => setMenuOpen(menuOpen === design.id ? null : design.id)}
                style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', border: '2px solid #000', borderRadius: '6px', padding: '4px', cursor: 'pointer', boxShadow: '2px 2px 0 #000' }}>
                <MoreVertical size={14} color="#000" />
              </button>
              {menuOpen === design.id && (
                <div style={{ position: 'absolute', top: '36px', right: '8px', background: 'var(--bg-primary)', border: '3px solid #000', borderRadius: '6px', boxShadow: '5px 5px 0 #000', zIndex: 10, minWidth: '160px', overflow: 'hidden' }}>
                  {[
                    { label: 'Edit', icon: Edit, href: `/editor/${design.id}` },
                    { label: 'Download', icon: Download, action: () => toast.success('Downloading...') },
                    { label: 'Duplicate', icon: Copy, action: () => toast.success('Duplicated!') },
                    { label: 'Delete', icon: Trash2, action: () => toast.error('Deleted'), danger: true },
                  ].map((item) => {
                    const Icon = item.icon;
                    return item.href ? (
                      <Link key={item.label} to={item.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1rem', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--bg-tertiary)' }}>
                        <Icon size={14} /> {item.label}
                      </Link>
                    ) : (
                      <button key={item.label} onClick={() => { item.action?.(); setMenuOpen(null); }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1rem', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.875rem', color: (item as any).danger ? '#FF6B6B' : 'var(--text-primary)', width: '100%', background: 'none', border: 'none', borderBottom: '1px solid var(--bg-tertiary)', cursor: 'pointer' }}>
                        <Icon size={14} /> {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ padding: '0.875rem' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{design.name}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{design.industry} · Updated {design.updated}</div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <Eye size={12} /> {design.views}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <Download size={12} /> {design.downloads}
                </span>
                <Link to={`/editor/${design.id}`} className="btn btn-primary btn-sm" style={{ textDecoration: 'none', marginLeft: 'auto', fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                  <Edit size={12} /> Edit
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
