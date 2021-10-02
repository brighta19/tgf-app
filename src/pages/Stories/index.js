import { Component } from "react";
import Page from "../Page";
import PopUpBox from "../../components/PopUpBox";
import ItemsGrid from "../../components/ItemsGrid";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

const REQUEST_TIMEOUT = 3000;
class StoriesPage extends Component {
    constructor(props) {
        super(props);

        this.state = { loadingItems: true };

        setTimeout(() => {
            fetch("/items.json")
            .then(data => data.json())
            .then(items => this.setState({ loadingItems: false, items }));
        }, REQUEST_TIMEOUT)
    }
    componentDidMount() {
    }
    render() {
        return (
            <Page className="StoriesPage" title="Stories" loggedIn={this.props.loggedIn}>
                {!this.props.loggedIn && <PopUpBox type={PopUpBox.IS_GUEST} />}
                {!this.state.loadingItems ? <ItemsGrid items={this.state.items} /> : <LoadingIcon /> }
            </Page>
        )
    }
}

export default StoriesPage;
