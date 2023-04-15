import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const {auth} = useSelector(state => state)
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    
    }, [localStorage.getItem('token')])
    
    return <Outlet />
}

export default ProtectedRoutes;