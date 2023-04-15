import Footer from "../Footer/footer.jsx";
import Header from "../Header/header";

const Layout = (props) => {
    return ( 
        <>
            <Header />
                {props.children}
            <Footer />    
        </>
    );
}

export default Layout;