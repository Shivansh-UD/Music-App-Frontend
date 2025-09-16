import { createContext, useContext, useState } from "react";


//1. Create a Context 
export const AuthContext = createContext(); //in order for the other components to acces the number we defined below as a state we need to export the context here

//Here we have just made hook, if any class/component wants to use the AuthContext they can just use this hook, rather than defining and importing alot things we just import one.
export const useAuth = ()=> useContext(AuthContext);


export default function AuthProvider({children}){


    //const [number, setNumber] = useState(10);

    const [isAuthenticated, setAuthenticated] = useState(false);
        
    const [username, setUsername] = useState(null);


    function login(username, password){
        if(username === 'shivansh' && password === 'pwd'){
            setAuthenticated(true);
            setUsername(username);
           return true;

        }
        else{
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout(){
        setAuthenticated(false);
    }


    return (
        <AuthContext.Provider value = {{isAuthenticated, login, logout, username}}> {/* in order for us to provide number to all the other components we need to do this */}
        {/* {number, isAuthenticated, setAuthenticated}    THIS LINE MEANS WE ARE CREATING A OBJECT AND THEN PASSING IT THROUGH FOR OTHER COMPONENTS TO USE */}
            {children}
        </AuthContext.Provider>

    )
}