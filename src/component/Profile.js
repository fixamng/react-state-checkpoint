import React, { Component } from "react";
import profilePhoto from "../../src/profilePhoto.jpg";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Adeniyi Azeez",
        bio: "Goal getter",
        imgSrc: (
          <img width="30%" height="30%" src={profilePhoto} alt="fotoGraph" />
        ),
        profession: "Hacker",
      },
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.person.imgSrc}</div>
        <div>
          <h3>Full Name: {this.state.person.fullName}</h3>
        </div>
        <div>
          <h3>Bio: {this.state.person.bio}</h3>
        </div>
        <div>
          <h3>Profession: {this.state.person.profession}</h3>
        </div>
      </div>
    );
  }
}
