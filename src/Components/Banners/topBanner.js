import bannerImg from '../../Assets/imgs/slide4.jpg'
const TopBanner = () => {
    return ( 
        <article className="topBanner flex flex-wrap justify-between items-center w-full h-full">
            <section className="leftPart md:basis-[47%] mb-12 md:mb-0">
                <div className="title">
                    <h2 className="uppercase text-xl mb-3 md:text-3xl md:mb-0 font-bold font-[Oswald] text-gray-800 leading-snug">ALL BRANds for MEN'S SUITS ARE FLAT <span className="text-[#e97542] font-[Oswald]">30% DISCOUNT</span></h2>
                    <p className='text-gray-700 text-sm md:text-lg mt-7'>Visit our shop to see amazing creations from our designers.</p>
                    <a href='#' className='capitalize bg-transparent text-[#E97542] text-xs md:text-lg border-[#E97542] border-2 rounded-lg px-4 md:px-6 py-2 mt-6 block w-fit transition-all duration-300 hover:bg-[#E97542] hover:text-white hover:border-transparent'>Shop Now</a>
                </div>
            </section>

            <section className="rightPart w-full h-full md:basis-[47%]">
                <div className="imgThumbnail w-full h-full  max-h-[220px] md:max-h-full overflow-hidden group rounded-md">
                    <img src={bannerImg} alt='Men Suit' className='w-full h-full rounded-md transition-all duration-500 group-hover:scale-110' />
                </div>
            </section>
        </article>
    );
}

export default TopBanner;