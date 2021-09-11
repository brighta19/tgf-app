import React from "react";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";

class Page extends React.Component {
    render() {
        return (
            <div className={"Page " + this.props.className}>
                <TopBar />
                {this.props.children}
                {this.props.loggedIn && <BottomBar />}
            </div>
        );
    }
}

export default Page;
