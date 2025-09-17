import { useState } from 'react';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom' 
import './Login.css';



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
    function handleSubmit() {
    const success = authContext.login(username, password);

    if (success) {
        setShowErrorMessage(false); // clear error if previously shown
        navigate(`/songs/${username}`);
    } else {
        setShowErrorMessage(true);
    }
}



    return(

        <div className="Login">
            <h2>Please Login Credentials</h2>

            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}

            <div className="LoginForm">
                <label>User Name:</label>
                <input type="text" name ="username" placeholder="Enter Username" value = {username} onChange={handleUsernameChange}/> {/* Here we are using the state and the function */}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name ="password" placeholder="Enter Password" value = {password} onChange={handlePasswordChange} /> {/* Here we are using the state and the function */}
            </div> 
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>                
            </div>


        </div>

    )
}