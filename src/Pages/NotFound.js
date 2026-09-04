import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: '#0d1b2a',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '72px', color: '#e67e22', margin: '0' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ color: '#8a9aa8' }}>The page you're looking for doesn't exist.</p>
            <Link 
                to="/" 
                style={{
                    marginTop: '20px',
                    padding: '12px 30px',
                    background: '#e67e22',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold'
                }}
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;