import React from "react";
import Page from "../Page";
import PopUpBox from "../../PopUpBox";
import "./style.css";

class StoriesPage extends React.Component {
    render() {
        return (
            <Page className="StoriesPage" loggedIn={this.props.loggedIn}>
                {!this.props.loggedIn && <PopUpBox type={PopUpBox.IS_GUEST} />}

                <header>
                    <h1>Stories</h1>
                </header>

                {this.props.items ?
                <div className="Items">
                    {this.props.items.map(item => {
                        return <img key={item.id} src={item.image_url} alt="An item" width="150" height="150" />;
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

export default StoriesPage;
