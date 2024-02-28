// Import useState and useEffect
import React, {useState, useEffect} from 'react';
import winGif from '../assets/images/win.gif'
import loseGif from '../assets/images/lose.gif'

const Cards = ({ setScore, score, highScore, setHighScore }) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [won, setWon] = useState(false)
    const [lost, setLost] = useState(false)
    const [error, setError] = useState(null);
    const [clickedCards, setClickedCards] = useState([]); // store selected cards
    const targetNames = [
        "Aang",
        "Katara",
        "Sokka",
        "Toph Beifong",
        "Appa",
        "Momo",
        "Zuko",
        "Iroh",
        "Suki",
        "Azula",
        "Bumi (King of Omashu)",
        "Ty Lee",
        "Jet",
        "Mai",
        "Ozai",
        "Yue",
        "Cabbage merchant",
        "Roku",
  ]; 

  const overlay = document.querySelector(".overlay");
  const winPopup = document.querySelector(".win");
  const losePopup = document.querySelector(".lose")

  const shuffleArray = (array) => {
    // Create a copy of the array to avoid mutating the original
    const shuffledArray = [...array];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

  const win = () => {
    overlay.classList.add("active");
    winPopup.classList.add("active");

    setWon(true);
  };

  const lose = () => {
    overlay.classList.add("active");
    losePopup.classList.add("active");

    setLost(true);
  }

  const handleClick = (id) => {
    if(!clickedCards.includes(id)) {
        setClickedCards([...clickedCards, id])
        setScore(score + 1)
        if(clickedCards.length+1 === targetNames.length) {
            win();
        }
        
    } else {
        lose();
        if (score > highScore) {
            setHighScore(score)
        }
    } 
    setCharacters(shuffleArray(characters));
  };

  const playAgain = () => {
    setScore(0);
    setClickedCards([]);
    setWon(false);
    setCharacters(shuffleArray(characters));
    overlay.classList.remove("active");
    winPopup.classList.remove("active");
    losePopup.classList.remove("active");
  };

  useEffect(() => {
    
    const url = "https://last-airbender-api.fly.dev/api/v1/characters?perPage=497";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();

        // Filter characters based on the targetNames array
        const filteredCharacters = result.filter(character => targetNames.includes(character.name));

        setCharacters(filteredCharacters);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <>
        <div className='Board'>
            <div className='card-grid'>

                {characters.map((character) => (
                    <div className='image' key={character._id}>
                        <img src={character.photoUrl} alt={character.name} onClick={() => handleClick(character._id)} />
                    </div>
                ))}

            </div>
        </div>
        <div className="popup">
            <div className="win">
                <h2>You Win!</h2>
                <img src={winGif}></img>
                <div>
                    <button >Menu</button>
                    <button onClick={playAgain}>Play Again</button>
                </div>
            </div>
            <div className="lose">
                <h2>You Lose!</h2>
                <img src={loseGif}></img>
                <div>
                    <button >Menu</button>
                    <button onClick={playAgain} >Play Again</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </>
  );
}

export default Cards