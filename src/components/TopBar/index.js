import React from "react";
import Logo from "../Logo";
import "./style.css";

class TopBar extends React.Component {
    render() {
        return (
            <>
                <div className="TopBar">
                    <Logo />
                    <span className="Title">The Glass Files</span>
                    <div className="Menu"></div>
                </div>
                <div className="TopBarSpace" />
            </>
        );
    }
}

export default TopBar;
