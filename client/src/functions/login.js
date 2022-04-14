import instance from "./axios";

export async function findUsers(){
    const arrayFiltered=[];
    const i = 0;

    try {
        const response = await instance.get('/users');
        //console.log(response);
        response.forEach(element => {
            arrayFiltered = element;
        });
        return arrayFiltered;
    } catch (error) {
        //console.error(error);
    }

}