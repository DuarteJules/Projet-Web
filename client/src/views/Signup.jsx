import { useState } from "react";
import { addUser } from "../functions/submit";

const Signup =()=>{
    const [emailform, setEmailForm] = useState({username:"", password:""})

    return(
<div className="signup-form">
    <div className="screen">
        <form class="form" onSubmit={(e) => {addUser(emailform,e); setEmailForm(value=>value={username:"", password:""})}}>
            <div>
                <div className="input-container">
                    <input type="text" placeholder="Créez nom d'utilisateur" className="signup-input" value={emailform.username} onChange={e => setEmailForm(value=>({...value,username:e.target.value}))} required/>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Créez votre mot de passe" className="signup-input" alue={emailform.password} onChange={e => setEmailForm(value=>({...value,password:e.target.value}))} required/>
                </div>
                    <div className="button-container">
                    <button class="button signup__submit">
                        <span class="button__text">S'Inscrire</span>
                    </button>	
                    </div>
            </div>
        </form>
        <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>
    </div>
</div>
    );
}
    
export default Signup;