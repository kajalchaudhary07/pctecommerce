import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
const Home = () => {
  const navigate = useNavigate();

  // Sample product data
  const products = data;

  const [topIndex, setTopIndex] = useState(0);

  const viewProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const changeTopImage = () => {
    setTopIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Image Carousel */}
      <section className="relative bg-gray-900 text-white text-center py-4 h-[60vh]">
        <div className="mx-auto px-6 h-full">
          <h1 className="text-4xl font-bold mb-2">Special Offers</h1>

          {/* Image Carousel */}
          <div className="w-full h-[70%] overflow-hidden relative">
            <div
              className="w-full h-full absolute top-0 left-0 cursor-pointer"
              onClick={changeTopImage}
            >
              <img
                src={`https://picsum.photos/seed/beauty-product${topIndex}/1920/1080`}
                alt="Ad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section className="py-5 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="flex-none cursor-pointer hover:shadow-xl transition duration-300 rounded-lg bg-white shadow-md"
                onClick={() => viewProductDetails(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-blue-600 font-bold">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
