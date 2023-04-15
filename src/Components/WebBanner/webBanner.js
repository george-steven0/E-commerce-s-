import bannerLogo from '../../Assets/imgs/slide5.jpeg'
import './webBanner.scss'
const WebBanner = () => {
    return ( 
        <div className='w-full h-full webBannerContainer'>
            <div className='webBannerCaption relative z-10 h-full w-full lsm:max-w-[550px] md:max-w-[720px] lg:max-w-[1140px] m-auto'>
                <div className='h-full w-full lg:max-w-[50%] flex flex-col justify-evenly items-center text-center m-auto px-3  lg:px-0'> 
                    <h3 className='text-2xl md:text-4xl text-white font-extrabold font-[Oswald]'>TONS OF PRODUCTS & OPTIONS TO <span className='text-[#E97542] font-[Oswald]'>CHANGE</span></h3>
                    <p className='text-[#fffaf0] text-lg'>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
                    <button className='px-10 py-2 text-black bg-white rounded-3xl transition-all duration-300 hover:bg-[#E97542] hover:text-white font-semibold'>Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default WebBanner;