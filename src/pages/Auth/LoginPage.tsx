import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Eye, EyeOff, ArrowRight, Globe } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useAppStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error('Please fill in all fields'); return; }
    setLoading(true);
    // TODO: Replace with Firebase Auth
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Welcome back! 🎉');
    navigate('/dashboard');
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      {/* BG pattern */}
      <div className="dot-pattern" style={{ position: 'fixed', inset: 0, zIndex: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--bg-primary)', border: '4px solid #000', borderRadius: '12px',
          boxShadow: '10px 10px 0 #000', padding: '2.5rem', width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1,
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#FFD93D', border: '3px solid #000', borderRadius: '6px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0 #000' }}>
            <Palette size={20} color="#000" />
          </div>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
            CardBuilder<span style={{ color: '#FFD93D', WebkitTextStroke: '1px #000' }}>Studio</span>
          </span>
        </Link>

        <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>
          Welcome back 👋
        </h1>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Sign in to your account to continue designing
        </p>

        {/* Google */}
        <button
          onClick={() => toast('Google OAuth — connect Firebase Auth', { icon: '🔑' })}
          className="btn btn-outline"
          style={{ width: '100%', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <Globe size={18} /> Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, height: '2px', background: 'var(--bg-tertiary)' }} />
          <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>or email</span>
          <div style={{ flex: 1, height: '2px', background: 'var(--bg-tertiary)' }} />
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label className="label">Email address</label>
            <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="label">Password</label>
            <div style={{ position: 'relative' }}>
              <input className="input" type={showPass ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} style={{ paddingRight: '3rem' }} />
              <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/forgot-password" style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#4D96FF', textDecoration: 'none', fontWeight: 600 }}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', marginTop: '0.5rem' }}>
            {loading ? 'Signing in...' : <><span>Sign In</span> <ArrowRight size={18} /></>}
          </button>
        </form>

        <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.5rem' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#4D96FF', fontWeight: 700, textDecoration: 'none' }}>Sign up free →</Link>
        </p>
      </motion.div>
    </div>
  );
}
