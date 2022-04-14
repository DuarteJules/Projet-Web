import { Link } from "react-router-dom";
function Header  (){

// if(loggedin == false){
    return(
    <header id="HeaderContainer">
        <div id={"logo"}>
                J'ai la <br /> recette
        </div>
        <nav id="navbar">
            <ul id="linkContainer">
                <p><Link to="/home">Les Recettes</Link></p>
                <p><Link to="/login">Se Connecter</Link></p>
                <p><Link to="/signup">S'inscrire</Link></p>
            </ul>
        </nav>
    </header>
        )
        // }else{
//     return(
//     <header id="HeaderContainer">
//         <nav id="navbar">
//             <ul id="linkContainer">
//                 <li><Link to="/recette">Les Recettes</Link></li>
//                 <li><Link to="/profil">Mon Profil</Link></li>
//                 {/* <li><button onClick={logout()}>Se Déconnecter</button></li> */}
//             </ul>
//         </nav>
//     </header>
// )
// };
// function logout(){
//     loggedin = false;
// };


    }

        export default Header;