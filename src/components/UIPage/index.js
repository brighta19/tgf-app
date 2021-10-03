import { Component } from "react";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";
import "./style.css";

class UIPage extends Component {
    render() {
        return (
            <div className={"UIPage " + this.props.className}>
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

export default UIPage;
