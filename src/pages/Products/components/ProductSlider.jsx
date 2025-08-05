// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { ImgSlider } from './ProductSlic.api';

const ProductSlider = () => {
  return (
    <div className="mt-6">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {ImgSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[360px] rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={item?.img}
                alt="slider-img"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
