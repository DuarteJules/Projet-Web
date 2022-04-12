import React, { useState } from 'react';



const RECETTES = [
    // écrire les recettes au format => { id: 1, name: 'purée', temps: 32, ingredients:'pomme de terre, sel, eau' }
    {id:1, name: 'Siphilis', temps:50, ingredients: 'MST, CHTOUILLE, fun'},
    {id:2, name: 'Purée', temps:32, ingredients: 'Pomme de terre, eau, beurre, sel'},
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
        return recette.ingredients.toLowerCase().startsWith(keyword.toLowerCase());
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
        placeholder="Entrez un ingrédients"
        />

        <div className="recette-list">
            {foundRecipes && foundRecipes.length > 0 ? (
            foundRecipes.map((recette) => (
                <li key={recette.id} className="recette">
                <span className="recipe-id">{recette.id}</span>
                <span className="recipe-name">{recette.name}</span>
                <span className="recipe-time">{recette.temps} minutes</span>
                <span className="recipe-ingredients">{recette.ingredients}</span>
                </li>
            ))
            ) : (
            <h1>No results found!</h1>
            )}
        </div>
        </div>
        );
}

export default SearchBar;