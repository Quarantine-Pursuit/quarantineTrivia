import firebase from './firebase.js';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const SavedGames = () => {

    const [displaySaved, setDisplaySaved] = useState([]);
    const [confirmMessage, setConfirmMessage] = useState(false);

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
                })
            }
            setDisplaySaved(savedTrivia);
        });
    }, []);

    return(
        <div>
            <button className="pageChange">
              <Link to="/">Current Game</Link>
            </button>
            <ul>
                {
                    displaySaved.map((saved) => {
                        return(
                        
                            <li 
                                className="listOfGames" 
                                key={saved.key} 
                                onClick={() => {setConfirmMessage(!confirmMessage)}}
                            >
                                <h3>Trivia: {saved.category}</h3>
                                <p>{saved.numOfQuestions} questions</p>
                                <p>{saved.key}</p> 
                            </li>
                                
                        
                        )
                    })
                }
            </ul>
            {
                confirmMessage ? (
                    <div>
                        <p>Do you want to load this game?</p>
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                ) : null
            }
        </div>
    )
};

export default SavedGames;