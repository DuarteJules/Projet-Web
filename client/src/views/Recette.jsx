import { useEffect, useRef, useState } from "react";
import rick from "../assets/img/rick.jpg";
import instance from "../functions/axios";

const getRecipe = async () => {
    const response = await instance.get('/recipes/1')
    .then(res => {return res.data})
    .catch((err) => console.log(err));

    return response;
}

const Recette = () => {
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

    // const testRender = (Recipes, key = 0) => (
    //     Recipes.map(Recipe => {
    //         return (
    //             <div key={key++}>
    //                 <span>{Recipe.Recipename}</span>
    //                 <br/>
    //                 <span>{Recipe.password}</span>
    //                 <br/>
    //             </div>
    //         )
    //     })
    // )

    // console.log(Recipe);
    // console.log(Recipe.title);

    return (
        <>
            <div className="recipeCard">
                <div className="titleRecipe"><h1>{Recipe.title}</h1></div>
                <div className="infoRecipes">
                    <div className="timeRecipe">Temps nécessaire à la préparation : {Recipe.time} min</div>
                    <div className="servingRecipe">Préparation pour : {Recipe.servings} personnes</div>
                </div>
                <div className="elementContainer">
                    <div className="recipeText"> <p>{Recipe.content}</p></div>
                    <div className="ingredientRecipe">{Recipe.ingredients}</div>
                </div>
                <div className="dateRecipe">
                    <p>{Recipe.date}</p>
                </div>
            </div>
        </>
    )
}

export default Recette;