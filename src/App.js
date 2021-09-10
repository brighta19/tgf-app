import React from "react";
import SplashScreen from "./components/SplashScreen";
import StoriesPage from "./components/Pages/Stories";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hideSplashScreen: false };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ hideSplashScreen: true }), 2000);
    }
    render() {
        return (
            <>
                <StoriesPage />
                <SplashScreen hide={this.state.hideSplashScreen} />
            </>
        );
    }
}

export default App;
