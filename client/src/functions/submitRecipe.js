import instance from "./axios";
import currentUser from "./user";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export async function addRecipe(body){
  const idUser = localStorage.getItem('user')
  console.log(idUser)
    instance.post('/recipes', {
        idUser: `${idUser}`    /*|||METTRE L ID DE L USER|||*/,
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
  setTimeout(window.location.reload(),1000);
}