function Header() {
  return (
    <div className="w-full bg-neutral-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="ReactPrograms/Day-1/My_Activity/src/components/modern-letter-ef-logo-design-initial-linked-letter-ef-logo-design-with-creative-minimal-and-modern-trendy-free-vector.jpg" alt="Eflyer Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Eflyer</h1>
      </div>

      {/* Menu */}
      <ul className="flex gap-6 font-light">
        <li className="cursor-pointer hover:text-amber-400">Home</li>

        <li className="relative group cursor-pointer">
          <span className="hover:text-amber-400">Shop</span>
          <ul className="absolute hidden group-hover:block bg-neutral-900 p-2 rounded-md mt-2">
            <li className="px-4 py-1 hover:text-amber-400">Men</li>
            <li className="px-4 py-1 hover:text-amber-400">Women</li>
            <li className="px-4 py-1 hover:text-amber-400">Kids</li>
          </ul>
        </li>

        <li className="cursor-pointer hover:text-amber-400">Deals</li>
        <li className="cursor-pointer hover:text-amber-400">Contact</li>
      </ul>

      {/* Search + Cart + Login */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-l-md border border-gray-300 text-black outline-none"
          />
          <button className="bg-amber-400 text-black px-4 py-2 rounded-r-md font-medium">
            Search
          </button>
        </div>

        <div className="relative">
          <button className="text-white text-xl">🛒</button>
          <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs rounded-full px-2">
            3
          </span>
        </div>

        <button className="px-4 py-2 rounded-md border border-white">
          Login
        </button>
        <button className="px-4 py-2 rounded-md bg-amber-400 text-black">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
