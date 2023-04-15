import HSlide1 from "../Components/Sliders/homeSlider/hslider1";
import slideImg1 from '../Assets/imgs/slide1.jpg'
import slideImg2 from '../Assets/imgs/slide2.jpg'
import slideImg3 from '../Assets/imgs/slide3.jpg'
import slideImg4 from '../Assets/imgs/slide4.jpg'
import slideImg5 from '../Assets/imgs/slide5.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import HSlide2 from "../Components/Sliders/homeSlider/hslider2";
import HCategory from "../Components/homeCategory/hCategory";
import TopBanner from "../Components/Banners/topBanner";
import BottomBanner from "../Components/Banners/bottomBanner";
import TopBlog from "../Components/TopBlog/topBlog";
import '../Assets/Styles/home.scss'
import WebBanner from "../Components/WebBanner/webBanner";
import LatestProducts from "../Components/LatestProducts/latestProducts";
import NewsLetter from "../Components/NewsLetter/newsLetter";
const Home = () => {

    const slideImgs = [
        {id:1, src:slideImg1, text:"Only For Limited Time, 50% OFF", link:'www.google.com',linkText:"Shop Now"},
        {id:2, src:slideImg2, text:"Add Caption Here"},
        {id:3, src:slideImg3, text:"Only For Limited Time, 50% OFF"},
        {id:4, src:slideImg4, text:"Add Caption Here"},
        {id:5, src:slideImg5, text:"Thunder Store"},
    ]

    const slideImgList = slideImgs.map( (item)=>{
        return(
            <SwiperSlide key={item.id} className="relative">
                <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,.4)] z-10"></div>
                <img src={item.src} alt={item.src} className='w-full h-full object-fill aspect-video' />
                <div className="sm:hidden slideTitle absolute md:top-[50%] md:-translate-y-1/2 top-[75%] -translate-y-[75%] lsm:flex lsm:flex-wrap items-center z-50 lg:w-[70%]">
                    <h2 className="text-white text-2xl md:text-4xl font-extrabold font-[Oswald] lg:ml-[25%] lsm:ml-[10%] basis-full">{item.text}</h2>
                    <a href={'http://'+item.link} target='_blank' rel="noreferrer" className={`mt-8 bg-white rounded-lg font-semibold md:text-xl text-sm px-7 py-2 lg:ml-[25%] lsm:ml-[10%] ${item?.link && item?.linkText ? 'block' : 'hidden'}`}>{item.linkText}</a>
                </div>
            </SwiperSlide>
        )
    } )
    return ( 
        <article className="Home">
            <section className="sliderWrapper w-full h-auto md:h-screen md:flex md:flex-wrap max-h-[300px] md:max-h-full sm:mb-[130px] lsm:mb-[300px] md:mb-[150px] lg:mb-28">
                <div className="md:h-full w-full md:max-w-[60%]">
                    <HSlide1>
                        {slideImgList}
                    </HSlide1>
                </div>

                <div className="md:h-full w-full md:max-w-[40%]">
                    <HSlide2>
                        {slideImgList}
                    </HSlide2>
                </div>
            </section>

            <section className="hCategoryWrapper   sm:mb-[100px] md:mb-[150px] lg:mb-28 md:px-24">
                <HCategory />
            </section>

            <section className="topBannerWrapper px-10 md:px-7 lg:px-24 py-20 bg-gray-100 min-h-[580px] h-[580px]">
                <TopBanner />
            </section>

            <section className="bottomBannerWrapper px-10 md:px-7 lg:px-24 py-20 min-h-[580px] h-[580px] mt-20 md:mt-0">
                <BottomBanner />
            </section>

            <section className="latestProductsWrapper mt-28 px-6 md:px-10 mb-10">
                <LatestProducts />
            </section>

            <section className="webBanner w-full h-[300px] min-h-[500px] mt-28 mb-10">
                <WebBanner />
            </section>

            <section className="topBlogWrapper mt-28 px-6 md:px-10">
                <TopBlog />
            </section>

            <section className="newsLetterWrapper mt-28 w-full h-auto">
                <NewsLetter />
            </section>
            
            

        </article>
    );
}

export default Home;