import { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class PopUpBox extends Component {
    render() {
        return (
            <div className="PopUpBox">
                { Messages[this.props.type] }
            </div>
        );
    }
}

PopUpBox.IS_GUEST = 1;

const Messages = {
    [PopUpBox.IS_GUEST]: (
        <span class="message">
            You are currently browsing as a Guest.<br />
            <Link to="/join">Join now to create your own items!</Link>
        </span>
    )
};

export default PopUpBox;
