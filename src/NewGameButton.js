import {Link} from 'react-router-dom';
import {useState} from 'react';

const NewGameButton = (props) => {

    const [newGameMessage, setNewGameMessage] = useState(false);

    const newGame = () => {
        setNewGameMessage(true);
    }

    const confirmClick = () => {
        props.setQuestion([]);
        props.setUserInput({
            categories: "placeholder",
            questionNum: "placeholder",
            difficulty: "placeholder",
            type: "placeholder"
        });
    }

    const closeClick = () => {
        setNewGameMessage(false);
    }

    return(
        <div>
            <button onClick={newGame} className="newGame">
                <Link to="/">New Game</Link>
            </button>
            {
                newGameMessage ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <p className="newGameMessage">Would you like to start a new game?</p>
                            <button onClick={confirmClick} className="affirm">Yes</button>
                            <button onClick={closeClick}>No</button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default NewGameButton;