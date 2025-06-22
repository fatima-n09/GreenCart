import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();
export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const[user, setUser] = useState(null)
    const[isSeller, setIsSeller] = useState(false)
    const value= { navigate, user, setUser,isSeller, setIsSeller }
    return <AppContextProvider value={value}>
        {children }
    </AppContextProvider>
}

export const useAppContext = () => {
    return useContext(Appcontext)
}