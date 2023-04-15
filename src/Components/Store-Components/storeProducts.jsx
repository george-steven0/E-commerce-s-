import StoreItem from "../ProductItem/storeItem";
import img1 from '../../Assets/imgs/model1.jpg'
import img2 from '../../Assets/imgs/model2.jpg'
import img3 from '../../Assets/imgs/model3.jpg'
import img4 from '../../Assets/imgs/model4.jpg'
import { Pagination } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import Modal from "../Modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slices/Shop/products";
import loading from '../../Assets/imgs/loading.gif'
import empty from '../../Assets/imgs/empty.gif'
const StoreProducts = ({showingTotal,startRange,endRange,products}) => {
    // console.log(products);
    return ( 
        <div className="store-products-wrapper h-full">
            <div className="flex flex-wrap justify-center md:justify-between items-center store-heading mb-8">
                <div className="store-title mb-3 md:mb-0 basis-full md:basis-auto text-center">
                    <p className="capitalize text-base font-light text-[#3c3c3c]">showing {startRange} - {endRange} of {showingTotal} results</p>
                </div>

                <div className="store-sorting  basis-full md:basis-auto text-center">
                    <select className="capitalize font-light text-[#2d2d2d] py-1 px-4 border-[1px] border-[#ababab] rounded-md">
                        <option>default sorting </option>

                        <option>popularity </option>

                        <option>top rated </option>
                    </select>
                </div>
            </div>

            <div className="store-products-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-5 gax-x-3">
                {products?.loading ? 
                    <div className="col-span-3 w-full h-auto text-center min-h-[500px]">
                        <img className="w-[350px] h-[350px] m-auto md:mt-20 scale-50 lsm:scale-75 lg:scale-100" src={loading} alt="Loading..." />
                    </div>
                    : 
                    products?.products?.length === 0 ? 
                    <div className="col-span-3 w-full h-auto text-center min-h-[500px]">
                        <img className="w-[350px] h-[350px] m-auto md:mt-0" src={empty} alt="empty..." />
                        <p className="capitalize text-[#6893FF] -mt-10">notthing here :(</p>
                    </div>
                    : 
                    products?.products?.map(item=>{
                        return(
                            <Fragment key={item.id}>
                                <StoreItem 
                                    imgs={item.images}
                                    category={item.category}
                                    description={item.description}
                                    id={item.id}
                                    price={item.price}
                                    // rate={item.rating}
                                    name={item.title}
                                />
                            </Fragment>
                        )
                    })
                }
                
            </div>

        </div>
    );
}

export default StoreProducts;