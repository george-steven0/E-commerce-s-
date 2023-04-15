import abs1img from '../../Assets/imgs/slide1.jpg'

const AboutS2 = () => {
    const h3Css = 'text-2xl text-[#242424] capitalize mb-2'
    const pCss = 'text-[#6b778d] font-normal font-[Lato]'
    return ( 
        <div className="flex flex-wrap justify-between items-start w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto py-10 px-3 xl:px-0">

            <div className="about-s2-left basis-full lg:basis-[38%] overflow-hidden rounded-md h-full mb-10 lg:mb-0">
                <img src={abs1img} alt="abs2-img" className="w-full min-h-[500px] object-cover transition-all duration-300 hover:scale-110" />
            </div>

            <div className="about-s2-right basis-full lg:basis-[58%] text-left  h-full">
                <h2 className="uppercase text-3xl md:text-4xl font-semibold text-[#242424] mb-7">What we <span className="text-[#FF7315]">offer</span></h2>
                <p className="text-[#6b778d] font-light tracking-wide text-sm md:text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus aliquam, cumque dignissimos aliquid dolorum reprehenderit error iusto. Repellendus aut obcaecati dicta animi ex. Id similique cupiditate aut minima culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempore corporis facere labore consequatur id dolor, aut illo, dolorum soluta porro? Quasi rerum harum quis possimus non rem qui porro!</p>

                <div className='about-offers grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-3 gap-y-6'>
                    <div>
                        <h3 className={h3Css}>01. Visit store</h3>
                        <p className={pCss}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magni aliquam! Labore explicabo illo tempore neque doloremque?  ipsa possimus corrupti!</p>
                    </div>

                    <div>
                        <h3 className={h3Css}>02. add to cart</h3>
                        <p className={pCss}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magni aliquam! Labore explicabo illo tempore neque doloremque?  ipsa possimus corrupti!</p>
                    </div>

                    <div>
                        <h3 className={h3Css}>03. gift cards</h3>
                        <p className={pCss}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magni aliquam! Labore explicabo illo tempore neque doloremque?  ipsa possimus corrupti!</p>
                    </div>

                    <div>
                        <h3 className={h3Css}>04. unique shop</h3>
                        <p className={pCss}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magni aliquam! Labore explicabo illo tempore neque doloremque?  ipsa possimus corrupti!</p>
                    </div>

                
                </div>
            </div>

            
            
        </div>
    );
}

export default AboutS2;