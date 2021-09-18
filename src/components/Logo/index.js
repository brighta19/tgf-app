import { Component } from "react";
import "./style.css";

class Logo extends Component {
  render() {
    return <div className={"Logo" + (this.props.invert ? " invert" : " regular")}></div>;
  }
}

export default Logo;
