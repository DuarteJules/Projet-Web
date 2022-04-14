const Login =()=>(
    <>
        <form action="" className="formLogin" >
            <div className="divLogin">
                <h1>Se Connecter</h1>
                <p>Remplissez les champs avec vos identifiants</p>
import { getUsers } from "../functions/login";
import { useState } from "react";

                <label htmlFor="username">Nom d'Utilisateur</label>
                <div className="inputLogin">
                <input type="text" placeholder="entrez votre nom d'utilisateur" name="username" required/>
                </div>
                
                <label htmlFor="psw">Mot de passe</label>
                <div className="inputLogin">
                <input type="text" placeholder="entrez votre mot de passe" name="psw" required/>
                </div>
                <div className="btnContainer">
                    <button type="submit" className="signupBtn">Se Connecter</button>
                </div>
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