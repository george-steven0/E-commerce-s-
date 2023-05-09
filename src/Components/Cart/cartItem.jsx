import { useEffect, useState } from 'react';
import shirt from '../../Assets/imgs/shirt2.jpg'
import { useSelector } from 'react-redux';
const CartItem = ({src,qun,price,alt,filterOut}) => {
    // console.log(filterOut);
    return ( 
        <>
            <div className="">
                <img src={src} alt={alt} className='rounded-md bg-slate-800 w-10 h-8' />
            </div>
            <div className='text-center'>{qun}</div>
            <div className='text-center'>{price}$</div>
            <div className='text-[#E97425] font-bold text-right'><span className='cursor-pointer' onClick={filterOut}>X</span></div>
        </>
    );
}

export default CartItem;