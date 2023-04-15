import Slider from "react-slick";
import BlogItem from "./BlogItem/blogItem";
import './/BlogItem/blogItem.scss'

const TopBlog = () => {
    const settings = {
        dots: true,
        dotsClass:'customDots',
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "5px",
                }}
            >
                <ul style={{ margin: "2px" }}> {dots} </ul>
            </div>
        ),

        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height:"12px",
                    color: "#000",
                    borderRadius: "50%",
                    border:'1px solid #E97425',
                }}
            >
              {/* {i + 1} */}
            </div>
        ),
        responsive: [
        
        {
            breakpoint: 1250,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 915,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    
    
    return ( 
        <article className="topBlog mb-10">
            <section className="title text-center mb-14">
                <h2 className="text-2xl lsm:text-3xl lg:text-4xl capitalize font-semibold font-[Oswald]">recent updated <span className="text-[#E97542] font-[Oswald]">blogs</span></h2>
            </section>

            <section className="blogItemWrapper w-full">
                <Slider {...settings} className='blogSlider'>
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </Slider>
                
            </section>
        </article>
    );
}

export default TopBlog;