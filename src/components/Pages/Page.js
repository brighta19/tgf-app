import React from "react";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";

class Page extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                {this.props.children}
                {this.props.loggedIn ? <BottomBar /> : ""}
            </>
        );
    }
}

export default Page;
