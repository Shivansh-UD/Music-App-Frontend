import './HomePage.css';

export default function HomePage(){
    return(
        <div className="HomePage">
            <h1>Welcome to Sonara Music</h1>
            <h3>Your one stop shop for all types of music from around the world!!</h3>

            <div>
                <button type="button" className="btn btn-success">Login</button>
            </div>

            <div>
                <button type="button" className="btn btn-success">Logout</button>
            </div>
        </div>
    )
}
