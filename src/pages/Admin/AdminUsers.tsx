import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserCheck, Shield, Crown, UserMinus, Plus, Trash2, Mail, Check, X, Edit2 } from 'lucide-react';
import toast from 'react-hot-toast';
import type { User } from '../../types';

const INITIAL_USERS: User[] = [
  { id: 'user-001', name: 'Vivek Sawji', email: 'vivek@cardbuilderstudio.com', role: 'owner', plan: 'pro', createdAt: '2024-01-15' },
  { id: 'user-002', name: 'Aisha Sharma', email: 'aisha.s@cardbuilderstudio.com', role: 'designer', plan: 'pro', createdAt: '2024-02-10' },
  { id: 'user-003', name: 'Rohan Mehta', email: 'rohan.m@cardbuilderstudio.com', role: 'manager', plan: 'pro', createdAt: '2024-03-01' },
  { id: 'user-004', name: 'Priya Patel', email: 'priya@example.com', role: 'client', plan: 'free', createdAt: '2024-05-12' },
  { id: 'user-005', name: 'Vikram Singh', email: 'vikram.s@example.com', role: 'client', plan: 'pro', createdAt: '2024-05-20' },
  { id: 'user-006', name: 'Sneha Reddy', email: 'sneha@enterprise.com', role: 'client', plan: 'business', createdAt: '2024-05-28' },
  { id: 'user-007', name: 'David Miller', email: 'david.m@designco.com', role: 'designer', plan: 'free', createdAt: '2024-06-01' },
];

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [planFilter, setPlanFilter] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Add User Form State
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<'owner' | 'admin' | 'manager' | 'designer' | 'client'>('client');
  const [newPlan, setNewPlan] = useState<'free' | 'pro' | 'business'>('free');

  // Edit User Form State
  const [editRole, setEditRole] = useState<'owner' | 'admin' | 'manager' | 'designer' | 'client'>('client');
  const [editPlan, setEditPlan] = useState<'free' | 'pro' | 'business'>('free');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesPlan = planFilter === 'all' || user.plan === planFilter;
    return matchesSearch && matchesRole && matchesPlan;
  });

  const handleOpenEdit = (user: User) => {
    setSelectedUser(user);
    setEditRole(user.role);
    setEditPlan(user.plan);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!selectedUser) return;
    setUsers(users.map(u => u.id === selectedUser.id ? { ...u, role: editRole, plan: editPlan } : u));
    toast.success(`Updated ${selectedUser.name}'s profile successfully!`, {
      style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
    });
    setIsEditModalOpen(false);
  };

  const handleDeleteUser = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete user ${name}?`)) {
      setUsers(users.filter(u => u.id !== id));
      toast.error(`Deleted user ${name}`, {
        style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
      });
    }
  };

  const handleAddUser = () => {
    if (!newName || !newEmail) {
      toast.error('Please fill in all required fields.');
      return;
    }
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: newName,
      email: newEmail,
      role: newRole,
      plan: newPlan,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setUsers([newUser, ...users]);
    toast.success(`Added user ${newName}!`, {
      style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
    });
    setIsAddModalOpen(false);
    setNewName('');
    setNewEmail('');
    setNewRole('client');
    setNewPlan('free');
  };

  const totalUsers = users.length;
  const proUsersCount = users.filter(u => u.plan === 'pro' || u.plan === 'business').length;
  const adminStaffCount = users.filter(u => u.role === 'owner' || u.role === 'manager' || u.role === 'admin').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px' }}>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#FFD93D' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <UserCheck size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Total Registered Users</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{totalUsers}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#6BCB77' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Crown size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Premium Subscriptions</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{proUsersCount}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#4D96FF' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Admin & Staff Members</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{adminStaffCount}</div>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>User Directory</h2>
          
          <button onClick={() => setIsAddModalOpen(true)} className="btn btn-primary btn-sm">
            <Plus size={16} /> Add User
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {/* Search */}
          <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search user name or email..."
              className="input"
              style={{ paddingLeft: '2.5rem', height: '42px' }}
            />
          </div>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
            className="input"
            style={{ width: '150px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Roles</option>
            <option value="owner">Owner</option>
            <option value="manager">Manager</option>
            <option value="designer">Designer</option>
            <option value="client">Client</option>
          </select>

          {/* Plan Filter */}
          <select
            value={planFilter}
            onChange={e => setPlanFilter(e.target.value)}
            className="input"
            style={{ width: '150px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Plans</option>
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="business">Business</option>
          </select>
        </div>

        {/* Users Table */}
        <div style={{ overflowX: 'auto', border: '3px solid #000', borderRadius: '6px', boxShadow: '4px 4px 0 #000' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', borderBottom: '3px solid #000' }}>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>User info</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Role</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Billing Plan</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Joined Date</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800, textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} style={{ borderBottom: '2px solid var(--border-color)', background: 'var(--bg-primary)' }}>
                    {/* User Info */}
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#FFF3B0', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 800 }}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{user.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Role */}
                    <td style={{ padding: '1rem' }}>
                      <span className={`badge ${user.role === 'owner' ? 'badge-red' : user.role === 'manager' ? 'badge-blue' : user.role === 'designer' ? 'badge-yellow' : 'badge-black'}`}>
                        {user.role}
                      </span>
                    </td>

                    {/* Plan */}
                    <td style={{ padding: '1rem' }}>
                      <span style={{ fontWeight: 700, textTransform: 'capitalize', color: user.plan === 'pro' ? '#4D96FF' : user.plan === 'business' ? '#6BCB77' : 'var(--text-muted)' }}>
                        {user.plan}
                      </span>
                    </td>

                    {/* Date */}
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                      {user.createdAt}
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button
                          onClick={() => handleOpenEdit(user)}
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                          title="Edit User"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id, user.name)}
                          className="btn btn-danger btn-sm"
                          style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                          title="Delete User"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
                    No users matching search filters found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit User Modal */}
      <AnimatePresence>
        {isEditModalOpen && selectedUser && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card"
              style={{ width: '100%', maxWidth: '450px', background: 'var(--bg-primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Edit User Privileges</h3>
                <button onClick={() => setIsEditModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={20} />
                </button>
              </div>

              <div>
                <div style={{ fontWeight: 800, fontFamily: 'Space Grotesk', fontSize: '1.125rem' }}>{selectedUser.name}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{selectedUser.email}</div>
              </div>

              {/* Edit Role */}
              <div>
                <label className="label">User Role</label>
                <select
                  value={editRole}
                  onChange={e => setEditRole(e.target.value as any)}
                  className="input"
                >
                  <option value="client">Client</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="owner">Owner</option>
                </select>
              </div>

              {/* Edit Plan */}
              <div>
                <label className="label">Billing Subscription Plan</label>
                <select
                  value={editPlan}
                  onChange={e => setEditPlan(e.target.value as any)}
                  className="input"
                >
                  <option value="free">Free Plan</option>
                  <option value="pro">Pro Plan</option>
                  <option value="business">Business Plan</option>
                </select>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add User Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card"
              style={{ width: '100%', maxWidth: '450px', background: 'var(--bg-primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Add New User</h3>
                <button onClick={() => setIsAddModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={20} />
                </button>
              </div>

              <div>
                <label className="label">Full Name</label>
                <input
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  placeholder="e.g. Vivek Sawji"
                  className="input"
                />
              </div>

              <div>
                <label className="label">Email Address</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  placeholder="e.g. vivek@cbs.com"
                  className="input"
                />
              </div>

              <div>
                <label className="label">Role</label>
                <select
                  value={newRole}
                  onChange={e => setNewRole(e.target.value as any)}
                  className="input"
                >
                  <option value="client">Client</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="owner">Owner</option>
                </select>
              </div>

              <div>
                <label className="label">Billing Plan</label>
                <select
                  value={newPlan}
                  onChange={e => setNewPlan(e.target.value as any)}
                  className="input"
                >
                  <option value="free">Free</option>
                  <option value="pro">Pro</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddUser}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Create User
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
