import rick from "../assets/img/rick.jpg"

const Recette = () => (
    <>
        <h1>Ma page Recette</h1>
        <div class="recipeCard">
            <div class="elementContainer">
                <div class="image"><img src={rick} alt="rick astley" class="rick"></img></div>
                <div class="recipeText"> <p>goudron gravier et emincé de ciment</p> </div>
            </div>
        </div>
    </>

)

export default Recette;