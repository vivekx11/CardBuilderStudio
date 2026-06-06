import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Palette, Moon, Sun } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import clsx from 'clsx';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useAppStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--bg-primary)] border-b-[3px] border-[var(--border-color)] shadow-[0_4px_0_var(--border-color)]'
          : 'bg-transparent'
      )}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              background: '#FFD93D', border: '3px solid #000', borderRadius: '6px',
              width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '3px 3px 0 #000',
            }}>
              <Palette size={20} color="#000" />
            </div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              CardBuilder<span style={{ color: '#FFD93D', WebkitTextStroke: '1px #000' }}>Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9375rem',
                color: 'var(--text-primary)', textDecoration: 'none', padding: '0.5rem 1rem',
                borderRadius: '4px', transition: 'all 0.15s', border: '2px solid transparent',
              }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = '#FFD93D';
                  (e.target as HTMLElement).style.border = '2px solid #000';
                  (e.target as HTMLElement).style.boxShadow = '3px 3px 0 #000';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.border = '2px solid transparent';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={toggleTheme} className="btn btn-outline btn-icon btn-sm" title="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link to="/login" className="btn btn-outline btn-sm" style={{ textDecoration: 'none' }}>Login</Link>
            <Link to="/signup" className="btn btn-primary btn-sm" style={{ textDecoration: 'none' }}>
              Get Started Free
            </Link>
            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="btn btn-outline btn-icon btn-sm" style={{ display: 'none' }} id="hamburger">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ background: 'var(--bg-primary)', borderTop: '3px solid #000', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', padding: '0.75rem', border: '2px solid #000', borderRadius: '4px' }}>
                {link.label}
              </a>
            ))}
            <Link to="/signup" className="btn btn-primary" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none', textAlign: 'center' }}>
              Get Started Free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          #hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
