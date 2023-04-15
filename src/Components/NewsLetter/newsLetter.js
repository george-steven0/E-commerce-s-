import newsLogo from '../../Assets/imgs/news3-bg2.png'

const NewsLetter = () => {
    return ( 
        <div className="newsLetterContainer w-full h-[320px] bg-gradient-to-r from-[#ffeed1] to-[#ffd27d]">
            <div className="flex flex-wrap justify-between items-center h-full">
                
                <section className="leftWrapper basis-full px-2 md:px-3 lg:px-0 md:basis-3/5 flex flex-col justify-center items-center -mt-10">
                    <div className='lg:max-w-[60%] m-auto'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-[Oswald] font-bold mb-5 text-[#414141]'>JOIN US FOR FREE TO GET INSTANT <span className='font-[Oswald] text-[#e97542]'>EMAIL UPDATES!</span></h2>

                        <p className='text-[#969696] text-sm md:text-base lg:text-lg mb-5 font-[Oswald]'>Subscribe and get notified at first on the latest update and offers!</p>

                        <input type='email' placeholder='Your email here' className='w-[67%] px-5 py-2 rounded-tl-3xl rounded-bl-3xl outline-none' />
                        <button className=' w-[32%] md:w-[25%] bg-[#e97542] text-white capitalize font-semibold px-6 py-2 rounded-tr-3xl rounded-br-3xl transition-all duration-300 hover:bg-[#ff986c]'>join</button>
                    </div>
                </section>

                <section className="rightWrapper basis-2/5 h-full pr-6 relative hidden md:block">
                    <img src={newsLogo} alt='NewsLetter' className='w-[400px] h-[370px] absolute right-0 -top-[50px]' />
                </section>
            </div>
        </div>
    );
}

export default NewsLetter;