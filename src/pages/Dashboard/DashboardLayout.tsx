import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Layers, FileImage, Sparkles, QrCode, Image,
  ShoppingBag, Users, BarChart3, Settings, Palette, Menu, X,
  Bell, Search, ChevronDown, LogOut, Moon, Sun, ExternalLink,
} from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', exact: true },
  { label: 'Templates', icon: Layers, path: '/dashboard/templates' },
  { label: 'My Designs', icon: FileImage, path: '/dashboard/designs' },
  { label: 'AI Generator', icon: Sparkles, path: '/dashboard/ai-generator', badge: 'AI' },
  { label: 'QR Generator', icon: QrCode, path: '/dashboard/qr-generator' },
  { label: 'Mockups', icon: Image, path: '/dashboard/mockups' },
  { label: 'Orders', icon: ShoppingBag, path: '/dashboard/orders' },
  { label: 'Team', icon: Users, path: '/dashboard/team' },
  { label: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

function Sidebar({ collapsed, onClose }: { collapsed: boolean; onClose?: () => void }) {
  const location = useLocation();
  const { user, theme, toggleTheme } = useAppStore();
  const navigate = useNavigate();

  const isActive = (item: typeof NAV_ITEMS[0]) =>
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);

  return (
    <div style={{
      width: collapsed ? '72px' : '256px', height: '100vh', background: 'var(--bg-primary)',
      border: '3px solid var(--border-color)', borderLeft: 'none', borderTop: 'none', borderBottom: 'none',
      display: 'flex', flexDirection: 'column', transition: 'width 0.25s ease', flexShrink: 0,
      position: 'sticky', top: 0, zIndex: 40, overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{ padding: collapsed ? '1.25rem 1rem' : '1.25rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '3px solid var(--border-color)', height: '72px' }}>
        <div style={{ background: '#FFD93D', border: '3px solid #000', borderRadius: '6px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0 #000', flexShrink: 0 }}>
          <Palette size={20} color="#000" />
        </div>
        {!collapsed && (
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            CardBuilder<span style={{ color: '#FFD93D' }}>Studio</span>
          </span>
        )}
        {onClose && (
          <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* New Design Button */}
      {!collapsed && (
        <div style={{ padding: '1rem 1.25rem', borderBottom: '2px solid var(--border-color)' }}>
          <button
            onClick={() => navigate('/editor')}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Sparkles size={14} /> New Design
          </button>
        </div>
      )}

      {/* Nav Items */}
      <nav style={{ flex: 1, padding: '0.75rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto' }}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);
          return (
            <Link
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: collapsed ? '0.75rem' : '0.625rem 0.875rem',
                borderRadius: '6px', border: active ? '2.5px solid #000' : '2.5px solid transparent',
                background: active ? '#FFD93D' : 'transparent',
                boxShadow: active ? '3px 3px 0 #000' : 'none',
                color: active ? '#000' : 'var(--text-secondary)',
                fontFamily: 'Space Grotesk', fontWeight: active ? 700 : 600, fontSize: '0.875rem',
                transition: 'all 0.15s', cursor: 'pointer', position: 'relative',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
                onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)'; } }}
                onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
              >
                <Icon size={18} />
                {!collapsed && (
                  <>
                    <span>{item.label}</span>
                    {(item as any).badge && (
                      <span style={{ marginLeft: 'auto', background: '#FF6B6B', color: '#fff', border: '2px solid #000', borderRadius: '4px', padding: '1px 6px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.05em' }}>
                        {(item as any).badge}
                      </span>
                    )}
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '3px solid var(--border-color)', padding: '0.75rem' }}>
        {/* Digital Card link */}
        {!collapsed && (
          <a
            href={`/card/${user?.digitalCardSlug || 'viveksawji'}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '0.5rem', border: '2px solid var(--border-color)', color: 'var(--text-secondary)', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.8125rem' }}
          >
            <ExternalLink size={14} /> My Digital Card
          </a>
        )}
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: collapsed ? '0.75rem' : '0.5rem 0.75rem', width: '100%', background: 'none', border: '2px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', color: 'var(--text-secondary)', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.8125rem', justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          {!collapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </div>
  );
}

function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, notifications } = useAppStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  const pageTitle = NAV_ITEMS.find(n => location.pathname === n.path || (n.path !== '/dashboard' && location.pathname.startsWith(n.path)))?.label || 'Dashboard';

  return (
    <div style={{
      height: '72px', background: 'var(--bg-primary)', borderBottom: '3px solid var(--border-color)',
      display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '1rem', position: 'sticky', top: 0, zIndex: 30,
    }}>
      {/* Mobile hamburger */}
      <button onClick={onMenuClick} className="btn btn-outline btn-icon btn-sm" id="mob-menu-btn">
        <Menu size={18} />
      </button>

      <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)', flexShrink: 0 }}>
        {pageTitle}
      </h1>

      {/* Search */}
      <div style={{ flex: 1, maxWidth: '360px', position: 'relative', marginLeft: '1rem' }}>
        <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          value={searchVal} onChange={e => setSearchVal(e.target.value)}
          placeholder="Search templates, designs..."
          className="input"
          style={{ paddingLeft: '2.5rem', fontSize: '0.875rem', height: '40px' }}
        />
      </div>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Notifications */}
        <button className="btn btn-outline btn-icon btn-sm" style={{ position: 'relative' }}>
          <Bell size={16} />
          {notifications > 0 && (
            <span style={{
              position: 'absolute', top: '-6px', right: '-6px', background: '#FF6B6B',
              color: '#fff', border: '2px solid #000', borderRadius: '50%', width: '18px', height: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.6rem',
            }}>{notifications}</span>
          )}
        </button>

        {/* User */}
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', background: 'var(--bg-secondary)', border: '3px solid var(--border-color)', borderRadius: '8px', padding: '0.375rem 0.875rem 0.375rem 0.5rem', cursor: 'pointer', boxShadow: '3px 3px 0 var(--border-color)' }}
          onClick={() => navigate('/dashboard/settings')}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFD93D', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.875rem', color: '#000', flexShrink: 0 }}>
            {user?.name?.charAt(0) || 'V'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{user?.name?.split(' ')[0] || 'Vivek'}</span>
            <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{user?.plan} plan</span>
          </div>
          <ChevronDown size={14} color="var(--text-muted)" />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #mob-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          #mob-menu-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function DashboardLayout() {
  const { sidebarCollapsed, toggleSidebar } = useAppStore();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      {/* Desktop Sidebar */}
      <div style={{ display: 'none' }} className="desktop-sidebar-wrapper">
        <Sidebar collapsed={sidebarCollapsed} />
      </div>
      <div className="desktop-sidebar-wrapper" style={{ display: 'flex' }}>
        <Sidebar collapsed={sidebarCollapsed} />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 50 }}
            />
            <motion.div
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{ position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 60 }}
            >
              <Sidebar collapsed={false} onClose={() => setMobileSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <Topbar onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          style={{
            position: 'fixed', top: '20px', left: sidebarCollapsed ? '84px' : '268px',
            zIndex: 45, background: '#FFD93D', border: '3px solid #000', borderRadius: '50%',
            width: '28px', height: '28px', cursor: 'pointer', boxShadow: '2px 2px 0 #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'left 0.25s ease',
          }}
        >
          <Menu size={14} color="#000" />
        </button>
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-sidebar-wrapper { display: none !important; }
        }
      `}</style>
    </div>
  );
}
