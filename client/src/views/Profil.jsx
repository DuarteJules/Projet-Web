import { useState } from "react";
import { addRecipe } from "../functions/submitRecipe";
import instance from "../functions/axios";
import { useEffect } from "react";
import { useRef } from "react";
import { updateRecipe } from "../functions/updateRecipe";
import Form from "../components/Formulaire";

const Profil = ({setRecetteId}) => {
    const [foundRecipes, setFoundRecipes] = useState({});
    const loading = useRef(true)
    const userid = localStorage.getItem('user')
    var formChange = useRef(false);
    var idRecette = useRef()


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

    const changeRecipe = (indexRecipe) =>{
        formChange.current = true
        idRecette = indexRecipe
        setRecetteId = indexRecipe
        console.log(formChange.current)
    }

    const deleteRecipe = (indexRecipe) =>{
        instance.delete(`/recipes/${indexRecipe}`)
        setTimeout(window.location.reload(),1000)
    }


    return(
        <>
        <div className="formRecette">
            <h1>Creez votre recette</h1>
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
                    <textarea type="text" className="content" value={recipeform.content} onChange={e => setRecipeForm(value=>({...value,content:e.target.value}))} required />
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
                    <img src={recette.linkImg}/>
                </div>
                <div className="infoRecipeCard">
                    <p>{recette.title}</p>
                    <p>préparation : {recette.time} minutes</p>
                    <p>ingrédients : {recette.ingredients}</p>
                    <p>pour {recette.servings} personnes</p>
                    <p>type : {recette.type}</p>
                    <p>posté le {recette.date}</p>
                </div>
                <button className="BtnDelForm" onClick={() => deleteRecipe(recette.idRecipe)}>Supprimer</button>
                <button className="BtnUpdateForm" onClick={() => changeRecipe(recette.idRecipe)}>Modifier</button>
            </div>

        ))
        ) : ("")}
    </div>
    <div>
        {!formChange.current && <Form idRecipe={idRecette}/>}
    </div>
    </>
        
    );

}

export default Profil;