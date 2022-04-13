// const RecetteCard = (props) => (
//     <>
//         <div class="recipeCard">
//             <div class="elementContainer">
//                 <div class="image"><img src={rick} alt="rick astley" class="rick"></img></div>
//                 <div class="recipeTitle"></div>
//                 <div class="servings"></div>
//                 <div class="time"></div>
//                 <div class="recipeTextContainer"> <p class="recipeText">goudron gravier et emincé de ciment</p> </div>
//             </div>
//         </div>
//     </>
function RecetteCard(props){
    return(
        <>
        <div class="recipeCard">
            <div class="elementContainer">
                <div class="image"><img src={rick} alt="rick astley" class="rick"></img></div>
                <div class="recipeTitle">{props.recipeTitle}</div>
                <div class="servings">{props.servings}</div>
                <div class="time">{props.time}</div>
                <div class="recipeTextContainer"> <p class="recipeText">{props.recipeText}</p> </div>
            </div>
        </div>
        
        </>
    )
}


export default RecetteCard()