import React from 'react'
import logo from '../../public/images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <a href="javascript:location.reload()"><img id='small-logo' src={logo} alt='Dragon Ball Logo' /></a>
      <div className="scores">
        <div className="score">
          Current Score
          <div id="currentScore">0</div>
        </div>
        <div className="score">
          High Score
          <div id="highScore">0</div>
        </div>
      </div>
    </header>
  )
}

export default Header