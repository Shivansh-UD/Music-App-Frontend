import axios from 'axios'

/**
 * This allows us to create the base URL once and just append it with whatever links we want. So we dont have to write this part everytime
 * 
 * in this example all our API calls are going to this localhost:8080 so we have made it a BASE URL so we dont have to write it over and over again
 */
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);



export const retriveAllSongs
    = () => apiClient.get('/songs');


export const retriveSingleSong
    = (id) => apiClient.get(`/songs/${id}`, {withCredentials: true})



