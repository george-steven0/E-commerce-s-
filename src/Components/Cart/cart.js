import { faLock, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "./cartItem";
import shirt from '../../Assets/imgs/shirt2.jpg'
import shirt2 from '../../Assets/imgs/shirt.webp'
import './cart.scss'
import { useState } from "react";

const Cart = (props) => {

    const [cartItem, setcartItem] = useState([
        {id:1, src:shirt2, alt:"Shirt" , q:5, price:120},
        {id:2, src:shirt, alt:"Shirt" , q:8, price:1800},
        {id:3, src:shirt2,alt:"Shirt" ,  q:10, price:12000},
        {id:4, src:shirt, alt:"Shirt" , q:12, price:10},
        {id:5, src:shirt, alt:"Shirt" , q:12, price:10},
        {id:6, src:shirt2, alt:"Shirt" , q:12, price:10},
    ])

    // (index,item)=> item.filter(index,ele=>{
    //     return ele.id !== index
    // })

    const remove = (id) =>{
        const newList = cartItem.filter((item)=>item.id !==id)

        setcartItem(newList)
    }
    const listCartItem = cartItem.map( (item,index)=>{
        return (
            <div key={item.id} className="grid grid-cols-4 mb-2 border-t-[1px] border-[#c5c1c18e] rounded-md px-3 py-2 pt-2 transition-all duration-300 hover:bg-[#e9732528]">
                <CartItem  
                    src={item.src} 
                    qun={item.q} 
                    price={item.price} 
                    alt={item.alt} 
                    filterOut={()=>remove(item.id)}  
                />
            </div>
        )
    } )

    let total = 0
    let totalCartPrice = cartItem.map( (item)=>{
        return  total += item.price
    } )

    // console.log(total);

    return ( 
        <article className="cart w-full h-screen">
            <section className="absolute top-4 left-4 w-8 h-8 rounded-[50%] bg-white cursor-pointer z-10 text-center leading-8" onClick={props.toggleCart}><FontAwesomeIcon className="text-[#E97425]" icon ={faTimes}  /></section>
            
            <section className="overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba] px-8">
                <div className="cartItemsWrapper p-4 bg-[#f4f4f4df] mt-[30%] rounded-md ">
                    {/* Title */}
                    <div className="title flex justify-between align-middle items-center">
                        <div className="capitalize font-medium text-2xl text-black">shopping <span className="text-[#E97425]">cart</span></div>
                        <div className="capitalize font-normal text-base "><span className="text-[#6b6b6b] font-bold">{cartItem.length}</span> items</div>
                    </div>

                    {/* Cart Items */}
                    <div className="cartProductWrapper mt-8 max-h-[250px] overflow-hidden overflow-y-scroll scroll-smooth">

                        <div className="grid grid-cols-4 px-3 py-2 rounded-md sticky top-0 bg-[#f4f4f4]">
                            <div>Item</div>
                            <div className='text-center'>Qunt</div>
                            <div className='text-center'>Price</div>
                            <div></div>
                        </div>

                        <div className="mt-4">
                            {listCartItem}
                        </div>
                    </div>

                    <div className="cartCheckout grid grid-cols-2 justify-between items-center mt-7">
                        <button className="transition-all duration-300 bg-transparent border-[1px] border-[#E97425] hover:bg-[#E97425] rounded-lg text-[#E97425] hover:text-white px-7 py-2">Checkout</button>
                        <span className="text-right">{total} $</span>
                    </div>


                </div>
            </section>
        </article>
    );
}

export default Cart;