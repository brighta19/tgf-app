import { Component } from "react";
import Logo from "../Logo";
import "./style.css";

class SplashScreen extends Component {
  render() {
    return (
      <div className={"SplashScreen " + (this.props.hide && "hide")}>
        <Logo />
      </div>
    );
  }
}

export default SplashScreen;
