import React, { Component } from "react";

class DisplayGeneral extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-between gap-6 p-3 items-center">
        <div className=" flex flex-col w-2/3" id="general-left">
          <h2 className=" text-3xl text-blue-600 font-medium">
            {this.props.general.fName} {this.props.general.lName}
          </h2>
          <h4 className=" text-sm text-gray-600 mb-2">
            {this.props.general.title}
          </h4>
          <p className=" whitespace-normal flex-wrap">
            {this.props.general.blurb}
          </p>
        </div>
        <div id="general-right">
          <ul className="flex flex-col justify-around items-end gap-2">
            <li>{this.props.general.email}</li>
            <li>{this.props.general.phone}</li>
            <li>{this.props.general.location}</li>
            <li>{this.props.general.linkedin}</li>
          </ul>
        </div>
      </div>
    );
  }
}

class DisplayExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h2 className="resume-title">experience</h2>
        <div className=" p-3">
          {this.props.experience.map((value) => {
            return (
              <div className=" mb-2">
                <h3 className=" font-bold">{value.title}</h3>
                <h4 className=" font-medium">{value.company}</h4>
                <div className=" flex justify-between">
                  <p className=" text-sm text-gray-500">{value.timeline}</p>
                  <p className=" text-sm text-gray-500">{value.location}</p>
                </div>
                <ul className=" list-disc pl-6">
                  {value.bullets.map((val) => {
                    return <li>{val}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class DisplaySkills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="resume-title">skills</h2>
        <ul className=" flex gap-3 flex-wrap p-3">
          {this.props.skills.map((value) => {
            return <li className="skill-item">{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class DisplayEducation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="resume-title">education</h2>
        <div className=" p-3">
          {this.props.education.map((value) => {
            return (
              <div className=" mb-2">
                <h3 className=" font-bold">{value.degree}</h3>
                <h4 className=" font-medium">{value.university}</h4>
                <p className=" text-sm text-gray-500">{value.timeline}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container flex flex-col gap-3">
        <DisplayGeneral general={data.general}></DisplayGeneral>

        <DisplaySkills skills={data.skills}></DisplaySkills>

        <DisplayExperience experience={data.experience}></DisplayExperience>

        <DisplayEducation education={data.education}></DisplayEducation>
      </div>
    );
  }
}

export default Display;
