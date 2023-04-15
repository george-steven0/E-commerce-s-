import './aboutComponents.scss'
import team1 from '../../Assets/imgs/model1.jpg'
import team2 from '../../Assets/imgs/news1.jpg'
import team3 from '../../Assets/imgs/model3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutTeam = () => {

    const teamList = [
        {id:1, name:"maria seena", jobType:"founder & CEO", img:team1, social:[{icon:faFacebookF,src:""},{icon:faTwitter,src:""},{icon:faLinkedinIn,src:""},{icon:faGooglePlusG,src:""},]},
        {id:2, name:"gena george", jobType:"designer", img:team2, social:[{icon:faFacebookF,src:""},{icon:faTwitter,src:""},{icon:faLinkedinIn,src:""},{icon:faGooglePlusG,src:""},]},
        {id:3, name:"sam lois", jobType:"it specialist", img:team3, social:[{icon:faFacebookF,src:""},{icon:faTwitter,src:""},{icon:faLinkedinIn,src:""},{icon:faGooglePlusG,src:""},]},
    ]

    const Team = teamList.map( (item,index)=>{
        return(
            <div style={{backgroundImage:`url(${item.img})`}} className='relative team-card w-full min-h-[400px] bg-no-repeat bg-cover bg-top rounded-lg overflow-hidden'>
                <div className='absolute left-10 right-10 bottom-6 bg-white z-10 px-5 py-4 rounded-md text-center'>
                    <h3 className='capitalize text-2xl font-semibold mb-1'>{item.name}</h3>
                    <p className='capitalize font-light text-base text-[#797979c6]'>{item.jobType}</p>

                    <div className='team-socials w-full mt-5'>
                        <ul className='flex flex-wrap gap-4 md:gap-x-5 justify-center items-center'>
                            {item?.social?.map(item1=>{
                                return(
                                    <li>
                                        <a href={item1.src}><FontAwesomeIcon icon={item1.icon} /></a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } )
    return ( 
        <div className="about-team-wrapper w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1140px] m-auto py-20 px-3 xl:px-0 mt-10">
            <div className="about-team-title w-full text-center mb-20">
                <h2 className="uppercase text-[#313131] text-5xl font-semibold">meet our <span className="text-[#ff7135]">team</span></h2>
            </div>

            <div className="team-card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-between items-center">
                {Team}
            </div>
        </div>
    );
}

export default AboutTeam;

export const TeamCard = (props)=>{
    return(
        <div style={{backgroundImage:`url(${team1})`}} className='relative team-card w-full min-h-[400px] bg-no-repeat bg-cover bg-top rounded-lg overflow-hidden'>
            <div className='absolute left-10 right-10 bottom-6 bg-white z-10 px-5 py-4 rounded-md text-center'>
                <h3 className='capitalize text-2xl font-semibold mb-1'>George Steven</h3>
                <p className='capitalize font-light text-base text-[#797979c6]'>Founder & CEO</p>

                <div className='team-socials w-full mt-5'>
                    <ul className='flex flex-wrap gap-x-5 justify-center items-center'>
                        <li>
                            <a><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>

                        <li>
                            <a><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>

                        <li>
                            <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </li>

                        <li>
                            <a><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}