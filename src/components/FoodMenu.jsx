import FoodCard from "./FoodCard";

function FoodMenu({ foods, addToCart }) {
  return (
    <div className="food-container">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default FoodMenu;