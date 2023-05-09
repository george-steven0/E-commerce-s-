import LatestProductItem from "./LatestProductsItem/latestProductsItem";
import {useState} from 'react'
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "../Redux/Slices/Shop/products";
import StoreItem from "../ProductItem/storeItem";
import { addToCart } from "../Redux/Slices/Cart/cartSlice";
const LatestProducts = () => {
    const topData = useSelector(state=>state?.products)
    const dispatch = useDispatch()
    // console.log(topData);

    useEffect(() => {
        dispatch(getTopProducts())
    }, [])

    const cartState = useSelector(state=>state)
    // console.log(cartState?.cart);

    const addToCartHandler = (product)=>{
        // console.log(product);
        if(product){
            dispatch(addToCart({product}))
        }

    }

    const itemList = topData?.top.map( (item,index)=>{
        return (
            <Fragment key={index}>
                <StoreItem 
                    imgs={item.images}
                    category={item.category}
                    description={item.description}
                    id={item.id}
                    price={item.price}
                    // rate={item.rating}
                    name={item.title}
                    addCart = {()=>addToCartHandler(item)}
                />
            </Fragment>
        )
    } )
    
    //flex flex-wrap
    return ( 
        <div className="LatestProductsContainer">
            <div className="latestProductTitle text-center w-full mb-14">
                <h3 className="uppercase text-xl md:text-3xl lg:text-4xl font-extrabold font-[Oswald] mb-2">latest <span className="text-[#E97542] font-[Oswald]">products</span></h3>
                <p className="text-gray-500 font-[Oswald] tracking-wide text-base">Handpicked Favourites just for you</p>
            </div>

            <div className="latestProductsItemWrapper grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center md:justify-evenly items-center">
                {itemList}                
            </div>
        </div>
    );
}

export default LatestProducts;