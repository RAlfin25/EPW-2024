import { Swiper, SwiperSlide } from "swiper/react";
import  SwiperCore,{A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Navigation]);

const SliderPrestasi = (props) => {
  const {prestasi} = props
  return (
    <div className="flex px-20 flex-row gap-10 ">
      {
        prestasi.map((juara, index) => {
          return (
            <div key={index} className="flex flex-row gap-10 z-[1999383272727272727]">
              <div  className="w-[300px] h-[400px] flex flex-col text-white justify-center items-center rounded-[40px]  mb-10 border-4 border-white bg-white">
                  <div className="w-[200px] translate-y-32">
                      <img src="pialaa.png" alt="" className="" />
                      
                  </div>
                  <div>
                    <img src="Intersect.png" alt="" />
                  <h1 className="px-4 text-center -translate-y-40 font-bold ">{juara}</h1>
                  </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default SliderPrestasi;
