import React from "react";
import SplashScreen from "./components/SplashScreen";
import StoriesPage from "./components/Pages/Stories";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showSplashScreen: true };
    }
    componentDidMount() {
        setTimeout(() => this.setState({ showSplashScreen: false }), 2000);
    }
    render() {
        return (
            <>
                <SplashScreen className={this.state.showSplashScreen ? "" : "hide"} />
                <StoriesPage />
            </>
        );
    }
}

export default App;
