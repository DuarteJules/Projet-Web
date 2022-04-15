import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import currentUser, { changeUser } from "../functions/user";
import Login from "../views/Login";


const Header = ({user, setUser}) => {
    const userid = localStorage.getItem('user');
    const users = user;
    return(
        <header id="HeaderContainer">
            <div id={"logo"}>
                    J'ai la <br /> recette
            </div>
            <nav id="navbar">
                <ul id="linkContainer">
                    <p><Link to="/home">Les Recettes</Link></p>
                    {userid === 'false' && 
                    <>
                    <p><Link to="/login">Se Connecter</Link></p>
                    <p><Link to="/signup">S'inscrire</Link></p>
                    </>
                    }
                    {userid !== 'false'&& 
                    <>
                    <li><Link to="/profil">Mon Profil</Link></li>
                    <li onClick={()=>{setUser(false); localStorage.setItem('user', false)}}><Link to="/home">Logout</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </header>
            )

};


    // const [display, setDisplay] = useState(false);



export default Header;