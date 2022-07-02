import React, { Component } from "react";
import "../index.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div>
          <div id="general-left">
            <h2>{data.general.fName}</h2>
            <h4>{data.general.title}</h4>
            <p className="whitespace-normal">{data.general.blurb}</p>
          </div>
          <div id="general-right"></div>
        </div>
      </div>
    );
  }
}

export default Display;
