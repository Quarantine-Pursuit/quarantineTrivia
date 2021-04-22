import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import DisplayTrivia from './DisplayTrivia.js';
import SaveButton from './SaveButton.js';
import NewGameButton from './NewGameButton.js';

const SelectTrivia = (props) => {

    const [counter, setCounter] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect( () => {
        const newObj = props.userQuestion.map( (key) => {
            return ({
                question: key.question,
                correctAnswer: key.correct_answer,
                incorrectAnswer: key.incorrect_answers
            });
        });
        setQuestions(newObj);      
    }, [props.userQuestion]);


    const handleSubmit = (e) => {
        e.preventDefault(e);
        props.getTrivia();
        setCounter(0);
    };
    
    const handleChange = (e) => {
        const value = e.target.value;
        props.setUserInput({
            ...props.userInput,
            [e.target.name]: value
        });
    };

    const counterSystem = () => {
        setCounter(counter + 1);
    };

    return(
        <section className="triviaContainer">
            <button className="pageChange">
                <Link to="/savedGames">Saved Games</Link>
            </button>
            {
                props.userQuestion.length === 0 ? (
                    <form action="submit" onSubmit={handleSubmit} className="triviaSetting">
                        <div className="triviaOptions">
                            <select name="categories" id="categories" value={props.userInput.categories} onChange={handleChange} className="categories">
                                <option value="placeholder" disabled>Trivia Category</option>
                                <option name="General Knowledge" value="9">General Knowledge</option>
                                <option name="Sports" value="21">Sports</option>
                                <option name="Geography" value="22">Geography</option>
                                <option name="Celebrities" value="26">Celebrities</option>
                                <option name="Vehicles" value="28">Vehicles</option>
                                <option name="Entertainment: Film" value="11">Film</option>
                                <option name="Entertainment: Japanese Anime & Manga" value="31">Anime and Manga</option>
                            </select>

                            <select name="questionNum" id="questionNum" value={props.userInput.questionNum} onChange={handleChange} className="questionNum">
                                <option value="placeholder" disabled>Question Qty.</option>
                                <option name="5" value="5">5</option>
                                <option name="8" value="8">8</option>
                                <option name="11" value="11">11</option>
                                <option name="14" value="14">14</option>
                                <option name="17" value="17">17</option>
                                <option name="20" value="20">20</option>
                            </select>

                            <select name="type" id="type" value={props.userInput.type} onChange={handleChange} className="type">
                                <option value="placeholder" disabled>Question Type</option>
                                <option name="multiple" value="multiple">Multiple Choice</option>
                                <option name="boolean" value="boolean">True/False</option>
                                <option name="mix" value="">Mix</option>
                            </select>

                            <select name="difficulty" id="difficulty" value={props.userInput.difficulty} onChange={handleChange} className="difficulty">
                                <option value="placeholder" disabled>Difficulty</option>
                                <option name="easy" value="easy">Easy</option>
                                <option name="medium" value="medium">Medium</option>
                                <option name="hard" value="hard">Hard</option>
                                <option name="mix" value="">Mix</option>
                            </select>
                        </div>
                        <button type="submit" className="startGame">Start</button>
                    </form>
                ) : null
            }

            {
                props.userQuestion.length === 0 ? null :
                <div>
                    <div className="gameMenu">
                        <SaveButton currentTrivia={props.userQuestion} setQuestion={props.setUserQuestion}/>
                        <NewGameButton setUserQuestion={props.setUserQuestion} setUserInput={props.setUserInput} setIndex={setIndex}/>
                    </div>
                    <h2 className="counter">Score: {counter}/{props.userQuestion.length}</h2>
                </div>
            }

            {
                questions.length > 0 ? <DisplayTrivia 
                counterSystem={counterSystem}
                question={questions[`${index}`]}
                setIndex={setIndex}
                index={index} 
                numOfQuestion={questions}/> : null
            }

        </section>
    );
};

export default SelectTrivia;