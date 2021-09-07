import React from "react";
import SplashScreen from "./components/SplashScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSplashScreen: true };
  }
  componentDidMount() {
    // setTimeout(() => this.setState({ showSplashScreen: false }), 8000);
  }
  render() {
    if (this.state.showSplashScreen)
      return <SplashScreen />;
    else
      return <h1>Hello world!</h1>;
  }
}

export default App;
