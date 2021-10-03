import { Component } from "react";
import UIPage from "../../components/UIPage";
import GroupsList from "../../components/GroupsList";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

const REQUEST_TIMEOUT = 3000;
class GroupsPage extends Component {
    constructor(props) {
        super(props);

        this.state = { loadingGroups: true };
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("/groups.json")
            .then(data => data.json())
            .then(groups => this.setState({ loadingGroups: false, groups }));
        }, REQUEST_TIMEOUT);
    }
    render() {
        return (
            <UIPage className="GroupsPage" title="My Groups" loggedIn={this.props.loggedIn}>
                {!this.state.loadingGroups ? <GroupsList groups={this.state.groups} /> : <LoadingIcon />}
            </UIPage>
        )
    }
}

export default GroupsPage;
