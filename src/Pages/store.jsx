import Path from "../Components/Path/path";
import storeLogo from '../Assets/imgs/news1.jpg'
import Filter from "../Components/Store-Components/storeFilter";
import StoreProducts from "../Components/Store-Components/storeProducts";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Components/Redux/Slices/Shop/products";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../Components/Redux/Slices/Shop/category";
import StoreBanner from "../Components/Store-Components/storeBanner";

const Store = () => {
    const [smallWindowWidth,setsmallWindowWidth] = useState(false)
    const {products} = useSelector(state=>state)
    const {category} = useSelector(state=>state)
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()

// console.log(category);

    useEffect(() => {
        if(window.innerWidth <=400){
            setsmallWindowWidth(true)
        } else{
            setsmallWindowWidth(false)
        }

        dispatch(getAllProducts())
        dispatch(getAllCategory())

    }, [])

    const onPageChange = (value)=>{
        setPage(value)
    }

    useEffect(() => {
        dispatch(getAllProducts({page}))
    }, [page])
    
    const itemPerPage = 9
    const startRange = ((page - 1) * (itemPerPage + 1)); 
    const endRange = Math.min(page * itemPerPage, products?.totalData?.length);

    const minPrice = products?.totalData?.reduce( (prev,current)=>prev?.price < current?.price ? prev : current ,products?.totalData )
    const maxPrice = products?.totalData?.reduce( (prev,current)=>prev?.price > current?.price ? prev : current ,products?.totalData)
    // console.log(minPrice?.price);
    // console.log(maxPrice?.price);
    return ( 
        <section className="store-wrapper bg-gray-100">
            <div className="Path-Container">
                <Path src={storeLogo} title='Store'/>
            </div>

            <section className="store-components relative grid grid-cols-1 xmd:grid-cols-5 lg:grid-cols-4 gap-x-8 justify-between items-start  w-full lsm:max-w-[550px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] m-auto py-10 pb-16 px-3 xl:px-2">
                <div className="left-component xmd:col-span-2 lg:col-span-1">
                    <Filter 
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        category={category}
                    />
                </div>

                <div className="right-component lg:min-h-[1183px] lg:max-h-[1185px] xmd:col-span-3 bg-white py-8 px-2 md:py-3 md:px-3 lg:py-6 lg:px-3 xl:px-10 rounded-md mt-6 md:mt-0">
                    <StoreProducts 
                        showingTotal={products?.totalData?.length} 
                        startRange={startRange} 
                        endRange={endRange} 
                        products = {products}
                    />
                </div>

                <div className="pagination mt-5 absolute bottom-4 left-3 lg:left-auto lg:bottom-4 lg:right-3">
                {/* Math.ceil((products?.totalData?.length) / 9) */}
                    <Pagination 
                        count={Math.ceil((products?.totalData?.length) / 9)} 
                        variant="outlined" 
                        color="primary" 
                        siblingCount={1}  
                        size={smallWindowWidth ? 'small' : 'medium'}
                        page={page}
                        onChange={(event, value) =>onPageChange(value)}
                    />
                </div>

            </section>

            <section className="store-banner-wrapper">
                <StoreBanner />
            </section>
        </section>
    );
}

export default Store;