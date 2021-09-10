import React from "react";
import PopUpBox from "../../PopUpBox";
import TopBar from "../../TopBar";
import "./style.css";

class StoriesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false };
    }
    render() {
        return (
            <div>
                <TopBar />
                {!this.state.loggedIn ? <PopUpBox type={PopUpBox.IS_GUEST} /> : null}
            </div>
        )
    }
}

export default StoriesPage;
