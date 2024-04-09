
import { useEffect, useRef } from 'react';

import './Responsive.css';
import './Header.css';

import logo from '../img/Logo.svg';
import logo_short from '../img/Logo_short.png';

export default function Header() {

    const headerRef = useRef(null);

    useEffect(() => {

        let prevScrollPos = window.scrollY;

        const handleScroll = () => {

            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;

            if (!headerElement) {
                return;
            }

            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-80px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll);

        //remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <header ref={headerRef}>

            <div class="row">

                <div class="empty-on-mobile col-2 col-s-1">&nbsp;</div>

                <div class="short-logo-container col-xs-1">
                    <img src={logo_short} alt="Little Lemon logo" height="70%" />
                </div>

                <div class="default-logo-container col-2 col-s-2">
                    <img src={logo} alt="Little Lemon logo" width="80%" />
                </div>

                <nav class="navigation-menu col-6 col-s-8 col-xs-11">
                    <ul>
                        <li><a href="#section-home">Home</a></li>
                        <li><a href="#section-about">About</a></li>
                        <li><a href="#section-menu">Menu</a></li>
                        <li><a href="#section-reservations">Reservations</a></li>
                        <li><a href="#section-order-online">Order Online</a></li>
                        <li><a href="#section-login">Login</a></li>
                    </ul>
                </nav>

                <div class="empty-on-mobile col-2 col-s-1">&nbsp;</div>

            </div> {/*row*/}

        </header>
    );
}