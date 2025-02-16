const Card = ({ product, productKey }) => {
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
          <p className="text-blue-600 font-bold text-lg">₹{product.price}</p>
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
};
export default Card;
