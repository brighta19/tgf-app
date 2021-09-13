import { Component } from "react";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import "./style.css";

class Page extends Component {
    render() {
        return (
            <div className={"Page " + this.props.className}>
                <TopBar />
                <header className="TitleContainer">
                    <h1 className="Title">{this.props.title}</h1>
                </header>
                {this.props.children}
                {this.props.loggedIn && <BottomBar />}
            </div>
        );
    }
}

export default Page;
