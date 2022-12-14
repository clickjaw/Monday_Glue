import React, { Component } from 'react'

export default 

class Header extends Component {
  render() {
    return (
        

        <header>
          <p class = "myName">Tyler Morgan</p>
        <nav>
        <br/>
        <span class = "font-link">
        <a class = "one" href = "#">Home</a>
        <a class = "one" href = "https://www.github.com/clickjaw">About</a>
        <div class = "dropdown">
          <button class = "dropdownButton">Projects</button>
            <div class = "dropdownContent">
              <a class = "one" href = "https://vibesocial.netlify.app">Vibe Social</a>
              <a class = "one" href = "https://clickjaw.github.io/teamProject/">Text Based RPG</a>
              <a class = "one" href = "https://clickjaw.github.io/soloproject/">Cafe 1912 Website</a>
              <a class = "one" href = "https://clickjaw.github.io/todo/">To Do List</a>
              <a class = "one" href = "https://clickjaw.github.io/TipCalculator-TylerMorgan/">Tip Calculator</a>
              <a class = "one" href = "https://clickjaw.github.io/SimpleCounter/">Simple Counter</a>

            </div>
        </div>
        {/* <a class = "one" href = "https://github.com/clickjaw?tab=repositories">Projects</a><br/> */}
        </span>
        </nav>
        </header>

    )
  }
}
