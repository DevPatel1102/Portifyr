import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { auth } from "../../../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./auth.css";

export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const handleLogin = async () => {

        let hasError = false;

        if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
            setErrorEmail("Enter a valid email address");
            hasError = true;
        } else {
            setErrorEmail("");
            hasError = false;
        }
        if (!userPassword) {
            setErrorPassword("Password field can't be empty");
            hasError = true;
        } else {
            hasError = false;
            setErrorPassword("");
        }

        if (!hasError && userEmail && userPassword) {
            try {
                await login();
                alert("Login Successful!!");
            } catch (error) {
                console.error("Login failed:", error);
                alert("Incorrect email or password. Please try again.");
            }
        }
    }

    const login = async () => {
        await signInWithEmailAndPassword(auth,userEmail,userPassword);
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-content">
                    <h2>Welcome Back</h2>
                    <div className="form-container">
                        <div className="input-group">
                            <label>Email</label>
                            <div className="input-field">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <span className="error-message">{errorEmail}</span>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-field">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={userPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </div>
                            <span className="error-message">{errorPassword}</span>
                        </div>

                        <div className="options-group">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <button onClick={handleLogin} className="login-button">
                            Login
                        </button>

                        <p className="signup-text">
                            Don't have an account?{" "}
                            <a href="#" className="signup-link">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}