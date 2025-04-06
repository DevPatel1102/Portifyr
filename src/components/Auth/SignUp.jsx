import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "./auth.css";

export const SignUp = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setUserConfirmPassword(e.target.value);
    }

    const handleSignUp = () => {
        alert(userEmail);
        alert(userPassword);
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-content">
                    <h2>Sign Up</h2>
                    <div className="form-container">
                        <div className="input-group">
                            <label>Email</label>
                            <div className="input-field">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-field">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={userPassword}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Confirm Password</label>
                            <div className="input-field">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={userConfirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                        </div>

                        <button onClick={handleSignUp} className="login-button">
                            Sign Up
                        </button>

                        <p className="signup-text">
                            Already have an account?{" "}
                            <a href="#" className="signup-link">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
