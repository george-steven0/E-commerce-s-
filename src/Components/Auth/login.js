// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLock } from "@fortawesome/free-solid-svg-icons"; 
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { login } from "../Redux/Slices/Auth/authSlice";

// const Login = () => {
//     const [values,setValues] = useState([])
//     const state = useSelector(state => state.auth)
//     const dispatch = useDispatch()

//     const handleValues = (e)=>{
//         const {name,value} = e.target
//         setValues({...values,[name] : value})

//         console.log(values);
//     }

//     const submit = (e)=>{
//         e.preventDefault()
//         dispatch(login(values))
//     }

//     useEffect(() => {
//         console.log(state);

//         state?.token == null && state?.loading == true ? alert('Please Wait') : state?.token && state?.loading == false ? alert('Success') : state?.error && state.loading == false ? alert('Error') : console.log(null);
//     }, [state])
    
//     // useEffect(() => {
//     //     console.log(state);
//     // }, [])
//     return ( 
//         <form className="login w-full lg:w-2/4 md:w-2/3 h-96 m-auto mt-9 shadow-lg rounded-md px-5" onSubmit={submit}>
//             <section className="w-full h-auto text-center mb-9">
//                 <h2 className="text-[35px] font-semibold capitalize text-red-500">hello again</h2>
//                 <p className="text-red-300 font-medium">Enter your credentails to access your account</p>
//             </section>

//             <section className="inputs w-[90%] m-auto h-auto">
//                 <div className="emailWrapper relative mb-4 h-[50px]">
//                     <FontAwesomeIcon className="absolute top-[5%] translate-y-[50%] pt-[0px] pl-4 text-red-400 left-0 w-6 h-6 z-20"  icon={faEnvelope} />

//                     <div> 
//                         <input 
//                             type="text" 
//                             className="absolute border-2 px-2 pl-12 py-1 h-full w-full rounded-md ease-in-out duration-700 focus:border-red-400 outline-none border-red-100" 
//                             placeholder="Enter Your Email"
//                             name = "email"
//                             onChange={handleValues}
//                         /> 
//                     </div>
//                 </div>

//                 <div className="passwordWrapper relative mb-4 h-[50px]">
//                     <FontAwesomeIcon className="absolute top-[0%] translate-y-[50%] pt-[0px] pl-4 text-red-400 left-0 w-6 h-6 z-20"  icon={faLock} />

//                     <div> 
//                         <input 
//                             type="password" 
//                             className="absolute border-2 px-2 pl-12 py-1 h-full w-full rounded-md ease-in-out duration-700 focus:border-red-400 outline-none border-red-100" 
//                             placeholder="*****************"
//                             name = "password"
//                             onChange={handleValues}
//                         /> 
//                     </div>
//                 </div>

//             </section>

//             <section className="text-center mt-10">
//                 <button 
//                     type="submit"
//                     className="border-red-500 border px-7 py-1 rounded text-red-600 font-semibold ease-in-out duration-500 hover:border-red-100 hover:bg-red-600 hover:text-red-100"
//                 >
//                     login
//                 </button>
//             </section>


//         </form>
//     );
// }

// export default Login;

import { faEye, faEyeSlash, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../Redux/Slices/Auth/authSlice';
import './login.scss'
const Login = () => {

    const [showPass,setShowPass] = useState(false)
    const [values,setvalues] = useState([])

    const location = useLocation()
    const navigate = useNavigate()

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

    useEffect(() => {
        // console.log(auth?.token); 
        auth?.token ? navigate('/') : console.log(null);
    }, [auth])
    
// const [isOnline, setOnline] = useState(true);

//     useEffect(() => {
//         setOnline(navigator.onLine);

//         window.addEventListener("online", () => {
//             setOnline(true);
//         });
        
    
//         window.addEventListener("offline", () => {
//             setOnline(false);
//         });

//         console.log(isOnline);
//     }, [isOnline]);

    // event listeners to update the state
    


    /* TailWind Css Classes */

    const inputIconWrapper = 'relative sm:w-full md:w-3/4 lg:w-2/3 h-10 m-auto mb-5'
    const iconCss = 'absolute  top-1/2 translate-y-[-50%] left-0 z-10 px-2 text-[#E97425]'
    const inputCss = 'absolute top-0 left-0 rounded w-full h-full px-8 text-[#e46c1c] font-medium outline-none border-2 border-[transparent] transition-all duration-300 focus:border-2 focus:border-[#ef8238e4]'

    /* TailWind Css Classes */


    return ( 
        <article className="login w-full h-screen relative">
            <section className='overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#0000009f] px-3'>
                <form className='w-full lg:w-2/4 md:w-2/3 bg-[#7f7f7f48] h-[450px] m-auto mt-14 rounded-md' onSubmit={submitHandler}>

                    <section className='title pt-4 font-semibold'>
                        <h1 className='text-center capitalize text-lg md:text-xl lg:text-2xl text-white'>Welcome to <span className='text-[#E97425]'>thunder</span> store</h1>
                        <p className='mt-4 capitalize tracking-wider text-center text-[#deddddb3]'>it's all about fashion</p>
                    </section>

                    <section className='formInputs mt-4 p-7 text-center'>

                        <div className={inputIconWrapper + " emailWrapper"}>
                            <FontAwesomeIcon icon={faUserAlt} 
                                className={iconCss} 
                            />

                            <input type='email' 
                                className={inputCss}
                                placeholder='Email'
                                onChange={valuesHandler}
                                name='email'
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
                            />
                            <FontAwesomeIcon icon={showPass === false ? faEyeSlash : faEye} 
                                className={iconCss + " left-auto right-0 cursor-pointer"} 
                                onClick={togglePassword}
                            />
                        </div>

                    </section>

                    <section className='buttonWrapper text-center mt-6 px-7'>
                        <button type="submit"
                            className='bg-[#E97425] w-full md:w-2/3 rounded-md py-2 text-white'    
                        >
                            Login
                        </button>
                    </section>

                </form>
            </section>
        </article>
    );
}

export default Login;