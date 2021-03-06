import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "../authpage.css";

class EnterPage extends Component {
    render() {
        return (
            <div className="AuthPage">
                <header>
                    <Link to="/" title="The Glass Files">
                        <Logo invert />
                    </Link>

                    <h1 className="Title">Enter</h1>
                </header>
                <div>
                    <label htmlFor="email_input">Email</label>
                    <input type="email" id="enter_email_input" placeholder="Email" />

                    <label htmlFor="password_input">Password</label>
                    <input type="password" id="password_input" placeholder="Password" />

                    <button id="submit_button">Enter</button>
                </div>
                <div className="Links">
                    <Link to="/reset">Reset your password</Link>
                    <br />
                    <Link to="/join">Join The Glass Files</Link>
                </div>
            </div>
        )
    }
}

export default EnterPage;
