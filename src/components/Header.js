import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../img/Logo.svg';
import logo_short from '../img/Logo_short.png';

export default function Header() {

    return (
        <div className="header-body">

            <div className="short-logo">
                <img src={logo_short} alt="Little Lemon logo" height="70%"/>
            </div>

            <div className="default-logo">
                <img src={logo} alt="Little Lemon logo" width="80%" />
            </div>

            <nav className="navigation-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking-form">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

        </div>
    );
};