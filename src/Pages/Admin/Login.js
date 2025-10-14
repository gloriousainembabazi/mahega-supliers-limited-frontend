// src/Pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/login.css';

const API_BASE = 'http://127.0.0.1:5000/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Debug: Log what we're sending
    console.log('🔍 Sending login request:', { email, password });
    console.log('🔍 URL:', `${API_BASE}/auth/login`);

    try {
      const requestBody = JSON.stringify({ email, password });
      console.log('🔍 Request body:', requestBody);

      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: requestBody
      });

      console.log('🔍 Response status:', res.status);
      console.log('🔍 Response headers:', Object.fromEntries(res.headers.entries()));

      // Check if response is JSON
      const contentType = res.headers.get('content-type');
      console.log('🔍 Response content-type:', contentType);

      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        console.log('🔍 Non-JSON response:', text);
        throw new Error(`Server returned non-JSON response: ${text}`);
      }

      const data = await res.json();
      console.log('🔍 Response data:', data);

      if (res.ok) {
        console.log('✅ Login successful, token:', data.access_token);
        localStorage.setItem('access_token', data.access_token);
        
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        
        navigate('/dashboard');
      } else {
        setError(data.message || `Login failed (Status: ${res.status})`);
      }
    } catch (err) {
      console.error('❌ Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Test function to check API connectivity
  const testAPI = async () => {
    console.log('🧪 Testing API connectivity...');
    try {
      const res = await fetch(`${API_BASE}/auth/test`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: 'data' })
      });
      const data = await res.json();
      console.log('🧪 Test API response:', data);
    } catch (err) {
      console.error('🧪 Test API failed:', err);
    }
  };

  // Call testAPI on component mount (optional)
  // useEffect(() => { testAPI(); }, []);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        
        {/* Test button - remove in production */}
        <button 
          type="button" 
          onClick={testAPI}
          style={{ marginBottom: '10px', backgroundColor: '#666' }}
        >
          Test API Connection
        </button>

        {error && (
          <div className="error-message" style={{ 
            background: '#ffebee', 
            color: '#c62828', 
            padding: '12px', 
            borderRadius: '4px',
            marginBottom: '15px',
            border: '1px solid #ef5350'
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={loading ? 'loading' : ''}
            style={{ 
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Test credentials hint */}
        <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px', fontSize: '14px' }}>
          <strong>Test with:</strong><br />
          Email: test@test.com<br />
          Password: password
        </div>
      </div>
    </div>
  );
}

export default Login;