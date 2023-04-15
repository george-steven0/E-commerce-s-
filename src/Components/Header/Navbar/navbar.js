import { faListUl, faPlus, faSearch, faTimes,faHome,faShoppingBag, faTable,faPhone, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import './navbar.scss'
import Search from "./Search/search";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    // const [respNav, setrespNav] = useState(false)
    const [showMenu, setshowMenu] = useState(false)

    const toggleSearch = ()=>{
        let show = showSearch
        setShowSearch(!show)
    }

    const toggleMenu = ()=>{
        let menu = showMenu
        setshowMenu(!menu)
    }

    // useEffect(() => {
    //     if(window.innerWidth <= 600){
    //         setrespNav(true)
    //     } 
    // }, [])

    const navLinks = [
        {id:1, name:'Home', src:"/", icon:faHome},
        {id:2, name:'Store', src:"/store", icon:faShoppingBag},
        {id:3, name:'Category', src:"/", class:"category", icon:faTable},
        {id:4, name:'About', src:"/about", icon:faInfo},
        {id:5, name:'Contact', src:"/contact", icon:faPhone}
    ]
    const links = navLinks.map( (item,index)=>{
        return(
            <li className={`${item?.class ? "c-"+item.class : ""} md:text-[16px] lg:text-[18px] mr-0 md:mr-2 xmd:mr-4 lg:mr-4 mb-3 md:mb-0 hover:bg-[#E97425] md:hover:bg-[transparent] py-1 px-2 md:py-0 md:px-0 text-white md:text-black`} key={item.id}>
                {item.class !== 'category' ? <Link to={item.src} className={`transition-all w-full block duration-300 hover:text-[#fff] md:hover:text-[#E97425] cursor-pointer md:text-white`}><FontAwesomeIcon className="md:hidden hover:text-[#fff]" icon={item.icon} /> {item.name}</Link> : <span className={`transition-all duration-300 hover:text-[#fff] md:hover:text-[#E97425] cursor-pointer md:text-white flex items-center`}><FontAwesomeIcon icon={item.icon} className="md:hidden" /> {item.name}</span>}
                {item.class === 'category' ? 
                    <div className="category-wrapper md:-left-[240%] lg:-left-[200%] max-w-[300px] md:max-w-[350px]">
                        <ul className="grid grid-cols-3 justify-between items-center text-center [&>li]:font-normal [&>li]:text-[#484848]">
                            {[...Array(50)].map( (_,index)=>{
                                return <li key={index}>Category {index+1}</li>
                            } )}
                        </ul>
                    </div>
                    : null
                }
            </li>
        )
    } )

    return ( 
        <article className={`navbar flex flex-wrap justify-between px-2 items-center mt-4 md:mt-0`}>
            <section className={`navbarLeftWrapper basis-[100%] flex items-center md:block md:basis-auto`}>
                <span className={`font-bold lg:mr-28 sm:mr-12 md:mr-8 text-[19px] md:text-[20px] lg:text-[30px] text-white`}><span className="text-[#E97425]">Thunder</span> Store</span>

                <span className="inline-flex items-start cursor-pointer" onClick={toggleSearch}> <FontAwesomeIcon icon={faSearch} className='text-[20px] mr-3 ml-5 md:ml-0 text-white' /> <span className="md:text-[16px] lg:text-[19px] hidden md:inline text-white">Search Here</span> </span>
                <span className="ml-auto relative z-10 md:hidden sm:inline"><FontAwesomeIcon icon={faListUl} className='text-2xl cursor-pointer text-[#E97542]' onClick={toggleMenu} /></span>
            </section>

            <section className={`navbarRightWrapper md:flex basis-[100%] md:basis-auto`}>
                <ul className={`navlist text-left fixed top-0 z-20 h-screen min-w-[280px] max-w-[450px] pt-12 md:pt-0 md:max-w-none md:static md:h-auto  md:flex font-semibold transition-all duration-500 md:basis-auto bg-[rgba(0,0,0,.95)] md:bg-transparent rounded-md md:rounded-none sm:respUl ${showMenu ? 'left-0' : 'sm:-left-[200%]'}`}>
                    {links}
                    <span className="absolute z-30 top-0 right-0 text-white md:hidden pt-3 pr-2"><FontAwesomeIcon icon={faTimes} className="text-4xl" onClick={toggleMenu}  /></span>
                </ul>     
                
            </section>

            <section className={`searchOverlay fixed transition-all duration-300 ${showSearch === false ? 'scale-0' : 'scale-1'} top-0  bottom-0 left-0 right-0 w-full h-screen z-30 bg-[#00000079]`}>
                <Search toggle={toggleSearch} />
            </section>
        </article>
    );
}

export default Navbar;