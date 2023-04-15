import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutBanner from '../../Assets/imgs/about-banner2.jpg'
import './aboutComponents.scss'
import { faCodepen, faModx } from '@fortawesome/free-brands-svg-icons';
import { faBarChart, faHourglass, faMobile, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const AboutBanner = () => {
    const h2Css = 'capitalize text-white font-bold font-[Oswald] text-2xl mb-4 transition-all duration-300 hover:text-[#FF7315] cursor-pointer w-fit'
    const span1Css = 'mr-4 text-[#FF7315] text-3xl'
    const pCss ='text-[#ffffffd7] font-light text-lg'
    return ( 
        <div className="aboutBannerWrapper w-full min-h-[600px] bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:`url(${aboutBanner})`}}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto py-24 px-3 xl:px-0'>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faCodepen} /></span>
                        <span>Let your footwear do the talking</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faHourglass} /></span>
                        <span>animation</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faBarChart} /></span>
                        <span>Uniquely designed collection</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faMobile} /></span>
                        <span>Trendy celebrity collections</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faModx} /></span>
                        <span>Vast collection of Sports shoes</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

                <div>
                    <h2 className={h2Css}>
                        <span className={span1Css}><FontAwesomeIcon icon={faShoppingBag} /></span>
                        <span>High Quality Footwear</span>
                    </h2>

                    <p className={pCss}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe mollitia modi tenetur optio? Mollitia minus suscipit aut voluptatem, neque amet debitis fugiat, ducimus temporibus at, soluta nisi vitae dolore. Quisquam.</p>
                </div>

            </div>
        </div>
    );
}

export default AboutBanner;