import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Placeholder for the main product data (replace with actual data)
    const product = {
        id: id,
        name: `Product ${id}`,
        image: "https://via.placeholder.com/500",
        price: "$99.99",
        description: "This is a detailed description of the product.",
        features: [
            "High-quality material",
            "Durable and long-lasting",
            "Available in multiple sizes",
        ],
        reviews: [
            { user: "John Doe", rating: 5, comment: "Great product!" },
            { user: "Jane Smith", rating: 4, comment: "Good value for money." },
        ],
    };

    // Sample related products data (replace with your actual related products)
    const relatedProducts = [
        {
            id: parseInt(id) + 1,
            name: `Product ${parseInt(id) + 1}`,
            image: "image2.png/300",
            price: "$89.99",
        },
        {
            id: parseInt(id) + 2,
            name: `Product ${parseInt(id) + 2}`,
            image: "https://via.placeholder.com/300",
            price: "$79.99",
        },
        {
            id: parseInt(id) + 3,
            name: `Product ${parseInt(id) + 3}`,
            image: "https://via.placeholder.com/300",
            price: "$69.99",
        },
        {
            id: parseInt(id) + 4,
            name: `Product ${parseInt(id) + 4}`,
            image: "https://via.placeholder.com/300",
            price: "$59.99",
        },
        {
            id: parseInt(id) + 5,
            name: `Product ${parseInt(id) + 5}`,
            image: "https://via.placeholder.com/300",
            price: "$49.99",
        },
        {
            id: parseInt(id) + 6,
            name: `Product ${parseInt(id) + 6}`,
            image: "https://via.placeholder.com/300",
            price: "$39.99",
        },
        {
            id: parseInt(id) + 7,
            name: `Product ${parseInt(id) + 7}`,
            image: "https://via.placeholder.com/300",
            price: "$29.99",
        },
        {
            id: parseInt(id) + 8,
            name: `Product ${parseInt(id) + 8}`,
            image: "https://via.placeholder.com/300",
            price: "$19.99",
        },
        {
            id: parseInt(id) + 9,
            name: `Product ${parseInt(id) + 9}`,
            image: "https://via.placeholder.com/300",
            price: "$9.99",
        },
        
    ];

    // Function to navigate to a product's details
    const viewProductDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
                <p className="text-xl text-blue-600 font-semibold">{product.price}</p>
                <p className="text-gray-700 my-4">{product.description}</p>

                <h2 className="text-xl font-semibold mt-6">Features:</h2>
                <ul className="list-disc ml-6 text-gray-600">
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mt-6">Reviews:</h2>
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                    {product.reviews.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <div key={index} className="mb-3 border-b pb-2">
                                <p className="text-gray-800 font-bold">{review.user}</p>
                                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>

            {/* You Might Also Love Section */}
            <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6">You Might Also Love</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedProducts.slice(0, 10).map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-blue-600 font-bold">{item.price}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
