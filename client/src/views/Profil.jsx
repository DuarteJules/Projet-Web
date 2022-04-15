
const Profil = () => {

    return(
        <div className="form">
            <p>Creez votre recette</p>
            <form action="">
                <div className="input-container">
                    <label>Titre : </label>
                    <input type="text" name="title" required />
                </div>
                <div className="input-container">
                    <label>Ingredients : </label>
                    <input type="text" name="ingredients" required />
                </div>
                <div className="input-container">
                    <label>Description et instructions : </label>
                    <input type="text" name="content" required />
                </div>
                <div className="input-container">
                    <label>Categorie : </label>
                    <input type="text" name="type" required />
                </div>
                <div className="input-container">
                    <label>Temps de préparation : </label>
                    <input type="text" name="time" required />
                </div>
                <div className="input-container">
                    <label>Pour combien de personnes : </label>
                    <input type="text" name="servings" required />
                </div>
                <div className="input-container">
                    <label>Tags : </label>
                    <input type="text" name="tag" required />
                </div>
                <div className="input-container">
                    <label>Photo : </label>
                    <input type="text" name="link" required />
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

}

export default Profil;