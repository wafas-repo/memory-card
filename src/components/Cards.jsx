// Import useState and useEffect
import React, {useState, useEffect} from 'react';

const Cards = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
        "Bumi",
        "Ty Lee",
        "Jet",
        "Mai",
        "Ozai",
        "Yue",
  ]; 

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

        console.log('Filtered Characters:', filteredCharacters);

        setCharacters(filteredCharacters);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [targetNames]);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Characters</h1>
      <div>
      {characters.map((character) => (
        <div key={character._id}>
          <h2>{character.name}</h2>
          <img src={character.photoUrl} alt={character.name} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cards