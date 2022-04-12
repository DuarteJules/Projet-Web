import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Home = () => (
    <>
        <h1>Ma page home</h1>
        <SearchBar></SearchBar>
        <Link to="/recette">Lien vers Recette</Link>
    </>
)

export default Home;