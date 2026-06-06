import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const SCENES = [
  { id: 'table', label: 'Table Mockup', icon: '🪵', bg: '#8B6914', desc: 'Card on wooden table' },
  { id: 'hand', label: 'Hand Holding', icon: '✋', bg: '#F5DEB3', desc: 'Card held in hand' },
  { id: 'desk', label: 'Office Desk', icon: '💼', bg: '#4D96FF', desc: 'Professional desk scene' },
  { id: 'display', label: 'Vertical Display', icon: '📌', bg: '#6BCB77', desc: 'Upright display stand' },
  { id: 'luxury', label: 'Luxury Mockup', icon: '💎', bg: '#1A1A1A', desc: 'Premium dark background' },
];

const CARD_DESIGNS = [
  { id: '1', name: 'My Doctor Card', bg: '#1A3C5E', accent: '#FFD93D' },
  { id: '2', name: 'Restaurant Promo', bg: '#3D2B1F', accent: '#FFD93D' },
  { id: '3', name: 'Tech Startup Card', bg: '#0A0A0A', accent: '#4D96FF' },
];

export default function MockupsPage() {
  const [selectedScene, setSelectedScene] = useState('table');
  const [selectedDesign, setSelectedDesign] = useState('1');
  const activeScene = SCENES.find(s => s.id === selectedScene)!;
  const activeDesign = CARD_DESIGNS.find(d => d.id === selectedDesign)!;

  return (
    <div style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Mockup Generator</h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Generate realistic previews of your business card in different scenes</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Config */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Scene Selection */}
          <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem' }}>
            <label className="label" style={{ marginBottom: '0.75rem' }}>Choose Scene</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {SCENES.map(scene => (
                <button key={scene.id} onClick={() => setSelectedScene(scene.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1rem', border: `3px solid ${selectedScene === scene.id ? '#000' : 'var(--border-color)'}`, borderRadius: '6px', cursor: 'pointer', background: selectedScene === scene.id ? '#FFD93D' : 'var(--bg-secondary)', boxShadow: selectedScene === scene.id ? '3px 3px 0 #000' : 'none', transform: selectedScene === scene.id ? 'translate(-2px,-2px)' : 'none', transition: 'all 0.15s', textAlign: 'left' }}>
                  <div style={{ width: '40px', height: '40px', background: scene.bg, border: '2px solid #000', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                    {scene.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: '#000' }}>{scene.label}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#444' }}>{scene.desc}</div>
                  </div>
                  {selectedScene === scene.id && <div style={{ marginLeft: 'auto', background: '#000', color: '#FFD93D', border: '2px solid #000', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem' }}>✓</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Design Selection */}
          <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem' }}>
            <label className="label" style={{ marginBottom: '0.75rem' }}>Select Design</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {CARD_DESIGNS.map(design => (
                <button key={design.id} onClick={() => setSelectedDesign(design.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem 1rem', border: `3px solid ${selectedDesign === design.id ? '#000' : 'var(--border-color)'}`, borderRadius: '6px', cursor: 'pointer', background: selectedDesign === design.id ? '#FFD93D' : 'var(--bg-secondary)', boxShadow: selectedDesign === design.id ? '3px 3px 0 #000' : 'none', transform: selectedDesign === design.id ? 'translate(-2px,-2px)' : 'none', transition: 'all 0.15s', textAlign: 'left' }}>
                  <div style={{ width: '48px', height: '30px', background: design.bg, border: '2px solid #000', borderRadius: '4px', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#000' }}>{design.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            key={`${selectedScene}-${selectedDesign}`}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            style={{ background: activeScene.bg, border: '4px solid #000', borderRadius: '12px', boxShadow: '8px 8px 0 #000', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}
          >
            {/* Scene Label */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#FFD93D', border: '2px solid #000', borderRadius: '4px', padding: '4px 10px', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.06em', color: '#000' }}>
              {activeScene.icon} {activeScene.label}
            </div>

            {/* Floating card mockup */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: selectedScene === 'display' ? [5, 5, 5] : [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '240px', height: '140px', background: activeDesign.bg, border: '3px solid rgba(255,255,255,0.3)', borderRadius: '8px', boxShadow: '12px 12px 30px rgba(0,0,0,0.5)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}
            >
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: activeDesign.accent }}>Dr. Vivek Sawji</div>
              <div style={{ width: '60px', height: '2px', background: activeDesign.accent }} />
              <div style={{ fontFamily: 'Inter', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.7)' }}>Cardiologist · AIIMS</div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.6)', marginTop: 'auto' }}>+91 98765 43210</div>
            </motion.div>
          </motion.div>

          <button onClick={() => toast.success('Mockup downloading as PNG...')} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            <Download size={18} /> Download Mockup PNG
          </button>
          <button onClick={() => toast('3D preview — Three.js integration available')} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            <ImageIcon size={16} /> View 3D Preview
          </button>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
