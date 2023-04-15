import { faHeart, faLeftLong, faRightLong, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartStroke } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import model from '../../../Assets/imgs/slide1.jpg'
import './blogItem.scss'
import { useState } from 'react';
const BlogItem = () => {
    const [like, setlike] = useState(false)

    const likeHanlder = ()=>{
        let liked = like
        setlike(!liked)
    }

    return ( 
        <div className=" blogItemContainer relative  max-w-xs transition-all duration-300 shadow-md hover:shadow-lg min-h-[350px] rounded-md overflow-hidden mb-6 lg:mb-0 m-auto lsm:mx-2">
            <section className="blogImg relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-[rgba(0,0,0,.3)] after:z-10 after:hover:bg-[rgba(0,0,0,.01)] after:transition-all after:duration-300">
                <img src={model} alt='Model' className='w-full max-h-40' />
            </section>

            <section className='blogText mt-3 px-2'>
                <p className='text-lg md:text-2xl font-semibold font-[Oswald] text-[#484848]'>Blog Name</p>
                <p className='text-sm font-normal font-[Oswald] text-[#747474] mt-2 leading-[20px] max-h-28 h-[5.4rem] overflow-y-scroll '>lorem ipsum dolar sit const due sit iren lorem sment, lorem ipsum dolar sit const due sit iren lorem sment, lorem ipsum dolar sit const due sit iren lorem sment, lorem ipsum dolar sit const due sit iren lorem sment, lorem ipsum dolar sit const due sit iren lorem sment, lorem ipsum dolar sit const due sit iren lorem sment</p>
            </section>

            <section className='blogLinks absolute bottom-2 w-full flex flex-wrap justify-between px-2 border-t-[1px] pt-2 border-[#0000003a]'>
                <button className='text-[#E97542] text-xl'><FontAwesomeIcon icon={faShareAlt} /></button>
                <button className='flex items-center text-base text-[#507ba7]'><span className='mr-1 font-semibold'>View</span> <FontAwesomeIcon icon={faRightLong} /></button>
                <button className='text-[#e25656] text-xl'><FontAwesomeIcon onClick={likeHanlder} icon={like ? faHeart : HeartStroke} /></button>
            </section>
        </div>
    );
}

export default BlogItem;