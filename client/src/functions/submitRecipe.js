import instance from "./axios";
import currentUser from "./user";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export async function addRecipe(body){

    instance.post('/recipes', {
        idUser: "1"      /*|||METTRE L ID DE L USER|||*/,
        date: date,
        ingredients: body.ingredients,
        title: body.title,
        content: body.content,
        type: body.type,
        time: body.time,
        servings: body.servings,
        tag: body.tag,
        linkImg: body.link
      })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        //console.log(error);
      });
}