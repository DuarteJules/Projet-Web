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
        <div className="form">
          <form onSubmit={(e)=>verifCredential(e)}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit"/>
            </div>
            {renderErrorMessage("error")}
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


export default Login;