import { Component } from "react";
import Page from "../Page";
import GroupsList from "../../components/GroupsList";
import LoadingIcon from "../../components/LoadingIcon";
import "./style.css";

class GroupsPage extends Component {
    render() {
        return (
            <Page className="GroupsPage" title="My Groups" loggedIn={this.props.loggedIn}>
                {this.props.groups ? <GroupsList groups={this.props.groups} /> : <LoadingIcon />}
            </Page>
        )
    }
}

export default GroupsPage;
