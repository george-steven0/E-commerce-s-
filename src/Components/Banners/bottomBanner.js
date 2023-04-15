import { useEffect, useRef, useState } from 'react';
import bannerImg from '../../Assets/imgs/slide4.jpg'
import './banner.scss'
import video from '../../Assets/testVideo.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
const BottomBanner = () => {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);

    /* Custome Video */

    const togglePlay = () => {
    if (playing) {
        videoRef.current.pause();
    } else {
        videoRef.current.play();
    }
        setPlaying(!playing);
    };
    
    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };
    
    const revert = () => {
        videoRef.current.currentTime -= 5;
    };

    const handleProgress = () => {
        setVideoTime(videoRef.current.duration)
        setCurrentTime(videoRef.current.currentTime)
        const progress = (currentTime / videoTime) * 100;
        setProgress(progress);
    };

    // useEffect(() => {
    //     console.log(progress);
    // }, [progress])

    /* Custome Video */


    const videoIconCss = 'text-3xl text-[#202020] hover:text-[#575757] cursor-pointer'
    return ( 
        <article className="bottomBanner flex flex-row-reverse flex-wrap justify-between items-center w-full h-full">
            <section className="leftPart md:basis-1/3 mb-12 md:mb-0">
                <div className="title text-left">
                    <h2 className="uppercase text-xl mb-3 md:text-3xl md:mb-0 font-bold font-[Oswald] text-gray-800 leading-snug">ALL BRANds for WOMEN'S BAGS ARE FLAT <span className="text-[#e97542] font-[Oswald]">30% DISCOUNT</span></h2>
                    <p className='text-gray-700 text-sm md:text-lg mt-7'>Visit our shop to see amazing creations from our designers.</p>
                    <a href='#' className='capitalize bg-transparent text-[#E97542] text-xs md:text-lg border-[#E97542] border-2 rounded-lg px-4 md:px-6 py-2 mt-6 block w-fit transition-all duration-300 hover:bg-[#E97542] hover:text-white hover:border-transparent'>Shop Now</a>
                </div>
            </section>

            <section className="rightPart w-full h-full md:basis-[57%]">
                <div className="imgThumbnail w-full h-full max-h-[220px] md:max-h-full overflow-hidden group rounded-md -after:z-[11]">
                    {/* <img 
                        src={bannerImg} 
                        alt='Men Suit' 
                        className='w-full h-full rounded-md transition-all duration-500 group-hover:scale-110 bannerImg' 
                    /> */}

                    <video
                        // id='videoId'
                        // onTimeUpdate={handleProgress}
                        // ref={videoRef} 
                        controls
                        className="video w-full h-full absolute z-10"
                        src={video}
                    >
                        <p>Your browser doesn't support HTML5 video. Here is a <a href="https://vimeo.com/246139491?embedded=true&source=vimeo_logo&owner=31923087">link to the video</a> instead.</p>
                    </video>

                    {/* Custom Video Player */}
                    {/* <div className="controlsContainer w-full h-full flex flex-col items-center z-20">
                        <div className="controls flex justify-evenly items-center h-full w-full -mt-4 z-40">
                            <FontAwesomeIcon className={videoIconCss} icon={faUndoAlt} onClick={revert} />
                            <FontAwesomeIcon className={videoIconCss + ' text-6xl'} icon={playing ? faPauseCircle : faPlayCircle} onClick={togglePlay} />
                            
                            <FontAwesomeIcon className={videoIconCss} icon={faRedoAlt} onClick={fastForward} />
                        </div>

                        <div className="timecontrols flex items-center justify-evenly absolute bottom-2 w-full">
                            <p className="controlsTime text-white z-50">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                            <div className="time_progressbarContainer bg-gray-600 rounded-2xl md:w-[40vw] lsm:w-[55vw] h-1 z-30 relative">
                                <div style={{ width: progress +'%' }} className="time_progressBar rounded-2xl bg-indigo-700 h-full"></div>
                            </div>
                            <p className="controlsTime text-white z-50">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </article>
    );
}

export default BottomBanner;