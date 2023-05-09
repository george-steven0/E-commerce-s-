import { faEye, faEyeSlash, faLock, faSpinner, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Redux/Slices/Auth/authSlice";
import user from '../../../Assets/imgs/slide2.jpg'

const HeaderLogin = (props) => {

    const [showPass,setShowPass] = useState(false)
    const [values,setvalues] = useState([])

    const {auth} = useSelector(state=>state)
    const dispatch = useDispatch()

    const togglePassword = ()=>{
        const isPass = !showPass
        setShowPass(isPass)
    }

    const valuesHandler = (e)=>{
        const {name, value} = e.target;
        setvalues({...values,[name] : value})
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(values))
    }

    const logoutHandler = (e)=>{
        // e.preventDefault()
        dispatch(logout())

        // console.log(logout());
    }

    useEffect(() => {
        // console.log(auth);
    }, [auth])
    

    const inputIconWrapper = 'relative sm:w-full md:w-3/4 lg:w-full h-10 m-auto mb-5'
    const iconCss = 'absolute  top-1/2 translate-y-[-50%] left-0 z-10 px-2 text-[#E97425]'
    const inputCss = 'absolute top-0 left-0 rounded w-full h-full px-8 text-[#e46c1c] font-medium outline-none border-2 border-[transparent] transition-all duration-300 focus:border-2 focus:border-[#ef8238e4]'

    return ( 
        <article className="headerLogin relative w-full h-screen">
            <section className="absolute top-4 left-4 w-8 h-8 rounded-[50%] bg-white cursor-pointer z-10 text-center leading-8" onClick={props.toggle}><FontAwesomeIcon className="text-[#E97425] text-xl" icon ={faTimes} /></section>
            
            <section className="overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[#000000ba]">

                {auth?.loading ? 

                    <div>
                        <section className="loadingWrapper text-center">
                            <p className="text-white mt-[200px] font-semibold md:text-2xl">Checking Permissions Please Wait...</p>
                            <p className="mt-4 text-2xl text-white"><FontAwesomeIcon icon={faSpinner} spin /></p>
                        </section>
                    </div> 

                    : auth?.loading !==true && auth?.token !== null && auth?.token !== "" && auth?.token !== undefined ?

                    <div className="text-center mt-[150px]">
                        <img src={user} alt="user" className="w-[150px] h-[150px] rounded-[50%] m-auto mb-6" />
                        <p className="text-center text-2xl text-white mb-6">Welcome <span className="text-[#e97542]">George</span></p>
                        <button onClick={logoutHandler} className="text-white bg-danger rounded-3xl px-12 py-2 transition-all duration-300 hover:bg-[#d62323]">Logout</button>
                    </div>
                    
                    :

                    <div className="formWrapper">
                        <div className="title mt-32 text-center">
                            <p className="capitalize text-white font-bold text-3xl"><span className="text-[#E97425]">login</span> now</p>
                        </div>

                        <form className="m-auto mt-8 w-4/5 h-fit bg-[#6767679f] p-7 rounded-xl" onSubmit={submitHandler}>
                            <section className='formInputs mt-4 text-center'>

                                <div className={inputIconWrapper + " emailWrapper"}>
                                    <FontAwesomeIcon icon={faUserAlt} 
                                        className={iconCss} 
                                    />

                                    <input type='email' 
                                        className={inputCss}
                                        placeholder='Email'
                                        onChange={valuesHandler}
                                        name='email'
                                        // value='eve.holt@reqres.in'
                                    />
                                </div>

                                <div className={inputIconWrapper + " passwordWrapper mt-7"}>
                                    <FontAwesomeIcon icon={faLock} 
                                        className={iconCss} 
                                    />

                                    <input type={showPass ? 'text' : 'password'} 
                                        className={inputCss}
                                        placeholder='************'
                                        onChange={valuesHandler}
                                        name='password'
                                        // value='123456'
                                    />
                                    <FontAwesomeIcon icon={showPass === false ? faEyeSlash : faEye} 
                                        className={iconCss + " left-auto right-0 cursor-pointer"} 
                                        onClick={togglePassword}
                                    />
                                </div>

                            </section>

                            <section className='buttonWrapper text-center mt-10'>
                                <button type="submit"
                                    className='bg-[#E97425] w-full md:w-2/3 rounded-md py-2 text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
                                    disabled = {auth?.loading ? true : false}
                                >
                                    Login {auth?.loading? <FontAwesomeIcon icon={faSpinner} spin /> : null}
                                </button>
                            </section>
                        </form>
                    </div>
                }
            </section>
        </article>
    );
}

export default HeaderLogin;