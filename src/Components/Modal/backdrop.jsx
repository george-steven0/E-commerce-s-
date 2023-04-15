const Backdrop = (props) => {
    return ( 
        props.show ? <div className='w-full h-full fixed z-[8000] top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.7)]' onClick={props.dismiss}></div> : null
    );
}
 
export default Backdrop;