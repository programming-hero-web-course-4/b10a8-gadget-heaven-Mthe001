
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Head() {
    const location = useLocation();
    const [backgroundColor, setBackgroundColor] = useState('white');

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setBackgroundColor('#e0f7fa');
                break;
            case '/dashboard':
                setBackgroundColor('#def3f6');
                break;
            case '/statistics':
                setBackgroundColor('black');
                break;
            case '/login':
                setBackgroundColor('white');
                break;
            case '/checkout':
                setBackgroundColor('#CF9FFF');
                break;
            default:
                setBackgroundColor('white');
        }
    }, [location]);

    return (
        <div className='max-w-7xl mx-auto' style={{ backgroundColor, minHeight: '' }}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Head;
