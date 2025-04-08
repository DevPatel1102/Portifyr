import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "./auth.css";
import { auth } from "../../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSignUp = async () => {
        setLoading(true);

        if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
            setErrorEmail("Enter a valid email address");
        } else {
            setErrorEmail("");
        }

        if (!userPassword) {
            setErrorPassword("Password field can't be empty");
        } else if (userPassword.length < 6) {
            setErrorPassword("Password should be at least 6 characters");
        } else {
            setErrorPassword("");
        }

        if (!userConfirmPassword) {
            setErrorConfirmPassword("Please confirm the password");
        } else if (userConfirmPassword.length < 6) {
            setErrorConfirmPassword("Password should be at least 6 characters");
        } else {
            setErrorConfirmPassword("");
        }

        if (
            userPassword &&
            userConfirmPassword &&
            userPassword.length >= 6 &&
            userConfirmPassword.length >= 6
        ) {
            if (userPassword !== userConfirmPassword) {
                setErrorPassword("Passwords don't match");
                setLoading(false);
                return;
            } else {
                try {
                    await createUserWithEmailAndPassword(auth, userEmail, userPassword);
                    setSuccess(true);
                    setLoading(false);

                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                    return;
                } catch (error) {
                    console.error("Signup failed:", error);
                    alert("Registration error occurred");
                    setLoading(false);
                }
            }
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-content">
                    <h2>Sign Up</h2>

                    {success && (
                        <div className="text-green-600 text-sm font-semibold text-center mb-4 transition-opacity duration-500">
                            Sign up successful! Redirecting...
                        </div>
                    )}

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

                        <div className="input-group">
                            <label>Confirm Password</label>
                            <div className="input-field">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={userConfirmPassword}
                                    onChange={(e) => setUserConfirmPassword(e.target.value)}
                                />
                            </div>
                            <span className="error-message">{errorConfirmPassword}</span>
                        </div>

                        <button
                            onClick={handleSignUp}
                            className={`login-button flex items-center justify-center transition-all duration-300 ${
                                loading ? "opacity-70 cursor-not-allowed pulse" : ""
                            }`}                            
                            disabled={loading}>
                            {loading ? (
                                <span className="loader mr-2"></span>
                            ) : (
                                "Sign Up"
                            )}
                        </button>

                        <p className="signup-text">
                            Already have an account?{" "}
                            <span className="signup-link" onClick={() => navigate("/login")}>
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
