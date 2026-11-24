import { useEffect, useState } from "react";
import Header from "./components/Header";
import FoodMenu from "./components/FoodMenu";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div>
      <Header />

      <h2 className="menu-title">Our Food Menu</h2>

      <h3 className="cart">
        Cart Items: {cart.length}
      </h3>

      <FoodMenu
        foods={foods}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;