import { Link } from "react-router-dom";


export default function WelcomePage(){

    return(
        <div className="Welcome">
            <div>
                <h1> Welcome Shivansh </h1>
            </div>

            <div>
                Look at all songs - <Link  to= "/songs">All Songs</Link>
            </div>
        </div>
    )
}