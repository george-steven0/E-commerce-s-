import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";
import { useRef } from "react";






const HSlide1 = (props) => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    
    return ( 

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
            className="mySwiper h-full"
        >

            {props.children}

            
            {/* <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div> */}
        
        </Swiper>
    );
}
export default HSlide1;