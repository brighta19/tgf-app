import React from "react";
import Logo from "../Logo";
import "./style.css";

class SplashScreen extends React.Component {
  render() {
    return (
      <div className="SplashScreen">
        <Logo />
      </div>
    );
  }
}

export default SplashScreen;
