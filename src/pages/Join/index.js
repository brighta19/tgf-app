import { Component } from "react";
import Logo from "../../components/Logo";
import "./style.css";

class JoinPage extends Component {
    render() {
        return (
            <div className="JoinPage">
                <header>
                    <Logo invert />

                    <h1 className="Title">Join</h1>
                </header>
                <div>
                    <label htmlFor="namefirst_input">First name</label>
                    <input type="text" id="namefirst" placeholder="First name *" required />

                    <label htmlFor="namemiddle_input">Middle name</label>
                    <input type="text" id="namemiddle_input" placeholder="Middle name" />

                    <label htmlFor="namelast_input">Last name</label>
                    <input type="text" id="namelast_input" placeholder="Last name" />

                    <label htmlFor="town_input">Town</label>
                    <input type="text" id="town_input" placeholder="Town" />

                    <label htmlFor="email_input">Email</label>
                    <input type="email" id="email_input" placeholder="Email *" required />

                    <label htmlFor="password_input">Password</label>
                    <input type="password" id="password_input" placeholder="Password *" required />

                    <label htmlFor="confirm_password_input">Confirm Password</label>
                    <input type="password" id="confirm_password_input" placeholder="Confirm Password *" required />

                    <button id="join_button">Join</button>
                </div>
                <div className="Links">
                    <a href="./">Enter The Glass Files</a>
                </div>
            </div>
        )
    }
}

export default JoinPage;
