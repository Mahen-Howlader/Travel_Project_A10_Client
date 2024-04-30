// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Banner() {
  const [texta] = useTypewriter({
    words: [
      "Bali's beaches, Komodo dragons, Yogyakarta's temples, Raja Ampat diving, Ubud's art, Mount Bromo's sunrise, Gili Islands' tranquility.",
    ],
    loop: 0

  });
  return (
    <div>
      <Swiper
        loop={true}
        modules={[Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper relative h-[80vh] md:h-[100vh] "
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/sWxmz0Y/Indonesia-Country3.jpg')]  bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-5 md:px-20 lg:px-40 text-white flex items-center px-5 md:px-20 lg:px-40">
              <div className="md:space-y-5">
                <div className="text-3xl md:text-5xl space-y-4 font-semibold">
                  <h1 className="text-yellow-400">EXPLORE</h1>
                  <h1>THE INDONESIA</h1>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl">Langin Page</h2>
                  <p className="md:w-7/12">
                    <span>{texta}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/hCxP2gT/Malaysia-Country5.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-5 md:px-20 lg:px-40">
              <div className="md:space-y-5">
                <div className="text-3xl md:text-5xl space-y-4 font-semibold">
                  <h1 className="text-yellow-400">EXPLORE</h1>
                  <h1>THE MALAYSIA </h1>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl">Langin Page</h2>
                  <p className="md:w-7/12">
                    <span>{texta}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/VM1czgn/Vietnam-Country4.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-5 md:px-20 lg:px-40">
              <div className="md:space-y-5">
                <div className="text-3xl md:text-5xl space-y-4 font-semibold">
                  <h1 className="text-yellow-400">EXPLORE</h1>
                  <h1>THE VIETNAM</h1>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl">Langin Page</h2>
                  <p className="md:w-7/12">
                    <span>{texta}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/7tKytmR/Cambodia-Country6.jpg')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-5 md:px-20 lg:px-40">
              <div className="md:space-y-5">
                <div className="text-3xl md:text-5xl space-y-4 font-semibold">
                  <h1 className="text-yellow-400">EXPLORE</h1>
                  <h1>THE CAMBODIA</h1>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl">Langin Page</h2>
                  <p className="md:w-7/12">
                    <span>{texta}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/Jc8Srs1/Bangladesh-Country1.png')] bg-cover w-full h-full">
            <div className="bg-[rgba(0,0,0,0.63)] w-full h-full text-white flex items-center px-5 md:px-20 lg:px-40 text-white flex items-center px-5 md:px-20 lg:px-40">
              <div className="md:space-y-5">
                <div className="text-3xl md:text-5xl space-y-4 font-semibold">
                  <h1 className="text-yellow-400">EXPLORE</h1>
                  <h1>THE BANGLADESH</h1>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl">Langin Page</h2>
                  <p className="md:w-7/12">
                  <span>{texta}</span>

                  </p>
                </div>
              </div>
            </div>
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
// https://i.ibb.co/sWxmz0Y/Indonesia-Country3.jpg
// https://i.ibb.co/hCxP2gT/Malaysia-Country5.jpg
// https://i.ibb.co/VM1czgn/Vietnam-Country4.jpg
// https://i.ibb.co/7tKytmR/Cambodia-Country6.jpg
// https://i.ibb.co/Jc8Srs1/Bangladesh-Country1.png
// https://i.ibb.co/DD9HSHp/Thailand-Country2.jpg
