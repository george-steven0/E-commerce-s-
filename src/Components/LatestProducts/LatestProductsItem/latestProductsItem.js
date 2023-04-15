import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEye } from '@fortawesome/free-solid-svg-icons';
const LatestProductItem = (props) => {
    // basis-full md:basis-2/5 lg:basis-[23%]
    return ( 
        <div className="latestProductItemWrapper lsm:m-0 lg:mx-2 flex flex-col justify-center items-center shadow-md pb-2 overflow-hidden rounded-md group mb-10">
            <div className='productImg w-full h-[19rem] mb-3 relative overflow-hidden'>
                <img src={props.src} alt='model' className='w-full h-full absolute top-0'  />
                <img src={props.src2} alt='model' className='w-full h-full absolute top-0 opacity-0  transition-all duration-500 group-hover:opacity-100'  />
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
    );
}

export default LatestProductItem;