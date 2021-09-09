import React from "react";
import Logo from "../Logo";
import "./style.css";

class TopBar extends React.Component {
    render() {
        return (
            <div className="TopBar">
                <Logo />
            </div>
        );
    }
}

export default TopBar;
