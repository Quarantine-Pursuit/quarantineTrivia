import {Link} from 'react-router-dom';
import {useState} from 'react';

const NewGameButton = (props) => {

    const [newGameMessage, setNewGameMessage] = useState(false);

    // toggles the message asking if they want to start new game
    const newGame = () => {
        setNewGameMessage(true);
    };

    // closes message
    const closeClick = () => {
        setNewGameMessage(false);
    };

    return(
        <>
            <button onClick={newGame} className="newGame">New Game</button>
            {
                newGameMessage ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <p className="newGameMessage">Would you like to start a new game?</p>
                            <button onClick={() => props.confirm()} className="affirm">
                                <Link to="/">Yes</Link>
                            </button>
                            <button onClick={closeClick}>No</button>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

export default NewGameButton;