import { Swiper, SwiperSlide } from "swiper/react";
import  SwiperCore,{A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

const SliderRiset = (props) => {
  const{riset} = props
  return (
    <div className="flex justify-center items-center">
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true, type:"bullets"}}
      
      
    >
      {
        riset.map((penelitian, index) => {
          return (
            <SwiperSlide key={index}>
              <div  className="w-[800px] h-[400px] flex flex-col text-white justify-end rounded-[40px] mx-auto mb-10 border-4 border-white"
            style={{
              background: "url('image 18.png')"
            }}>
               <div className="p-4 bg-gradient-to-t from-green-500 to-green-200/30 rounded-b-[40px]">
            <h1 className="font-bold mb-2 text-2xl">{penelitian.judul}</h1>
            <h1>{penelitian.desc}</h1>

            </div>
        </div>
        </SwiperSlide>

          )
        })
      }
      

      <div className="swiper-pagination"></div>
    </Swiper>
    </div>
  );
};

export default SliderRiset;
