import React from "react";
import Page from "../Page";
import PopUpBox from "../../PopUpBox";
import "./style.css";

class StoriesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false };
    }
    render() {
        return (
            <Page loggedIn={this.state.loggedIn}>
                <h1>Stories Page</h1>
                {!this.state.loggedIn ? <PopUpBox type={PopUpBox.IS_GUEST} /> : ""}
            </Page>
        )
    }
}

export default StoriesPage;
