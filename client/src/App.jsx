import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Error from "./views/Error";
import Recette from "./views/Recette";
import HomeCook from "./views/HomeCook";
import Login from "./views/Login";
import Layout from "./components/Layout";
import Signup from "./views/Signup";
import Profil from "./views/Profil";
import { useState } from "react";



//Gère les chemins pour aller de pages en pages sans refresh
const App = () => {

    const [user, setUser] = useState(false);

    return (
        <Router>
            <Layout user={user} setUser={setUser}>
                <Switch>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/recette/:id" element={<Recette/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
                    <Route path="/homecook" element={<HomeCook/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/profil" element={<Profil user={user}/>}/>
                </Switch>
            </Layout>
        </Router>
        );
}


export default App;