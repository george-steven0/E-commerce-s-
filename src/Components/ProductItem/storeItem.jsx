import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import Modal from '../Modal/modal';
import { useState } from 'react';
import { Backdrop, Box, Modal, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from "swiper";

const StoreItem = ({imgs,category,description,id,price,name,addCart}) => {

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
            <div className="StoreItemWrapper lsm:mx-2 lg:mx-2 flex flex-col justify-center items-center shadow-md pb-2 overflow-hidden rounded-md group mb-0">
                <div className='productImg w-full h-[13rem] mb-3 relative overflow-hidden'>
                    <img src={imgs[0]} alt={category?.name} className='w-full h-full absolute top-0 object-fill object-center'  />
                    <img src={imgs[1]} alt={category?.name} className='w-full h-full absolute top-0 opacity-0  transition-all duration-500 group-hover:opacity-100'  />
                    <button onClick={addCart} className='cart capitalize bg-black text-white py-2 px-5 text-center absolute -bottom-[100%] z-10 w-full transition-all duration-300 group-hover:bottom-0 hover:bg-[#E97542]'>Add to cart</button>
                    <button onClick={handleOpen} className='eyeView absolute -right-[100%] top-[35%] -translate-y-[35%] block z-10 bg-white rounded-[50%] text-black text-lg w-9 h-9 transition-all duration-300 hover:bg-[#E97542] hover:text-white group-hover:right-2'><FontAwesomeIcon icon={faEye} /></button>
                    <button onClick={addCart} className='cart absolute -right-[100%] top-[65%] -translate-y-[65%] block z-10 bg-white rounded-[50%] text-black text-lg w-9 h-9 transition-all duration-500 hover:bg-[#E97542] hover:text-white group-hover:right-2'><FontAwesomeIcon icon={faBagShopping} /></button>
                </div>

                <div className='w-full px-2'>
                    <div className='productName text-left w-full  mb-3'>
                        <h2 className='font-[300] font-[Oswald] text-xl transition-all duration-300 cursor-pointer'>{name}</h2>
                        <p className='capitalize font-light text-sm text-[#898989]'>{category.name}</p>
                    </div>

                    <div className='productPrice text-[15px] font-light'>
                        <span ><span className='line-through text-gray-400'>${price > 275 ? price : (275 - price)}</span> - <span className='text-[#2b2b2b]'>${price}</span> </span>
                    </div>

                    <div className='productRating font-light [&>span>svg]:text-[#ffcd35] mt-2'>
                        {[...Array(Math.ceil(Math.random()*5))].map((item,index)=>{
                            return(
                                <span key={index}><FontAwesomeIcon className='' icon={faStar} /></span>
                            )
                        })}
                    </div>
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
                                    className="h-full"
                                >
            
                                {
                                    imgs.map((item,index)=>{
                                        return (
                                            <SwiperSlide key={index} className="w-full h-full rounded-md overflow-hidden">
                                                <img src={item} alt={item} className="w-full h-full" />
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

                            <div className='right-wrapper relative w-full h-full px-4 py-3'>
                                <p className='text-lg mb-1 tracking-wide text-[rgba(0,0,0,0.7)] font-extralight capitalize'>{category.name}</p>
                                <p className='font-normal mb-4 text-3xl lg:text-4xl xl:text-5xl tracking-wide text-[#3c3c3c]'>{name}</p>
                                <p>
                                    <span className='text-[#ff7135] text-lg md:text-xl mr-2'>Price:</span>
                                    <span className='text-[rgba(0,0,0,.4)]'>${price}</span>
                                </p>
                                <p className='text-[rgba(0,0,0,.9)] mt-5 tracking-wide leading-[1.7] font-light'>{description}</p>

                                <div className='mt-14 md:mt-20 w-full text-center'>
                                    <button onClick={addCart} className='w-[100%] py-2 rounded-sm bg-transparent transition-all duration-300 border-2 border-[rgba(0,0,0,.7)] hover:bg-black hover:text-white '>Add to cart</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default StoreItem;

