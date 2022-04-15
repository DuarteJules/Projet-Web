import { useState } from "react";
import { changeUser } from "../functions/user";
import instance from "../functions/axios";

const Login = ({user,setUser}) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const errors = {
        useName: "invalid username",
        pass: "invalid password"
    };

    const verifCredential = async(e) =>  {
        e.preventDefault()

        var { uname, pass } = document.forms[0];
        
        const status = await instance.get(`/users/${uname.value}/${pass.value}`)
        .then((res) => res)
        if(status.status === 200){
            if(status.data === ""){
                setErrorMessages({ name: "error", message: "l'un des champs est invalide" });
            }
            else{
                setUser(preVal => preVal = status.data)
                setIsSubmitted(true);
            }
        }
    }


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
      
        var { uname, pass } = document.forms[0];
        
        // Find user login info
        const userData = user.find(user => user.username === uname.value);
        console.log(userData);
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
            changeUser(userData.id);
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
        <div className="screen">
            <div className="form">
          <form onSubmit={(e)=>verifCredential(e)}>
            <div className="input-container">
              <input type="text" name="uname" required class="login-input" placeholder="Nom d'utilisateur"/>
            </div>
            <div className="input-container">
              <input type="password" name="pass" required class="login-input" placeholder="Mot de passe"/>
            </div>
            <div className="button-container">
            <button class="button login__submit">
					<span class="button__text">Se Connecter</span>
					<i class="button__icon"></i>
			</button>	
            </div>
            {renderErrorMessage("error")}
          </form>
            </div>
            <div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>
        </div>
    );

    return (
        <div className="app">
          <div className="login-form">
            {/* <div className="title">Sign In</div> */}
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}


export default Login;