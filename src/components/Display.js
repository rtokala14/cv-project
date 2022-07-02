import React, { Component } from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{`${this.props.data.general.fName}`}</p>
      </div>
    );
  }
}

export default Display;
