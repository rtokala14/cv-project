import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let final = this.state.text;
    this.props.onSubmit(final);
    this.setState({
      text: "",
    });
    const form = document.getElementById("inputForm");
    form.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="inputForm">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Name"
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
