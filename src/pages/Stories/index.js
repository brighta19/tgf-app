import { Component } from "react";
import UIPage from "../../components/UIPage";
import PopUpBox from "../../components/PopUpBox";
import ItemsGrid from "../../components/ItemsGrid";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

const REQUEST_TIMEOUT = 3000;
class StoriesPage extends Component {
    constructor(props) {
        super(props);

        this.state = { loadingItems: true };
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("/items.json")
            .then(data => data.json())
            .then(items => this.setState({ loadingItems: false, items }));
        }, REQUEST_TIMEOUT);
    }
    render() {
        return (
            <UIPage className="StoriesPage" title="Stories" loggedIn={this.props.loggedIn}>
                {!this.props.loggedIn && <PopUpBox type={PopUpBox.IS_GUEST} />}
                {!this.state.loadingItems ? <ItemsGrid items={this.state.items} /> : <LoadingIcon /> }
            </UIPage>
        )
    }
}

export default StoriesPage;
