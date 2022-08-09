import React, { Component } from 'react';
import jsLogo from "../js-32.png";
import reactLogo from "../logo192.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
      ©Tyler Morgan 8/8/2022<br/>
      <p class = "footerLogo">
      <img class = "footerLogo" src = {jsLogo} width = "40" height = "40"></img>

      <img class = "footerLogo" src = {reactLogo} width = "40" height = "40"></img>
      </p>
      </footer>
      )
  }
}
