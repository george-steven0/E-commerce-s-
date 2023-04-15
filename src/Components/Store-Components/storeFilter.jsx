import { faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import '../../Assets/Styles/store.scss'
import { Skeleton, Slider } from "@mui/material";
import BestSellers from "./bestSellers";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { getAllProducts } from "../Redux/Slices/Shop/products";

const useStyles = makeStyles({
    root: {
      color: '#ff7135 !important', // change the color of the slider
    //   height: 8, // change the height of the slider
    },
    thumb: {
    //   height: 24, // change the height of the thumb
    //   width: 24, // change the width of the thumb
    //   backgroundColor: '#fff', // change the color of the thumb
      border: '2px solid #ff7135', // add a border to the thumb
    //   marginTop: -8, // position the thumb properly
    //   marginLeft: -12, // position the thumb properly
      '&:focus, &:hover, &$active': {
        boxShadow: '0 0 0px 8px #ff72353d !important',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8, // change the height of the track
      borderRadius: 4, // change the border radius of the track
      backgroundColor : '#3c3c3c !important',
      border : '#000 !important'
    },
    rail: {
      height: 8, // change the height of the rail
      borderRadius: 4, // change the border radius of the rail
      backgroundColor : "#ff7135 !important"
    },
})

const Filter = ({minPrice, maxPrice, category}) => {

    function valuetext(value) {
        return `${value}°$`;
    }       

    const [value, setValue] = useState([minPrice?.price, maxPrice?.price]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [numItems, setNumItems] = useState(3);

    const toggleMoreItems = (e)=>{
        e.preventDefault()
        setNumItems(numItems === 3 ? category?.category?.length : 3)
    }
    const products = useSelector(state=>state?.products?.totalData)
    // console.log(products);

    const categoryLengths = products?.reduce((prev, current) => {
    if (prev[current?.category?.name]) {
        prev[current?.category?.name]++;
    } else {
        prev[current?.category?.name] = 1;
    }
    return prev;
    }, {});

    //   console.log( Object.keys(categoryLengths)); //return array of keys
    //   console.log(category); //return object of keys and values
    //   console.log( categoryLengths[Object.keys(categoryLengths)[0]] ); 
    
    const classes = useStyles();

    const topSales = useSelector(state=>state.products)
    const dispatch = useDispatch()
    // console.log(topSales);

    //search by name
    const [textValue,setTextValue] = useState("")
    const textSearchHandler = (e)=>{
        let text = e.target.value
        setTextValue(text)
    }

    const submitTextSearch = (e)=>{
        e.preventDefault()
        // console.log(textValue);
        dispatch(getAllProducts({textValue}))
    }

    console.log(topSales?.loading);

    return ( 
        <section className="store-filter-wrapper">
            <form className="w-full flex flex-wrap flex-col justify-center items-start">

                <div className="form-search flex flex-wrap justify-center items-center w-full mb-3">
                    <input type="search" value={textValue} onChange={textSearchHandler} placeholder="Search" name="search" className="outline-none py-[5px] px-3 rounded-sm border-gray-200 border-2 w-[77%] transition-all duration-300 focus:shadow-md"/>
                    <button onClick={submitTextSearch} className="search-btn bg-[#393939] transition-all duration-300 hover:bg-[#ff7135] text-white text-lg px-3 py-1 rounded-sm ml-1 w-[20%]"> <FontAwesomeIcon icon={faAngleRight} /> </button>
                </div>

                <div className="price-range mt-6 w-full">
                    <h2 className="text-[#3c3c3c] text-xl">Filter by <span className="text-[#ff7135]">Price</span></h2>
                    <div className="px-2 mt-3">
                        <Slider
                            getAriaLabel={() => 'Price range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={minPrice?.price ? minPrice?.price : 0}
                            max={maxPrice?.price ? maxPrice?.price : 0}
                            classes={{
                                root: classes.root,
                                thumb: classes.thumb,
                                active: classes.active,
                                valueLabel: classes.valueLabel,
                                track: classes.track,
                                rail: classes.rail,
                            }}
                        />
                    </div>

                    <div className="flex flex-wrap justify-between items-center">
                        {/* <button className="bg-[#ff7135] text-white text-base px-4 py-1 rounded-sm">filter</button> */}
                        <div className="flex flex-wrap justify-end xmd:justify-start items-center w-full [&>span]:ml-3">
                            <span className="text-[16px] font-light text-gray-500 capitalize">price:</span>
                            <span className="text-gray-700 text-[16px] xmd:text-[14px]">{minPrice?.price ? minPrice?.price : 0}$</span>
                            <span className="text-gray-700 text-[16px] xmd:text-[14px]">--</span>
                            <span className="text-gray-700 text-[16px] xmd:text-[14px]">{maxPrice?.price ? maxPrice?.price : 0}$</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 w-full">
                    <h2 className="text-[#3c3c3c] mb-3 text-xl">Categories</h2>

                    <ul className="w-full  [&>li>div>input]:mr-2 [&>li>div>input]:w-[15px] [&>li>div>input]:h-[15px] [&>li>div>label]:capitalize [&>li>div>label]:font-light [&>li>div>label]:text-lg [&>li>div]:flex [&>li>div]:flex-wrap [&>li>div]:items-center [&>li]:mb-2 [&>li]:flex [&>li]:flex-wrap [&>li]:items-center [&>li]:justify-between">
                        { 
                            category?.loading ? 
                                <li>
                                    <Skeleton animation="wave" className="w-full"/>
                                    <Skeleton animation="wave" className="w-full"/>
                                    <Skeleton animation="wave" className="w-full"/>
                                    <Skeleton animation="wave" className="w-full"/> 
                                </li>
                                :
                            category?.category?.slice(0,numItems)?.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <div className="[&>*]:cursor-pointer transition-all duration-300 hover:text-[#ff7135]">
                                        <input type="checkbox" name="" id={item.id} />
                                        <label htmlFor={item.id}>{item.name}</label>
                                    </div>

                                    <div className="font-light">
                                        
                                        (
                                            {Object.keys(categoryLengths).map((item2,index)=>{
                                                if(item2 == item.name){
                                                    return <span key={item2}>{categoryLengths[item2] > 0 ? categoryLengths[item2] : 0}</span>
                                                }
                                            })}
                                        )
                                    </div>
                                </li>
                            )
                            })    
                        }

                        <button onClick={toggleMoreItems}>
                            {numItems === 3 ? 'Show More' : 'Show Less'}
                        </button>
                    </ul>
                </div>
            </form>

            <div className="best-sellers-wrapper mt-6">
                <h2 className="capitalize tracking-wide text-[#3c3c3c] text-xl mb-8">our best <span className="text-[#ff7135]">selling</span></h2>
                {topSales?.loading ? 
                    [...Array(3)].map((item,index)=>{
                        return(
                            <div className="grid grid-cols-3 gap-2 justify-center" key={index}>
                                <div className="h-full row-span-3 [&>span]:origin-top">
                                    <Skeleton animation="wave" height={"115%"} className="m-0 origin-top"/>
                                </div>
    
                                <div className="col-span-2 [&>span]:origin-top">
                                    <Skeleton animation="wave" className="w-full"/>
                                    <Skeleton animation="wave" className="w-full"/>
                                    <Skeleton animation="wave" className="w-full"/>
                                </div>
                            </div>
                        )
                    })
                    
                    : <BestSellers topSales={topSales?.topSales} />
                }
            </div>

        </section>
    );
}

export default Filter;