import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../component/SectionTitle';


const CategorySlider = () => { 
    return (
        <div className='max-w-6xl mx-auto my-20 '>
         <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
           <Swiper

        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img src={slider1} />
                    <h3 className='text-4xl uppercase -mt-16 text-center text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} />
                    <h3 className='text-4xl uppercase -mt-16 text-center text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} />
                    <h3 className='text-4xl uppercase -mt-16 text-center text-white'>Soupe</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} />
                    <h3 className='text-4xl uppercase -mt-16 text-center text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} />
                    <h3 className='text-4xl uppercase -mt-16 text-center text-white'>Salad</h3>
                </SwiperSlide>              
            </Swiper>
        </div>
    );
};

export default CategorySlider;