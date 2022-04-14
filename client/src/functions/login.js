import instance from "./axios";

export const getUsers = async () => {
    const response = await instance.get('/users')
    .then(res => {return res.data})
    .catch((err) => console.log(err));

    // console.log(response);
    return response;
}