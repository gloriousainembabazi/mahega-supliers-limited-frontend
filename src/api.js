// API Service for Mahega Suppliers Limited
// Matches Flask backend blueprints

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

// Helper function for API calls
const apiRequest = async (endpoint, method = 'GET', data = null, token = null) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    
    if (token) {
        headers['Authorization'] = Bearer ;
    }
    
    const config = {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    };
    
    try {
        const response = await fetch(${API_BASE_URL}, config);
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || result.message || 'API request failed');
        }
        
        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// ============================================
// AUTHENTICATION API (/api/auth)
// ============================================
export const authAPI = {
    register: (userData) => apiRequest('/auth/register', 'POST', userData),
    login: (credentials) => apiRequest('/auth/login', 'POST', credentials),
    logout: (token) => apiRequest('/auth/logout', 'POST', null, token),
    getProfile: (token) => apiRequest('/auth/profile', 'GET', null, token),
    refreshToken: (token) => apiRequest('/auth/refresh', 'POST', null, token),
};

// ============================================
// USER API (/api/user)
// ============================================
export const userAPI = {
    getAll: (token) => apiRequest('/user', 'GET', null, token),
    getOne: (id, token) => apiRequest(/user/, 'GET', null, token),
    update: (id, data, token) => apiRequest(/user/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/user/, 'DELETE', null, token),
};

// ============================================
// CATEGORIES API (/api/categories)
// ============================================
export const categoryAPI = {
    getAll: () => apiRequest('/categories'),
    getOne: (id) => apiRequest(/categories/),
    create: (data, token) => apiRequest('/categories', 'POST', data, token),
    update: (id, data, token) => apiRequest(/categories/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/categories/, 'DELETE', null, token),
    getProducts: (id) => apiRequest(/categories//products),
};

// ============================================
// PRODUCTS API (/api/products)
// ============================================
export const productAPI = {
    getAll: (params = '') => apiRequest(/products),
    getOne: (id) => apiRequest(/products/),
    create: (data, token) => apiRequest('/products', 'POST', data, token),
    update: (id, data, token) => apiRequest(/products/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/products/, 'DELETE', null, token),
    getByCategory: (categoryId) => apiRequest(/products?category_id=),
    search: (query) => apiRequest(/products?search=),
};

// ============================================
// ORDERS API (/api/orders)
// ============================================
export const orderAPI = {
    getAll: (token) => apiRequest('/orders', 'GET', null, token),
    getOne: (id, token) => apiRequest(/orders/, 'GET', null, token),
    create: (data, token) => apiRequest('/orders', 'POST', data, token),
    update: (id, data, token) => apiRequest(/orders/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/orders/, 'DELETE', null, token),
    updateStatus: (id, status, token) => apiRequest(/orders//status, 'PATCH', { status }, token),
    getMyOrders: (token) => apiRequest('/orders/my-orders', 'GET', null, token),
};

// ============================================
// ORDER ITEMS API (/api/order-items)
// ============================================
export const orderItemAPI = {
    getAll: (token) => apiRequest('/order-items', 'GET', null, token),
    getOne: (id, token) => apiRequest(/order-items/, 'GET', null, token),
    create: (data, token) => apiRequest('/order-items', 'POST', data, token),
    update: (id, data, token) => apiRequest(/order-items/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/order-items/, 'DELETE', null, token),
};

// ============================================
// CONTACT MESSAGES API (/api/contact-messages)
// ============================================
export const contactAPI = {
    submit: (data) => apiRequest('/contact-messages', 'POST', data),
    getAll: (token) => apiRequest('/contact-messages', 'GET', null, token),
    getOne: (id, token) => apiRequest(/contact-messages/, 'GET', null, token),
    delete: (id, token) => apiRequest(/contact-messages/, 'DELETE', null, token),
    markAsRead: (id, token) => apiRequest(/contact-messages//read, 'PATCH', null, token),
};

// ============================================
// CUSTOMERS API (/api/customers)
// ============================================
export const customerAPI = {
    getAll: (token) => apiRequest('/customers', 'GET', null, token),
    getOne: (id, token) => apiRequest(/customers/, 'GET', null, token),
    create: (data) => apiRequest('/customers', 'POST', data),
    update: (id, data, token) => apiRequest(/customers/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/customers/, 'DELETE', null, token),
};

// ============================================
// SERVICES API (/api/services)
// ============================================
export const serviceAPI = {
    getAll: () => apiRequest('/services'),
    getOne: (id) => apiRequest(/services/),
    create: (data, token) => apiRequest('/services', 'POST', data, token),
    update: (id, data, token) => apiRequest(/services/, 'PUT', data, token),
    delete: (id, token) => apiRequest(/services/, 'DELETE', null, token),
};

// ============================================
// WEBSOCKET / SOCKET.IO
// ============================================
export const socketConfig = {
    url: SOCKET_URL,
    options: {
        transports: ['websocket', 'polling'],
        withCredentials: true,
        autoConnect: true,
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
    },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Auth helpers
export const getToken = () => localStorage.getItem('token');
export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};
export const setAuthData = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
};
export const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};
export const isAuthenticated = () => !!localStorage.getItem('token');
export const isAdmin = () => {
    const user = getUser();
    return user && user.role === 'admin';
};

// ============================================
// DEFAULT EXPORT
// ============================================
export default {
    auth: authAPI,
    user: userAPI,
    categories: categoryAPI,
    products: productAPI,
    orders: orderAPI,
    orderItems: orderItemAPI,
    contact: contactAPI,
    customers: customerAPI,
    services: serviceAPI,
    socket: socketConfig,
    getToken,
    getUser,
    setAuthData,
    clearAuth,
    isAuthenticated,
    isAdmin,
};
