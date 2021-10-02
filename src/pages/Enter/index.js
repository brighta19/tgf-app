import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./style.css";

class EnterPage extends Component {
    render() {
        return (
            <div className="EnterPage">
                <header>
                    <Link to="/">
                        <Logo invert />
                    </Link>

                    <h1 className="Title">Enter</h1>
                </header>
                <div>
                    <label htmlFor="email_input">Email</label>
                    <input type="email" id="email_input" placeholder="Email" />

                    <label htmlFor="password_input">Password</label>
                    <input type="password" id="password_input" placeholder="Password" />

                    <button id="enter_button">Enter</button>
                </div>
                <div className="Links">
                    <Link to="/">Reset your password</Link>
                    <Link to="/join">Join The Glass Files</Link>
                </div>
            </div>
        )
    }
}

export default EnterPage;
