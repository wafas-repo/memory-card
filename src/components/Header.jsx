import React from 'react'
import logo from '../assets/images/logo.png'

const Header = ({ score, highScore }) => {
  return (
    <header className='header'>
      <a href="javascript:location.reload()"><img id='small-logo' src={logo} alt='Dragon Ball Logo' /></a>
      <div className="scores">
        <div className="score">
          Current Score
          <div id="currentScore">{score}</div>
        </div>
        <div className="score">
          High Score
          <div id="highScore">{highScore}</div>
        </div>
      </div>
    </header>
  )
}

export default Header