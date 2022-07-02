import React, { Component } from "react";
import App from "./App";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IfName: "",
      IlName: "",
      Ititle: "",
      Iemail: "",
      Iphone: "",
    };
  }

  handleChangeF = (e) => {
    this.setState({ IfName: e.target.value });
  };

  handleChangeL = (e) => {
    this.setState({ IlName: e.target.value });
  };

  handleChangeT = (e) => {
    this.setState({ Ititle: e.target.value });
  };

  handleChangeE = (e) => {
    this.setState({ Iemail: e.target.value });
  };

  handleChangeP = (e) => {
    this.setState({ Iphone: e.target.value });
  };

  submitChange = (e) => {
    e.preventDefault();
    this.props.updateGeneral({
      fName: this.state.IfName,
      lName: this.state.IlName,
      title: this.state.Ititle,
      email: this.state.Iemail,
      phone: this.state.Iphone,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitChange} id="generalForm">
          <h2 id="inputHeading">Personal Information</h2>
          <input
            type="text"
            id="generalFirstName"
            onChange={this.handleChangeF}
            placeholder="First Name"
          ></input>
          <input
            type="text"
            id="generalLasttName"
            onChange={this.handleChangeL}
            placeholder="Last Name"
          ></input>
          <input
            type="text"
            onChange={this.handleChangeT}
            id="generalTitle"
            placeholder="Title"
          ></input>
          <input
            type="text"
            onChange={this.handleChangeE}
            id="generalEmail"
            placeholder="Email"
          ></input>
          <input
            type="text"
            onChange={this.handleChangeP}
            id="generalPhone"
            placeholder="Phone Number"
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default General;
