// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Banner() {
  return (
    <div>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[60vh] md:h-[70vh] lg:h-[90vh]"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/BGHKHM5/banner-Image4.jpg')]  bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-40">
              cox bazar
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/2MSkTkF/banner-Image3.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/yXrGFL8/banner-Image2.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/hdVvGVt/banner-Image1.png')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/wSP2Zb5/banner-Image5.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;

// https://i.ibb.co/wSP2Zb5/banner-Image5.jpg
// https://i.ibb.co/BGHKHM5/banner-Image4.jpg
// https://i.ibb.co/2MSkTkF/banner-Image3.jpg
// https://i.ibb.co/yXrGFL8/banner-Image2.jpg
// https://i.ibb.co/hdVvGVt/banner-Image1.png
