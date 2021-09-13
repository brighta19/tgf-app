import { Component } from "react";
import GroupsList from "../../components/GroupsList";
import Page from "../Page";
import "./style.css";

class GroupPage extends Component {
    render() {
        return (
            <Page className="GroupsPage" loggedIn={this.props.loggedIn}>
                <header>
                    <h1>My Groups</h1>
                </header>

                {this.props.groups ?
                <GroupsList groups={this.props.groups} />
                :
                <div className="LoadingScreen">
                    <div className="LoadingIcon"></div>
                </div>}
            </Page>
        )
    }
}

export default GroupPage;
