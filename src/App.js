import './App.css';
import {useState} from 'react';
// import axios from 'axios';


function App() {
  const [userInput, setUserInput] = useState({
    categories: "placeholder",
    questionNum: "placeholder"
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput({
      ...userInput,
      [e.target.name]: value
    })
  }

  return (
    <div className="App">
      <form action="submit" onSubmit={handleSubmit}>
        <select name="categories" id="categories" value={userInput.categories} onChange={handleChange}>
          <option value="placeholder" disabled>Please select your categories</option>
          <option name="General Knowledge" value="General Knowledge">General Knowledge</option>
          <option name="Sports" value="Sports">Sports</option>
          <option name="Geography" value="Geography">Geography</option>
          <option name="Celebrities" value="Celebrities">Celebrities</option>
          <option name="Vehicles" value="Vehicles">Vehicles</option>
          <option name="Entertainment: Film" value="Entertainment: Film">Film</option>
          <option name="Entertainment: Japanese Anime & Manga" value="Entertainment: Japanese Anime & Manga">Anime and Manga</option>
        </select>

        <select name="questionNum" id="questionNum" value={userInput.questionNum} onChange={handleChange}>
          <option value="placeholder" disabled>Select the amount of questions</option>
          <option name="5" value="5">5</option>
          <option name="6" value="6">6</option>
          <option name="7"value="7">7</option>
          <option name="8"value="8">8</option>
          <option name="9"value="9">9</option>
          <option name="10"value="10">10</option>
        </select>

        <button type="submit">Start Trivia</button>
      </form>
    </div>
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


