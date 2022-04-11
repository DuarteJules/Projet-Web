import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Error from "./views/Error";
import Recette from "./views/Recette";
import Layout from "./components/Layout";


//Gère les chemins pour aller de pages en pages sans refresh
const App = () => {

    return (
        <Layout>
            <Router>
                <Switch>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/recette" element={<Recette />}/>
                    <Route path="*" element={<Error/>}/>
                </Switch>
            </Router>
        </Layout>
    )
}

export default App;