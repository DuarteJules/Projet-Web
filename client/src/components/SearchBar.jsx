import React, { useState,useRef,useEffect } from 'react';
import instance from "../functions/axios";


const getRecipe = async () => {
    const response = await instance.get('/recipes')
    .then(res => {return res.data})
    .catch((err) => console.log(err));

    return response;
}
    // const RECETTES=[
    // // écrire les recettes au format => { id: 1, name: 'purée', temps: 32, ingredients:'pomme de terre, sel, eau' }
    // {id:1, name: 'Sardoche', temps: 50, ingredients: 'sel , eau, fun', servings:20 , type:"vegan", image:require("../assets/img/rick.jpg")},
    // {id:2, name: 'Pipi', temps: 50, ingredients: 'pipi , eau, fun', servings:2 , type:"connard", image:require('../assets/img/rick.jpg')},
    // {id:3, name: 'Luciano', temps: 50, ingredients: 'portugal , eau, fun', servings:4012 , type:"truc", image:require("../assets/img/rick.jpg")}
    // ];
    // // const [RECETTES, getRecipe] 

function SearchBar() {
    const [Recipe, setRecipe] = useState({});
    const loading = useRef(true);
    
    
    useEffect(() => {
        if(loading.current) {
            (async () => {
                const Recipes = await getRecipe();
                setRecipe(preVal => preVal = Recipes);
                loading.current = false;
            })();
            }
        }, []);

  // the value of the search field 
const [ingredients, setIngredients] = useState('');

  // the search result
    const [foundRecipes, setFoundRecipes] = useState(Recipe);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
        const results = Recipe.filter((recette) => {
        return recette.ingredients.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundRecipes(results);
        } else {
        setFoundRecipes(Recipe);
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
            {foundRecipes && foundRecipes.length > 0 ? (foundRecipes.map((recette, key = 0) => (
                <div className="RecetteCardContainer" key={key++}>
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