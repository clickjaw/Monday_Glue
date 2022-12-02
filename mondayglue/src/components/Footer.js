import React, { Component } from 'react';
import jsLogo from "../js-32-black.png";
import reactLogo from "../logo192.png";
import cSharpLogo from "../c.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <p class = "footerLogo">
      <img class = "footerLogo" src = {jsLogo} width = "40" height = "40"></img>
      <img class = "footerLogo" src = {reactLogo} width = "40" height = "40"></img>
      <img class = "footerLogo" src = {cSharpLogo} width = "40" height = "40"></img>
      </p>
      <br/>
      <p class = "footerLogo">
      ©Tyler Morgan 8/9/2022
      </p>

      </footer>
      )
  }
}
