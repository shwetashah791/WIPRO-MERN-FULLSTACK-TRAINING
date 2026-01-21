import MyButton from "./Button";

function ProductCard({ title, price, img }) {
  return (
    <div className="w-65 bg-white rounded shadow-lg p-4 flex flex-col gap-3 relative
            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      
      {/* SALE Badge */}
      <div className="absolute top-3 left-3 bg-amber-400 text-black px-3 py-1 rounded-full font-bold">
        SALE
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex justify-center items-center rounded">
        <button className="bg-white text-black px-4 py-2 rounded">
          View Details
        </button>
      </div>

      <img
        src={img}
        alt="product"
        className="h-50 w-full object-cover rounded"
      />

      <h2 className="font-bold text-lg">{title}</h2>

      {/* Rating */}
      <div className="flex gap-1">
        ⭐ ⭐ ⭐ ⭐ ☆
      </div>

      <p className="text-red-700 font-semibold">${price}</p>

      <MyButton title="Add to Cart" />
    </div>
  );
}

export default function Products() {
  return (
    <div
      className="p-20 bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/60 p-25 rounded">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Man & Woman Fashion
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          <ProductCard
            title="Men Casual T-Shirt"
            price="30"
            img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
          />
          <ProductCard
            title="Men Formal Shirt"
            price="45"
            img="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80"
          />
          <ProductCard
            title="Men Jacket"
            price="80"
            img="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80"
          />
          <ProductCard
            title="Women Summer Dress"
            price="55"
            img="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80"
          />
          <ProductCard
            title="Women Party Dress"
            price="70"
            img="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80"
          />
          <ProductCard
            title="Men Hoodie"
            price="50"
            img="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=500&q=80"
          />
        </div>
      </div>
    </div>
  );
}
