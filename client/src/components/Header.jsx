import { useState } from "react";
import { Link } from "react-router-dom";
import currentUser from "../functions/user";

const Header = () => {

    const [display, setDisplay] = useState(false);

    const displayLi = () => {
        if(currentUser !== null){
            //display Login et Signup

        }else{
            //display Se Deconnecter

        }
    }
    if(currentUser != null){
        return(
        <header id="HeaderContainer">
            <nav id="navbar">
                <ul id="linkContainer">
                    <li><Link to="/recette">Recettes</Link></li>
                    <li><Link to="/homecook">Cuisiner avec mon frigo</Link></li>
                    <li><a>Se deconnecter</a></li>
                </ul>
            </nav>
        </header>
        );
    }else{
        return(
            <header id="HeaderContainer">
            <nav id="navbar">
                <ul id="linkContainer">
                    <li><Link to="/recette">Recettes</Link></li>
                    <li><Link to="/homecook">Cuisiner avec mon frigo</Link></li>
                    <li><Link to="/login">Se Connecter</Link></li>
                    <li><Link to="/signup">S'inscrire</Link></li>
                </ul>
            </nav>
        </header>
        )
    }
};

export default Header;