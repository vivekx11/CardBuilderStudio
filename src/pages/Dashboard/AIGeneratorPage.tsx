import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Wand2, Palette, Type, RefreshCw, Download, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import type { AIGenerationParams, TemplateStyle } from '../../types';

const STYLE_OPTIONS: { id: TemplateStyle; label: string; icon: string; color: string }[] = [
  { id: 'minimal', label: 'Minimal', icon: '◻', color: '#F5F5F5' },
  { id: 'bold', label: 'Bold', icon: '⬛', color: '#000' },
  { id: 'elegant', label: 'Elegant', icon: '✦', color: '#C9A84C' },
  { id: 'corporate', label: 'Corporate', icon: '🏢', color: '#4D96FF' },
  { id: 'creative', label: 'Creative', icon: '🎨', color: '#FF6B6B' },
  { id: 'luxury', label: 'Luxury', icon: '💎', color: '#8B6914' },
  { id: 'modern', label: 'Modern', icon: '⚡', color: '#6BCB77' },
  { id: 'playful', label: 'Playful', icon: '🎉', color: '#FFD93D' },
];

const GENERATED_CARDS = [
  { id: 'g1', bg: 'linear-gradient(135deg, #1A3C5E, #0D2137)', accent: '#FFD93D', style: 'Elegant Dark' },
  { id: 'g2', bg: '#FFD93D', accent: '#000', style: 'Bold Yellow' },
  { id: 'g3', bg: '#FFFFFF', accent: '#4D96FF', style: 'Clean White' },
  { id: 'g4', bg: '#0A0A0A', accent: '#6BCB77', style: 'Dark Green' },
  { id: 'g5', bg: 'linear-gradient(135deg, #FF6B6B, #FFD93D)', accent: '#000', style: 'Vibrant Gradient' },
  { id: 'g6', bg: '#F5F5F5', accent: '#FF6B6B', style: 'Minimal Red' },
];

