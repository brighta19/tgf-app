import React from "react";
import "./style.css";

class BottomBar extends React.Component {
    render() {
        return (
            <>
                <div className="BottomBar">
                    <div className="WorldButton"></div>
                    <div className="CommunityButton"></div>
                    <div className="CreateButton"></div>
                    <div className="NotificationsButton"></div>
                    <div className="ProfileButton"></div>
                </div>
                <div className="BottomBarSpace" />
            </>
        );
    }
}

export default BottomBar;
