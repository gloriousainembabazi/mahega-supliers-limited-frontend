// src/Pages/Admin/AdminDashboard.js
import React, { useState, useEffect, useCallback } from 'react';
import '../../style/AdminDashboard.css';

const API_BASE = 'http://localhost:5000/api';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // ======================
  // ADMIN PROFILE
  // ======================
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin User',
    email: 'admin@mahega.co.ug',
    role: 'Super Admin'
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileForm, setProfileForm] = useState({ ...adminProfile });

  // ======================
  // PRODUCTS
  // ======================
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'Active'
  });
  const [editingProductId, setEditingProductId] = useState(null);

  // ======================
  // NEWS
  // ======================
  const [newsList, setNewsList] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    image_url: '',
    is_published: true
  });
  const [editingNewsId, setEditingNewsId] = useState(null);

  // ======================
  // MESSAGES
  // ======================
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  // ======================
  // NEW SECTIONS
  // ======================
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customersLoading, setCustomersLoading] = useState(false);
  const [analytics, setAnalytics] = useState({
    totalRevenue: 45230,
    totalOrders: 124,
    totalCustomers: 89,
    totalProducts: 0,
    monthlyData: [
      { month: 'Jan', revenue: 12000, orders: 34 },
      { month: 'Feb', revenue: 15000, orders: 42 },
      { month: 'Mar', revenue: 18000, orders: 48 },
      { month: 'Apr', revenue: 21000, orders: 52 },
      { month: 'May', revenue: 24500, orders: 58 },
      { month: 'Jun', revenue: 28000, orders: 63 }
    ],
    topProducts: []
  });

  // ======================
  // AUTH TOKEN (wrapped in useCallback)
  // ======================
  const getAuthToken = useCallback(() => {
    return localStorage.getItem('access_token');
  }, []);

  // ======================
  // DATA FETCHING FUNCTIONS (using useCallback to avoid dependency issues)
  // ======================

  const loadProfile = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAdminProfile(data);
        setProfileForm(data);
      }
    } catch (err) {
      console.error('Failed to load profile');
    }
  }, [getAuthToken]);

  const fetchProducts = useCallback(async () => {
    setProductsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/products`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
        // Update analytics with current product count
        setAnalytics(prev => ({ ...prev, totalProducts: data.length }));
      }
    } catch (err) {
      console.error('Failed to fetch products');
    } finally {
      setProductsLoading(false);
    }
  }, [getAuthToken]);

  const fetchOrders = useCallback(async () => {
    setOrdersLoading(true);
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      } else {
        // Mock data for demonstration
        setOrders([
          { id: 1, customer_name: 'John Doe', product_name: 'Office Chair', quantity: 2, total_amount: 400, status: 'completed', created_at: '2024-01-15' },
          { id: 2, customer_name: 'Jane Smith', product_name: 'Laptop', quantity: 1, total_amount: 1200, status: 'pending', created_at: '2024-01-14' },
          { id: 3, customer_name: 'Mike Johnson', product_name: 'Desk', quantity: 1, total_amount: 350, status: 'processing', created_at: '2024-01-13' },
        ]);
      }
    } catch (err) {
      console.error('Failed to fetch orders');
    } finally {
      setOrdersLoading(false);
    }
  }, [getAuthToken]);

  const fetchServices = useCallback(async () => {
    setServicesLoading(true);
    try {
      const res = await fetch(`${API_BASE}/services`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      } else {
        // Mock data for demonstration
        setServices([
          { id: 1, name: 'Procurement', description: 'Comprehensive procurement services', price: 'Custom', duration: 'Varies', status: 'active' },
          { id: 2, name: 'Logistics', description: 'Efficient logistics solutions', price: '$500+', duration: '1-2 weeks', status: 'active' },
        ]);
      }
    } catch (err) {
      console.error('Failed to fetch services');
    } finally {
      setServicesLoading(false);
    }
  }, [getAuthToken]);

  const fetchCustomers = useCallback(async () => {
    setCustomersLoading(true);
    try {
      const res = await fetch(`${API_BASE}/customers`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setCustomers(data);
      } else {
        // Mock data for demonstration
        setCustomers([
          { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890', order_count: 5, total_spent: 2500, created_at: '2023-12-01' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1234567891', order_count: 3, total_spent: 1800, created_at: '2024-01-05' },
        ]);
      }
    } catch (err) {
      console.error('Failed to fetch customers');
    } finally {
      setCustomersLoading(false);
    }
  }, [getAuthToken]);

  const fetchNews = useCallback(async () => {
    setNewsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/news`, {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      if (res.ok) {
        const data = await res.json();
        setNewsList(data);
      }
    } catch (err) {
      console.error('Failed to fetch news');
    } finally {
      setNewsLoading(false);
    }
  }, [getAuthToken]);

  // ======================
  // LOAD INITIAL DATA
  // ======================
  useEffect(() => {
    const loadAllData = async () => {
      await loadProfile();
      await fetchProducts();
      await fetchOrders();
      await fetchServices();
      await fetchCustomers();
    };
    loadAllData();
  }, [loadProfile, fetchProducts, fetchOrders, fetchServices, fetchCustomers]);

  // ======================
  // MESSAGES
  // ======================
  useEffect(() => {
    const fetchUnreadMessages = async () => {
      try {
        const res = await fetch(`${API_BASE}/contact-messages?read=false`, {
          headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });
        if (res.ok) {
          const unread = await res.json();
          setUnreadMessages(unread.length);
        }
      } catch (err) {
        console.error('Failed to fetch unread messages', err);
      }
    };

    fetchUnreadMessages();
    const interval = setInterval(fetchUnreadMessages, 5000);
    return () => clearInterval(interval);
  }, [getAuthToken]);

  useEffect(() => {
    if (activeSection === 'messages') {
      const fetchMessages = async () => {
        setMessagesLoading(true);
        try {
          const res = await fetch(`${API_BASE}/contact-messages`, {
            headers: { 'Authorization': `Bearer ${getAuthToken()}` }
          });
          if (res.ok) {
            const msgs = await res.json();
            setMessages(msgs);
          } else {
            setMessages([]);
          }
        } catch (err) {
          setMessages([]);
        } finally {
          setMessagesLoading(false);
        }
      };
      fetchMessages();
    }
  }, [activeSection, getAuthToken]);

  const markMessagesAsRead = async () => {
    try {
      for (const msg of messages.filter(m => !m.read)) {
        await fetch(`${API_BASE}/contact-messages/${msg.id}/mark-read`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${getAuthToken()}` }
        });
      }
      setUnreadMessages(0);
      setMessages(prev => prev.map(m => ({ ...m, read: true })));
    } catch (err) {
      console.error('Failed to mark messages as read', err);
    }
  };

  // ======================
  // PROFILE
  // ======================
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/admin/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify(profileForm)
      });
      if (res.ok) {
        const updated = await res.json();
        setAdminProfile(updated);
        alert('Profile updated successfully!');
        setShowProfileModal(false);
      } else {
        throw new Error('Update failed');
      }
    } catch (err) {
      alert('Failed to update profile');
    }
  };

  // ======================
  // PRODUCTS
  // ======================
  const openAddProduct = () => {
    setEditingProductId(null);
    setProductForm({ name: '', category: '', price: '', stock: '', status: 'Active' });
    setShowProductModal(true);
  };

  const openEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({ ...product });
    setShowProductModal(true);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const payload = {
      ...productForm,
      price: Number(productForm.price),
      stock: Number(productForm.stock)
    };

    try {
      let res;
      if (editingProductId) {
        res = await fetch(`${API_BASE}/products/${editingProductId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
          },
          body: JSON.stringify(payload)
        });
      } else {
        res = await fetch(`${API_BASE}/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
          },
          body: JSON.stringify(payload)
        });
      }

      if (res.ok) {
        await fetchProducts();
        setShowProductModal(false);
        alert(editingProductId ? 'Product updated!' : 'Product added!');
      } else {
        throw new Error('Save failed');
      }
    } catch (err) {
      alert('Failed to save product');
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await fetch(`${API_BASE}/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      await fetchProducts();
      alert('Product deleted!');
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  // ======================
  // NEWS
  // ======================
  const openAddNews = () => {
    setEditingNewsId(null);
    setNewsForm({ title: '', content: '', image_url: '', is_published: true });
    setShowNewsModal(true);
  };

  const openEditNews = (news) => {
    setEditingNewsId(news.id);
    setNewsForm({
      title: news.title,
      content: news.content,
      image_url: news.image_url || '',
      is_published: news.is_published
    });
    setShowNewsModal(true);
  };

  const saveNews = async (e) => {
    e.preventDefault();
    const payload = { ...newsForm };

    try {
      let res;
      if (editingNewsId) {
        res = await fetch(`${API_BASE}/news/${editingNewsId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
          },
          body: JSON.stringify(payload)
        });
      } else {
        res = await fetch(`${API_BASE}/news`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
          },
          body: JSON.stringify(payload)
        });
      }

      if (res.ok) {
        await fetchNews();
        setShowNewsModal(false);
        alert(editingNewsId ? 'News updated!' : 'News published!');
      } else {
        throw new Error('Save failed');
      }
    } catch (err) {
      alert('Failed to save news');
    }
  };

  const deleteNews = async (id) => {
    if (!window.confirm('Delete this news article?')) return;
    try {
      await fetch(`${API_BASE}/news/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });
      await fetchNews();
      alert('News deleted!');
    } catch (err) {
      alert('Failed to delete news');
    }
  };

  // ======================
  // NAVIGATION
  // ======================
  const extendedNavItems = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'products', icon: '📦', label: 'Products' },
    { id: 'orders', icon: '🛒', label: 'Orders' },
    { id: 'services', icon: '🔧', label: 'Services' },
    { id: 'customers', icon: '👥', label: 'Customers' },
    { id: 'messages', icon: '📩', label: 'Messages' },
    { id: 'news', icon: '📰', label: 'News' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'logout', icon: '🚪', label: 'Logout' }
  ];

  const handleNavClick = (itemId) => {
    if (itemId === 'logout') {
      if (window.confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
      return;
    }
    
    setActiveSection(itemId);
    
    // Load section-specific data
    switch (itemId) {
      case 'news':
        fetchNews();
        break;
      case 'orders':
        fetchOrders();
        break;
      case 'services':
        fetchServices();
        break;
      case 'customers':
        fetchCustomers();
        break;
      default:
        break;
    }
  };

  // ======================
  // RENDER
  // ======================
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar" style={{ width: sidebarOpen ? '280px' : '70px' }}>
        <div className="sidebar-header">
          <h2 className="logo" style={{ display: sidebarOpen ? 'block' : 'none' }}>🏢 Mahega Admin</h2>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="nav">
          {extendedNavItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''} ${item.id === 'logout' ? 'logout-item' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
              {item.id === 'messages' && unreadMessages > 0 && sidebarOpen && (
                <span className="nav-badge">{unreadMessages}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1 className="page-title">{extendedNavItems.find(item => item.id === activeSection)?.label || 'Dashboard'}</h1>
          <div className="header-right">
            <button className="notification-btn" onClick={() => { setActiveSection('messages'); markMessagesAsRead(); }}>
              🔔 {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
            </button>
            <div className="user-profile">
              <span>{adminProfile.name}</span>
              <div className="avatar">A</div>
            </div>
          </div>
        </header>

        <div className="content">
          {/* Overview */}
          {activeSection === 'overview' && (
            <div className="overview-section">
              <h2>Welcome, {adminProfile.name}!</h2>
              <p>Manage your business operations from this dashboard.</p>
              
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <div className="stat-info">
                    <h3>${analytics.totalRevenue.toLocaleString()}</h3>
                    <p>Total Revenue</p>
                    <span className="change positive">+12%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🛒</div>
                  <div className="stat-info">
                    <h3>{analytics.totalOrders}</h3>
                    <p>Total Orders</p>
                    <span className="change positive">+8%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-info">
                    <h3>{analytics.totalCustomers}</h3>
                    <p>Total Customers</p>
                    <span className="change positive">+5%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📦</div>
                  <div className="stat-info">
                    <h3>{analytics.totalProducts}</h3>
                    <p>Total Products</p>
                    <span className="change positive">+3%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="action-btn" onClick={() => setActiveSection('products')}>Manage Products</button>
                  <button className="action-btn" onClick={() => setActiveSection('orders')}>View Orders</button>
                  <button className="action-btn" onClick={() => setActiveSection('customers')}>Customer List</button>
                  <button className="action-btn" onClick={() => setActiveSection('analytics')}>View Reports</button>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="recent-activities">
                <h3>Recent Activities</h3>
                <div className="activities-list">
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="activity-item">
                      <span className="activity-text">New order from {order.customer_name}</span>
                      <span className="activity-time">{new Date(order.created_at).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeSection === 'analytics' && (
            <div className="analytics-section">
              <h2>Business Analytics</h2>
              
              {/* Stats Overview */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <div className="stat-info">
                    <h3>${analytics.totalRevenue.toLocaleString()}</h3>
                    <p>Total Revenue</p>
                    <span className="change positive">+12%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🛒</div>
                  <div className="stat-info">
                    <h3>{analytics.totalOrders}</h3>
                    <p>Total Orders</p>
                    <span className="change positive">+8%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-info">
                    <h3>{analytics.totalCustomers}</h3>
                    <p>Total Customers</p>
                    <span className="change positive">+5%</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📦</div>
                  <div className="stat-info">
                    <h3>{analytics.totalProducts}</h3>
                    <p>Total Products</p>
                    <span className="change positive">+3%</span>
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="analytics-card">
                <h3>Revenue Overview</h3>
                <div className="chart-container">
                  {analytics.monthlyData.map((item, index) => (
                    <div key={index} className="chart-bar">
                      <div 
                        className="bar-fill" 
                        style={{ height: `${(item.revenue / 30000) * 100}%` }}
                      ></div>
                      <span className="bar-label">{item.month}</span>
                      <span className="bar-value">${(item.revenue / 1000).toFixed(0)}k</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <h4>Conversion Rate</h4>
                  <div className="metric-value">3.2%</div>
                </div>
                <div className="metric-card">
                  <h4>Customer Satisfaction</h4>
                  <div className="metric-value">94%</div>
                </div>
                <div className="metric-card">
                  <h4>Avg. Order Value</h4>
                  <div className="metric-value">$365</div>
                </div>
                <div className="metric-card">
                  <h4>Repeat Customer Rate</h4>
                  <div className="metric-value">42%</div>
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          {activeSection === 'products' && (
            <div>
              <div className="section-header">
                <h2>Manage Products</h2>
                <button className="add-btn" onClick={openAddProduct}>➕ Add Product</button>
              </div>
              {productsLoading ? <p>Loading products...</p> : (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(p => (
                        <tr key={p.id}>
                          <td>{p.name}</td>
                          <td>{p.category}</td>
                          <td>{p.price}</td>
                          <td>{p.stock}</td>
                          <td>{p.status}</td>
                          <td>
                            <button className="edit-btn" onClick={() => openEditProduct(p)}>✏️</button>
                            <button className="delete-btn" onClick={() => deleteProduct(p.id)}>🗑️</button>
                          </td>
                        </tr>
                      ))}
                      {products.length === 0 && !productsLoading && <tr><td colSpan="6">No products found.</td></tr>}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Orders */}
          {activeSection === 'orders' && (
            <div className="orders-section">
              <div className="section-header">
                <h2>Order Management</h2>
                <div className="order-filters">
                  <button className="filter-btn active">All</button>
                  <button className="filter-btn">Pending</button>
                  <button className="filter-btn">Completed</button>
                  <button className="filter-btn">Cancelled</button>
                </div>
              </div>

              {ordersLoading ? <p>Loading orders...</p> : (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id}>
                          <td>#{order.id}</td>
                          <td>{order.customer_name}</td>
                          <td>{order.product_name}</td>
                          <td>{order.quantity}</td>
                          <td>${order.total_amount}</td>
                          <td>
                            <span className={`status-badge ${order.status}`}>
                              {order.status}
                            </span>
                          </td>
                          <td>{new Date(order.created_at).toLocaleDateString()}</td>
                          <td>
                            <button className="edit-btn">View</button>
                            <button className="delete-btn">Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Services */}
          {activeSection === 'services' && (
            <div className="services-section">
              <div className="section-header">
                <h2>Service Management</h2>
                <button className="add-btn">➕ Add Service</button>
              </div>

              {servicesLoading ? <p>Loading services...</p> : (
                <div className="services-grid">
                  {services.map(service => (
                    <div key={service.id} className="service-card">
                      <h3>{service.name}</h3>
                      <p className="service-description">{service.description}</p>
                      <div className="service-details">
                        <span className="service-price">{service.price}</span>
                        <span className="service-duration">{service.duration}</span>
                        <span className={`service-status ${service.status}`}>{service.status}</span>
                      </div>
                      <div className="service-actions">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Customers */}
          {activeSection === 'customers' && (
            <div className="customers-section">
              <div className="section-header">
                <h2>Customer Management</h2>
                <input 
                  type="text" 
                  placeholder="Search customers..." 
                  className="search-input"
                />
              </div>

              {customersLoading ? <p>Loading customers...</p> : (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map(customer => (
                        <tr key={customer.id}>
                          <td>{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>{customer.phone}</td>
                          <td>{customer.order_count}</td>
                          <td>${customer.total_spent}</td>
                          <td>{new Date(customer.created_at).toLocaleDateString()}</td>
                          <td>
                            <button className="edit-btn">View</button>
                            <button className="delete-btn">Message</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Messages */}
          {activeSection === 'messages' && (
            <div>
              <h2>Customer Messages</h2>
              <div className="messages-list">
                {messagesLoading ? <p>Loading messages...</p> : messages.length ? (
                  messages.map(msg => (
                    <div key={msg.id} className={`message-card ${msg.read ? '' : 'unread'}`}>
                      <strong>{msg.name}</strong> &lt;{msg.email}&gt;<br/>
                      <small>{new Date(msg.created_at).toLocaleString()}</small>
                      <p>{msg.message}</p>
                    </div>
                  ))
                ) : <p>No messages yet.</p>}
              </div>
            </div>
          )}

          {/* Profile */}
          {activeSection === 'profile' && (
            <div>
              <h2>Admin Profile</h2>
              <div className="profile-info">
                <p><strong>Name:</strong> {adminProfile.name}</p>
                <p><strong>Email:</strong> {adminProfile.email}</p>
                <p><strong>Role:</strong> {adminProfile.role}</p>
                <button className="btn-primary" onClick={() => setShowProfileModal(true)}>✏️ Edit Profile</button>
              </div>
            </div>
          )}

          {/* News */}
          {activeSection === 'news' && (
            <div>
              <div className="section-header">
                <h2>Manage News</h2>
                <button className="add-btn" onClick={openAddNews}>➕ Add News</button>
              </div>
              {newsLoading ? <p>Loading news...</p> : (
                <div className="news-grid">
                  {newsList.map(n => (
                    <div key={n.id} className="news-card">
                      {n.image_url && <img src={n.image_url} alt={n.title} className="news-image" />}
                      <h3>{n.title}</h3>
                      <p>{n.content.substring(0, 100)}...</p>
                      <small>Published: {n.is_published ? '✅' : '❌'} • {new Date(n.created_at).toLocaleDateString()}</small>
                      <div className="news-actions">
                        <button className="edit-btn" onClick={() => openEditNews(n)}>✏️ Edit</button>
                        <button className="delete-btn" onClick={() => deleteNews(n.id)}>🗑️ Delete</button>
                      </div>
                    </div>
                  ))}
                  {newsList.length === 0 && !newsLoading && <p>No news articles yet.</p>}
                </div>
              )}
            </div>
          )}

          {/* Settings */}
          {activeSection === 'settings' && (
            <div className="settings-section">
              <h2>System Settings</h2>
              
              <div className="settings-grid">
                <div className="setting-group">
                  <h3>General Settings</h3>
                  <div className="setting-item">
                    <label>Company Name</label>
                    <input type="text" defaultValue="Mahega Supplies" />
                  </div>
                  <div className="setting-item">
                    <label>Contact Email</label>
                    <input type="email" defaultValue="info@mahega.co.ug" />
                  </div>
                  <div className="setting-item">
                    <label>Phone Number</label>
                    <input type="tel" defaultValue="+256 XXX XXX XXX" />
                  </div>
                </div>

                <div className="setting-group">
                  <h3>Notification Settings</h3>
                  <div className="setting-item checkbox">
                    <label>
                      <input type="checkbox" defaultChecked />
                      Email Notifications
                    </label>
                  </div>
                  <div className="setting-item checkbox">
                    <label>
                      <input type="checkbox" defaultChecked />
                      Order Alerts
                    </label>
                  </div>
                  <div className="setting-item checkbox">
                    <label>
                      <input type="checkbox" defaultChecked />
                      New Message Alerts
                    </label>
                  </div>
                </div>

                <div className="setting-group">
                  <h3>Appearance</h3>
                  <div className="setting-item">
                    <label>Theme</label>
                    <select defaultValue="light">
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  <div className="setting-item">
                    <label>Language</label>
                    <select defaultValue="en">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="settings-actions">
                <button className="btn-save">Save Settings</button>
                <button className="btn-reset">Reset to Defaults</button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit Profile</h3>
              <button className="close-btn" onClick={() => setShowProfileModal(false)}>✖</button>
            </div>
            <form onSubmit={saveProfile} className="modal-form">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={profileForm.name} onChange={handleProfileChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={profileForm.email} onChange={handleProfileChange} required />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setShowProfileModal(false)}>Cancel</button>
                <button type="submit" className="btn-save">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingProductId ? 'Edit Product' : 'Add Product'}</h3>
              <button className="close-btn" onClick={() => setShowProductModal(false)}>✖</button>
            </div>
            <form onSubmit={saveProduct} className="modal-form">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={productForm.name} onChange={e => setProductForm({...productForm, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input name="category" value={productForm.category} onChange={e => setProductForm({...productForm, category: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" name="price" value={productForm.price} onChange={e => setProductForm({...productForm, price: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input type="number" name="stock" value={productForm.stock} onChange={e => setProductForm({...productForm, stock: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={productForm.status} onChange={e => setProductForm({...productForm, status: e.target.value})}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setShowProductModal(false)}>Cancel</button>
                <button type="submit" className="btn-save">{editingProductId ? 'Update' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* News Modal */}
      {showNewsModal && (
        <div className="modal-overlay" onClick={() => setShowNewsModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingNewsId ? 'Edit News' : 'Add News'}</h3>
              <button className="close-btn" onClick={() => setShowNewsModal(false)}>✖</button>
            </div>
            <form onSubmit={saveNews} className="modal-form">
              <div className="form-group">
                <label>Title</label>
                <input name="title" value={newsForm.title} onChange={e => setNewsForm({...newsForm, title: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea name="content" value={newsForm.content} onChange={e => setNewsForm({...newsForm, content: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input name="image_url" value={newsForm.image_url} onChange={e => setNewsForm({...newsForm, image_url: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Published</label>
                <input type="checkbox" checked={newsForm.is_published} onChange={e => setNewsForm({...newsForm, is_published: e.target.checked})} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={() => setShowNewsModal(false)}>Cancel</button>
                <button type="submit" className="btn-save">{editingNewsId ? 'Update' : 'Publish'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;