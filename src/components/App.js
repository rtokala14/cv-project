import React, { Component } from "react";
import Form from "./Form";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        fName: "John",
        lName: "Doe",
        title: "Business Development Manager",
        email: "john.doe@gmail.com",
        phone: "202-555-0166",
        location: "New York, USA",
        linkedin: "linkedin.com/in/john.doe",
        blurb:
          "alsdkjfk msclks djldsknvsd ajfs dkljflkdsnv clk dsnklcs djflksd jlk v nd lksj lfjkl s djklfj k lsdjg k lsdjl kvjnlkds nklcndslkfjkl dsjfklds jlkcnsdklnvklns dlk jflkdsjkln lkvd sklj fkljsdk lfj",
      },
      skills: [
        "SEO",
        "Public Speacking",
        "Negotiation",
        "Teamwork",
        "Decision Making",
        "Research and Strategy",
        "Emotional Intelligence",
        "Outbound Marketing",
        "Email Marketing",
        "Google Analytics",
        "Sales & Marketing",
        "Social Media Advertising",
      ],
      experience: [
        {
          title: "Business Development Manager",
          company: "AirState Solutions",
          timeline: "09/2014 - 06/2017",
          location: "New York, USA",
          bullets: [
            "aksdfjdslkvnkdfljglksdjglksnlhajsdflkdksgjlkdjsalfkljsgjdklsjldsjflkgjlkdsjfld",
            "asdlgjdslkvjlkdsjfdlkmvcdslkfjkdklvsdbvdnsklfkjhsdlkfjlkdsjvlknkdsnlvnklsdnlkvndlsk",
            "sdfklcmksdlavjlkd jkdlmvcldsjjsdljclkmmclksdl f jdskflj ",
          ],
        },
        {
          title: "Business Development Manager",
          company: "AirState Solutions",
          timeline: "09/2014 - 06/2017",
          location: "New York, USA",
          bullets: [
            "aksdfjdslkvnkdfljglksdjglksnlhajsdflkdksgjlkdjsalfkljsgjdklsjldsjflkgjlkdsjfld",
            "asdlgjdslkvjlkdsjfdlkmvcdslkfjkdklvsdbvdnsklfkjhsdlkfjlkdsjvlknkdsnlvnklsdnlkvndlsk",
            "sdfklcmksdlavjlkd jkdlmvcldsjjsdljclkmmclksdl f jdskflj ",
          ],
        },
      ],
      education: [
        {
          degree: "MSc in Economics and Business Administration",
          university: "The University of Chicago",
          timeline: "09/2008 - 06/2010",
        },
      ],
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
      <div className="flex flex-col gap-6 p-8 lg:flex-row justify-evenly items-center">
        <Form uGeneral={this.uGeneral} />
        <Display data={this.state} />
      </div>
    );
  }
}

export default App;
