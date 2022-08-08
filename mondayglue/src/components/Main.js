import React, { Component } from 'react';
import logo from '../selfpic.jpg';


export default 

class Main extends Component {
  render() {

    return (
      <div>
      <img src = {logo} width = "400" height = "400" alt = "Tyler Morgan"/>

      <p>
      This is a short bio to fill some space till I write a real one.<br/>  
      I'm currently working on React in Code301.
      </p>
      <p>
      <a href = "https://github.com/clickjaw">Github</a><br/>
      
      <a href = "https://www.youtube.com/watch?v=660ZCEhvbnw">Song of the Week</a><br/>
      </p>
    
      </div>
     

    )
  }
}



