import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Pages from "./pages";

const SPLASH_SCREEN_DURATION = 2500;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            hideSplashScreen: false
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ hideSplashScreen: true }), SPLASH_SCREEN_DURATION);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/enter">
                        <Pages.Enter />
                    </Route>
                    <Route path="/join">
                        <Pages.Join />
                    </Route>
                    <Route path="/stories">
                        <Pages.Stories loggedIn={this.state.loggedIn} />
                    </Route>
                    <Route path="/groups">
                        <Pages.Groups loggedIn={this.state.loggedIn} />
                    </Route>
                    <Route path="/">
                        <Pages.Start />
                    </Route>
                </Switch>

                <SplashScreen hide={this.state.hideSplashScreen} />
            </Router>
        );
    }
}

export default App;
