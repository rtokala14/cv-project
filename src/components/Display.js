import React, { Component } from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Display also works.</p>
        <p>Text: {this.props.data.try}</p>
      </div>
    );
  }
}

export default Display;
