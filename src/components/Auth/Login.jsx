import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "./auth.css";

export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleLogin = () => {
        alert(userEmail);
        alert(userPassword);
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
