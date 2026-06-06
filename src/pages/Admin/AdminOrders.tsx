import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, DollarSign, Clock, Truck, Eye, X, Edit, Trash2, CheckCircle2, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Order } from '../../types';

const INITIAL_ORDERS: (Order & { userName: string; cardName: string; cardType: string })[] = [
  {
    id: 'ORD-9872',
    userId: 'user-001',
    designId: 'design-101',
    userName: 'Vivek Sawji',
    cardName: 'Minimal Tech Owner Card',
    cardType: '100 Premium NFC + Print',
    status: 'delivered',
    quantity: 100,
    price: 3499,
    currency: 'INR',
    createdAt: '2026-06-01',
    shippingAddress: {
      name: 'Vivek Sawji',
      street: 'Flat 402, Neo Heights, Baner Road',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '411045',
      country: 'India',
      phone: '+91 98765 43210'
    }
  },
  {
    id: 'ORD-9873',
    userId: 'user-002',
    designId: 'design-102',
    userName: 'Aisha Sharma',
    cardName: 'Artistic Matte Designer Card',
    cardType: '250 Premium Soft-Touch Matte',
    status: 'shipped',
    quantity: 250,
    price: 1999,
    currency: 'INR',
    createdAt: '2026-06-03',
    shippingAddress: {
      name: 'Aisha Sharma',
      street: '12-B, Green Meadows, Juhu',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400049',
      country: 'India',
      phone: '+91 99887 76655'
    }
  },
  {
    id: 'ORD-9874',
    userId: 'user-003',
    designId: 'design-103',
    userName: 'Rohan Mehta',
    cardName: 'Corporate Law Partner Card',
    cardType: '500 Executive Linen Textured',
    status: 'processing',
    quantity: 500,
    price: 3999,
    currency: 'INR',
    createdAt: '2026-06-04',
    shippingAddress: {
      name: 'Rohan Mehta',
      street: 'Sec-4, Block H-3, Rohini',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110085',
      country: 'India',
      phone: '+91 91234 56789'
    }
  },
  {
    id: 'ORD-9875',
    userId: 'user-004',
    userName: 'Priya Patel',
    designId: 'design-104',
    cardName: 'Organic Kraft Bakery Card',
    cardType: '100 Eco Kraft Matte',
    status: 'pending',
    quantity: 100,
    price: 999,
    currency: 'INR',
    createdAt: '2026-06-05',
    shippingAddress: {
      name: 'Priya Patel',
      street: '45, Sunrise Villa, Satellite Road',
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: '380015',
      country: 'India',
      phone: '+91 90000 11111'
    }
  },
  {
    id: 'ORD-9876',
    userId: 'user-005',
    designId: 'design-105',
    userName: 'Vikram Singh',
    cardName: 'Veneer Wood Gym Card',
    cardType: '50 Luxury Wood Finish',
    status: 'cancelled',
    quantity: 50,
    price: 4499,
    currency: 'INR',
    createdAt: '2026-06-02',
    shippingAddress: {
      name: 'Vikram Singh',
      street: '7B, Civil Lines',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302006',
      country: 'India',
      phone: '+91 99999 88888'
    }
  }
];

