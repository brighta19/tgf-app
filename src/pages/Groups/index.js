import { Component } from "react";
import Page from "../Page";
import GroupsList from "../../components/GroupsList";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

const REQUEST_TIMEOUT = 3000;
class GroupsPage extends Component {
    constructor(props) {
        super(props);

        this.state = { loadingGroups: true };

        setTimeout(() => {
            fetch("/groups.json")
            .then(data => data.json())
            .then(groups => this.setState({ loadingGroups: false, groups }));
        }, REQUEST_TIMEOUT);
    }
    componentDidMount() {
    }
    render() {
        return (
            <Page className="GroupsPage" title="My Groups" loggedIn={this.props.loggedIn}>
                {!this.state.loadingGroups ? <GroupsList groups={this.state.groups} /> : <LoadingIcon />}
            </Page>
        )
    }
}

export default GroupsPage;
