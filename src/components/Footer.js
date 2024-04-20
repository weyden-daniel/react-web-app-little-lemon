import { Link } from 'react-router-dom';
import logo_short from '../img/Logo_short.png';

import './Footer.css';

export default function Footer() {
    return(
        <div className="footer-body">

            <div className="short-logo-footer">
                <img src={logo_short} alt="Little Lemon logo"/>
            </div>

            <div className="footer-doormat-navigation">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking-form">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div className="footer-social-media">
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>

        </div>
    );
};