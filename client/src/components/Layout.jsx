import Footer from "./Footer";
import Header from "./Header";

const Layout =({children, user,setUser}) =>{

    return(
        //import le header et le footer dedans ça aka faut le faire
        <>
        <Header user={user} setUser={setUser}/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;