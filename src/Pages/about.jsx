import Path from "../Components/Path/path";
import aboutpath from '../Assets/imgs/news1.jpg'
import AboutS1 from "../Components/About-Components/about-s1";
import AboutS2 from "../Components/About-Components/about-s2";
import AboutBanner from "../Components/About-Components/aboutBanner";
import AboutOffering from "../Components/About-Components/aboutOffering";
import AboutTeam from "../Components/About-Components/aboutTeam";
const About = () => {
    return ( 
        <article className="about-wrapper">
            <section className="Path-Container">
                <Path src={aboutpath} title='about' subTitle={'US'} baseLink={{name:'home',src:"/"}} currentLink={{name:'about',src:"/about"}} />
            </section>

            <section className="about-s-wrapper w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto py-10 mt-12 px-3 xl:px-0">
                <div className="about-s1 mb-16">
                    <AboutS1 />
                </div>

            </section>

            <section className="about-s2 bg-gray-100 py-10 md:py-16">
                    <AboutS2 />
            </section>

            <section className="about-banner w-full h-auto">
                <AboutBanner />
            </section>

            <section className="about-offering bg-gray-100 py-10 md:py-16">
                <AboutOffering />
            </section>

            <section className="about-team">
                <AboutTeam />
            </section>
            
        </article>
    );
}

export default About;