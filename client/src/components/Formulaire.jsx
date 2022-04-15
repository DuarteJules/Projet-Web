import { updateRecipe } from "../functions/updateRecipe";
import { useState } from "react";


function Form(target, {idRecipe}) {
    const [recipeform, setRecipeForm] = useState({
        title:"",ingredients:"",content:"",type:"",time:"",
        servings:"",tag:"",link:""
    })
/* 
    function changeFormToAdd(){
        let formulaire =document.querySelector(".noform");
        let formulaireUpdate = document.querySelector(".form");
        formulaire.setStyle('form');
        formulaireUpdate.setStyle('noform');
    } */

    return(
        <div className="form">
            <p>Modifiez votre recette</p>
            <form onSubmit={(e) => {updateRecipe(recipeform, target, e.preventDefault())
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
    )
};

export default Form;