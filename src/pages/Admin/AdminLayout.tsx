import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Layers, ShoppingBag, Menu, X, Bell, ChevronDown,
  Moon, Sun, ExternalLink, ShieldAlert, ArrowLeft
} from 'lucide-react';
import { useAppStore } from '../../store/appStore';

const ADMIN_NAV_ITEMS = [
  { label: 'Users Management', icon: Users, path: '/admin/users' },
  { label: 'Templates Library', icon: Layers, path: '/admin/templates' },
  { label: 'Orders Fulfilment', icon: ShoppingBag, path: '/admin/orders' },
];

function AdminSidebar({ collapsed, onClose }: { collapsed: boolean; onClose?: () => void }) {
  const location = useLocation();
  const { user, theme, toggleTheme } = useAppStore();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div style={{
      width: collapsed ? '72px' : '256px', height: '100vh', background: 'var(--bg-primary)',
      border: '3px solid var(--border-color)', borderLeft: 'none', borderTop: 'none', borderBottom: 'none',
      display: 'flex', flexDirection: 'column', transition: 'width 0.25s ease', flexShrink: 0,
      position: 'sticky', top: 0, zIndex: 40, overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{ padding: collapsed ? '1.25rem 1rem' : '1.25rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '3px solid var(--border-color)', height: '72px' }}>
        <div style={{ background: '#FF6B6B', border: '3px solid #000', borderRadius: '6px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0 #000', flexShrink: 0 }}>
          <ShieldAlert size={20} color="#fff" />
        </div>
        {!collapsed && (
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            Studio<span style={{ color: '#FF6B6B' }}>Admin</span>
          </span>
        )}
        {onClose && (
          <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* Return to App Button */}
      {!collapsed && (
        <div style={{ padding: '1rem 1.25rem', borderBottom: '2px solid var(--border-color)' }}>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn btn-outline btn-sm"
            style={{ width: '100%', justifyContent: 'center', background: 'var(--bg-secondary)', gap: '0.5rem' }}
          >
            <ArrowLeft size={14} /> Back to App
          </button>
        </div>
      )}

      {/* Nav Items */}
      <nav style={{ flex: 1, padding: '0.75rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto' }}>
        {ADMIN_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
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
                background: active ? '#FF6B6B' : 'transparent',
                boxShadow: active ? '3px 3px 0 #000' : 'none',
                color: active ? '#fff' : 'var(--text-secondary)',
                fontFamily: 'Space Grotesk', fontWeight: active ? 700 : 600, fontSize: '0.875rem',
                transition: 'all 0.15s', cursor: 'pointer', position: 'relative',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
                onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)'; } }}
                onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
              >
                <Icon size={18} />
                {!collapsed && <span>{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '3px solid var(--border-color)', padding: '0.75rem' }}>
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

function AdminTopbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user } = useAppStore();
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = ADMIN_NAV_ITEMS.find(n => location.pathname === n.path)?.label || 'Admin Portal';

  return (
    <div style={{
      height: '72px', background: 'var(--bg-primary)', borderBottom: '3px solid var(--border-color)',
      display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '1rem', position: 'sticky', top: 0, zIndex: 30,
    }}>
      {/* Mobile hamburger */}
      <button onClick={onMenuClick} className="btn btn-outline btn-icon btn-sm" id="admin-mob-menu-btn">
        <Menu size={18} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)', flexShrink: 0 }}>
          {pageTitle}
        </h1>
        <span style={{ background: '#FF6B6B', color: '#fff', border: '2px solid #000', borderRadius: '4px', padding: '1px 6px', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Admin Panel
        </span>
      </div>

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* User */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', background: 'var(--bg-secondary)', border: '3px solid var(--border-color)', borderRadius: '8px', padding: '0.375rem 0.875rem 0.375rem 0.5rem', cursor: 'pointer', boxShadow: '3px 3px 0 var(--border-color)' }}
          onClick={() => navigate('/dashboard/settings')}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FF6B6B', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.875rem', color: '#fff', flexShrink: 0 }}>
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{user?.name?.split(' ')[0] || 'Admin'}</span>
            <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#FF6B6B', fontWeight: 700, textTransform: 'uppercase' }}>Super Admin</span>
          </div>
          <ChevronDown size={14} color="var(--text-muted)" />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #admin-mob-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          #admin-mob-menu-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function AdminLayout() {
  const { sidebarCollapsed, toggleSidebar } = useAppStore();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      {/* Desktop Sidebar */}
      <div className="admin-desktop-sidebar-wrapper" style={{ display: 'flex' }}>
        <AdminSidebar collapsed={sidebarCollapsed} />
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
              <AdminSidebar collapsed={false} onClose={() => setMobileSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <AdminTopbar onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          style={{
            position: 'fixed', top: '20px', left: sidebarCollapsed ? '84px' : '268px',
            zIndex: 45, background: '#FF6B6B', border: '3px solid #000', borderRadius: '50%',
            width: '28px', height: '28px', cursor: 'pointer', boxShadow: '2px 2px 0 #000',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'left 0.25s ease',
          }}
        >
          <Menu size={14} color="#fff" />
        </button>
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-desktop-sidebar-wrapper { display: none !important; }
        }
      `}</style>
    </div>
  );
}
