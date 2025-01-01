import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])



    return (
        <div className="max-w-6xl my-20 mx-auto">
            <div>
                <SectionTitle subHeading={'What Our Clients Say'} heading={"TESTIMONIALS"}> </SectionTitle>
            </div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                           <Rating
                                style={{ maxWidth: 180 , margin: "auto"}}
                                value={review?.rating}
                                readOnly
                            />
                            <div className="m-20 px-10 text-center">
                           
                                <p >{review?.details}</p>
                                <h2 className="font-semibold text-xl text-yellow-600 my-3">{review?.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Testimonials;