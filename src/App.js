import React from "react";
import SplashScreen from "./components/SplashScreen";
import Pages from "./components/Pages";

const SPLASH_SCREEN_DURATION = 2500;
const REQUEST_TIMEOUT = 3000;
const Page = {
    STORIES: "stories",
    ENTER: "enter",
    JOIN: "join"
};

const PageComponent = {
    [Page.STORIES]: state => <Pages.Stories loggedIn={state.loggedIn} items={state.items} />,
    [Page.ENTER]: () => <Pages.Enter />,
    [Page.JOIN]: () => <Pages.Join />
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
        setTimeout(() => {
            this.setState({ hideSplashScreen: true });

            // Simulating connecting with an API to get items
            setTimeout(() => {
                fetch("/items.json")
                .then(data => data.json())
                .then(items => this.setState({ retrievingItems: false, items }));
            }, REQUEST_TIMEOUT);
        }, SPLASH_SCREEN_DURATION);
    }
    render() {
        return (
            <>
                { PageComponent[this.state.currentPage](this.state) }
                <SplashScreen hide={this.state.hideSplashScreen} />
            </>
        );
    }
}

export default App;
