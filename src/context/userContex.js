import {useContext,createContext,useState} from "react";


const UserContext=createContext();

const UserProvider=({children})=>{
    

    const [userName, setUserName] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <UserContext.Provider value={{userName, setUserName,todos, setTodos}}>
            {children}
        </UserContext.Provider>
    )
}
const useUserName=()=>{
    return useContext(UserContext);
}

export { useUserName, UserProvider};