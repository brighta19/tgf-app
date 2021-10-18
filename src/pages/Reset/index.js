import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "../authpage.css";

class ResetPage extends Component {
    render() {
        return (
            <div className="AuthPage">
                <header>
                    <Link to="/" title="The Glass Files">
                        <Logo invert />
                    </Link>

                    <h1 className="Title">Reset Password</h1>
                </header>
                <div>
                    <label htmlFor="email_input">Email</label>
                    <input type="email" id="email_input" placeholder="Email" />

                    <button id="submit_button">Reset</button>
                </div>
                <div className="Links">
                    <Link to="/enter">Enter The Glass Files</Link>
                    <br />
                    <Link to="/join">Join The Glass Files</Link>
                </div>
            </div>
        )
    }
}

export default ResetPage;