export default function AIGeneratorPage() {
  const [step, setStep] = useState<'form' | 'generating' | 'results'>('form');
  const [params, setParams] = useState<Partial<AIGenerationParams>>({ stylePreference: 'modern' });
  const [selected, setSelected] = useState<string>('g1');

  const handleGenerate = async () => {
    if (!params.name || !params.profession) { toast.error('Please fill in Name and Profession'); return; }
    setStep('generating');
    // TODO: Replace with Gemini API / OpenAI call
    await new Promise(r => setTimeout(r, 2500));
    setStep('results');
    toast.success('6 designs generated! ✨');
  };

  const update = (key: keyof AIGenerationParams, value: string) => setParams(p => ({ ...p, [key]: value }));

  return (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0A0A0A, #1a1a2e)', border: '4px solid #000', borderRadius: '12px', boxShadow: '8px 8px 0 #000', padding: '2rem', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FF6B6B', border: '3px solid #fff', borderRadius: '6px', padding: '4px 12px', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.08em' }}>
          AI POWERED
        </div>
        <Sparkles size={32} color="#FFD93D" style={{ marginBottom: '0.75rem' }} />
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.75rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          AI Business Card Generator
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: '#CCCCCC', lineHeight: 1.6 }}>
          Enter your details and our AI will generate 6 stunning business card designs tailored to your profession and style preferences.
        </p>
      </div>

      {step === 'form' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: 'var(--bg-primary)', border: '4px solid var(--border-color)', borderRadius: '12px', boxShadow: '6px 6px 0 var(--border-color)', padding: '2rem' }}
        >
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            📋 Your Details
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { key: 'name', label: 'Full Name *', placeholder: 'Dr. Vivek Sawji' },
              { key: 'company', label: 'Company / Hospital / Firm', placeholder: 'Apollo Hospitals' },
              { key: 'profession', label: 'Profession / Title *', placeholder: 'Cardiologist' },
              { key: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210' },
              { key: 'email', label: 'Email Address', placeholder: 'vivek@example.com' },
              { key: 'website', label: 'Website', placeholder: 'www.yourwebsite.com' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="label">{label}</label>
                <input className="input" placeholder={placeholder} style={{ fontSize: '0.875rem' }}
                  onChange={e => update(key as any, e.target.value)} />
              </div>
            ))}
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="label">Address</label>
              <input className="input" placeholder="Apollo Hospitals, Jubilee Hills, Hyderabad" style={{ fontSize: '0.875rem' }}
                onChange={e => update('address', e.target.value)} />
            </div>
          </div>

          {/* Style Preference */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="label">Style Preference</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {STYLE_OPTIONS.map(style => (
                <button key={style.id} onClick={() => update('stylePreference', style.id)}
                  style={{
                    padding: '0.5rem 1rem', border: '3px solid #000', borderRadius: '6px', cursor: 'pointer',
                    background: params.stylePreference === style.id ? style.color || '#FFD93D' : 'var(--bg-secondary)',
                    boxShadow: params.stylePreference === style.id ? '3px 3px 0 #000' : 'none',
                    fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem',
                    color: params.stylePreference === style.id && style.color === '#000' ? '#FFD93D' : '#000',
                    transform: params.stylePreference === style.id ? 'translate(-2px, -2px)' : 'none',
                    transition: 'all 0.15s',
                  }}>
                  {style.icon} {style.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleGenerate} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            <Wand2 size={20} /> Generate My Designs <ArrowRight size={18} />
          </button>

          <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.75rem' }}>
            {/* TODO: Connect to Gemini API — replace simulation below */}
            AI will create 6 unique designs · Takes ~3 seconds
          </p>
        </motion.div>
      )}

      {step === 'generating' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ background: 'var(--bg-primary)', border: '4px solid var(--border-color)', borderRadius: '12px', boxShadow: '6px 6px 0 var(--border-color)', padding: '4rem', textAlign: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            style={{ width: '64px', height: '64px', border: '5px solid #FFD93D', borderTopColor: '#000', borderRadius: '50%', margin: '0 auto 2rem' }}
          />
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            AI is crafting your designs...
          </h3>
          <p style={{ fontFamily: 'Inter', color: 'var(--text-muted)' }}>Analyzing your profession, style preferences, and generating 6 unique layouts</p>
        </motion.div>
      )}

      {step === 'results' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              ✨ 6 Designs Generated for {params.name || 'You'}
            </h3>
            <button onClick={() => { setStep('generating'); setTimeout(() => setStep('results'), 2000); }} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Regenerate
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {GENERATED_CARDS.map((card, i) => (
              <motion.div key={card.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(card.id)}
                style={{
                  border: selected === card.id ? '4px solid #000' : '3px solid var(--border-color)',
                  borderRadius: '8px', overflow: 'hidden', cursor: 'pointer',
                  boxShadow: selected === card.id ? '8px 8px 0 #000' : '4px 4px 0 var(--border-color)',
                  transform: selected === card.id ? 'translate(-3px,-3px)' : 'none', transition: 'all 0.2s',
                }}
              >
                <div style={{ height: '130px', background: card.bg, position: 'relative', padding: '1rem' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: card.accent, marginBottom: '0.25rem' }}>{params.name || 'Your Name'}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: card.accent, opacity: 0.8 }}>{params.profession || 'Your Title'}</div>
                  <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '2px 8px', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.65rem', color: '#fff' }}>
                    {card.style}
                  </div>
                  {selected === card.id && (
                    <div style={{ position: 'absolute', top: '8px', right: '8px', background: '#6BCB77', border: '2px solid #000', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.75rem', color: '#000' }}>✓</div>
                  )}
                </div>
                <div style={{ padding: '0.75rem', background: 'var(--bg-primary)' }}>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{card.style}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to={`/editor?ai=${selected}`} className="btn btn-primary btn-lg" style={{ textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
              <Edit size={18} /> Open in Editor
            </Link>
            <button className="btn btn-outline btn-lg" onClick={() => toast.success('Downloading PNG...')} style={{ flex: 1, justifyContent: 'center' }}>
              <Download size={18} /> Download PNG
            </button>
          </div>
        </motion.div>
      )}

      <style>{`@media (max-width: 640px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
