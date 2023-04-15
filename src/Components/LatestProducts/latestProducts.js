import LatestProductItem from "./LatestProductsItem/latestProductsItem";
import model1 from '../../Assets/imgs/model1.jpg'
import model2 from '../../Assets/imgs/model2.jpg'
import model3 from '../../Assets/imgs/model3.jpg'
import model4 from '../../Assets/imgs/model4.jpg'
import { Fragment } from "react";
const LatestProducts = () => {

    const itemList = [...Array(4)].map( (item,index)=>{
        return (
            <Fragment key={index}>
                <LatestProductItem src={model1} src2={model2} />
                <LatestProductItem src={model3} src2={model4} />
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