import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../../Pages/home.jsx";
import Layout from "../Layout/layout.js";
import Login from "../Auth/login.js";
import { useSelector } from "react-redux";
import About from "../../Pages/about.jsx";
import ProtectedRoutes from "./ProtectedRoutes/protected.js";
import Contact from "../../Pages/contact.jsx";
import Store from "../../Pages/store.jsx";

const Routing = () => {
    const location = useLocation()
    const navigate = useNavigate()
    let path = location.pathname

    const {auth} = useSelector(state=>state)
    // console.log(auth.token);
    return ( 
        <>
        {path === '/login' ?
        
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes> 
            :
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/store" element={<Store />} />
                    {/* <Route element={<ProtectedRoutes />}>
                        <Route path="/about" element={<About />} />
                    </Route> */}
                </Routes>
            </Layout>
        }
            
            
        </>
    );
}

export default Routing;