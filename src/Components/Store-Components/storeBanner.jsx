import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from '../../Assets/imgs/store-banner1.webp'
import bannerImg2 from '../../Assets/imgs/store-banner2.webp'
import bannerImg3 from '../../Assets/imgs/store-banner3.webp'
import bannerImg4 from '../../Assets/imgs/store-banner4.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";

const StoreBanner = () => {
    let imgsList = [
        {id:1,src:bannerImg, alt:"bannerImg"},
        {id:2,src:bannerImg2, alt:"bannerImg"},
        {id:3,src:bannerImg3, alt:"bannerImg"},
        {id:4,src:bannerImg4, alt:"bannerImg"}
    ]
    return ( 
        <div className="w-full p-10">
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                speed={1500}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                keyboard={{
                enabled: true,
                }}
                breakpoints={{
                769: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                }}
                scrollbar={true}
                navigation={true}
                allowSlideNext = {true}
                pagination={{
                clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination,Autoplay]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-[400px]"
            >
            
            {
                imgsList.map(item=>{
                    return (
                        <SwiperSlide className="w-full h-full rounded-md overflow-hidden">
                            <img src={item.src} alt={item.alt} className="w-full h-full" />
                        </SwiperSlide>
                    )
                })
            }
                
                {/* <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}
            
            </Swiper>
        </div>
    );
}

export default StoreBanner;