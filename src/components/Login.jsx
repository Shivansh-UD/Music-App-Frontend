import { useState } from 'react';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom' 



export default function Login(){

    //these are the defaults value we are setting for the username and password. each time the application is laoded up these will be the defaults we we see.
    const [username, setUsername] = useState("shivansh")
    const [password, setPassword] = useState("")
    const authContext = useAuth();
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();




    //These functions below are used to changes the input fields if the user decides to go with a different username or password they update both fields in MEMORY
    //so that when authenticating, the correct credentials are used
    function handleUsernameChange(event){
        setUsername(event.target.value);

    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
        
    }

    //hardcoded authentication
    function handleSubmit(){
        if(authContext.login(username, password)){
           
            navigate() //in JS if we want to use a variable anywhere like in this line, we have to do `${variable name}`

        }
        else{
            setShowErrorMessage(true);
        }

    }

    return(

        <div className="Login">
            <h2>Please Login Credentials</h2>

            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            

        </div>

    )
}