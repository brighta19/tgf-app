import { Component } from "react";
import "./style.css";

class GroupsList extends Component {
    render() {
        return (
            <div className="GroupsList">
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
        );
    }
}

export default GroupsList;