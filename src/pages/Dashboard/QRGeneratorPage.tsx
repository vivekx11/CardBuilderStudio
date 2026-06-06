import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Copy, Plus, Globe, MessageCircle, CreditCard, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import type { QRType } from '../../types';

const QR_TYPES: { id: QRType; label: string; icon: typeof Globe; placeholder: string; prefix: string }[] = [
  { id: 'website', label: 'Website', icon: Globe, placeholder: 'https://yourwebsite.com', prefix: '' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, placeholder: '+91 98765 43210', prefix: 'https://wa.me/' },
  { id: 'upi', label: 'UPI Payment', icon: CreditCard, placeholder: 'yourname@paytm', prefix: 'upi://pay?pa=' },
  { id: 'contact', label: 'Contact Card', icon: Phone, placeholder: 'vivek@example.com', prefix: 'mailto:' },
  { id: 'location', label: 'Location', icon: MapPin, placeholder: 'Apollo Hospital, Mumbai', prefix: 'https://maps.google.com/?q=' },
];

const QR_SHAPES = ['squares', 'dots', 'rounded'];

export default function QRGeneratorPage() {
  const [qrType, setQrType] = useState<QRType>('website');
  const [value, setValue] = useState('https://cardbuilderstudio.com');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [size, setSize] = useState(256);
  const [label, setLabel] = useState('My QR Code');
  const qrRef = useRef<HTMLDivElement>(null);

  const activeType = QR_TYPES.find(t => t.id === qrType)!;
  const qrValue = activeType.prefix + value;

  const handleDownload = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;
    const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `${label}.svg`; a.click();
    URL.revokeObjectURL(url);
    toast.success('QR Code downloaded!');
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(qrValue);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>QR Code Generator</h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Create custom QR codes for websites, WhatsApp, UPI, contacts, and locations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.5rem' }}>
        {/* Left - Config */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* QR Type */}
          <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem' }}>
            <label className="label" style={{ marginBottom: '0.75rem' }}>QR Code Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.625rem' }}>
              {QR_TYPES.map(type => {
                const Icon = type.icon;
                return (
                  <button key={type.id} onClick={() => setQrType(type.id)}
                    style={{
                      padding: '0.75rem 0.5rem', border: '3px solid #000', borderRadius: '6px', cursor: 'pointer',
                      background: qrType === type.id ? '#FFD93D' : 'var(--bg-secondary)',
                      boxShadow: qrType === type.id ? '3px 3px 0 #000' : 'none',
                      transform: qrType === type.id ? 'translate(-2px,-2px)' : 'none',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem',
                      fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', color: '#000',
                      transition: 'all 0.15s',
                    }}>
                    <Icon size={18} />
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label className="label">Label / Name</label>
              <input className="input" value={label} onChange={e => setLabel(e.target.value)} placeholder="My QR Code" style={{ fontSize: '0.875rem' }} />
            </div>
            <div>
              <label className="label">{activeType.label} {activeType.id === 'website' ? 'URL' : 'Value'}</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input className="input" value={value} onChange={e => setValue(e.target.value)} placeholder={activeType.placeholder} style={{ fontSize: '0.875rem', flex: 1 }} />
                <button onClick={handleCopy} className="btn btn-outline btn-icon" title="Copy link">
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Styling */}
          <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>Appearance</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="label">Foreground Color</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)} style={{ width: '44px', height: '40px', border: '3px solid #000', borderRadius: '4px', cursor: 'pointer', padding: '2px' }} />
                  <input className="input" value={fgColor} onChange={e => setFgColor(e.target.value)} style={{ fontSize: '0.875rem', flex: 1 }} />
                </div>
              </div>
              <div>
                <label className="label">Background Color</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} style={{ width: '44px', height: '40px', border: '3px solid #000', borderRadius: '4px', cursor: 'pointer', padding: '2px' }} />
                  <input className="input" value={bgColor} onChange={e => setBgColor(e.target.value)} style={{ fontSize: '0.875rem', flex: 1 }} />
                </div>
              </div>
            </div>
            <div>
              <label className="label">QR Size: {size}x{size}px</label>
              <input type="range" min={128} max={512} step={32} value={size} onChange={e => setSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#FFD93D', cursor: 'pointer' }} />
            </div>
          </div>
        </div>

        {/* Right - Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '1rem' }}>
          <motion.div
            style={{ background: 'var(--bg-primary)', border: '4px solid var(--border-color)', borderRadius: '12px', boxShadow: '8px 8px 0 var(--border-color)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            animate={{ boxShadow: '8px 8px 0 var(--border-color)' }}
          >
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
              Live Preview
            </h4>
            <div ref={qrRef} style={{ background: bgColor, padding: '16px', border: '3px solid #000', borderRadius: '8px', boxShadow: '4px 4px 0 #000' }}>
              <QRCodeSVG
                value={qrValue || 'https://cardbuilderstudio.com'}
                size={180}
                fgColor={fgColor}
                bgColor={bgColor}
                level="H"
                includeMargin={false}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {qrValue}
              </div>
            </div>
          </motion.div>

          <button onClick={handleDownload} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            <Download size={18} /> Download SVG
          </button>
          <button onClick={() => toast('PNG download — install html2canvas')} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            <Download size={16} /> Download PNG
          </button>
          <button onClick={() => toast.success('QR code added to your library!')} className="btn btn-success" style={{ width: '100%', justifyContent: 'center' }}>
            <Plus size={16} /> Save to Library
          </button>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { div[style*="grid-template-columns: 1fr 360px"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
