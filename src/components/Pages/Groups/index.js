import React from "react";
import Page from "../Page";
import "./style.css";

class GroupPage extends React.Component {
    render() {
        return (
            <Page className="GroupsPage" loggedIn={this.props.loggedIn}>
                <header>
                    <h1>My Groups</h1>
                </header>

                {this.props.groups ?
                <div className="Groups">
                    {this.props.groups.map(group => {
                        return (
                            <div key={group.id} className="Group">
                                <img className="GroupPicture" src={group.image_url} alt="A group" width="80" height="80" />
                                <div className="GroupDetails">
                                    <p className="GroupName">{group.name}</p>
                                    {group.type && <p className="GroupType">{group.type}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
                :
                <div className="LoadingScreen">
                    <div className="LoadingIcon"></div>
                </div>}
            </Page>
        )
    }
}

export default GroupPage;
