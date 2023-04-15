import { faCcAmex, faCcMastercard, faCcPaypal, faCcVisa, faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    const listItemCss = "mr-5"
    const listLinkCss = "rounded-[50%] text-lg leading-9 xl:leading-[2.5rem] xl:text-2xl bg-[#3a3535] rounded-[50%] w-11 h-11 text-center block transition-all duration-300 hover:bg-[#e97542]"
    const footerLinksCss = "text-[#a09292] mb-2 transition-all duration-300 hover:text-[#E97542] cursor-pointer font-light"

    const footerCss = '  lg:px-28 '
    return ( 
        <>
            <footer className="footer bg-[#232020] text-white py-14 md:py-16 lg:py-32 px-5 md:px-8">

                <div className="container w-full max-w-full lsm:max-w-[550px] md:max-w-[720px] lg:max-w-[1140px] m-auto xl:max-w-[1670px]">
                    <div className=" flex flex-wrap justify-around items-start mb-10 pb-[55px] border-b-[1px] border-[#a5a2a2ac]">
                        
                        <section className="leftWrapper basis-full lg:basis-[30%] mr-auto mb-10 lg:mb-0">
                            <div className="leftWrapperTitle">
                                <h1 className="text-3xl md:text-4xl xl:text-5xl text-white capitalize font-semibold font-[Oswald] mb-9"><span className="text-[#e97542]">thunder</span> store</h1>
                                <p className="text-base xl:text-lg text-gray-400 font-[Oswald] font-light">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo non suscipit.</p>

                                <ul className="list-none flex mt-10 md:mt-10">
                                    <li className={listItemCss}><a href="#" className={listLinkCss + 'leading-[3rem]'}> <FontAwesomeIcon icon={faFacebookF} /> </a></li>
                                    <li className={listItemCss}><a href="#" className={listLinkCss}> <FontAwesomeIcon icon={faTwitter} /> </a></li>
                                    <li className={listItemCss}><a href="#" className={listLinkCss}> <FontAwesomeIcon icon={faGooglePlusG} /> </a></li>
                                    <li className={listItemCss}><a href="#" className={listLinkCss}> <FontAwesomeIcon icon={faInstagram} /> </a></li>
                                </ul>
                            </div>
                        </section>

                        <section className="rightWrapper basis-full lg:basis-[70%] ml-auto px-1 lg:px-9">
                            <div className="discounts w-full h-full">
                                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl leading-[1.3] md:leading-[1.5] font-semibold font-[Oswald] mb-10 md:mb-14">Women's Day Special Offer All Branded Sandals are Flat 50% Discount</h2>
                                
                                <div className="Foo-Links grid grid-cols-1 md:grid-cols-2 gap-5">
                                    
                                    <div className="sub-links">
                                        <h6 className="text-xl font-semibold uppercase tracking-wide font-[Oswald] mb-5">Useful links</h6>
                                        <div className="useful-links grid grid-cols-2">
                                            <ul>
                                                <li className={footerLinksCss}><a>Home</a></li>
                                                <li className={footerLinksCss}><a>About</a></li>
                                                <li className={footerLinksCss}><a>Blog</a></li>
                                                <li className={footerLinksCss}><a>Contact</a></li>
                                            </ul>

                                            <ul>
                                                <li className={footerLinksCss}><a>Careers</a></li>
                                                <li className={footerLinksCss}><a>Privacy Policy</a></li>
                                                <li className={footerLinksCss}><a>Terms & Conditions</a></li>
                                                <li className={footerLinksCss}><a>Support</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="our-store">
                                        <h6 className="text-xl font-semibold uppercase tracking-wide font-[Oswald] mb-5">Our Store</h6>
                                        <div className="address mb-16">
                                            <p className="text-[17px] font-[serif] leading-[1.5] text-[#a09292] font-normal max-h-[80px] overflow-y-hidden">49436 Broaddus Honey Court Avenue, Madisonville KY 95020, United States of America</p>
                                        </div>

                                        <div className="payment-methods">
                                            <h6 className="text-xl font-semibold uppercase tracking-wide font-[Oswald] mb-4">we accept:</h6>

                                            <ul className="flex flex-wrap gap-x-3 md:gap-x-5 text-3xl md:text-4xl">
                                                <li><FontAwesomeIcon className="opacity-50 transition-all duration-300 hover:opacity-100 cursor-pointer" icon={faCcVisa}/></li>
                                                <li><FontAwesomeIcon className="opacity-50 transition-all duration-300 hover:opacity-100 cursor-pointer" icon={faCcMastercard}/></li>
                                                <li><FontAwesomeIcon className="opacity-50 transition-all duration-300 hover:opacity-100 cursor-pointer" icon={faCcPaypal}/></li>
                                                <li><FontAwesomeIcon className="opacity-50 transition-all duration-300 hover:opacity-100 cursor-pointer" icon={faCcAmex}/></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="copy-rights px-2 md:px-20">
                        <div className="flex flex-wrap justify-between items-center text-center md:text-[unset]">
                            <div className="grow-[1] lg:grow-[0]  mb-3 lg:mb-0">
                                <ul className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-x-3 font-[serif] font-light tracking-wide text-base text-[#a09292] ">
                                    <li className="mb-1 lg:mb-0transition-all duration-300 hover:text-[#e97542] cursor-pointer">Privacy Policy</li>
                                    <li className="mb-1 lg:mb-0transition-all duration-300 hover:text-[#e97542] cursor-pointer">Terms & Conditions</li>
                                    <li className="mb-1 lg:mb-0transition-all duration-300 hover:text-[#e97542] cursor-pointer">Customer Care</li>
                                </ul>
                            </div>

                            <div className="grow-[1] lg:grow-[0]">
                                <p className="font-[Lato] font-normal tracking-wide text-base text-[#a09292] capitalize">© 2020 <span className="text-[#e97542]">Thunder</span> Store. All rights reserved</p>
                            </div>
                        </div>
                    </section>
                </div>

            </footer>
        </>
    );
}

export default Footer;