import React from 'react';
import '../style/Footer.css';

//IMAGES
import Trofhy from '../images/home/icon-trophy 1.svg';
import Check from '../images/home/icon-check.svg';
import Present from '../images/home/icon-present.svg';
import Support from '../images/home/icon-support.svg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-icon">
                    <img src={Trofhy} alt="Trophy Icon" />
                    <div>
                        <p style={{ color: '#242424' }}>High Quality</p>
                        <p style={{ color: '#898989' }}>Crafted from top materials</p>
                    </div>
                </div>
                <div className="footer-icon">
                    <img src={Check} alt="Check Icon" />
                    <div>
                        <p style={{ color: '#242424' }}>Certified Products</p>
                        <p style={{ color: '#898989' }}>Guaranteed authenticity</p>
                    </div>
                </div>
                <div className="footer-icon">
                    <img src={Present} alt="Present Icon" />
                    <div>
                        <p style={{ color: '#242424' }}>Gift Ideas</p>
                        <p style={{ color: '#898989' }}>Perfect for every occasion</p>
                    </div>
                </div>
                <div className="footer-icon">
                    <img src={Support} alt="Support Icon" />
                    <div>
                        <p style={{ color: '#242424' }}>Customer Support</p>
                        <p style={{ color: '#898989' }}>24/7 assistance</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                {/* Adicione outros elementos do footer, como links de navegação, informações de contato, etc. */}
                <p>&copy; 2024 Your E-commerce. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
