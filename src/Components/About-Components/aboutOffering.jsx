import { faBullhorn, faTruck,faRecycle, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutOffering = (props) => {
    const offeringList = [
        { id:1, icon:faBullhorn, title:"Call Us Anytime", text:"Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur."},
        { id:2, icon:faTruck, title:"free shipping", text:"Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur."},
        { id:3, icon:faRecycle, title:"free returns", text:"Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur."},
        { id:4, icon:faMoneyCheck, title:"secured payment", text:"Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur."}
    ]

    const list = offeringList.map( (item=>{
        return(
            <OfferingCards key={item.id} icon={item.icon} title={item.title} text={item.text} />
        )
    }) )
    return ( 
        <div className="offering-wrapper text-center w-full lsm:max-w-[550px] md:max-w-[820px] lg:max-w-[1240px] m-auto px-3 xl:px-0">
            <div className="oferringTitle">
                <h2 className="text-4xl font-bold uppercase tracking-wider">what we <span className="text-[#FF7315]">offering</span></h2>
                <p className="text-[15px] tracking-wide font-light capitalize text-[#929191d2] mt-2">we are not the first but the <span className="text-[#ff7315]">best</span></p>
            </div>
            
            <div className="offeringCardsWrapper grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                {list}
            </div>
        </div>
    );
}

export default AboutOffering;

export const OfferingCards = ({icon,title,text})=>{
    return(
        <div className="bg-white flex flex-wrap flex-col justify-center items-center text-center py-8 px-5 rounded-lg transition-all duration-500 hover:bg-[#fffaf6bd] hover:shadow-lg">
            <div className="mb-5">
                <FontAwesomeIcon icon={icon} className="text-5xl text-[#ff7315]" />
            </div>

            <div className="mb-5">
                <h2 className="text-3xl capitalize text-[#2c2c2c]">{title}</h2>
            </div>

            <div>
                <p className="text-[#6b778d] leading-6 text-lg font-light">{text}</p>
            </div>
        </div>
    )
}