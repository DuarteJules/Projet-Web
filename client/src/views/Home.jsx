import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HomeCook from "../views/HomeCook";

const Home = () => (
    <>
    <center>
        <h1>Découvrez de nouvelles recettes !</h1>
        <h2>Ou cherchez en une en fonction de ce que vous avez sous la main :</h2>
    </center>
        <SearchBar></SearchBar>
        {/* <HomeCook></HomeCook> */}
        
        {/* <Link to="/recette">Lien vers Recette</Link> */}
    </>
)

export default Home;