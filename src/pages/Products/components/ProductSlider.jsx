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
    <div>
      <div className="mt-[30px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {ImgSlider.map(item => (
            <SwiperSlide>
              <div className=" w-full h-[346px] rounded-xl overflow-hidden">
                <img
                  src={item?.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
