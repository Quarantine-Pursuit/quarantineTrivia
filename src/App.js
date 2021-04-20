import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SavedGames from './SavedGames.js';
import SelectTrivia from './SelectTrivia';
import Footer from './Footer.js'


function App() {
  const [userInput, setUserInput] = useState({
    categories: "placeholder",
    questionNum: "placeholder",
    type: "placeholder",
    difficulty: "placeholder"
  });

  const [userQuestion, setUserQuestion] = useState([]);

  const getTrivia = () => {
    axios({
      url: `https://opentdb.com/api.php`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        amount: userInput.questionNum,
        category: userInput.categories,
        type: userInput.type,
        difficulty: userInput.difficulty
      }
    }).then( (response) => {
      setUserQuestion(response.data.results);
    })
  };

  return (
    <Router>
      <div className="App">

        <header>
          <h1>Quarantine Pursuit</h1>
        </header>

        <div className="wrapper">
          <Route exact path="/" render={() =>
            <SelectTrivia
              getTrivia={getTrivia}
              userQuestion={userQuestion}
              setUserQuestion={setUserQuestion}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          }/>
          <Route exact path="/savedGames" render={() =>
            <SavedGames setUserQuestion={setUserQuestion}/>
          }/>
        </div>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;

// Categories: General Knowledge, Sports, Entertainment: Japanese Anime & Manga, Geography, 
// Vehicles, Entertainment: Film, Celebrities
// create function/onSubmit to get userInput from categories and # of questions
// use the value from userInput to call API
// use axios, fetch data from API.


// store questions in to useState
// Map through the questions array and display trivia
// Use the type object from API to display either multiple choice or true or false
// Display answer choices as radio?
// create a button for user answer submit. Once answer submitted, disabled the form so they cant go back and fix their answer
// Create a display, letting user know they are correct or wrong, and move on  to the next question (with set timeout probably).


// Create a button that initially displays Saved Games
// on click, use ternaries to toggle saved games and change the button display to Current Game
// Inside saved game, create an onclick function on the chevron so that the user can load their saved games from database
// option to delete some of the saved games.

