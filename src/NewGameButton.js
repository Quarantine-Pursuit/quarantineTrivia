import {Link} from 'react-router-dom';
import {useState} from 'react';

const NewGameButton = (props) => {

    const [newGameMessage, setNewGameMessage] = useState(false);

    const newGame = () => {
        setNewGameMessage(true);
    };

    

    const closeClick = () => {
        setNewGameMessage(false);
    };

    return(
        <div>
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
        </div>
    );
};

export default NewGameButton;