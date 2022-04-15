import { useState } from "react";
import { addUser } from "../functions/submit";

const Signup =()=>{
    const [emailform, setEmailForm] = useState({username:"", password:""})

    return(
    <form onSubmit={(e) => {addUser(emailform,e.preventDefault()); setEmailForm(value=>value={username:"", password:""})}}>
        <div>
            <h1>Inscrivez Vous!</h1>
                <p>Remplisser ce formulaire pour créer un compte et poster vos propres recettes.</p>

                <label htmlFor="username">Nom d'Utilisateur</label>
                <input type="text" placeholder="entrez votre nom d'utilisateur" className="username" value={emailform.username} onChange={e => setEmailForm(value=>({...value,username:e.target.value}))} required/>

                <label htmlFor="psw">Mot de passe</label>
                <input type="text" placeholder="entrez votre mot de passe" className="psw" alue={emailform.password} onChange={e => setEmailForm(value=>({...value,password:e.target.value}))} required/>

                <div className="btnContainer">
                    <button type="submit" className="signupBtn">S'inscrire</button>
                </div>
        </div>
    </form>
    );
}
    
export default Signup;