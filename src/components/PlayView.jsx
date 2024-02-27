import Cards from './Cards'


const PlayView = ({ setScore, score, highScore, setHighScore }) => {
    
  return (
    <Cards setScore={setScore} score={score} highScore={highScore} setHighScore={setHighScore} />
  )
}

export default PlayView