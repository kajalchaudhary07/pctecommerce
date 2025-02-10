import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    // Sample product data
    const products = [
        { id: 1, name: "Product 1", image: "https://via.placeholder.com/300", price: "$99.99", description: "Sample product description" },
        { id: 2, name: "Product 2", image: "https://via.placeholder.com/300", price: "$79.99", description: "Another sample product" },
        { id: 3, name: "Product 3", image: "https://via.placeholder.com/300", price: "$49.99", description: "Yet another sample product" },
        { id: 4, name: "Product 4", image: "https://via.placeholder.com/300", price: "$69.99", description: "Product description" },
        { id: 5, name: "Product 5", image: "https://via.placeholder.com/300", price: "$39.99", description: "Description here" },
        { id: 6, name: "Product 6", image: "https://via.placeholder.com/300", price: "$59.99", description: "Description here" },
        { id: 7, name: "Product 7", image: "https://via.placeholder.com/300", price: "$89.99", description: "Product description" },
        { id: 8, name: "Product 8", image: "https://via.placeholder.com/300", price: "$99.99", description: "Product description" },
        
    ];

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
            <section className="relative bg-gray-900 text-white text-center py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-4">Special Offers</h1>
                    <p className="text-xl mb-6">30% Discount</p>

                    {/* Image Carousel */}
                    <div className="w-full h-96 overflow-hidden relative">
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

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 mt-8">
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Products Carousel Section */}
            <section className="py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

                {/* Product Grid */}
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-6">
                        {products.map((product) => (
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
                                    <p className="text-blue-600 font-bold">{product.price}</p>
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
