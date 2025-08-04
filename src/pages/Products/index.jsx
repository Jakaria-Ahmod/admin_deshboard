import React, { useState } from 'react';
import ProductSlider from './components/productSlider';
import { products as initialProducts } from './components/Product.api';
import ProductCard from '../../globalComponents/ProductCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Products = () => {
  const [productList, setProductList] = useState(initialProducts); // ✅ ঠিক করা হলো

  const toggleFavorite = id => {
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

  return (
    <div className="px-[50px]">
      <div>
        <h1 className="text-[#202224] font-nunito text-[32px] font-bold tracking-[-0.114px] capitalize">
          Products
        </h1>
      </div>

      <ProductSlider />
      <div className="mt-[50px]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
        >
          {productList.map(product => (
            <SwiperSlide>
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
