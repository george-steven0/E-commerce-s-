import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutBanner from '../../Assets/imgs/about-banner2.jpg'

const ContactBanner = () => {

    return ( 
        <div>
            <div className="aboutBannerWrapper mt-20 w-full bg-no-repeat bg-cover bg-fixed bg-center" style={{backgroundImage:`url(${aboutBanner})`}}>
                <div className='w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto py-24 px-3 xl:px-0'>

                    <div className="form-title w-full text-center mb-4">
                        <h1 className='uppercase text-4xl md:text-5xl font-semibold text-white'>fill the form.</h1>
                    </div>

                    <form className='mt-16'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 [&>input]:px-4 [&>input]:py-4 [&>input]:rounded-md [&>input]:tracking-wider [&>input]:outline-none'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Subject' />
                        </div>

                        <div className='mt-4'>
                            <textarea className='w-full min-h-[130px] rounded-md resize-none px-4 py-3 outline-none' placeholder='Message' />
                        </div>

                        <div className='mt-3'>
                            <button type="submit" className='rounded-md bg-[#fb5610] text-white text-lg tracking-wider font-normal px-14 py-3 text-center transition-all duration-300 hover:bg-[#ff7135]'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactBanner;