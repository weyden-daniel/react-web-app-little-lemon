
import Dish from '../components/Dish';

import './Menu.css';

import dish_pasta from '../img/Pasta.png';
import dish_grilled_fish from '../img/Grilled fish.png';
import dish_bruschetta from '../img/Bruschetta.png';
import dish_greek_salad from '../img/Greek salad.png';
import dish_lemon_dessert from '../img/Lemon dessert.png';

export default function Menu() {
    return(
        <div className="menu-screen">

            <div className="grid-row">
                <h1>Menu</h1>
            </div>

            <div className="grid-row">

                <div className="menu">

                    <div className="menu-item one">
                        <Dish
                            image = {dish_pasta}
                            dishName="Pasta"
                            dishPrice="6.99"
                            dishDescription="Delicious pasta for your delight."
                        />
                    </div>
                    <div className="menu-item two">
                        <Dish
                            image = {dish_grilled_fish}
                            dishName="Grilled Fish"
                            dishPrice="20.00"
                            dishDescription="Fantastic grilled fish seasoned with salt."
                        />
                    </div>
                    <div className="menu-item three">
                        <Dish
                            image = {dish_bruschetta}
                            dishName="Bruschetta"
                            dishPrice="7.99"
                            dishDescription="Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese."
                        />
                    </div>
                    <div className="menu-item four">
                        <Dish
                            image = {dish_greek_salad}
                            dishName="Greek Salad"
                            dishPrice="12.99"
                            dishDescription="Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients."
                        />
                    </div>
                    <div className="menu-item five">
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
    );
}