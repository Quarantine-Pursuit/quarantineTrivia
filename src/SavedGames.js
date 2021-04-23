import firebase from './firebase.js';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';


const SavedGames = (props) => {

    const [displaySaved, setDisplaySaved] = useState([]);
    const [confirmMessage, setConfirmMessage] = useState(false);
    const [selectedGame, setSelectedGame] = useState('');

    //Gets data of saved games from firebase database
    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const data = response.val();
            const savedTrivia = [];
            for( let key in data) {
               
                savedTrivia.push({
                    key: key,
                    category: data[key][0].category,
                    numOfQuestions: data[key].length
                });
            };
            // updates state with the array from database to be mapped
            setDisplaySaved(savedTrivia);
        });
    }, []);


    // function to load the selected game from the list of saved games
    const loadGame = () => {
        const dbRef = firebase.database().ref(selectedGame);
        dbRef.on('value', (response) => {
            const data = response.val();
            props.setUserQuestion(data);
        });
    };

    const closeClick = () => {
        setConfirmMessage(false);
    };

    return(
        <div className="triviaContainer savedContainer">
            <button className="pageChange">
              <Link to="/">Current Game</Link>
            </button>
            <ul className="savedGames">
                {
                    displaySaved.map((saved) => {
                        return(
                            <li 
                                className="listOfGames" 
                                key={saved.key} 
                                onClick={() => {setConfirmMessage(!confirmMessage)
                                    setSelectedGame(saved.key);
                                }}
                            >
                                <h3>Trivia: <span className="regularWeight">{saved.category}</span></h3>
                                <p>{saved.numOfQuestions} Questions</p>
                            </li>
                        )
                    })
                }
            </ul>
            {
                confirmMessage ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <p className="loadGameMessage">Would you like to load this game?</p>
                            <Link to="/">
                                <button onClick={loadGame} className="affirm">Yes</button>
                            </Link>
                            <button onClick={closeClick}>No</button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default SavedGames;