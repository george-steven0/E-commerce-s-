import slideImg1 from '../../Assets/imgs/slide1.jpg'
import slideImg2 from '../../Assets/imgs/slide2.jpg'
import slideImg3 from '../../Assets/imgs/slide3.jpg'
import slideImg4 from '../../Assets/imgs/slide4.jpg'
import slideImg5 from '../../Assets/imgs/slide5.jpeg'

const HCategory = () => {
    
    const category = [
        {id:1, src:slideImg1,type:"Accessories"},
        {id:2, src:slideImg2,type:"Suits"},
        {id:3, src:slideImg3,type:"Dress"},
        {id:4, src:slideImg4,type:"Watches"},
        {id:5, src:slideImg5,type:"Shoes"},
    ]

    const categoryList = category.map( (item)=>{
        return(
            <li key={item.id} className='relative basis-full mb-4 md:mb-3 md:mx-0  lsm:basis-[30%] lg:basis-[18%] text-center group'>
                <img src={item.src} alt={item.id} className='w-full max-w-[145px] h-36 rounded-[50%] m-auto' />
                <a href='#' className='opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-[38%] left-[50%] -translate-x-[50%] -translate-y-[50%] leading-[144px] text-center  bottom-0 right-0 text-[#E97425] font-semibold text-xl w-full max-w-[145px] h-full max-h-36 rounded-[50%] bg-[rgba(0,0,0,.4)]'> product</a>
                <a href='#' className='block mt-4 font-semibold text-lg font-[Oswald] text-gray-700 transition-all duration-300 hover:text-[#E97425]'>{item.type}</a>
            </li>
        )
    } )
    return ( 
        <article className="hCategory w-full flex justify-center items-center flex-wrap">
            <section className="title text-center mb-4 basis-full">
                <h2 className="uppercase text-4xl font-black tracking-wide font-[Oswald]">shop with <span className="text-[#E97425] font-[Oswald]">US</span></h2>
                <p className="text-gray-500 capitalize text-l mt-2">the best products just for you</p>
            </section>

            <section className="basis-full mt-14">
                <ul className='flex flex-wrap lsm:justify-around items-center'>
                    {categoryList}
                </ul>
            </section>

        </article>
    );
}

export default HCategory;