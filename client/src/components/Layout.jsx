const Layout =({children}) =>{
    return(
        //import le header et le footer dedans ça aka faut le faire
        <>
        <div>
            pouet
            {/* <ToolBar/>
            <Sides/>
            <Backdrop/> */}
        </div>
        {/* header ici */}
        <main>{children}</main>
        {/* footer ici */}
        </>
    )
}

export default Layout;