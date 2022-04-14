import React, { useState } from 'react';




const RECETTES = [
    // écrire les recettes au format => { id: 1, name: 'purée', temps: 32, ingredients:'pomme de terre, sel, eau' }
    {id:1, name: 'Sardoche', temps: 50, ingredients: 'sel , eau, fun', servings:20 , type:"vegan", image:require("../assets/img/rick.jpg")},
    {id:2, name: 'Pipi', temps: 50, ingredients: 'pipi , eau, fun', servings:2 , type:"connard", image:require('../assets/img/rick.jpg')},
    {id:3, name: 'Luciano', temps: 50, ingredients: 'portugal , eau, fun', servings:4012 , type:"truc", image:require("../assets/img/rick.jpg")}
    ];

function SearchBar() {
  // the value of the search field 
const [ingredients, setIngredients] = useState('');

  // the search result
    const [foundRecipes, setFoundRecipes] = useState(RECETTES);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
        const results = RECETTES.filter((recette) => {
        return recette.ingredients.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundRecipes(results);
        } else {
        setFoundRecipes(RECETTES);
        // If the text field is empty, show all users
        }

        setIngredients(keyword);
    };

    return (
    <div className="container">
        <input
        type="search"
        value={ingredients}
        onChange={filter}
        className="input"
        placeholder="Entrez un ingrédient"
        />

<div className="recettesContainer">
            {foundRecipes && foundRecipes.length > 0 ? (foundRecipes.map((recette) => (
                <div className="RecetteCardContainer">
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
            ) : (
            <h1>No results found!</h1>
            )}
        </div>
        </div>
        );
}

export default SearchBar;