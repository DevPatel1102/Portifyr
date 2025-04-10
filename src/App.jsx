import React from 'react';
import { LandingPage } from './components/LandingPage';
import { BrowserRouter as Router, Routes,   Route } from 'react-router-dom';
import { SignUp } from './components/Auth/SignUp';
import { Login } from './components/Auth/Login';

function App(){
    return(
      <Router>
        
      <Routes>
        <Route path="/" element={<LandingPage/>}/>  
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      </Router>
    );
}
export default App;