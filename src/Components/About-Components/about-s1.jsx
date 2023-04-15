import abs1img from '../../Assets/imgs/news2.webp'

const AboutS1 = () => {
    return ( 
        <div className="flex flex-wrap justify-between items-start">

            <div className="about-s1-left basis-full md:basis-1/2 pr-2 lg:pr-8 text-left mb-5 md:mb-0 h-full">
                <h2 className="uppercase text-3xl md:text-4xl font-semibold text-[#242424] mb-7">about <span className="text-[#FF7315]">thunder</span> store</h2>
                <p className="text-[#6b778d] font-light tracking-wide text-sm md:text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae eveniet expedita sunt error ex reiciendis, debitis odit excepturi iusto non natus suscipit.</p>
                <p className="text-[#6b778d] font-light tracking-wide text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repudiandae eveniet expedita sunt error pit.</p>
                <button className="capitalize text-white text-base md:text-lg tracking-wide bg-[#232323] px-7 py-2 rounded-3xl mt-10 transition-all duration-300 hover:bg-[#FF7315]">Shop now</button>
            </div>

            <div className="about-s1-right basis-full md:basis-1/2 overflow-hidden rounded-md h-full">
                <img src={abs1img} alt="abs1-img" className="w-full h-auto md:min-h-[260px] xmd:min-h-max object-cover transition-all duration-300 hover:scale-110" />
            </div>
        </div>
    );
}

export default AboutS1;