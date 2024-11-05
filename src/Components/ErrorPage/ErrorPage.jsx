import React from 'react';

const ErrorPage = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
        color: '#333',
    };

    const contentStyle = {
        textAlign: 'center',
        maxWidth: '600px',
        padding: '20px',
    };

    const titleStyle = {
        fontSize: '4rem',
        marginBottom: '0.5rem',
        color: '#dc3545',
    };

    const messageStyle = {
        fontSize: '1.2rem',
        color: '#555',
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={titleStyle}>404</h1>
                <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
                <p style={messageStyle}>It might have been removed or is temporarily unavailable.</p>
                <button style={buttonStyle} onClick={() => window.location.href = '/'}>
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
