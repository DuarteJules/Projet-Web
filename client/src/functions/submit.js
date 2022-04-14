import instance from "./axios";

export async function addUser(body){

    instance.post('/users', {
        username: body.username,
        password: body.password
      })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        //console.log(error);
      });
}