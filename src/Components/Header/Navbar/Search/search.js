import { faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
    return ( 
        <article className="search relative w-full h-full">
            <section className="absolute top-5 right-12">
                <FontAwesomeIcon icon={faTimesCircle} className='text-[#fff9f5] text-3xl cursor-pointer'  onClick={props.toggle} />
            </section>
            <section className="w-full absolute top-[40%] translate-y-[-40%] right-[50%] translate-x-[50%] text-center flex justify-center">
                <input type='search' placeholder="Enter Keyword" className="px-4 lg:px-6 py-3 rounded-lg rounded-r-none outline-none w-[50%] sm:w-[50%] lg:w-[33%] " />
                <button className="transition-all duration-300 border-[1px] border-[#E97425] bg-[#E97425] hover:bg-[#f78437] rounded-lg rounded-l-none text-white px-5 md:px-12 sm:py-2 md:py-3">Search</button>
            </section>
        </article>
    );
}

export default Search;