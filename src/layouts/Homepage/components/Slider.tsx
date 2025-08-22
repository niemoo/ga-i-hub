import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { images } from '../../../data/Gallery';

export default function Slider() {
  return (
    <Swiper
      breakpoints={{
        600: { slidesPerView: 1 },
        900: { slidesPerView: 4 },
      }}
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      modules={[Navigation, Pagination]}
      className="mySwiper mb-6 list-area grid md:grid-cols-4 gap-6 px-[72px] w-11/12 mx-auto"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="area relative">
          <div className="overlay absolute inset-0 bg-black bg-opacity-30 rounded-[14px]"></div>
          <img src={item.image} className="w-full rounded-[14px] h-[350px] object-cover" alt={item.title} />
          <div className="absolute bottom-0 p-4 z-10 text-white">
            <h5 className="font-medium text-[20px] leading-[160%]">{item.title}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
