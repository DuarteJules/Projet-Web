const Login =()=>(
    <>
        <form action="">
            <div>
                <h1>Se Connecter</h1>
                <p>Remplissez les champs avec vos identifiants</p>

                <label htmlFor="username">Nom d'Utilisateur</label>
                <input type="text" placeholder="entrez votre nom d'utilisateur" name="username" required/>

                <label htmlFor="psw">Mot de passe</label>
                <input type="text" placeholder="entrez votre mot de passe" name="psw" required/>

                <div className="btnContainer">
                    <button type="submit" className="signupBtn">Se Connecter</button>
                </div>
            </div>
        </form>
    </>
    )
    
    export default Login;