import React, { Component } from "react";
//import App from "./App";
import General from "./General";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <General updateGeneral={this.props.uGeneral} />
      </div>
    );
  }
}

export default Form;
