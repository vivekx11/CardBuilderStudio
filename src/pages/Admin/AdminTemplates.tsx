import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Download, Layers, Compass, Plus, Trash2, Edit2, X, Eye } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Template, Industry, TemplateStyle } from '../../types';

const INITIAL_TEMPLATES: Template[] = [
  {
    id: 'temp-001',
    name: 'Neo Brutalist Designer Card',
    industry: 'freelancers',
    thumbnail: '#FFD93D',
    orientation: 'horizontal',
    style: 'brutalist',
    colorScheme: ['#FFD93D', '#000000', '#FFFFFF'],
    isPremium: true,
    downloadCount: 1542,
    tags: ['Neo', 'Designer', 'Brutalist'],
    frontDesign: { width: 1050, height: 600, background: '#FFD93D', objects: [] }
  },
  {
    id: 'temp-002',
    name: 'Minimal Corporate Lawyer Card',
    industry: 'lawyers',
    thumbnail: '#1F2937',
    orientation: 'horizontal',
    style: 'minimal',
    colorScheme: ['#1F2937', '#FFFFFF', '#D1D5DB'],
    isPremium: false,
    downloadCount: 890,
    tags: ['Minimal', 'Professional', 'Grey'],
    frontDesign: { width: 1050, height: 600, background: '#1F2937', objects: [] }
  },
  {
    id: 'temp-003',
    name: 'Cozy Bakery & Cafe Card',
    industry: 'food',
    thumbnail: '#FFF7ED',
    orientation: 'vertical',
    style: 'warm',
    colorScheme: ['#FFF7ED', '#C2410C', '#FDBA74'],
    isPremium: false,
    downloadCount: 420,
    tags: ['Cozy', 'Warm', 'Food'],
    frontDesign: { width: 600, height: 1050, background: '#FFF7ED', objects: [] }
  },
  {
    id: 'temp-004',
    name: 'Premium Salon & Spa Card',
    industry: 'beauty',
    thumbnail: '#FDF2F8',
    orientation: 'vertical',
    style: 'luxury',
    colorScheme: ['#FDF2F8', '#DB2777', '#FCE7F3'],
    isPremium: true,
    downloadCount: 1205,
    tags: ['Luxury', 'Beauty', 'Spa'],
    frontDesign: { width: 600, height: 1050, background: '#FDF2F8', objects: [] }
  },
  {
    id: 'temp-005',
    name: 'Health First Medical Card',
    industry: 'doctors',
    thumbnail: '#ECFDF5',
    orientation: 'horizontal',
    style: 'modern',
    colorScheme: ['#ECFDF5', '#059669', '#A7F3D0'],
    isPremium: true,
    downloadCount: 630,
    tags: ['Medical', 'Clean', 'Modern'],
    frontDesign: { width: 1050, height: 600, background: '#ECFDF5', objects: [] }
  },
  {
    id: 'temp-006',
    name: 'Hyper Tech Developer Card',
    industry: 'tech',
    thumbnail: '#0F172A',
    orientation: 'horizontal',
    style: 'bold',
    colorScheme: ['#0F172A', '#38BDF8', '#000000'],
    isPremium: false,
    downloadCount: 2011,
    tags: ['Tech', 'Dev', 'Cyan'],
    frontDesign: { width: 1050, height: 600, background: '#0F172A', objects: [] }
  }
];

const INDUSTRIES: Industry[] = [
  'doctors', 'lawyers', 'restaurants', 'salons', 'gyms',
  'real-estate', 'it-companies', 'coaches', 'photographers',
  'freelancers', 'education', 'finance', 'fashion', 'food',
  'construction', 'automotive', 'beauty', 'travel', 'events',
  'architecture', 'marketing', 'music', 'sports', 'retail',
  'healthcare', 'legal', 'tech', 'nonprofit', 'consulting'
];

const TEMPLATE_STYLES: TemplateStyle[] = [
  'minimal', 'bold', 'elegant', 'playful', 'corporate',
  'creative', 'luxury', 'modern', 'retro', 'brutalist', 'warm'
];

