const ContactInfo = () => {
    return ( 
        <div className="info-wrapper grid grid-cols-1 md:grid-cols-2 gap-3  w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto py-10 mt-12 px-3 xl:px-0">
            <div className="info-left">
                <div className="info-title mb-5">
                    <h2 className="text-4xl uppercase mb-2 font-semibold">get in <span className="text-[#ff7135]">touch</span></h2>
                    <p className="text-[#818181] font-normal">We're ready to lead you into the future with Business Services</p>
                </div>

                <div className="info-details mb-12">
                    <p className="capitalize text-[#ff7135] mb-3 text-lg font-semibold">call us: <span className="text-black font-light">+(20)0125568862</span></p>
                    <p className="capitalize text-[#ff7135] text-lg font-semibold">Email: <span className="text-black font-light">info@example.com</span></p>
                    <p className="capitalize mt-6 font-light text-[#818181] text-lg tracking-wide">32 new cairo st,kurba 223 cairo, egypt</p>
                </div>

                <div className="working-hours">

                    <div className="info-title mb-5">
                        <h2 className="text-4xl uppercase mb-2 font-semibold">working <span className="text-[#ff7135]">hours</span></h2>
                    </div>

                    <div className="working-details">
                        <ul className="mb-6">
                            <li className="">
                                <p className="capitalize text-[#323232] mb-3 text-xl font-semibold">Business Service:</p>
                            </li>

                            <li className="[&>p]:mb-1 [&>p]:text-[#818181] [&>p]:tracking-wide">
                                <p>Monday to Friday 8.00 am - 6.00 pm</p>
                                <p>Saturday and Sunday - Closed</p>
                            </li>
                        </ul>
                        
                        <ul>
                            <li>
                                <p className="capitalize text-[#323232] mb-3 text-xl font-semibold">Customer support:</p>
                            </li>

                            <li className="[&>p]:mb-1 [&>p]:text-[#818181] [&>p]:tracking-wide">
                                <p>Monday to Friday 8.00 am - 6.00 pm</p>
                                <p>Saturday 10.00 am - 4.00 pm</p>
                                <p>Sunday - Closed</p>
                            </li>
                        </ul>
                        
                    </div>

                </div>

            </div>

            <div className="info-right">
                <iframe
                    title="map"
                    className="w-full h-full rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" 
                >
                    
                </iframe>
            </div>
        </div>
    );
}

export default ContactInfo;