export default function AdminOrders() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<typeof INITIAL_ORDERS[0] | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [tempStatus, setTempStatus] = useState<Order['status']>('pending');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.cardName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenDetails = (order: typeof INITIAL_ORDERS[0]) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleOpenStatus = (order: typeof INITIAL_ORDERS[0]) => {
    setSelectedOrder(order);
    setTempStatus(order.status);
    setIsStatusModalOpen(true);
  };

  const handleSaveStatus = () => {
    if (!selectedOrder) return;
    setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status: tempStatus } : o));
    toast.success(`Order ${selectedOrder.id} status updated to ${tempStatus}!`, {
      style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
    });
    setIsStatusModalOpen(false);
  };

  const handleDeleteOrder = (id: string) => {
    if (confirm(`Are you sure you want to permanently delete record of order ${id}?`)) {
      setOrders(orders.filter(o => o.id !== id));
      toast.error(`Deleted order record ${id}`, {
        style: { border: '3px solid #000', boxShadow: '4px 4px 0 #000' }
      });
    }
  };

  // Stats calculation
  const totalRevenue = orders
    .filter(o => o.status !== 'cancelled')
    .reduce((acc, o) => acc + o.price, 0);

  const pendingFulfillment = orders.filter(o => o.status === 'pending' || o.status === 'processing').length;
  const shippedCount = orders.filter(o => o.status === 'shipped').length;

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return '#FFD93D'; // Yellow
      case 'processing': return '#4D96FF'; // Blue
      case 'shipped': return '#FF8C42'; // Orange
      case 'delivered': return '#6BCB77'; // Green
      case 'cancelled': return '#FF6B6B'; // Red
      default: return '#E5E5E5';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px' }}>
      
      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#FFD93D' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShoppingBag size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Total Orders</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{orders.length}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#6BCB77' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DollarSign size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Net Revenue</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>
              ₹{totalRevenue.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#4D96FF' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Pending Print & NFC</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{pendingFulfillment}</div>
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', background: '#FF8C42' }}>
          <div style={{ width: '48px', height: '48px', background: '#fff', border: '3px solid #000', borderRadius: '8px', boxShadow: '3px 3px 0 #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Truck size={22} color="#000" />
          </div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.8125rem', color: '#000', fontWeight: 800, textTransform: 'uppercase' }}>Transit Shipped</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '2rem', color: '#000' }}>{shippedCount}</div>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="card" style={{ padding: '1.5rem', background: 'var(--bg-primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Print Orders Fulfillment Console</h2>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {/* Search */}
          <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by Order ID, User name, or Card design..."
              className="input"
              style={{ paddingLeft: '2.5rem', height: '42px' }}
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="input"
            style={{ width: '180px', height: '42px', cursor: 'pointer' }}
          >
            <option value="all">All Order Statuses</option>
            <option value="pending">Pending Print</option>
            <option value="processing">Processing (In Press)</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Order Table */}
        <div style={{ overflowX: 'auto', border: '3px solid #000', borderRadius: '6px', boxShadow: '4px 4px 0 #000' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'Inter', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', borderBottom: '3px solid #000' }}>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Order ID</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Client</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Design Details</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Amount</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800 }}>Status</th>
                <th style={{ padding: '1rem', fontFamily: 'Space Grotesk', fontWeight: 800, textAlign: 'center' }}>Fulfillment</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} style={{ borderBottom: '2px solid var(--border-color)', background: 'var(--bg-primary)' }}>
                    {/* Order ID */}
                    <td style={{ padding: '1rem', fontWeight: 800, fontFamily: 'Space Grotesk', color: 'var(--text-primary)' }}>
                      {order.id}
                    </td>

                    {/* Client */}
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                      <div>{order.userName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{order.createdAt}</div>
                    </td>

                    {/* Design details */}
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{order.cardName}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{order.cardType}</div>
                    </td>

                    {/* Amount */}
                    <td style={{ padding: '1rem', fontWeight: 700 }}>
                      ₹{order.price.toLocaleString()}
                    </td>

                    {/* Status badge */}
                    <td style={{ padding: '1rem' }}>
                      <span className="badge" style={{
                        background: getStatusColor(order.status),
                        color: ['pending', 'delivered'].includes(order.status) ? '#000' : '#fff',
                        fontSize: '0.7rem'
                      }}>
                        {order.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button
                          onClick={() => handleOpenDetails(order)}
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                          title="View Address & Details"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => handleOpenStatus(order)}
                          className="btn btn-outline btn-sm"
                          style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000', background: '#FFD93D' }}
                          title="Update Status"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(order.id)}
                          className="btn btn-danger btn-sm"
                          style={{ padding: '0.375rem', aspectRatio: '1', boxShadow: '2px 2px 0 #000' }}
                          title="Delete Order Log"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: 600 }}>
                    No orders matching status filters found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {isDetailsModalOpen && selectedOrder && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card"
              style={{ width: '100%', maxWidth: '520px', background: 'var(--bg-primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Shipping & Invoice</h3>
                <button onClick={() => setIsDetailsModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={20} />
                </button>
              </div>

              {/* Order Info */}
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '3px solid #000', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800 }}>Order ID</span>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, color: '#4D96FF' }}>{selectedOrder.id}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <span>Created Date</span>
                  <span>{selectedOrder.createdAt}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  <span>Card Design</span>
                  <span style={{ fontWeight: 700 }}>{selectedOrder.cardName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  <span>Packaging & Quantity</span>
                  <span>{selectedOrder.cardType}</span>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '0.9375rem', marginBottom: '0.5rem' }}>Shipping Address</h4>
                <div style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0.75rem', border: '2px solid var(--border-color)', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{selectedOrder.shippingAddress.name}</div>
                  <div>{selectedOrder.shippingAddress.street}</div>
                  <div>{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.pincode}</div>
                  <div>{selectedOrder.shippingAddress.country}</div>
                  <div style={{ marginTop: '0.5rem', fontWeight: 600 }}>Phone: {selectedOrder.shippingAddress.phone}</div>
                </div>
              </div>

              {/* Receipt */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px dashed var(--border-color)', paddingTop: '1rem' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800 }}>Total Charged</span>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '1.25rem' }}>
                  ₹{selectedOrder.price.toLocaleString()}
                </span>
              </div>

              {/* Status workflow preview */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', padding: '0.75rem', border: '2.5px solid #000', borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#6BCB77" />
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8125rem' }}>Current Fulfillment:</span>
                </div>
                <span className="badge" style={{ background: getStatusColor(selectedOrder.status), fontSize: '0.65rem' }}>
                  {selectedOrder.status}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Update Status Modal */}
      <AnimatePresence>
        {isStatusModalOpen && selectedOrder && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card"
              style={{ width: '100%', maxWidth: '400px', background: 'var(--bg-primary)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.25rem' }}>Fulfillment Action</h3>
                <button onClick={() => setIsStatusModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <X size={20} />
                </button>
              </div>

              <div>
                <div style={{ fontWeight: 800, fontFamily: 'Space Grotesk' }}>Update Order {selectedOrder.id}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Client: {selectedOrder.userName}</div>
              </div>

              <div>
                <label className="label">Fulfillment Status</label>
                <select
                  value={tempStatus}
                  onChange={e => setTempStatus(e.target.value as any)}
                  className="input"
                >
                  <option value="pending">Pending Print</option>
                  <option value="processing">Processing (In Press)</option>
                  <option value="shipped">Shipped (In Transit)</option>
                  <option value="delivered">Delivered (Fulfillment Complete)</option>
                  <option value="cancelled">Cancelled (Void/Refunded)</option>
                </select>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  onClick={() => setIsStatusModalOpen(false)}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveStatus}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Apply Status
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
