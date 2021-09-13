import { Component } from "react";
import Page from "../Page";
import PopUpBox from "../../components/PopUpBox";
import ItemsGrid from "../../components/ItemsGrid";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

class StoriesPage extends Component {
    render() {
        return (
            <Page className="StoriesPage" title="Stories" loggedIn={this.props.loggedIn}>
                {!this.props.loggedIn && <PopUpBox type={PopUpBox.IS_GUEST} />}

                {this.props.items ? <ItemsGrid items={this.props.items} /> : <LoadingIcon /> }
            </Page>
        )
    }
}

export default StoriesPage;
