import { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { auth } from "../../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import googleLogo from "../../assets/images/google_logo.png";

import "./auth.css";

export const Login = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorGoogleSignIn, setErrorGoogleSignIn] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPageLoaded(true);
        }, 100);
    }, []);

    const handleLogin = async () => {
        setLoading(true);

        let hasEmailError = false;
        let hasPasswordError = false;

        if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
            setErrorEmail("Enter a valid email address");
            hasEmailError = true;
        } else {
            setErrorEmail("");
        }

        if (!userPassword) {
            setErrorPassword("Password field can't be empty");
            hasPasswordError = true;
        } else {
            setErrorPassword("");
        }

        if (!hasEmailError && !hasPasswordError && userEmail && userPassword) {
            try {
                await signInWithEmailAndPassword(auth, userEmail, userPassword);
                setSuccess(true);
                setLoading(false);

                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } catch (error) {
                console.error("Login failed:", error);
                setLoading(false);
                setErrorPassword("Incorrect email or password.");
            }
        } else {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            // console.error("Google sign-in failed:", error);
            setErrorGoogleSignIn("Google sign-in failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`login-container ${pageLoaded ? 'page-loaded' : 'page-loading'}`}>
            <div className={`login-card ${pageLoaded ? 'card-loaded' : 'card-loading'}`}>
                <div className="login-content">
                    <h2>Welcome Back</h2>

                    {success && (
                        <div className="text-green-600 text-sm font-semibold text-center mb-4 transition-opacity duration-500">
                            Login successful! Redirecting...
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

                        <div className="options-group">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>

                        <button
                            onClick={handleLogin}
                            className={`login-button flex items-center justify-center transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed pulse" : ""
                                }`}
                            disabled={loading}
                        >
                            {loading ? <span className="loader mr-2"></span> : "Login"}
                        </button>

                        <p className="signup-text">
                            Don't have an account?{" "}
                            <span className="signup-link" onClick={() => navigate('/signup')}>Sign up</span>
                        </p>
                        <div className="or-line">
                                <hr/>
                                <p>OR</p>
                                <hr/>
                        </div>
                        <button
                            onClick={handleGoogleLogin}
                            className="google-login-button flex items-center justify-center transition-all duration-300"
                            disabled={loading}
                        >
                            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
                            Continue with Google
                        </button>
                        <center><span className="error-message">{errorGoogleSignIn}</span></center>
                    </div>
                </div>
            </div>
        </div>
    );
};