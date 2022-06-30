import React, { Component } from "react";
import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      try: "",
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit = (name) => {
    this.setState({
      try: name,
    });
  };

  render() {
    return (
      <div>
        <Form data="Test" onSubmit={this.formSubmit} />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;
