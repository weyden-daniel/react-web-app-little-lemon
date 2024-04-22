import { Link } from 'react-router-dom';

import Dish from '../components/Dish';
import Testimonial from '../components/Testimonial';

import './Home.css';
import './Menu.css';

import banner_image from '../img/banner_image.jpg';

import dish_grilled_fish from '../img/dishes/Grilled fish.png';
import dish_greek_salad from '../img/dishes/Greek salad.png';
import dish_lemon_dessert from '../img/dishes/Lemon dessert.png';

import cust_photo_1 from '../img/customers/customer_1.jpeg';
import cust_photo_2 from '../img/customers/customer_2.jpeg';
import cust_photo_3 from '../img/customers/customer_3.jpeg';
import cust_photo_4 from '../img/customers/customer_4.jpeg';

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

            <div
                className="home-screen-specials"
                aria-label="Special selection from the complete menu"
            >

                <div className="home-grid-row">
                    <div className="specials-header">
                        <h1>This weeks specials!</h1>
                        <Link 
                            to="/menu"
                            aria-label="Link to menu page"
                        >
                            Online Menu
                        </Link>
                    </div>
                </div>

                <div className="home-grid-row">

                    <div className="menu">

                        <div
                            className="menu-item one"
                            aria-label="Card with photo, price and description of a dish"
                        >
                            <Dish
                                image = {dish_grilled_fish}
                                dishName="Grilled Fish"
                                dishPrice="20.00"
                                dishDescription="Fantastic grilled fish seasoned with salt."
                            />
                        </div>

                        <div
                            className="menu-item two"
                            aria-label="Card with photo, price and description of a dish"
                        >
                            <Dish
                                image = {dish_greek_salad}
                                dishName="Greek Salad"
                                dishPrice="12.99"
                                dishDescription="Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients."
                            />
                        </div>

                        <div
                            className="menu-item three"
                            aria-label="Card with photo, price and description of a dish"
                        >
                            <Dish
                                image = {dish_lemon_dessert}
                                dishName="Lemon Dessert"
                                dishPrice="4.99"
                                dishDescription="You can't go wrong with this delicious lemon dessert!"
                            />
                        </div>

                    </div>

                </div>

            </div>

            <div
                className="home-screen-testimonials"
                aria-label="Selection of testimonials from the customers of the restaurant"
            >

                <div className="home-grid-row">
                    <div className="testimonials-header">
                        <h1>Testimonials</h1>
                    </div>
                </div>

                <div className="home-grid-row">

                    <div className="testimonials">

                        <div className="testimonial one">
                            <Testimonial
                                numStars={5}
                                custPhoto={cust_photo_1}
                                custName={"Jasmine Thompson"}
                                testimonialText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis purus at sem malesuada, sed ultricies sapien convallis."}
                                aria-label="Card with the rating, photo, name and testimonial from a customer"
                            />
                        </div>

                        <div className="testimonial two">
                            <Testimonial
                                numStars={4}
                                custPhoto={cust_photo_2}
                                custName={"David Anderson"}
                                testimonialText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis purus at sem malesuada."}
                                aria-label="Card with the rating, photo, name and testimonial from a customer"
                            />
                        </div>

                        <div className="testimonial three">
                            <Testimonial
                                numStars={5}
                                custPhoto={cust_photo_3}
                                custName={"Alejandro Ramirez"}
                                testimonialText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec dolor consectetur bibendum."}
                                aria-label="Card with the rating, photo, name and testimonial from a customer"
                            />
                        </div>

                        <div className="testimonial four">
                            <Testimonial
                                numStars={3}
                                custPhoto={cust_photo_4}
                                custName={"Sarah Johnson"}
                                testimonialText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis nec dolor consectetur bibendum. Fusce nec dapibus ipsum."}
                                aria-label="Card with the rating, photo, name and testimonial from a customer"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}