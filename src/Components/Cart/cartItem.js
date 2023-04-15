import shirt from '../../Assets/imgs/shirt2.jpg'
const CartItem = (props) => {
    return ( 
        <>
            <div className="">
                <img src={props.src} alt={props.alt} className='rounded-md bg-slate-800 w-10 h-8' />
            </div>
            <div className='text-center'>{props.qun}</div>
            <div className='text-center'>{props.price}$</div>
            <div className='text-[#E97425] font-bold text-right'><span className='cursor-pointer' onClick={props.filterOut}>X</span></div>
        </>
    );
}

export default CartItem;