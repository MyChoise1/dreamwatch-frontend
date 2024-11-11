import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <p>Site Theme</p>
                <div className="theme-options">
                    <button>A</button>
                    <button className="active">A</button>
                    <button>A</button>
                    <button>A</button>
                </div>
            </div>
            <div className="footer-section">
                <a href="#">Donate</a>
                <a href="#">AniList.co</a>
                <a href="#">AniChart.net</a>
                <a href="#">Apps</a>
            </div>
            <div className="footer-section">
                <a href="#">Site Stats</a>
                <a href="#">Recommendations</a>
                <a href="#">API</a>
            </div>
            <div className="footer-section">
                <a href="#">Discord</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">GitHub</a>
            </div>
            <div className="footer-section">
                <a href="#">Add Data</a>
                <a href="#">Moderators</a>
                <a href="#">Contact</a>
                <a href="#">Terms & Privacy</a>
                <a href="#">Site Map</a>
            </div>
        </footer>
    );
};

