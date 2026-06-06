import { Link } from 'react-router-dom';
import { Palette, MessageSquare, Camera, Briefcase, Code2, PlayCircle } from 'lucide-react';

const FOOTER_LINKS = {
  Product: ['Templates', 'Editor', 'AI Generator', 'QR Codes', 'Digital Cards', 'Mockups'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  Support: ['Documentation', 'Help Center', 'Community', 'Status Page', 'API'],
};

const SOCIALS = [
  { icon: MessageSquare, href: '#', label: 'Twitter' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: PlayCircle, href: '#', label: 'YouTube' },
];


export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#fff', borderTop: '4px solid #000' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                background: '#FFD93D', border: '3px solid #FFD93D', borderRadius: '6px',
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Palette size={20} color="#000" />
              </div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                CardBuilder<span style={{ color: '#FFD93D' }}>Studio</span>
              </span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#999', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '260px' }}>
              The most powerful business card builder for professionals, teams, and businesses of all sizes.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', background: '#1a1a1a', border: '2px solid #333',
                  borderRadius: '4px', color: '#fff', textDecoration: 'none', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#FFD93D'; el.style.borderColor = '#FFD93D'; el.style.color = '#000';
                    el.style.transform = 'translate(-2px,-2px)'; el.style.boxShadow = '3px 3px 0 #FFD93D';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#1a1a1a'; el.style.borderColor = '#333'; el.style.color = '#fff';
                    el.style.transform = ''; el.style.boxShadow = '';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFD93D', marginBottom: '1rem' }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#888', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => (e.target as HTMLElement).style.color = '#fff'}
                      onMouseLeave={e => (e.target as HTMLElement).style.color = '#888'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ background: '#111', border: '3px solid #333', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              Stay in the loop ✨
            </h4>
            <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#888' }}>
              Get the latest templates, features, and tips delivered weekly.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flex: '1', maxWidth: '420px', minWidth: '280px' }}>
            <input type="email" placeholder="your@email.com" style={{
              flex: 1, fontFamily: 'Inter', fontSize: '0.9375rem', padding: '0.625rem 1rem',
              border: '3px solid #333', borderRadius: '4px', background: '#1a1a1a', color: '#fff', outline: 'none',
            }} />
            <button className="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '2px solid #1a1a1a' }}>
          <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#555' }}>
            © 2025 CardBuilderStudio. All rights reserved. Made with ❤️ in India.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#555', textDecoration: 'none' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#FFD93D'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#555'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
