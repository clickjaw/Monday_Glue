import React, { Component } from 'react';
import logo from '../selfpic.jpg';


export default 

class Main extends Component {
  render() {

    return (
      <div>
      <img src = {logo} width = "500" height = "500" alt = "Tyler Morgan"/>

      <p class = "mainBody"><span class = "font-link">
      This is a short bio to fill some space till I write a real one.<br/>  
      I'm currently working on React in Code301.
      </span>
      </p>
      <p>      
      <a class = "mainLink" href = "https://www.youtube.com/watch?v=sJ0Du_nJ6Rw">Song of the Week</a><br/>
      </p>
    
      </div>
     

    )
  }
}



