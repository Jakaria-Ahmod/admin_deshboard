import React, { useEffect, useState } from 'react';
import ProductSlider from './components/ProductSlider';
import { products as initialProducts } from './components/Product.api';
import ProductCard from '../../globalComponents/ProductCard';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [productList, setProductList] = useState(initialProducts);

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
    <div className="px-4 sm:px-6 md:px-10 lg:px-[50px] pt-5">
      <div>
        <h1 className="text-[#202224] font-nunito text-2xl sm:text-3xl md:text-[32px] font-bold tracking-[-0.114px] capitalize">
          Products
        </h1>
      </div>

      <ProductSlider />

      <div className="mt-12">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {productList.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard
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
