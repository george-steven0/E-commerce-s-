import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backdrop from './backdrop';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Modal = (props) => {
    //basis-[50%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] min-h-[350px]
    return ( 
        <div className={`flex flex-wrap justify-center items-center w-full h-full`}>
            <Backdrop show={props.show} dismiss = {props.dismiss} />

            <div className='fixed z-[10000] top-[10%] bottom-0 left-0 right-0 m-auto transition-all duration-300'  
                style={{ transform : props.show ? 'translateY(0)' : 'translateY(-200vh)',
                            opacity : props.show ? '1' : '0'}}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Modal;