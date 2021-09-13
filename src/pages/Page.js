import { Component } from "react";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";

class Page extends Component {
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
