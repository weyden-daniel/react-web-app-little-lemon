import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import logo from '../img/Logo.svg';
import logo_short from '../img/Logo_short.png';

export default function Header() {

    const location = useLocation();
    console.log(location);
    return (
        <div className="header-body">

            <div className="short-logo">
                <img src={logo_short} alt="Little Lemon logo" height="60%"/>
            </div>

            <div className="default-logo">
                <img src={logo} alt="Little Lemon logo" width="80%" />
            </div>

            <nav className="navigation-bar">
                <ul>
                    <li><Link to="/"
                            className={(location.pathname === "/") ? "selected-option" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li><Link to="/about"
                            className={(location.pathname === "/about") ? "selected-option" : ""}
                        >
                            About
                        </Link>
                    </li>
                    <li><Link to="/menu"
                            className={(location.pathname === "/menu") ? "selected-option" : ""}
                        >
                            Menu
                        </Link>
                    </li>
                    <li><Link to="/booking-form"
                            className={(location.pathname === "/booking-form") ? "selected-option" : ""}
                        >
                            Reservations
                        </Link>
                    </li>
                    <li><Link to="/order-online"
                            className={(location.pathname === "/order-online") ? "selected-option" : ""}
                        >
                            Order Online
                        </Link>
                    </li>
                    <li><Link to="/login"
                            className={(location.pathname === "/login") ? "selected-option" : ""}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
};