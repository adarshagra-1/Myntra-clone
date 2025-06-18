import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 border-t mt-4">
            <p className="text-xl font-bold">Total</p>
            <p className="text-xl font-bold">₹{totalAmount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
