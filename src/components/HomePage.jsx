import { useState } from "react";
import './HomePage.css';
import Login from './Login';

export default function HomePage() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="HomePage">
            <h1>Welcome to Sonara Music</h1>
            <h3>Your one stop shop for all types of music from around the world!!</h3>

            <div>
                <button type="button" onClick={() => setShowLogin(true)}>Login</button>
            </div>

            <div>
                <button type="button">Logout</button>
            </div>

            {/* Modal Popup */}
            {showLogin && (
                <div className="modal-overlay" onClick={() => setShowLogin(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowLogin(false)}>X</button>
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
}
