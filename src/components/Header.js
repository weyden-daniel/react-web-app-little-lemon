import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../img/Logo.svg';
import logo_short from '../img/Logo_short.png';

export default function Header() {

    return (
        <div class="header-body">

            <div class="short-logo">
                <img src={logo_short} alt="Little Lemon logo" height="70%"/>
            </div>

            <div class="default-logo">
                <img src={logo} alt="Little Lemon logo" width="80%" />
            </div>

            <nav class="navigation-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

        </div>
    );
};