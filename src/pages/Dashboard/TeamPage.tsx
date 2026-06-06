import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Crown, Shield, Brush, User, MoreVertical, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ROLES = [
  { id: 'owner', label: 'Owner', icon: Crown, color: '#FFD93D', desc: 'Full access to everything' },
  { id: 'manager', label: 'Manager', icon: Shield, color: '#4D96FF', desc: 'Manage team and projects' },
  { id: 'designer', label: 'Designer', icon: Brush, color: '#6BCB77', desc: 'Create and edit designs' },
  { id: 'client', label: 'Client', icon: User, color: '#FF8C42', desc: 'View and approve only' },
] as const;

const MEMBERS = [
  { id: '1', name: 'Vivek Sawji', email: 'vivek@cardbuilderstudio.com', role: 'owner', status: 'active', avatar: 'V', joined: 'Jan 2025' },
  { id: '2', name: 'Priya Sharma', email: 'priya@studio.com', role: 'designer', status: 'active', avatar: 'P', joined: 'Feb 2025' },
  { id: '3', name: 'Rahul Gupta', email: 'rahul@client.com', role: 'client', status: 'active', avatar: 'R', joined: 'Mar 2025' },
  { id: '4', name: 'Sneha Patel', email: 'sneha@studio.com', role: 'manager', status: 'pending', avatar: 'S', joined: '—' },
];

const ROLE_COLORS: Record<string, string> = { owner: '#FFD93D', manager: '#4D96FF', designer: '#6BCB77', client: '#FF8C42' };

export default function TeamPage() {
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'manager' | 'designer' | 'client'>('designer');

  const handleInvite = () => {
    if (!inviteEmail) { toast.error('Please enter an email'); return; }
    toast.success(`Invitation sent to ${inviteEmail}!`);
    setInviteEmail('');
    setShowInvite(false);
  };

  return (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Team Workspace</h2>
          <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Manage team members, roles, and permissions</p>
        </div>
        <button onClick={() => setShowInvite(!showInvite)} className="btn btn-primary">
          <UserPlus size={16} /> Invite Member
        </button>
      </div>

      {/* Invite Panel */}
      {showInvite && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: '#FFD93D', border: '4px solid #000', borderRadius: '12px', boxShadow: '8px 8px 0 #000', padding: '1.5rem' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: '#000', marginBottom: '1rem' }}>📧 Invite a Team Member</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.75rem', alignItems: 'end', flexWrap: 'wrap' }}>
            <div>
              <label className="label" style={{ color: '#000' }}>Email Address</label>
              <input className="input" type="email" placeholder="colleague@company.com" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} style={{ background: '#fff', borderColor: '#000' }} />
            </div>
            <div>
              <label className="label" style={{ color: '#000' }}>Role</label>
              <select className="input" value={inviteRole} onChange={e => setInviteRole(e.target.value as any)} style={{ background: '#fff', borderColor: '#000', cursor: 'pointer' }}>
                <option value="manager">Manager</option>
                <option value="designer">Designer</option>
                <option value="client">Client</option>
              </select>
            </div>
            <button onClick={handleInvite} className="btn" style={{ background: '#000', color: '#FFD93D', border: '3px solid #000', whiteSpace: 'nowrap' }}>
              <Mail size={15} /> Send Invite
            </button>
          </div>
        </motion.div>
      )}

      {/* Roles Legend */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.875rem' }}>
        {ROLES.map(role => {
          const Icon = role.icon;
          return (
            <div key={role.id} style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '3px 3px 0 var(--border-color)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', background: role.color, border: '2px solid #000', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '2px 2px 0 #000' }}>
                <Icon size={16} color="#000" />
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{role.label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{role.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Members Table */}
      <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '3px solid var(--border-color)' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
            Team Members ({MEMBERS.length})
          </h3>
        </div>
        {MEMBERS.map((member, i) => (
          <motion.div key={member.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderBottom: i < MEMBERS.length - 1 ? '2px solid var(--bg-tertiary)' : 'none', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: ROLE_COLORS[member.role], border: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: '#000', flexShrink: 0, boxShadow: '3px 3px 0 #000' }}>
              {member.avatar}
            </div>
            {/* Info */}
            <div style={{ flex: 1, minWidth: '140px' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{member.name}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{member.email}</div>
            </div>
            {/* Role badge */}
            <div style={{ background: ROLE_COLORS[member.role], border: '2px solid #000', borderRadius: '6px', padding: '3px 10px', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', color: '#000', boxShadow: '2px 2px 0 #000', textTransform: 'capitalize', flexShrink: 0 }}>
              {member.role}
            </div>
            {/* Status */}
            <div style={{ background: member.status === 'active' ? '#6BCB77' : '#FFD93D', border: '2px solid #000', borderRadius: '6px', padding: '3px 10px', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', color: '#000', textTransform: 'capitalize', flexShrink: 0 }}>
              {member.status}
            </div>
            {/* Joined */}
            <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)', minWidth: '60px' }}>
              {member.joined}
            </div>
            {/* Remove */}
            {member.role !== 'owner' && (
              <button onClick={() => toast.error('Member removed')} style={{ background: 'none', border: '2px solid var(--border-color)', borderRadius: '6px', padding: '6px', cursor: 'pointer', color: '#FF6B6B', display: 'flex' }}>
                <Trash2 size={14} />
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
