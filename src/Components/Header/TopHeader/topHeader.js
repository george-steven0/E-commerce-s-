import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import HeaderLogin from "../../Auth/headerLogin/headerLogin";
import Cart from "../../Cart/cart";

const TopHeader = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const showLoginHandler = (e)=>{
        e.preventDefault()
        let show = showLogin
        setShowLogin(!show)
    }

    const showCartHandler = (e)=>{
        e.preventDefault()
        let show = showCart
        setShowCart(!show)
    }


    return (  
        <section className="topHeader flex flex-wrap px-2">
            <div className="leftTopHeader basis-[100%] md:basis-[80%] lg:basis-1/2 md:text-left text-center">
                <span className="capitalize font-semibold text-white">special discount today up to 40%, click here for <FaRegHandPointRight className="m-0 inline" /> <a href="#" className="text-[#E97425]">more details</a></span>
            </div>

            <div className="rightTopHeader basis-[100%] md:basis-[20%] lg:basis-1/2 text-right">
                <ul className=" flex justify-center md:justify-end pl-0 p-0 mt-3 md:mt-0">
                    <li className="mr-4">
                        <a href="#" className="inline-block w-9 h-9 rounded-3xl bg-[#c8c7c78c] text-center leading-10" onClick={showLoginHandler}><FontAwesomeIcon icon={faUser} className='text-xl text-white' /></a>
                    </li>

                    <li>
                        <a href="#" className="inline-block w-9 h-9 rounded-3xl bg-[#c8c7c78c] text-center leading-10" onClick={showCartHandler}><FontAwesomeIcon icon={faCartPlus} className='text-xl text-white' /></a>
                    </li>
                </ul>
            </div>

            <section className={`headerLoginWrapper lg:w-[450px] md:w-[500px] w-full fixed top-0 transition-all duration-500 z-50 ${showLogin === false ? 'right-[-100%]' : 'right-[0]'}`}>
                <HeaderLogin toggle = {showLoginHandler} />
            </section>

            <section className={`cartWrapper lg:w-[450px] md:w-[500px] w-full fixed top-0 transition-all duration-500 z-50 ${showCart === false ? 'right-[-100%]' : 'right-[0]'}`}>
                <Cart toggleCart = {showCartHandler} />
            </section>
        </section>
    );
}

export default TopHeader;