const Signup =()=>(
    <>
    <form action="">
        <div>
            <h1>Inscrivez Vous!</h1>
                <p>Remplisser ce formulaire pour créer un compte et poster vos propres recettes.</p>

                <label htmlFor="username">Nom d'Utilisateur</label>
                <input type="text" placeholder="entrez votre nom d'utilisateur" name="username" required/>

                <label htmlFor="psw">Mot de passe</label>
                <input type="text" placeholder="entrez votre mot de passe" name="psw" required/>

                <label htmlFor="psw-repeat">Répétez votre mot de passe</label>
                <input type="text" placeholder="répétez votre mot de passe" name="psw-repeat" required/>

                <div className="btnContainer">
                    <button type="submit" className="signupBtn">S'inscrire</button>
                </div>

        </div>
    </form>


        
    </>
    )
    
    export default Signup;