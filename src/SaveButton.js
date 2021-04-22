import firebase from './firebase.js';
import {useState} from 'react';


const SaveButton = (props) => {
    const [saveGame, setSaveGame] = useState(false);
    const handleClick = () => {
        const dbRef = firebase.database().ref();
        dbRef.push(props.currentTrivia);
        setSaveGame(true);
        setTimeout(() => {
            setSaveGame(false);
        }, 2000);
    };

    return(
        <>
            <button onClick={handleClick} className="saveGame">Save Game</button>
            {
                saveGame === true ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <p>Your game has been saved!</p>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

export default SaveButton;