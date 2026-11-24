function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-info">
        <h2>{food.name}</h2>
        <p>{food.description}</p>

        <h3>₹{food.price}</h3>

        <button onClick={() => addToCart(food)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;