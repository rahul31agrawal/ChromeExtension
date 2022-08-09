import {useContext,createContext,useState} from "react";


const UserContext=createContext();

const UserProvider=({children})=>{
    

    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}
const useUserName=()=>{
    return useContext(UserContext);
}

export { useUserName, UserProvider};