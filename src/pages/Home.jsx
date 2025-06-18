import { Link } from 'react-router-dom';
import products from '../data/products';

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg transition block"
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
