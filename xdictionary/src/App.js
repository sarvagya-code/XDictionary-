import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const customDictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


function App() {

  const [searchWord, setSearchWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const wordFound = customDictionary.find((entry) => entry.word.toLowerCase() === searchWord.toLowerCase())
    if(wordFound) {
      setDefinition(wordFound.meaning);
    }else {
      setDefinition('Word not found in the dictionary.');
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <input type='text' value={searchWord} onChange={(e)=>setSearchWord(e.target.value)} placeholder='Search for a word...'/>
        <button onClick={handleSearch}>Search</button>
      </div>
      <h4>Definition:</h4>
      <p>{definition}</p>
    </div>
  );
}

export default App;
