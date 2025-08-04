import React from 'react';

const ProductCard = ({
  image,
  title,
  price,
  rating,
  reviews,
  onFavorite,
  onEdit,
  isFavorite,
}) => {
  return (
    <div className="w-[361px] h-[500px] bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-[317px] rounded-lg overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-col gap-3 flex-grow">
        {/* Title & Favorite */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#202224] truncate max-w-[75%]">
            {title}
          </h2>
          <button
            onClick={onFavorite}
            className={`text-2xl transition-transform duration-200 ${
              isFavorite ? 'text-red-500' : 'text-gray-400'
            } hover:scale-125`}
            aria-label={
              isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <p className="text-lg">${price.toLocaleString()}</p>
          <div className="flex items-center gap-1 select-none">
            <span>⭐</span>
            <span>{rating.toFixed(1)}</span>
            <span className="text-gray-400">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-4">
        <button
          onClick={onEdit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition duration-200 font-semibold shadow-md"
        >
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
