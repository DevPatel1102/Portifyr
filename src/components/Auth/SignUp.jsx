import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "./auth.css";
import { auth } from '../../../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const handleSignUp = async () => {
        
        if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
            setErrorEmail("Enter a valid email address")
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
            if(userPassword !== userConfirmPassword){
                setErrorPassword("Passwords don't match");
                return;
            }else{
                try {
                    await signup();
                    alert("SignUp Successful!!");
                } catch (error) {
                    console.error("Signup failed:", error);
                    alert("Registration error occurred");
                }
            }
        }
    }
    const signup = async () => {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    };

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
