import rick from "../assets/img/rick.jpg";
// import React, { useState } from 'react';
import React, { useState } from "react";

const RECETTES =[
    //exporter les recettes depuis la base de données ici (au meme format qu'un json (voir searchbar pour exemple))
    {id:1, name: 'Sardoche', temps: 50, ingredients: 'sel , eau, fun', servings:20 , type:"vegan", image:require("../assets/img/rick.jpg")},
    {id:2, name: 'Pipi', temps: 50, ingredients: 'pipi , eau, fun', servings:2 , type:"connard", image:require('../assets/img/rick.jpg')},
    {id:3, name: 'Luciano', temps: 50, ingredients: 'portugal , eau, fun', servings:4012 , type:"truc", image:require("../assets/img/rick.jpg")}
];

function HomeCook(){
    const [allRecipes] = useState(RECETTES);
    
    return(
        <div className="recettesContainer">
            {allRecipes && allRecipes.length > 0 ? (allRecipes.map((recette) => (
                <div className="RecetteContainer">
                    <div className="imageContainer">
                        <img src={recette.image} />
                    </div>
                    <div className="infoRecipe">
                        <p>{recette.name}</p>
                        <p>préparation : {recette.temps} minutes</p>
                        <p>ingrédietns : {recette.ingredients}</p>
                        <p>pour {recette.servings} personnes</p>
                        <p>type : {recette.type}</p>
                    </div>

                </div>
        ))
            ):(
                <h1 className="recipeEmpty">Il n'y a pas de recettes pour l'instant</h1>
            )}
        </div>
    );
}



export default HomeCook;