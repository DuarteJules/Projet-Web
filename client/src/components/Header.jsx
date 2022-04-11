import { Link } from "react-router-dom";
const Header = () => (
    <>
    <header id="HeaderContainer">
        <nav id="navbar">
            <ul id="linkContainer">
                <li><Link to="/recette">Recettes</Link></li>
                <li><Link to="/login">Se Connecter</Link></li>
                <li><Link to="/homecook">Cuisiner avec mon frigo</Link></li>
            </ul>
        </nav>
    </header>
    </>
    );

    export default Header;