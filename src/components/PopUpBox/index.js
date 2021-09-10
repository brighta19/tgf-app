import React from "react";
import "./style.css";

class PopUpBox extends React.Component {
    render() {
        return (
            <div className={"PopUpBox " + this.props.className}>
                { Messages[this.props.type] }
            </div>
        );
    }
}

PopUpBox.IS_GUEST = 1;

const Messages = {
    [PopUpBox.IS_GUEST]: (
        <span>
            You are currently browsing as a Guest.<br />Join now to create your own items!
        </span>
    )
}

export default PopUpBox;
