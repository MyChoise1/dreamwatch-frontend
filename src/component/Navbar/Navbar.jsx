import { useContext } from 'react';
import './Navbar.css';
import DMLogo from '/Logo.png'
import DisplayContext from '../State/Context';

export default function Navbar() {
    const display = useContext(DisplayContext)
    function loginPage() {
        display.showLogin()
    }
    function signupPage() {
        display.showSignup()
    }

    return (
        <div className="navbar">
            <div className="logo">
            <img className='h-8' 
            src={DMLogo} alt="DW-Logo" /></div>
            <a href="#search">Search</a>
            <a href="#social">Social</a>
            <a href="#forum">Forum</a>
            <div className="auth-buttons">
                <button onClick={loginPage}>Login</button>
                <button onClick={signupPage} className="signup-button">Sign Up</button>
            </div>
        </div>
    );
};
