import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import HomePage from './HomePage'
import ErrorComponent from './ErrorComponent';
import ListAllSongs from './ListAllSongs';
import DisplaySongById from './DisplaySongById';
import AuthProvider, { useAuth } from './security/AuthContext'
import WelcomePage from './WelcomePage';





function AuthenticatedRoute({children}){ //children refers to other components
    const authContext = useAuth();

    if(authContext.isAuthenticated)
        return children;

    return <Navigate to = "/" />
}


export default function MusicApp(){
    return(
        <div className="MusicApp">
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path = '/' element = {<HomePage /> } />
                        <Route path = '/login' element = {<HomePage />} />
                        <Route path = '/songs/:username' element = {
                            
                            <AuthenticatedRoute>
                                <WelcomePage />
                            </AuthenticatedRoute>

                            } />
                        {/* we are using /:username here to capture the username parameter that the user enters. this is linked with the navigate() method below */}
                        <Route path = '*' element = {<ErrorComponent />} />


                        {/* the * route is the route used if none of the given routes match and it shows that component */}
                        <Route path = '/songs' element = {
                              
                              <AuthenticatedRoute>
                                <ListAllSongs/>
                              </AuthenticatedRoute>
                              } />

                         {/** we are passing the id as a parameter into the path */}
                         <Route path = '/songs/:id' element = {
                              <AuthenticatedRoute>
                                <DisplaySongById/>
                              </AuthenticatedRoute>
                              } />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>

        </div>
                
    )
}