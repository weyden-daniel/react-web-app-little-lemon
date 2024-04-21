import './Dish.css'

export default function Dish({image, dishName, dishPrice, dishDescription}) {
    return (
        <div class="dish-body">

            <div className="dish-image-container">
                <img
                    src={image}
                    className="dish-image"
                    alt="Dish"
                />
            </div>

            <dish className="dish-text">
                <div className="dish-title">
                    <div className="dish-name">{dishName}</div>
                    <div className="dish-price">$ {dishPrice}</div>
                </div>
                <div className="dish-description">{dishDescription}</div>
            </dish>
        </div>
    );
}