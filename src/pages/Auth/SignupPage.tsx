import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Eye, EyeOff, ArrowRight, Globe, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const STEPS = ['Account', 'Profile', 'Plan'];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [plan, setPlan] = useState<'free' | 'pro'>('free');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step === 0 && (!email || !password || password.length < 8)) {
      toast.error('Please provide a valid email and password (min 8 chars)');
      return;
    }
    if (step === 1 && !name) { toast.error('Please enter your name'); return; }
    if (step < 2) setStep(step + 1);
    else handleSignup();
  };

  const handleSignup = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    toast.success('Account created! Welcome to CardBuilderStudio 🎉');
    navigate('/dashboard');
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <div className="dot-pattern" style={{ position: 'fixed', inset: 0, zIndex: 0 }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: 'var(--bg-primary)', border: '4px solid #000', borderRadius: '12px', boxShadow: '10px 10px 0 #000', padding: '2.5rem', width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}
      >
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: '#FFD93D', border: '3px solid #000', borderRadius: '6px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0 #000' }}>
            <Palette size={16} color="#000" />
          </div>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>CardBuilderStudio</span>
        </Link>

        {/* Steps indicator */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: i < 2 ? '1' : 'none' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: i < step ? '#6BCB77' : i === step ? '#FFD93D' : 'var(--bg-tertiary)',
                border: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0,
              }}>
                {i < step ? <Check size={12} /> : i + 1}
              </div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.8125rem', color: i === step ? 'var(--text-primary)' : 'var(--text-muted)' }}>{s}</span>
              {i < 2 && <div style={{ flex: 1, height: '2px', background: i < step ? '#6BCB77' : 'var(--bg-tertiary)', border: '1px solid #00000022' }} />}
            </div>
          ))}
        </div>

        {step === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Create your account</h2>
            <button onClick={() => toast('Google OAuth — connect Firebase Auth')} className="btn btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Globe size={16} /> Continue with Google
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '2px', background: 'var(--bg-tertiary)' }} />
              <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>or email</span>
              <div style={{ flex: 1, height: '2px', background: 'var(--bg-tertiary)' }} />
            </div>
            <div>
              <label className="label">Email address</label>
              <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="label">Password (min 8 characters)</label>
              <div style={{ position: 'relative' }}>
                <input className="input" type={showPass ? 'text' : 'password'} placeholder="Create a strong password" value={password} onChange={e => setPassword(e.target.value)} style={{ paddingRight: '3rem' }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)' }}>Tell us about yourself</h2>
            <div>
              <label className="label">Full Name</label>
              <input className="input" placeholder="Vivek Sawji" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label className="label">Profession / Industry</label>
              <select className="input" value={profession} onChange={e => setProfession(e.target.value)} style={{ cursor: 'pointer' }}>
                <option value="">Select your industry...</option>
                <option>Doctor / Healthcare</option>
                <option>Lawyer / Legal</option>
                <option>Restaurant / Food</option>
                <option>Salon / Beauty</option>
                <option>Gym / Fitness</option>
                <option>Real Estate</option>
                <option>IT / Software</option>
                <option>Coach / Trainer</option>
                <option>Photographer</option>
                <option>Freelancer</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)' }}>Choose your plan</h2>
            {[
              { id: 'free', label: 'Free', price: '₹0/forever', desc: '5 designs, 50+ templates, PNG export', color: '#6BCB77' },
              { id: 'pro', label: 'Pro', price: '₹499/month', desc: 'Unlimited designs, 500+ templates, AI generator, print-ready', color: '#FFD93D' },
            ].map(p => (
              <div
                key={p.id}
                onClick={() => setPlan(p.id as 'free' | 'pro')}
                style={{
                  border: `3px solid ${plan === p.id ? '#000' : 'var(--border-color)'}`,
                  borderRadius: '8px', padding: '1rem 1.25rem', cursor: 'pointer',
                  background: plan === p.id ? p.color : 'var(--bg-primary)',
                  boxShadow: plan === p.id ? '4px 4px 0 #000' : 'none', transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: '#000' }}>{p.label}</span>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: '#000' }}>{p.price}</span>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#333' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem' }}>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
          )}
          <button onClick={nextStep} className="btn btn-primary" disabled={loading} style={{ flex: 2 }}>
            {loading ? 'Creating Account...' : step === 2 ? <><span>Create Account</span> <ArrowRight size={16} /></> : <><span>Continue</span> <ArrowRight size={16} /></>}
          </button>
        </div>

        <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.25rem' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#4D96FF', fontWeight: 700, textDecoration: 'none' }}>Sign in →</Link>
        </p>
      </motion.div>
    </div>
  );
}
