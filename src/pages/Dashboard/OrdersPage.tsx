import { motion } from 'framer-motion';
import { Package, Truck, Check, Clock, X, Eye } from 'lucide-react';

const ORDERS = [
  { id: 'ORD-001', design: 'My Doctor Card', qty: 100, price: 599, status: 'delivered', date: '2025-05-20', thumb: '#1A3C5E' },
  { id: 'ORD-002', design: 'Restaurant Promo', qty: 250, price: 1299, status: 'shipped', date: '2025-05-30', thumb: '#3D2B1F' },
  { id: 'ORD-003', design: 'Tech Startup Card', qty: 50, price: 399, status: 'processing', date: '2025-06-01', thumb: '#0A0A0A' },
  { id: 'ORD-004', design: 'Salon Beauty Card', qty: 500, price: 2499, status: 'pending', date: '2025-06-05', thumb: '#FCE4EC' },
];

const STATUS_CONFIG: Record<string, { color: string; icon: typeof Check; label: string }> = {
  delivered: { color: '#6BCB77', icon: Check, label: 'Delivered' },
  shipped: { color: '#4D96FF', icon: Truck, label: 'Shipped' },
  processing: { color: '#FFD93D', icon: Package, label: 'Processing' },
  pending: { color: '#FF8C42', icon: Clock, label: 'Pending' },
  cancelled: { color: '#FF6B6B', icon: X, label: 'Cancelled' },
};

export default function OrdersPage() {
  return (
    <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Orders</h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Track your print orders and delivery status</p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {[
          { label: 'Total Orders', value: '4', color: '#FFD93D' },
          { label: 'Total Spent', value: '₹4,796', color: '#4D96FF' },
          { label: 'Cards Printed', value: '900', color: '#6BCB77' },
          { label: 'In Transit', value: '1', color: '#FF8C42' },
        ].map(stat => (
          <div key={stat.label} style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', padding: '1.25rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.75rem', color: stat.color, WebkitTextStroke: '1px #000' }}>{stat.value}</div>
            <div style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Orders list */}
      <div style={{ background: 'var(--bg-primary)', border: '3px solid var(--border-color)', borderRadius: '8px', boxShadow: '4px 4px 0 var(--border-color)', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '3px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Order History</h3>
          <button className="btn btn-outline btn-sm">Filter</button>
        </div>

        {ORDERS.map((order, i) => {
          const config = STATUS_CONFIG[order.status];
          const StatusIcon = config.icon;
          return (
            <motion.div key={order.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderBottom: i < ORDERS.length - 1 ? '2px solid var(--bg-tertiary)' : 'none', flexWrap: 'wrap' }}>
              {/* Thumb */}
              <div style={{ width: '56px', height: '36px', background: order.thumb, border: '2px solid #000', borderRadius: '4px', flexShrink: 0 }} />
              {/* Info */}
              <div style={{ flex: 1, minWidth: '150px' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{order.design}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{order.id} · {order.date} · Qty: {order.qty}</div>
              </div>
              {/* Price */}
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>₹{order.price}</div>
              {/* Status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: config.color, border: '2px solid #000', borderRadius: '6px', padding: '0.375rem 0.75rem', boxShadow: '2px 2px 0 #000', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem', color: '#000', flexShrink: 0 }}>
                <StatusIcon size={13} /> {config.label}
              </div>
              {/* View */}
              <button className="btn btn-outline btn-icon btn-sm" title="View order details">
                <Eye size={14} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
