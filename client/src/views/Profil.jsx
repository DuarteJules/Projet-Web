import { useState } from "react";
import { addRecipe } from "../functions/submitRecipe";
import instance from "../functions/axios";
import { useEffect } from "react";
import { useRef } from "react";


const Profil = ({user}) => {
    const [foundRecipes, setFoundRecipes] = useState({});
    const loading = useRef(true)
    const userid = localStorage.getItem('user')

    const [recipeform, setRecipeForm] = useState({
        title:"",ingredients:"",content:"",type:"",time:"",
        servings:"",tag:"",link:""
    })


    const getRecipeByUserId = async () => {
        const response = await instance.get(`/recipes/user/${userid}`)
        .then(res => {return res.data},)
        .catch((err) => console.log(err));
    
        // console.log(response);
        return response;
    }

    useEffect(() => { 
        if(loading.current) {
            (async () => {
                const Recipes = await getRecipeByUserId();
                setFoundRecipes(preVal=> preVal = Recipes);
                loading.current = false;
            })();
        }
        }, []);

    const changeRecipe = () =>{

    }

    const deleteRecipe = (indexRecipe) =>{
        instance.delete(`/recipes/${indexRecipe}`)
        setTimeout(window.location.reload(),100)
    }

    return(
        <>
        <div className="form">
            <p>Creez votre recette</p>
            <form onSubmit={(e) => {addRecipe(recipeform, e.preventDefault())
            setRecipeForm(value => value={title:"",ingredients:"",content:"",type:"",time:"",
            servings:"",tag:"",link:""})}}>
                <div className="input-container">
                    <label>Titre : </label>
                    <input type="text" className="title" value={recipeform.title} onChange={e => setRecipeForm(value=>({...value,title:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Ingredients : </label>
                    <input type="text" className="ingredients" value={recipeform.ingredients} onChange={e => setRecipeForm(value=>({...value,ingredients:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Description et instructions : </label>
                    <input type="text" className="content" value={recipeform.content} onChange={e => setRecipeForm(value=>({...value,content:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Categorie : </label>
                    <input type="text" className="type" value={recipeform.type} onChange={e => setRecipeForm(value=>({...value,type:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Temps de préparation : </label>
                    <input type="text" className="time" value={recipeform.time} onChange={e => setRecipeForm(value=>({...value,time:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Pour combien de personnes : </label>
                    <input type="text" className="servings" value={recipeform.servings} onChange={e => setRecipeForm(value=>({...value,servings:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Tags : </label>
                    <input type="text" className="tag" value={recipeform.tag} onChange={e => setRecipeForm(value=>({...value,tag:e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Photo : </label>
                    <input type="text" className="link" value={recipeform.link} onChange={e => setRecipeForm(value=>({...value,link:e.target.value}))} required />
                </div>
                <div className="button-container">
                    <input type="submit"/>
                </div>
            </form>
        </div>
        <div className="recettesContainer">
        {!loading.current|| foundRecipes && foundRecipes.length > 0 ? (foundRecipes.map((recette) => (
            <div className='RecetteCardContainer' key={recette.idRecipe}>
                <div className="imageContainer">
                    <img src={recette.image}/>
                </div>
                <div className="infoRecipeCard">
                    <p>{recette.title}</p>
                    <p>préparation : {recette.time} minutes</p>
                    <p>ingrédients : {recette.ingredients}</p>
                    <p>pour {recette.servings} personnes</p>
                    <p>type : {recette.type}</p>
                    <p>posté le {recette.date}</p>
                </div>
                <button onClick={() => deleteRecipe(recette.idRecipe)}>Supprimer</button>
                <button onClick={() => changeRecipe(recette.idRecipe)}>Modifier</button>
            </div>

        ))
        ) : ("")}
    </div>
    </>
        
    );

}

export default Profil;