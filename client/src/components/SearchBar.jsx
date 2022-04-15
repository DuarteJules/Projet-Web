import React, { useState,useRef,useEffect } from 'react';
import instance from "../functions/axios";
import { Link } from "react-router-dom";


const getRecipe = async () => {
    const response = await instance.get('/recipes')
    .then(res => {return res.data},)
    .catch((err) => console.log(err));

    return response;
}


function SearchBar() {

    const [Recipe, setRecipe] = useState({});

    // the value of the search field 
    const [ingredients, setIngredients] = useState('');
    // the search result
    const [foundRecipes, setFoundRecipes] = useState(Recipe);
    const loading = useRef(true);


    useEffect(() => { 
        if(loading.current) {
            (async () => {
                const Recipes = await getRecipe();
                setRecipe(preVal => preVal = Recipes);
                setFoundRecipes(preVal=> preVal = Recipes);
                loading.current = false;
            })();
        }
        }, []);

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
        // If the text field is empty, show all recipes
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
            {!loading.current|| foundRecipes && foundRecipes.length > 0 ? (foundRecipes.map((recette) => (
                <Link to={`/Recette/${recette.idRecipe}`} className='RecetteCardContainer' key={recette.idRecipe} >
                <div >
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
                </div>
                </Link>
            ))
            ) : (
            <h1>No results found!</h1>
            )}
        </div>
        </div>
        );
}

export default SearchBar;