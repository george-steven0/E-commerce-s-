import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Backdrop, Box, Modal, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";

// Note This is a clone of Store Item Card and there is no need for this card any more 
const LatestProductItem = ({imgs,category,description,id,price,name}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return ( 
        <>
            <div className="latestProductItemWrapper lsm:m-0 lg:mx-2 flex flex-col justify-center items-center shadow-md pb-2 overflow-hidden rounded-md group mb-10">
                <div className='productImg w-full h-[19rem] mb-3 relative overflow-hidden'>
                    {/* <img src={src} alt='model' className='w-full h-full absolute top-0'  />
                    <img src={src2} alt='model' className='w-full h-full absolute top-0 opacity-0  transition-all duration-500 group-hover:opacity-100'  /> */}
                    <button className='capitalize bg-black text-white py-2 px-5 text-center absolute -bottom-[100%] z-10 w-full transition-all duration-300 group-hover:bottom-0 hover:bg-[#E97542]'>Add to cart</button>
                    <button className='absolute -right-[100%] top-[40%] -translate-y-[40%] block z-10 bg-white rounded-[50%] text-black text-lg w-11 h-11 transition-all duration-300 hover:bg-[#E97542] hover:text-white group-hover:right-2'><FontAwesomeIcon icon={faEye} /></button>
                    <button className='absolute -right-[100%] top-[65%] -translate-y-[65%] block z-10 bg-white rounded-[50%] text-black text-lg w-11 h-11 transition-all duration-500 hover:bg-[#E97542] hover:text-white group-hover:right-2'><FontAwesomeIcon icon={faBagShopping} /></button>
                </div>

                <div className='productName'>
                    <h2 className='font-[Oswald] text-2xl mb-3 transition-all duration-300 hover:text-[#E97542] hover:tracking-wider cursor-pointer'>Women Coat</h2>
                </div>

                <div className='productPrice text-[17px] font-light'>
                    <span className='line-through text-gray-400 mr-3'>$775</span>
                    <span className='text-[#2b2b2b]'>$520</span>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                >
                <Box className='absolute top-[5%] shadow-md w-[95%] rounded-md md:w-[80%] lg:w-[70%] xl:w-[70%] overflow-y-scroll md:overflow-auto max-h-[600px] left-[50%] -translate-x-[50%]'>
                    <div className="bg-white m-auto rounded-md relative">
                        <span className='absolute right-3 top-0 text-2xl cursor-pointer z-50' onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></span>

                        <div className='grid grid-cols-1 md:grid-cols-2 gay-y-2 justify-between items-center w-full h-full'>
                            <div className='left-wrapper w-full h-full'>
                                {/* <img  className='w-full h-[350px] md:h-[600px]' src={imgs[0]} alt='pic' /> */}
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
                                    className=""
                                >
            
                                {
                                    // imgs.map(item=>{
                                    //     return (
                                    //         <SwiperSlide className="w-full h-full rounded-md overflow-hidden">
                                    //             <img src={item} alt={item} className="w-full h-full" />
                                    //         </SwiperSlide>
                                    //     )
                                    // })
                                }
                                    
                                    {/* <div className="autoplay-progress" slot="container-end">
                                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                                            <circle cx="24" cy="24" r="20"></circle>
                                        </svg>
                                        <span ref={progressContent}></span>
                                    </div> */}
                                
                                </Swiper>
                            </div>

                            <div className='right-wrapper relative w-full h-full px-4 py-3'>
                                {/* <p className='text-lg mb-1 tracking-wide text-[rgba(0,0,0,0.7)] font-extralight capitalize'>{category.name}</p>
                                <p className='font-normal mb-4 text-3xl lg:text-4xl xl:text-5xl tracking-wide text-[#3c3c3c]'>{name}</p>
                                <p>
                                    <span className='text-[#ff7135] text-lg md:text-xl mr-2'>Price:</span>
                                    <span className='text-[rgba(0,0,0,.4)]'>${price}</span>
                                </p>
                                <p className='text-[rgba(0,0,0,.9)] mt-5 tracking-wide leading-[1.7] font-light'>{description}</p> */}

                                <div className='mt-14 md:mt-20 w-full text-center'>
                                    <button className='w-[100%] py-2 rounded-sm bg-transparent transition-all duration-300 border-2 border-[rgba(0,0,0,.7)] hover:bg-black hover:text-white '>Add to cart</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default LatestProductItem;