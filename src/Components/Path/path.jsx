import { Link, useLocation } from 'react-router-dom';
import pathlogo from '../../Assets/imgs/news2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


const Path = ({src,title,subTitle,baseLink,currentLink}) => {
    const location = useLocation()
    const {pathname} = location
    // console.log(pathname);

    return ( 
        <article className="path">
            <section 
                className={`path-wrapper w-full h-[25rem] font-[Lato] bg-top bg-cover bg-no-repeat relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,.4)] z-10`} 
                style={{backgroundImage: `url(${src})`}} >

                <div className='path-link text-white z-40 absolute top-[70%] -translate-y-[70%] flex flex-wrap justify-center items-center w-full'>
                    <h2 className='basis-full text-center text-5xl font-semibold mb-5 capitalize'>{title} {subTitle ? <span className='text-[#FF7315] capitalize'>{subTitle}</span> : null}</h2>
                    <div className='flex flex-wrap items-center justify-center'>
                        <Link className='text-xl font-light transition-all duration-300 hover:text-[#FF7315] capitalize' to={baseLink ? baseLink.src : "/"}>{baseLink?.name ? baseLink?.name : 'Home' }</Link> 
                        <FontAwesomeIcon className='text-[12px] ml-3 mr-3 mt-[7px] opacity-60' icon={faAngleDoubleRight} />

                        { 
                            currentLink ? 
                                pathname == currentLink?.src ? 
                                    <span className='text-xl font-light text-[#FF7315] capitalize'>{currentLink?.name ? currentLink?.name : pathname.replace(/[^a-zA-Z0-9 ]/g, "")}</span> 
                                    : <Link className='text-xl font-light text-[#FF7315] capitalize' to={currentLink?.src}>{currentLink?.name}</Link> 
                                : <span className='text-xl font-light text-[#FF7315] capitalize'>{pathname.replace(/[^a-zA-Z0-9 ]/g, "")}</span>
                        }
                        
                    </div>
                </div>
            </section>
        </article>
    );
}

export default Path;