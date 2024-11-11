import './Navbar.css';
import DMLogo from '../../../public/Logo.png'

export default function Navbar() {
    console.log('NavBar')
    return (
        <div className="navbar">
            <div className="logo">
            <img className='h-8' 
            src={DMLogo} alt="DW-Logo" /></div>
            <a href="#search">Search</a>
            <a href="#social">Social</a>
            <a href="#forum">Forum</a>
            <div className="auth-buttons">
                <button onClick={() => window.location.href = '#login'}>Login</button>
                <button onClick={() => window.location.href = '#signup'} className="signup-button">Sign Up</button>
            </div>
        </div>
    );
};
