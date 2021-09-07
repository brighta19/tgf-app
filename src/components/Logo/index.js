import React from "react";
import TGF_SVG from "../../assets/tgf.svg";
import "./style.css";

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <div className="left">
          <img src={TGF_SVG} alt="The Glass Files logo" />
        </div>
        <div className="right">
          <span>The &nbsp;Glass Files</span>
        </div>
      </div>
    );
  }
}

export default Logo;
