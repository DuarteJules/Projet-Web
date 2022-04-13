import { useEffect, useRef, useState } from "react";
import rick from "../assets/img/rick.jpg";
import instance from "../functions/axios";

const getUser = async () => {
    const response = await instance.get('/users')
    .then(res => {return res.data})
    .catch((err) => console.log(err));

    return response;
}

const Recette = () => {
    const [user, setUser] = useState({});
    const loading = useRef(true);

    useEffect(() => {
        if(loading.current) {
            (async () => {
                const users = await getUser();
                setUser(preVal => preVal = users);
                loading.current = false;
            })();
        }
    }, []);

    const testRender = (users, key = 0) => (
        users.map(user => {
            return (
                <div key={key++}>
                    <span>{user.username}</span>
                    <br/>
                    <span>{user.password}</span>
                    <br/>
                </div>
            )
        })
    )

    return (
        <>
            <h1>Ma page Recette</h1>
            <div className="recipeCard">
                <div className="elementContainer">
                    <div className="image"><img src={rick} alt="rick astley" className="rick"></img></div>
                    <div className="recipeText"> <p>goudron gravier et emincé de ciment</p> </div>
                    {!loading.current && testRender(user)}
                </div>
            </div>
        </>
    )
}

export default Recette;