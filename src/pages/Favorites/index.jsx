import React, { useState } from 'react';
import { products } from '../Products/components/Product.api';
import ProductCard from '../../globalComponents/ProductCard';

const toggleFavorite = id => {
  const [productList, setProductList] = useState(initialProducts); // ✅ ঠিক করা হলো
  const updated = productList.map(product =>
    product.id === id
      ? { ...product, isFavorite: !product.isFavorite }
      : product
  );
  setProductList(updated);
};

const handleEdit = title => {
  console.log(`Edit clicked for: ${title}`);
};
const Favorites = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <div>
        <div>
          <h1 className="text-[#202224] font-nunito text-[32px] font-bold tracking-[-0.114px] capitalize">
            Favorites
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-[30px]">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                isFavorite={product.isFavorite}
                onFavorite={() => toggleFavorite(product.id)}
                onEdit={() => handleEdit(product.title)}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
