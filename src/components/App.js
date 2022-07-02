import React, { Component } from "react";
import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        fName: "",
        lName: "",
        title: "",
        email: "",
        phone: "",
      },
      skills: [],
      experience: {},
    };

    this.uGeneral = this.uGeneral.bind(this);
  }

  uGeneral = (data) => {
    this.setState({
      general: data,
    });
  };

  render() {
    return (
      <div>
        <Form uGeneral={this.uGeneral} />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;
