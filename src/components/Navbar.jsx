import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

<nav className="bg-white shadow p-4 flex justify-between items-center">
  <div className="flex items-center space-x-2">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
      alt="Myntra"
      className="h-8"
    />
    <Link to="/" className="text-xl font-bold text-gray-800">
      Myntra
    </Link>
  </div>
  <div className="flex items-center space-x-6">
    <Link to="/" className="text-gray-700 hover:text-pink-600">
      Home
    </Link>

    <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
      <UserIcon className="h-5 w-5" />
      <span>Login</span>
    </Link>

    <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-pink-600">
      <ShoppingCartIcon className="h-5 w-5" />
      <span>Cart ({cartItems.length})</span>
    </Link>
  </div>
</nav>
