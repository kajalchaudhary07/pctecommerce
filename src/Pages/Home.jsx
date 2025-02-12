import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data";

const Home = () => {
  const navigate = useNavigate();
  const [topIndex, setTopIndex] = useState(0);

  // Featured images for the carousel
  const featuredImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
      title: "New Arrivals",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Special Offers",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
      title: "Trending Now",
    },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const changeTopImage = () => {
    setTopIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Image Carousel */}
      <section className="relative bg-gray-900 text-white text-center py-4 h-[60vh]">
        <div className="mx-auto px-6 h-full">
          <h1 className="text-4xl font-bold mb-2 py-2">
            {featuredImages[topIndex].title}
          </h1>

          {/* Image Carousel */}
          <div className="w-full h-[70%] overflow-hidden relative">
            <div
              className="w-full h-full absolute top-0 left-0 cursor-pointer transition-transform duration-500"
              onClick={changeTopImage}
            >
              <img
                src={featuredImages[topIndex].url}
                alt={featuredImages[topIndex].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Carousel Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {featuredImages.map((image, index) => (
                  <button
                    key={`carousel-dot-${image.id}`}
                    className={`w-3 h-3 rounded-full ${
                      index === topIndex ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTopIndex(index);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.slice(0, 8).map((product, index) => {
              // If product data is incomplete, log warning and skip rendering
              if (!product || product.name === undefined) {
                console.warn("Invalid product data:", product);
                return null;
              }

              // Use product.id if available, otherwise use the index as fallback
              const productKey =
                product.id !== undefined
                  ? `product-${product.id}`
                  : `product-${index}`;

              return (
                <div
                  key={productKey}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                >
                  <div className="relative pb-[100%]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-600 font-bold text-lg">
                        ₹{product.price}
                      </p>
                      {product.reviews && product.reviews.length > 0 && (
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-600 text-sm ml-1">
                            {(
                              product.reviews.reduce(
                                (acc, review) => acc + review.rating,
                                0
                              ) / product.reviews.length
                            ).toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
