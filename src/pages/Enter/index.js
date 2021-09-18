import { Component } from "react";
import Logo from "../../components/Logo";
import "./style.css";

class EnterPage extends Component {
    render() {
        return (
            <div className="EnterPage">
                <header>
                    <Logo invert />

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
                    <a href="./">Reset your password</a>
                    <a href="./">Join The Glass Files</a>
                </div>
            </div>
        )
    }
}

export default EnterPage;
