import React, { useState } from 'react'
import Contact from './Contact'
import bop from '../assets/bgMusic/background.mp3';
import Help from './Help'

const Footer = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audio, setAudio] = useState( new Audio(bop) )
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const toggleMusic = () => {
    console.log(isMusicPlaying)
    const isMusicToggle = isMusicPlaying ? false : true;
    if (isMusicToggle) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMusicPlaying(isMusicToggle);
  };
  
  return (
    <footer>
      <button className={isMusicPlaying ? 'control-button music-playing' : 'control-button music-paused'} id='music-button' onClick={toggleMusic}></button>
      <Contact />
      <button id='help-button' className={isHelpOpen ? 'control-button help-opened' : 'control-button help-closed'} onClick={() => setIsHelpOpen(!isHelpOpen)}></button>  
      {isHelpOpen && <Help/>}
      </footer>
  )
}

export default Footer