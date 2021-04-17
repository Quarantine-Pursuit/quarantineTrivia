import firebase from './firebase.js';
import {useState} from 'react';

const SaveButton = (props) => {
    console.log(props)
    const [saveGame, setSaveGame] = useState(false);
    const handleClick = () => {
        const dbRef = firebase.database().ref();
        dbRef.push(props.currentTrivia);
        setSaveGame(true);
    }
    console.log(props.currentTrivia)

    const closeClick = () => {
        setSaveGame(false);
        props.setQuestion([]);
    }

    return(
        <>
            <button onClick={handleClick}>Save your game</button>
            {
                saveGame === true ? (
                    <div>
                        <p>Your Game has been saved</p>
                        <button onClick={closeClick}>Close</button>
                    </div>
                ) : null
            }
        </>
    )
}


export default SaveButton;