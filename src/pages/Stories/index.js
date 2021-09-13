import { Component } from "react";
import Page from "../Page";
import PopUpBox from "../../components/PopUpBox";
import ItemGrid from "../../components/ItemGrid";
import "./style.css";

class StoriesPage extends Component {
    render() {
        return (
            <Page className="StoriesPage" loggedIn={this.props.loggedIn}>
                {!this.props.loggedIn && <PopUpBox type={PopUpBox.IS_GUEST} />}

                <header>
                    <h1>Stories</h1>
                </header>

                {this.props.items ?
                <ItemGrid items={this.props.items} />
                :
                <div className="LoadingScreen">
                    <div className="LoadingIcon"></div>
                </div>}
            </Page>
        )
    }
}

export default StoriesPage;
