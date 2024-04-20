import { Link } from 'react-router-dom';
import './Home.css';
import banner_image from '../img/banner_image.jpg';

export default function Home() {
    return(
        <div className="home-screen">
            <div className="hero-banner">
                <div className="green-rectangle"/>
                <div className="banner-text-container">
                    <h1 aria-label="Restaurant Name">Little Lemon</h1>
                    <h2 aria-label="Location">
                        Chicago
                    </h2>
                    <p aria-label=" Restaurant Description">
                        We are a family owned
                        Mediterranean restaurant,
                        focused on traditional
                        recipes served with a modern
                        twist.
                    </p>
                    <Link to="/booking-form">Reserve a Table</Link>
                </div>
                <div className="banner-image-container">
                    <img
                        className="banner-image"
                        src={banner_image}
                        alt="Man holding a tray of food"
                        aria-label="Descriptive photo of the restaurant"

                    />
                </div>
            </div>
        </div>
    );
}