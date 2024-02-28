import { useState, useEffect } from 'react'
import '../styles/App.css'
import Header from './Header'
import PlayView from './PlayView'
import Footer from './Footer'

function App() {

  // State that controls the score of the game
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <Header score={score} highScore={highScore} />
      <PlayView setScore={setScore} score={score} highScore={highScore} setHighScore={setHighScore} />
      <Footer />

    </>
  )
}

export default App
