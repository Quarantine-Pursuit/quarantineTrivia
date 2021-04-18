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
            <button onClick={newGame}>
                <Link to="/">New Game</Link>
            </button>
            {
                newGameMessage ? (
                    <div>
                        <p>Do you want to start a new game?</p>
                        <button onClick={confirmClick}>
                            Yes
                        </button>
                        <button onClick={closeClick}>No</button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default NewGameButton;