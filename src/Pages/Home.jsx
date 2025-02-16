import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data";
import Card from "../Components/Card";

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
      <section className="relative bg-gray-900 text-white text-center py-4 h-[70vh]">
        <div className="mx-auto px-6 h-full">
          <h1 className="text-4xl font-bold mb-2 py-2">
            {featuredImages[topIndex].title}
          </h1>

          {/* Image Carousel */}
          <div className="w-full h-[100%] overflow-hidden relative">
            <div
              className="w-full h-[75%] absolute top-0 left-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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

      {/* Products Carousel Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${topIndex * 100}%)` }}
              >
                {data.slice(0, 8).map((product, index) => {
                  if (!product || product.name === undefined) {
                    console.warn("Invalid product data:", product);
                    return null;
                  }

                  return (
                    <div className="min-w-full flex justify-center gap-4">
                      {data.slice(index * 5, (index + 1) * 5).map((p) => (
                        <div key={p.id} className="w-64 h-96">
                          <Card
                            product={p}
                            onClick={() => handleProductClick(p.id)}
                            className="w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r"
              onClick={() =>
                setTopIndex(
                  (prev) =>
                    (prev - 1 + Math.ceil(data.length / 5)) %
                    Math.ceil(data.length / 5)
                )
              }
            >
              ←
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l"
              onClick={() =>
                setTopIndex((prev) => (prev + 1) % Math.ceil(data.length / 5))
              }
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
