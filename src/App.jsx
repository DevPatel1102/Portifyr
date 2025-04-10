import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { SignUp } from './components/Auth/SignUp';
import { Login } from './components/Auth/Login';
import { AuthProvider } from './components/Auth/AuthContext'; 
// import { PortfolioPage } from './components/PortfolioPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
