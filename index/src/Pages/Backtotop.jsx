import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './Backtotop.css'; 

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') { // Use the actual route path
                setShowButton(window.scrollY > 200);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    const scrollToTop = () => {
        if (location.pathname !== '/') { // Use the actual route path
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`btn btn-primary btn-lg-square back-to-top ${showButton ? 'd-block' : 'd-none'}`}
            onClick={scrollToTop}
            style={{ width: '36px', height: '36px', padding: '0' }}
        >
            <FontAwesomeIcon icon={faAnglesUp} width={10} height={10} className="icon-top-to-bottom" />
        </div>
    );
};

export default BackToTopButton;
