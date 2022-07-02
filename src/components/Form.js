import React, { Component } from "react";
//import App from "./App";
import General from "./General";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  /*updateGeneral = (inData) => {
    this.props.uGeneral(inData);
  };*/

  render() {
    return (
      <div>
        <General updateGeneral={this.props.uGeneral} />
      </div>
    );
  }
}

export default Form;
