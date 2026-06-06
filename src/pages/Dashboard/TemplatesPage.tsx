import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Heart, SlidersHorizontal, Grid, List, Star, X } from 'lucide-react';
import { TEMPLATES, INDUSTRIES, TEMPLATE_STYLES } from '../../data/templates';
import { useTemplateStore } from '../../store/templateStore';
import type { Industry, TemplateStyle } from '../../types';

function TemplateCard({ template, isFav, onFav }: { template: typeof TEMPLATES[0]; isFav: boolean; onFav: () => void }) {
  const [hovered, setHovered] = useState(false);
  const design = template.frontDesign;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      style={{ border: '3px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-primary)', boxShadow: '5px 5px 0 var(--border-color)', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Preview Canvas */}
      <div style={{
        height: template.orientation === 'vertical' ? '200px' : '120px',
        background: typeof design.background === 'string' ? design.background : '#fff',
        position: 'relative', overflow: 'hidden',
      }}>
        {design.objects.slice(0, 3).map(obj => (
          obj.type === 'text' && (
            <div key={obj.id} style={{
              position: 'absolute',
              left: `${(obj.x / design.width) * 100}%`,
              top: `${(obj.y / design.height) * 100}%`,
              fontSize: `${(obj.fontSize || 16) * 0.14}px`,
              fontFamily: obj.fontFamily || 'Inter',
              fontWeight: obj.fontWeight as any || '400',
              color: obj.fill || '#000',
              letterSpacing: obj.letterSpacing ? `${obj.letterSpacing * 0.1}em` : undefined,
              whiteSpace: 'nowrap',
              lineHeight: obj.lineHeight || 1.2,
              pointerEvents: 'none',
            }}>
              {obj.text}
            </div>
          )
        ))}

        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Link to={`/editor/template/${template.id}`} className="btn btn-primary btn-sm" style={{ textDecoration: 'none', zIndex: 2 }}>
                Use Template
              </Link>
              <Link to={`/editor/template/${template.id}`} className="btn btn-outline btn-sm" style={{ textDecoration: 'none', zIndex: 2, background: 'rgba(255,255,255,0.9)', color: '#000' }}>
                Preview
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium badge */}
        {template.isPremium && (
          <div style={{ position: 'absolute', top: '8px', left: '8px', background: '#FFD93D', border: '2px solid #000', borderRadius: '4px', padding: '2px 8px', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.06em', color: '#000' }}>
            ⭐ PRO
          </div>
        )}

        {/* Favorite button */}
        <button
          onClick={(e) => { e.stopPropagation(); onFav(); }}
          style={{ position: 'absolute', top: '8px', right: '8px', background: isFav ? '#FF6B6B' : 'rgba(255,255,255,0.9)', border: '2px solid #000', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '2px 2px 0 #000' }}
        >
          <Heart size={12} fill={isFav ? '#fff' : 'none'} color={isFav ? '#fff' : '#000'} />
        </button>
      </div>

      {/* Card Info */}
      <div style={{ padding: '0.875rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            {template.name}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
            {INDUSTRIES.find(i => i.id === template.industry)?.icon} {template.industry.replace(/-/g, ' ')}
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>·</span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{template.style}</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '2px' }}>
            ↓ {template.downloadCount.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TemplatesPage() {
  const { favorites, recentlyUsed, filters, toggleFavorite, setFilter, resetFilters } = useTemplateStore();
  const [tab, setTab] = useState<'all' | 'favorites' | 'recent'>('all');
  const [searchDebounced, setSearchDebounced] = useState('');

  const filtered = useMemo(() => {
    let list = TEMPLATES;
    if (tab === 'favorites') list = list.filter(t => favorites.includes(t.id));
    if (tab === 'recent') list = list.filter(t => recentlyUsed.includes(t.id));
    if (filters.industry !== 'all') list = list.filter(t => t.industry === filters.industry);
    if (filters.style !== 'all') list = list.filter(t => t.style === filters.style);
    if (filters.orientation !== 'all') list = list.filter(t => t.orientation === filters.orientation);
    if (filters.premium !== 'all') list = list.filter(t => t.isPremium === filters.premium);
    if (searchDebounced) list = list.filter(t => t.name.toLowerCase().includes(searchDebounced.toLowerCase()) || t.industry.includes(searchDebounced.toLowerCase()) || t.tags.some(tag => tag.includes(searchDebounced.toLowerCase())));
    return list;
  }, [filters, searchDebounced, favorites, recentlyUsed, tab]);

  const activeFiltersCount = [filters.industry !== 'all', filters.style !== 'all', filters.orientation !== 'all', filters.premium !== 'all'].filter(Boolean).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1400px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Template Library</h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{TEMPLATES.length} professionally designed templates</p>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(['all', 'favorites', 'recent'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`btn btn-sm ${tab === t ? 'btn-primary' : 'btn-outline'}`} style={{ textTransform: 'capitalize' }}>
              {t === 'favorites' ? <><Heart size={13} /> Saved</> : t === 'recent' ? 'Recent' : 'All Templates'}
            </button>
          ))}
        </div>
      </div>

      {/* Search + Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', padding: '1rem 1.25rem', boxShadow: '4px 4px 0 var(--border-color)' }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
          <Search size={15} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input className="input" placeholder="Search templates, industries, styles..." style={{ paddingLeft: '2.25rem', fontSize: '0.875rem', height: '38px' }}
            onChange={e => setSearchDebounced(e.target.value)} />
        </div>

        <select className="input" style={{ height: '38px', width: 'auto', fontSize: '0.875rem', cursor: 'pointer' }}
          value={filters.industry} onChange={e => setFilter('industry', e.target.value as Industry | 'all')}>
          <option value="all">All Industries</option>
          {INDUSTRIES.map(i => <option key={i.id} value={i.id}>{i.icon} {i.label}</option>)}
        </select>

        <select className="input" style={{ height: '38px', width: 'auto', fontSize: '0.875rem', cursor: 'pointer' }}
          value={filters.style} onChange={e => setFilter('style', e.target.value as TemplateStyle | 'all')}>
          <option value="all">All Styles</option>
          {TEMPLATE_STYLES.map(s => <option key={s} value={s} style={{ textTransform: 'capitalize' }}>{s}</option>)}
        </select>

        <select className="input" style={{ height: '38px', width: 'auto', fontSize: '0.875rem', cursor: 'pointer' }}
          value={filters.orientation} onChange={e => setFilter('orientation', e.target.value as any)}>
          <option value="all">All Orientations</option>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>

        <select className="input" style={{ height: '38px', width: 'auto', fontSize: '0.875rem', cursor: 'pointer' }}
          value={String(filters.premium)} onChange={e => setFilter('premium', e.target.value === 'all' ? 'all' : e.target.value === 'true')}>
          <option value="all">Free & Pro</option>
          <option value="false">Free Only</option>
          <option value="true">Pro Only</option>
        </select>

        {activeFiltersCount > 0 && (
          <button onClick={resetFilters} className="btn btn-danger btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <X size={14} /> Clear ({activeFiltersCount})
          </button>
        )}
      </div>

      {/* Results count */}
      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        Showing <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> templates
        {tab === 'favorites' && <span style={{ color: '#FF6B6B' }}> · ❤️ Saved</span>}
      </div>

      {/* Template Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No templates found</h3>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Try adjusting your filters or search term</p>
          <button onClick={resetFilters} className="btn btn-primary">Clear Filters</button>
        </div>
      ) : (
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          <AnimatePresence>
            {filtered.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                isFav={favorites.includes(template.id)}
                onFav={() => toggleFavorite(template.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
