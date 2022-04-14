import Footer from "./Footer";
import Header from "./Header";

const Layout =({children}) =>{
    return(
        //import le header et le footer dedans ça aka faut le faire
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;