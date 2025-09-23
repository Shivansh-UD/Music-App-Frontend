import { Link } from "react-router-dom";
import './WelcomePage.css';


export default function WelcomePage(){

    return(
        <div className="Welcome">
            <div>
                <h1> Welcome Shivansh </h1>
            </div>

            <div>
                Look at all songs - <Link  to= "/songs">All Songs</Link>
            </div>
            <div>
                Search songs by ID - <Link  to= "/song/:id">Songs By ID</Link>
            </div>
        </div>
    )
}