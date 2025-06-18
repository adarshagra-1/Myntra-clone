function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
