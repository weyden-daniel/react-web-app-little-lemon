import './About.css';

import founders_a from "../img/founders/Mario and Adrian A.jpg"
import founders_b from "../img/founders/Mario and Adrian b.jpg"

export default function About() {
    return(
        <div className="about-screen">

            <article
                aria-label="History of the restaurant and its founders, Mario and Adrian"
            >

                <div className="about-page-title">
                    <h1>About</h1>
                </div>

                <div className="about-body">

                    <div className="about-text-one">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit ullamcorper, consectetur lorem nec, fermentum libero. 
                        Sed tincidunt sapien nec magna fringilla, id molestie libero fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia Curae; Morbi eget nunc nec massa luctus ultricies. Nulla facilisi. Cras vel magna a libero dictum blandit. 
                        Fusce eu nisi ut leo congue tristique. Integer tristique felis sed fermentum faucibus.
                    </div>

                    <div className="about-image-one">
                        <img
                            src={founders_a}
                            alt="Founders - Mario and Adrian"
                        />
                    </div>

                    <div className="about-text-two">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit ullamcorper, consectetur lorem nec, fermentum libero. 
                        Sed tincidunt sapien nec magna fringilla, id molestie libero fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia Curae; Morbi eget nunc nec massa luctus ultricies. Nulla facilisi. Cras vel magna a libero dictum blandit. 
                        Fusce eu nisi ut leo congue tristique. Integer tristique felis sed fermentum faucibus.
                    </div>

                    <div className="about-image-two">
                        <img
                            src={founders_b}
                            alt="Founders - Mario and Adrian"
                        />
                    </div>

                </div>

            </article>

        </div>
    );
}