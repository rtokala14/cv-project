import React, { Component } from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container flex flex-col gap-3">
        <div className="flex justify-between gap-6 p-3 items-center">
          <div className=" flex flex-col w-2/3" id="general-left">
            <h2 className=" text-3xl text-blue-600 font-medium">
              {data.general.fName} {data.general.lName}
            </h2>
            <h4 className=" text-sm text-gray-600 mb-2">
              {data.general.title}
            </h4>
            <p className=" whitespace-normal flex-wrap">{data.general.blurb}</p>
          </div>
          <div id="general-right">
            <ul className="flex flex-col justify-around items-end gap-2">
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
