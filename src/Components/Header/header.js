import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {FaRegHandPointRight} from 'react-icons/fa'
import Navbar from "./Navbar/navbar";
import TopHeader from "./TopHeader/topHeader";

const Header = () => {
    return ( 
        <article className="header absolute w-full z-30 pt-2">
            <section className="TopHeaderWrapper">
                <TopHeader />
            </section>

            <section className="navbar mt-2 relative z-10">
                <Navbar />
            </section>
        </article>
    );
}

export default Header;