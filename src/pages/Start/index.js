import { Component } from "react";
import { Link } from "react-router-dom";
import TGF_LOGO from "../../assets/logo_the-glass-files.jpg";
import "./style.css";

class StartPage extends Component {
    render() {
        return (
            <div className="StartPage">
                <div className="Brand">
                    <img src={TGF_LOGO} alt="The Glass Files logo" width="380" height="280" />
                    <p>We all make History<sup>&reg;</sup></p>
                </div>
                <div className="Buttons">
                    <Link to="/enter" className="EnterBtn">Enter</Link>
                    <Link to="/join" className="JoinBtn">Join</Link><br />
                    <Link to="/stories" className="BrowseBtn">Browse Stories</Link>
                </div>
                <div className="Links">
                    <div className="OtherLinks">
                        <a href="https://www.theglassfiles.com/intent/">Intent</a>
                        <a href="http://blog.theglassfiles.com/" target="_blank" rel="noreferrer">Blog</a>
                        <a href="https://www.theglassfiles.com/newsletter/">Newsletter</a>
                        <a href="https://www.theglassfiles.com/terms/">Terms of Service</a>
                        <a href="https://www.theglassfiles.com/privacy/">Privacy</a>
                        <a href="https://www.theglassfiles.com/customer_service/">Customer Service</a>
                        <a href="https://www.theglassfiles.com/">Desktop Site</a>
                    </div>
                    <div className="SocialLinks">
                        <a href="https://twitter.com/theglassfiles/" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://www.instagram.com/theglassfiles" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/theglassfiles" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/company/the-glass-files/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <p>&copy; 2021 The Glass Files</p>
                </div>
            </div>
        );
    }
}

export default StartPage;
