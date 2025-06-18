import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { cartItems, setCartItems } = useCart();

  const product = {
    id: 1,
    name: "Nike Running Shoes",
    price: 4499,
    image:
      "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/342cf345-313b-4eea-a27f-8f988d88f74b/men-s-road-running-shoes.png"
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white shadow rounded-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-72 object-cover rounded"
        />

        <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">₹{product.price}</p>

          <button
            onClick={() => setCartItems([...cartItems, product])}
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
