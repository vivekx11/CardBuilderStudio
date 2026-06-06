import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, MessageCircle, Download, Share2, ExternalLink } from 'lucide-react';

const MOCK_CARD = {
  name: 'Dr. Vivek Sawji',
  title: 'Chief Cardiologist',
  company: 'Apollo Hospitals',
  phone: '+91 98765 43210',
  email: 'vivek@apollo.com',
  website: 'www.drapollo.com',
  whatsapp: '+919876543210',
  location: 'Apollo Hospitals, Jubilee Hills, Hyderabad',
  bio: 'Senior Cardiologist with 15+ years of experience in interventional cardiology. Specializing in complex coronary interventions and heart failure management.',
  bg: '#1A3C5E',
  accent: '#FFD93D',
};

const ACTIONS = [
  { icon: Phone, label: 'Call', color: '#6BCB77', action: () => window.open(`tel:${MOCK_CARD.phone}`) },
  { icon: MessageCircle, label: 'WhatsApp', color: '#25D366', action: () => window.open(`https://wa.me/${MOCK_CARD.whatsapp}`) },
  { icon: Mail, label: 'Email', color: '#4D96FF', action: () => window.open(`mailto:${MOCK_CARD.email}`) },
  { icon: Globe, label: 'Website', color: '#A855F7', action: () => window.open(`https://${MOCK_CARD.website}`) },
  { icon: MapPin, label: 'Location', color: '#FF6B6B', action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(MOCK_CARD.location)}`) },
];

export default function DigitalCardPage() {
  const { slug } = useParams();

  const handleSaveContact = () => {
    const vcard = [
      'BEGIN:VCARD', 'VERSION:3.0',
      `FN:${MOCK_CARD.name}`, `ORG:${MOCK_CARD.company}`,
      `TITLE:${MOCK_CARD.title}`, `TEL:${MOCK_CARD.phone}`,
      `EMAIL:${MOCK_CARD.email}`, `URL:https://${MOCK_CARD.website}`,
      `ADR:;;${MOCK_CARD.location};;;;`,
      'END:VCARD',
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `${MOCK_CARD.name}.vcf`; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0 1rem 4rem' }}>
      {/* Hero Banner */}
      <div style={{ width: '100%', maxWidth: '480px' }}>
        <div style={{ height: '200px', background: `linear-gradient(135deg, ${MOCK_CARD.bg}, #0d1f35)`, position: 'relative', borderBottom: '4px solid #000' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,217,61,0.05) 10px, rgba(255,217,61,0.05) 20px)' }} />
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: '#111', margin: '-60px 1rem 0', border: '4px solid #333', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', padding: '4.5rem 1.5rem 1.5rem', position: 'relative', textAlign: 'center' }}
        >
          {/* Avatar */}
          <div style={{
            position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)',
            width: '100px', height: '100px', borderRadius: '50%',
            background: MOCK_CARD.accent, border: '5px solid #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2.5rem', color: '#000',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}>
            {MOCK_CARD.name.charAt(0)}
          </div>

          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
            {MOCK_CARD.name}
          </h1>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: MOCK_CARD.accent, fontWeight: 600, marginBottom: '0.25rem' }}>
            {MOCK_CARD.title}
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#888', marginBottom: '1.25rem' }}>
            {MOCK_CARD.company}
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#aaa', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {MOCK_CARD.bio}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.625rem', marginBottom: '1.5rem' }}>
            {ACTIONS.map(({ icon: Icon, label, color, action }) => (
              <button key={label} onClick={action} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem', padding: '0.75rem 0.25rem', background: '#1a1a1a', border: '2px solid #333', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = color; (e.currentTarget as HTMLElement).style.background = '#222'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#333'; (e.currentTarget as HTMLElement).style.background = '#1a1a1a'; }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={16} color="#000" />
                </div>
                <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#888', fontWeight: 600 }}>{label}</span>
              </button>
            ))}
          </div>

          {/* Save Contact */}
          <button onClick={handleSaveContact}
            style={{ width: '100%', padding: '1rem', background: MOCK_CARD.accent, border: '3px solid #000', borderRadius: '10px', cursor: 'pointer', boxShadow: '4px 4px 0 #333', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0 #333'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0 #333'; }}
          >
            <Download size={18} /> Save Contact
          </button>

          <button onClick={() => navigator.share?.({ title: MOCK_CARD.name, url: window.location.href }).catch(() => {})}
            style={{ width: '100%', padding: '0.75rem', background: 'transparent', border: '2px solid #333', borderRadius: '10px', cursor: 'pointer', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <Share2 size={16} /> Share Profile
          </button>
        </motion.div>

        {/* Contact Details */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ background: '#111', margin: '1rem', border: '2px solid #222', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {[
            { icon: Phone, label: 'Phone', value: MOCK_CARD.phone, href: `tel:${MOCK_CARD.phone}` },
            { icon: Mail, label: 'Email', value: MOCK_CARD.email, href: `mailto:${MOCK_CARD.email}` },
            { icon: Globe, label: 'Website', value: MOCK_CARD.website, href: `https://${MOCK_CARD.website}` },
            { icon: MapPin, label: 'Location', value: MOCK_CARD.location, href: '#' },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', padding: '0.75rem', borderRadius: '8px', background: '#1a1a1a', border: '2px solid #2a2a2a', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = MOCK_CARD.accent}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a'}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} color={MOCK_CARD.accent} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', fontWeight: 700, color: '#ccc' }}>{value}</div>
              </div>
              <ExternalLink size={14} color="#444" style={{ marginLeft: 'auto', flexShrink: 0 }} />
            </a>
          ))}
        </motion.div>

        {/* Powered by */}
        <p style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '0.75rem', color: '#333', marginTop: '1rem' }}>
          Powered by <a href="/" style={{ color: MOCK_CARD.accent, textDecoration: 'none', fontWeight: 700 }}>CardBuilderStudio</a>
        </p>
      </div>
    </div>
  );
}
