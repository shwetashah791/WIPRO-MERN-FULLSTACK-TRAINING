import MyButton from "./Button";

function Index() {
  return (
    <div
      className="w-full h-400px bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47')",
      }}
    >
      <div className="w-full bg-black/50 p-8 rounded text-white">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-2">
              GET START YOUR FAVORITE SHOPPING
            </h1>
            <p className="text-lg mt-4">
              Discover the latest trends and best deals on your favorite brands.
            </p>
          </div>

          <div className="bg-amber-400 text-black px-4 py-2 rounded">
            🔥 50% OFF
          </div>
        </div>

        <div className="flex gap-6 justify-center items-center mt-6">
          <MyButton title="Cart" />
          <MyButton title="Wishlist" />
          <MyButton title="Categories" />
          <MyButton title="Shop Now" />
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <span className="cursor-pointer hover:text-amber-400">Facebook</span>
          <span className="cursor-pointer hover:text-amber-400">Instagram</span>
          <span className="cursor-pointer hover:text-amber-400">Twitter</span>
        </div>
      </div>
    </div>
  );
}

export default Index;
