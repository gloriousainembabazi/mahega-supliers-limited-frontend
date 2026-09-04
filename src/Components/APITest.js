import React, { useState, useEffect } from 'react';
import { productAPI, authAPI, isAuthenticated, getToken } from '../api';

const APITest = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        testConnection();
    }, []);

    const testConnection = async () => {
        try {
            setLoading(true);
            const data = await productAPI.getAll();
            setProducts(data);
            setConnected(true);
            setError(null);
        } catch (err) {
            setError(err.message);
            setConnected(false);
        } finally {
            setLoading(false);
        }
    };

    const testLogin = async () => {
        try {
            const result = await authAPI.login({
                username: 'admin',
                password: 'admin123'
            });
            console.log('Login result:', result);
            alert('Login successful! Check console.');
        } catch (err) {
            alert('Login failed: ' + err.message);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>🔗 API Connection Test</h1>
            <div style={{ 
                padding: '10px', 
                background: connected ? '#d4edda' : '#f8d7da',
                borderRadius: '5px',
                marginBottom: '20px'
            }}>
                Status: {connected ? '✅ Connected to Flask API' : '❌ Not Connected'}
                {error && <div>Error: {error}</div>}
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={testConnection}>Refresh Products</button>
                <button onClick={testLogin}>Test Login</button>
            </div>
            
            <h3>Products ({products.length})</h3>
            <pre style={{ 
                background: '#f4f4f4', 
                padding: '10px', 
                borderRadius: '5px',
                maxHeight: '400px',
                overflow: 'auto'
            }}>
                {JSON.stringify(products, null, 2)}
            </pre>
        </div>
    );
};

export default APITest;
