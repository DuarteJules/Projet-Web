import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Error from "./views/Error";
import Recette from "./views/Recette";
import HomeCook from "./views/HomeCook";
import Login from "./views/Login";
import Layout from "./components/Layout";
import Signup from "./views/Signup";



//Gère les chemins pour aller de pages en pages sans refresh
const App = () => {

    return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/recette" element={<Recette />}/>
                        <Route path="*" element={<Error/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/homecook" element={<HomeCook/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                    </Switch>
                </Layout>
            </Router>
    )
}

export default App;