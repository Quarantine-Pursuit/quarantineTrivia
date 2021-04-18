import firebase from './firebase.js';
import { useState } from 'react';


const SaveButton = (props) => {
    const [saveGame, setSaveGame] = useState(false);
    const handleClick = () => {
        const dbRef = firebase.database().ref();
        dbRef.push(props.currentTrivia);
        setSaveGame(true);
    }

    const closeClick = () => {
        setSaveGame(false);
        props.setQuestion([]);
    }

    return(
        <>
            <button onClick={handleClick} className="saveGame">Save Game</button>
            {
                saveGame === true ? (
                    <div>
                        <p>Your game has been saved!</p>
                        <button onClick={closeClick}>Close</button>
                    </div>
                ) : null
            }
        </>
    )
}

export default SaveButton;