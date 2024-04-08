import './Header.css';
import logo from '../img/Logo.svg';

export default function Header() {
    return (
        <header>
            <div class="header-container">
                <div class="logo-container">
                    <img src={logo} alt="Little Lemon logo" width="80%" />
                </div>
                <nav class="navigation-menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}