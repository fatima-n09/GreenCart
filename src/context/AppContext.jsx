import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();
export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const[user, setUser] = useState(null)
    const[isSeller, setIsSeller] = useState(false)
    const[showUserLogin, setShowUserLogin] = useState(false)
    const value= { navigate, user, setUser,isSeller, setIsSeller, showUserLogin, setShowUserLogin }
      return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}

export const useAppContext = () => {
    return useContext(Appcontext)
}