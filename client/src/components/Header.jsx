import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import currentUser, { changeUser } from "../functions/user";
import Login from "../views/Login";


const Header = ({user, setUser}) => {
    return(
        <header id="HeaderContainer">
            <div id={"logo"}>
                    J'ai la <br /> recette
            </div>
            <nav id="navbar">
                <ul id="linkContainer">
                    <p><Link to="/home">Les Recettes</Link></p>
                    {!user && 
                    <>
                    <p><Link to="/login">Se Connecter</Link></p>
                    <p><Link to="/signup">S'inscrire</Link></p>
                    </>
                    }
                    {user && 
                    <>
                    <li><Link to="/profil">Mon Profil</Link></li>
                    <li onClick={()=>{setUser(false)}}><Link to="/home">Logout</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </header>
            )

};


    // const [display, setDisplay] = useState(false);



export default Header;