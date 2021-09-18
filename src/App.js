import { Component } from "react";
import SplashScreen from "./components/SplashScreen";
import Pages from "./pages";

const SPLASH_SCREEN_DURATION = 2500;
const REQUEST_TIMEOUT = 3000;
const Page = {
    START: "start",
    STORIES: "stories",
    ENTER: "enter",
    JOIN: "join",
    GROUPS: "groups"
};

const PageJSX = {
    [Page.START]: () => <Pages.Start />,
    [Page.ENTER]: () => <Pages.Enter />,
    [Page.JOIN]: () => <Pages.Join />,
    [Page.STORIES]: state => <Pages.Stories loggedIn={state.loggedIn} items={state.items} />,
    [Page.GROUPS]: (state) => <Pages.Groups loggedIn={state.loggedIn} groups={state.groups} />
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            currentPage: Page.ENTER,
            hideSplashScreen: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            // Simulating connecting with an API to get items
            switch (this.state.currentPage) {
                case Page.STORIES:
                    setTimeout(() => {
                        fetch("/items.json")
                        .then(data => data.json())
                        .then(items => this.setState({ items }));
                    }, REQUEST_TIMEOUT);
                    break;

                case Page.GROUPS:
                    setTimeout(() => {
                        fetch("/groups.json")
                        .then(data => data.json())
                        .then(groups => this.setState({ groups }));
                    }, REQUEST_TIMEOUT);
                    break;

                default:
            }

            this.setState({ hideSplashScreen: true });
        }, SPLASH_SCREEN_DURATION);
    }
    render() {
        return (
            <>
                { PageJSX[this.state.currentPage](this.state) }
                <SplashScreen hide={this.state.hideSplashScreen} />
            </>
        );
    }
}

export default App;
