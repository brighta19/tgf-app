import React from "react";
import SplashScreen from "./components/SplashScreen";
import Pages from "./components/Pages";

const Page = {
    STORIES: "stories",
    ENTER: "enter",
    JOIN: "join"
};

const PageComponent = {
    [Page.STORIES]: <Pages.Stories />,
    [Page.ENTER]: <Pages.Enter />,
    [Page.JOIN]: <Pages.Join />
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: Page.STORIES,
            hideSplashScreen: false
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ hideSplashScreen: true }), 2000);
    }
    render() {
        return (
            <>
                { PageComponent[this.state.currentPage] }
                <SplashScreen hide={this.state.hideSplashScreen} />
            </>
        );
    }
}

export default App;
