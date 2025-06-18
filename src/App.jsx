import React, { useState } from "react";
import "./App.css";
import shirt from "./assets/shirt.jpg";
import kurta from "./assets/kurta.jpg";
import shoes from "./assets/shoes.jpg";
import handbag from "./assets/handbag.jpg";
import watch from "./assets/watch.jpg";
import sunglasses from "./assets/sunglasses.jpg";
import jeans from "./assets/jeans.jpg";
import heels from "./assets/heels.jpg";

const products = [
  { id: 1, title: "Men Slim Fit Shirt", price: 999, image: shirt },
  { id: 2, title: "Women Printed Kurta", price: 799, image: kurta },
  { id: 3, title: "Running Shoes", price: 2199, image: shoes },
  { id: 4, title: "Handbag", price: 1499, image: handbag },
  { id: 5, title: "Luxury Watch", price: 5999, image: watch },
  { id: 6, title: "Trendy Sunglasses", price: 1299, image: sunglasses },
  { id: 7, title: "Men Regular Fit Jeans", price: 1999, image: jeans },
  { id: 8, title: "Women Heels", price: 2499, image: heels },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setMessage(`${product.title} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
            alt="Myntra"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-pink-600">Myntra</span>
        </div>
        <div className="flex space-x-6 items-center">
          <button
            className="text-gray-700 hover:text-pink-600"
            onClick={() => setShowCart(false)}
          >
            Home
          </button>
          <button className="text-gray-700 hover:text-pink-600">Login</button>
          <button
            className="relative flex items-center space-x-1 text-gray-700 hover:text-pink-600"
            onClick={() => setShowCart(!showCart)}
          >
            <span role="img" aria-label="cart">🛒</span>
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Message */}
      {message && (
        <div className="bg-green-200 text-green-800 text-center py-2">
          {message}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        {showCart ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-4 rounded shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p>₹ {item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Cart Total */}
                <div className="mt-6 text-right space-y-2">
                  <h3 className="text-lg font-bold">Total: ₹ {cartTotal}</h3>
                  <button
                    onClick={clearCart}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow rounded p-4 hover:shadow-lg transition flex flex-col"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2">₹ {product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-auto px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-sm py-6 mt-8 shadow-inner">
        <div className="container mx-auto text-center space-y-2">
          <div>&copy; 2025 Myntra. All rights reserved.</div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-pink-600">Terms of Service</a>
            <a href="#" className="hover:text-pink-600">Privacy Policy</a>
            <a href="#" className="hover:text-pink-600">Contact Us</a>
          </div>
          <div>Made with ❤️ for learning purposes.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
