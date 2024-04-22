import ReactStars from "react-rating-stars-component";

import "./Testimonial.css";

export default function Testimonial({numStars, custPhoto, custName, testimonialText}) {
    return (
        <div className="testimonial-body">

            <div className="test-stars">
                <ReactStars
                    count={5}
                    value={numStars}
                    size={28}
                    color="#EDEFEE"
                    activeColor="#F4CE14"
                />
            </div>

            <div className="test-photo-name">
                <div className="test-photo-container">
                    <img
                        src={custPhoto}
                        className="test-photo"
                        alt="Customer"
                    />
                </div>
                <div className="test-name">
                    <div>{custName}</div>
                </div>
            </div>

            <div className="test-text">
                {testimonialText}
            </div>

        </div>
    );
};