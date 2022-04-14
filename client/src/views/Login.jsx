import { getUsers } from "../functions/login";
import { useState } from "react";


/* const Login =()=>{
    const [emailform, setEmailForm] = useState({username:"", password:""})

    return(
    <form onSubmit={(e) => {findUser(emailform, e);
    setEmailForm(value=>value={username:"",password:""})}}>
        <div>
            <h1>Se Connecter</h1>
            <p>Remplissez les champs avec vos identifiants</p>

            <label htmlFor="username">Nom d'Utilisateur</label>
            <input type="text" placeholder="entrez votre nom d'utilisateur" className="username" value={emailform.username} onChange={e => setEmailForm(value=>({...value,username:e.target.value}))} id="usernameInput" required/>

            <label htmlFor="psw">Mot de passe</label>
            <input type="password" placeholder="entrez votre mot de passe" className="psw" value={emailform.password} onChange={e => setEmailForm(value=>({...value,password:e.target.value}))} required/>

            <div class="btnContainer">
                <button type="submit" class="signupBtn">Se Connecter</button>
            </div>
        </div>
    </form>
    );

} */
    
const App = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);



    const database = [getUsers()];

    /* const database = [
        {
            idUser:"1",
          username: "user1",
          password: "pass1"
        },
        {
            idUser:"2",
          username: "user2",
          password: "pass2"
        }
      ]; */

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    console.log(database);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
      
        var { uname, pass } = document.forms[0];
      
        // Find user login info
        const userData = database.find(user => user.username === uname.value);
        console.log(userData);
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
    );

    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}


export default App;