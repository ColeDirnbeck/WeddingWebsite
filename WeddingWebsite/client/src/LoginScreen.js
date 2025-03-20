import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const navigate = useNavigate();
    const [accesscode, setAccessCode] = useState("");
    const [error, setError] = useState("");
    const [showAccessCode, setShowAccessCode] = useState(false); // Toggle visibility state

    const handleLogin = () => {
        if (accesscode.trim() === "") {
            setError("Access Code is required.");
            return;
        }

        if (accesscode === "GOBIRDS") {
            navigate("/home"); // Navigate to home page
        } else {
            setError("Incorrect Access Code. Please try again.");
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <input
                type={showAccessCode ? "text" : "password"} // Toggle input type between text and password
                placeholder="Enter access code"
                value={accesscode}
                onChange={(e) => setAccessCode(e.target.value)}
            />
            <button onClick={() => setShowAccessCode(!showAccessCode)}>
                {showAccessCode ? "Hide" : "Show"}
            </button>
            <br />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default LoginScreen;