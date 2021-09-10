import React from "react";
import TopBar from "../TopBar";

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false };
    }
    render() {
        return (
            <>
                <TopBar />
                {this.props.children}
            </>
        );
    }
}

export default Page;
