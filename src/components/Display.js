import React, { Component } from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container flex flex-col gap-3">
        <div className="flex justify-between gap-6 items-center">
          <div className=" flex flex-col" id="general-left">
            <h2>{data.general.fName}</h2>
            <h4>{data.general.title}</h4>
            <p className=" whitespace-normal flex-wrap">{data.general.blurb}</p>
          </div>
          <div id="general-right">
            <ul className="flex flex-col justify-around items-end">
              <li>{data.general.email}</li>
              <li>{data.general.phone}</li>
              <li>{data.general.location}</li>
              <li>{data.general.linkedin}</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="resume-title">skills</h2>
          <ul className=" flex gap-3 flex-wrap p-3">
            {data.skills.map((value, i) => {
              return <li className="skill-item">{value}</li>;
            })}
          </ul>
        </div>

        <div>
          <h2 className="resume-title">experience</h2>
        </div>

        <div>
          <h2 className="resume-title">education</h2>
        </div>
      </div>
    );
  }
}

export default Display;
