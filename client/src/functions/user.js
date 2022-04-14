var currentUser = null;

export function changeUser (isConnected){
    currentUser = isConnected;
    console.log(currentUser);
};

export default currentUser;