export default function AdminTemplates() {
  const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [orientationFilter, setOrientationFilter] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Form State for Add/Edit
  const [formName, setFormName] = useState('');
  const [formIndustry, setFormIndustry] = useState<Industry>('tech');
  const [formStyle, setFormStyle] = useState<TemplateStyle>('modern');
  const [formOrientation, setFormOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [formThumbnail, setFormThumbnail] = useState('#FF6B6B');
  const [formIsPremium, setFormIsPremium] = useState(false);

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || t.industry === industryFilter;
    const matchesType = typeFilter === 'all' || (typeFilter === 'premium' ? t.isPremium : !t.isPremium);
    const matchesOrientation = orientationFilter === 'all' || t.orientation === orientationFilter;
    return matchesSearch && matchesIndustry && matchesType && matchesOrientation;
  });

  const handleOpenAdd = () => {
    setFormName('');
    setFormIndustry('tech');
    setFormStyle('modern');
    setFormOrientation('horizontal');
    setFormThumbnail('#FF6B6B');
    setFormIsPremium(false);
    setIsAddModalOpen(true);
  };

  const handleAddTemplate = () => {
    if (!formName) {
      toast.error('Please enter a template name.');
      return;
    }
    const newTemplate: Template = {
      id: `temp-${Date.now()}`,
      name: formName,
      industry: formIndustry,
      style: formStyle,
      orientation: formOrientation,
      thumbnail: formThumbnail,
      isPremium: formIsPremium,
      downloadCount: 0,
      colorScheme: [formThumbnail, '#000000', '#FFFFFF'],
      tags: [formStyle, formIndustry],
      frontDesign: {
        width: formOrientation === 'horizontal' ? 1050 : 600,
        height: formOrientation === 'horizontal' ? 600 : 1050,
        background: formThumbnail,
        objects: []
      }
    };

    setTemplates([newTemplate, ...templates]);
    toast.success(`Template "${formName}" created!`, {
      style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
    });
    setIsAddModalOpen(false);
  };

  const handleOpenEdit = (t: Template) => {
    setSelectedTemplate(t);
    setFormName(t.name);
    setFormIndustry(t.industry);
    setFormStyle(t.style);
    setFormOrientation(t.orientation);
    setFormThumbnail(t.thumbnail);
    setFormIsPremium(t.isPremium);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!selectedTemplate) return;
    setTemplates(templates.map(t => t.id === selectedTemplate.id ? {
      ...t,
      name: formName,
      industry: formIndustry,
      style: formStyle,
      orientation: formOrientation,
      thumbnail: formThumbnail,
      isPremium: formIsPremium,
      colorScheme: [formThumbnail, ...t.colorScheme.slice(1)]
    } : t));

    toast.success(`Template "${formName}" updated successfully!`, {
      style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
    });
    setIsEditModalOpen(false);
  };

  const handleDeleteTemplate = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete template "${name}"?`)) {
      setTemplates(templates.filter(t => t.id !== id));
      toast.error(`Deleted template "${name}"`, {
        style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
      });
    }
  };

  const totalDownloads = templates.reduce((acc, t) => acc + t.downloadCount, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px' }}>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#FFD93D' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Layers size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Total Templates</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{templates.length}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#FF6B6B' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Premium Layouts</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>
              {templates.filter(t => t.isPremium).length}
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#6BCB77' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Download size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Downloads Managed</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{totalDownloads.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Template Catalog Manager</h2>
          <button onClick={handleOpenAdd} className="btn btn-primary btn-sm">
            <Plus size={16} /> Add Template
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {/* Search */}
          <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search template name..."
              className="input"
              style={{ paddingLeft: '2.5rem', height: '42px' }}
            />
          </div>

          {/* Industry Filter */}
          <select
            value={industryFilter}
            onChange={e => setIndustryFilter(e.target.value)}
            className="input"
            style={{ width: '150px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Industries</option>
            {INDUSTRIES.map(ind => (
              <option key={ind} value={ind} style={{ textTransform: 'capitalize' }}>
                {ind.replace('-', ' ')}
              </option>
            ))}
          </select>

          {/* Orientation Filter */}
          <select
            value={orientationFilter}
            onChange={e => setOrientationFilter(e.target.value)}
            className="input"
            style={{ width: '150px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Orientations</option>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
            className="input"
            style={{ width: '120px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Types</option>
            <option value="free">Free Only</option>
            <option value="premium">Premium Only</option>
          </select>
        </div>

        {/* Template Catalog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                className="card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                whileHover={{ y: -4, boxShadow: '8px 8px 0 var(--border-color)' }}
              >
                {/* Visual Card Representation */}
                <div style={{
                  height: '160px',
                  background: template.thumbnail,
                  borderBottom: '3px solid #000',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 900,
                  fontSize: '1rem',
                  color: ['#ECFDF5', '#FFF7ED', '#FDF2F8', '#ffffff'].includes(template.thumbnail.toLowerCase()) ? '#000' : '#fff',
                  textShadow: '1px 1px 0 #000'
                }}>
                  <div className="stripe-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />
                  {/* Miniature mockup of business card content */}
                  <div style={{
                    width: template.orientation === 'horizontal' ? '120px' : '75px',
                    height: template.orientation === 'horizontal' ? '70px' : '110px',
                    border: '2px solid #000',
                    background: '#fff',
                    borderRadius: '4px',
                    boxShadow: '3px 3px 0 #000',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '6px',
                    zIndex: 2
                  }}>
                    <div style={{ height: '3px', width: '25px', background: '#000' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ height: '2px', width: '40px', background: '#000' }} />
                      <div style={{ height: '2px', width: '30px', background: '#888' }} />
                    </div>
                  </div>

                  {/* Tags */}
                  <span className={`badge ${template.isPremium ? 'badge-yellow' : 'badge-black'}`} style={{
                    position: 'absolute', top: '10px', right: '10px', fontSize: '0.65rem', padding: '2px 6px', zIndex: 3
                  }}>
                    {template.isPremium ? 'PRO' : 'FREE'}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.9375rem', lineHeight: 1.2 }}>{template.name}</h3>
                    <div style={{ display: 'flex', gap: '0.375rem', marginTop: '0.375rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.6rem', padding: '1px 4px', textTransform: 'uppercase' }}>
                        {template.industry.replace('-', ' ')}
                      </span>
                      <span className="badge badge-green" style={{ fontSize: '0.6rem', padding: '1px 4px', textTransform: 'uppercase' }}>
                        {template.style}
                      </span>
                      <span className="badge badge-yellow" style={{ fontSize: '0.6rem', padding: '1px 4px', textTransform: 'uppercase' }}>
                        {template.orientation}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '2px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                      <Download size={14} /> {template.downloadCount.toLocaleString()}
                    </div>
                    <div style={{ display: 'flex', gap: '0.375rem' }}>
                      <button
                        onClick={() => handleOpenEdit(template)}
                        className="btn btn-outline"
                        style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                        title="Edit Template"
                      >
                        <Edit2 size={12} />
                      </button>
                      <button
                        onClick={() => handleDeleteTemplate(template.id, template.name)}
                        className="btn btn-danger"
                        style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                        title="Delete Template"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No templates matching search criteria found.
            </div>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      <AnimatePresence>
        {(isAddModalOpen || isEditModalOpen) && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card"
              style={{ width: '100%', maxWidth: '480px', background: 'var(--bg-primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>
                  {isAddModalOpen ? 'Create New Template' : 'Edit Template Parameters'}
                </h3>
                <button onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={20} />
                </button>
              </div>

              <div>
                <label className="label">Template Title</label>
                <input
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="e.g. Modern Bold Architect Card"
                  className="input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label">Industry Category</label>
                  <select
                    value={formIndustry}
                    onChange={e => setFormIndustry(e.target.value as Industry)}
                    className="input"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind.replace('-', ' ')}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Style Theme</label>
                  <select
                    value={formStyle}
                    onChange={e => setFormStyle(e.target.value as TemplateStyle)}
                    className="input"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {TEMPLATE_STYLES.map(style => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="label">Card Orientation</label>
                  <select
                    value={formOrientation}
                    onChange={e => setFormOrientation(e.target.value as any)}
                    className="input"
                  >
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                  </select>
                </div>
                <div>
                  <label className="label">Theme Hex Color</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="color"
                      value={formThumbnail}
                      onChange={e => setFormThumbnail(e.target.value)}
                      style={{ width: '42px', height: '42px', padding: 0, border: '3px solid #000', borderRadius: '4px', cursor: 'pointer' }}
                    />
                    <input
                      value={formThumbnail}
                      onChange={e => setFormThumbnail(e.target.value)}
                      placeholder="#FF6B6B"
                      className="input"
                      style={{ height: '42px', flex: 1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Premium toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--bg-secondary)', padding: '0.75rem 1rem', border: '3px solid #000', borderRadius: '6px', cursor: 'pointer' }}
                onClick={() => setFormIsPremium(!formIsPremium)}
              >
                <div style={{
                  width: '20px', height: '20px', border: '2px solid #000', borderRadius: '4px', background: formIsPremium ? '#FFD93D' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }}>
                  {formIsPremium && <span style={{ fontWeight: 900, color: '#000', fontSize: '10px' }}>✓</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem' }}>Premium Layout</span>
                  <span style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Require PRO subscription plan to download</span>
                </div>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); }}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  onClick={isAddModalOpen ? handleAddTemplate : handleSaveEdit}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  {isAddModalOpen ? 'Create Template' : 'Save Changes'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
