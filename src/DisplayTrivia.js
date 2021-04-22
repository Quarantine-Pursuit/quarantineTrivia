import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

// Displays the first question from the array and updates the index by 1 
const DisplayTrivia = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [safeQuestion, setSafeQuestion] = useState('');
    const [safeAnswer, setSafeAnswer] = useState('');
    const [safeCorrectAnswer, setSafeCorrectAnswer] = useState('');
    const [answerCheck, setAnswerCheck] = useState();
    const [check, setCheck] = useState('resetAll');
    const [gameOver, setGameOver] = useState(false);

    // Decodes unicode and shuffles the multiple choice array
    useEffect( () => { 
        const allAnswersArray = [];
        const incorrect = props.question.incorrectAnswer;
        allAnswersArray.push(incorrect[0], incorrect[1], incorrect[2]);
        allAnswersArray.push(props.question.correctAnswer);
        const shuffledAnswers = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
            while (currentIndex !== 0) {
                 randomIndex = Math.floor(Math.random() * currentIndex);
                 currentIndex -= 1;
                 temporaryValue = array[currentIndex];
                 array[currentIndex] = array[randomIndex];
                 array[randomIndex] = temporaryValue;
            };
        };
        shuffledAnswers(allAnswersArray);

        const placeholder = document.createElement('div');
        placeholder.innerHTML = props.question.question;
        const safeQuestion = placeholder.textContent;

        const correctPlaceholder = document.createElement('div');
        correctPlaceholder.innerHTML = props.question.correctAnswer;
        const safeCorrectAnswer = correctPlaceholder.textContent;

        const newShuffleAnswer = allAnswersArray.map((array) => {
            const placeholderTwo = document.createElement('div');
            placeholderTwo.innerHTML = array;
            const safeAnswers = placeholderTwo.textContent;
            return safeAnswers;
        });
        setSafeQuestion(safeQuestion);
        setSafeAnswer(newShuffleAnswer);
        setSafeCorrectAnswer(safeCorrectAnswer);
    
    }, [props.question.correctAnswer, props.question.incorrectAnswer, props.question.question]);

    // submit function that checks userchoice to the answer, and updates the index to display next question
    const userSubmit = (e) => {
        e.preventDefault();
        if (userChoice === safeCorrectAnswer && props.index < props.numOfQuestion.length -1) {
            setAnswerCheck(true);
            popUpEffect();
            props.counterSystem();
            props.setIndex(props.index + 1);
        } else if (props.index === props.numOfQuestion.length - 1 && userChoice === safeCorrectAnswer) {
            setGameOver(true);
            props.counterSystem();
        } else if (props.index === props.numOfQuestion.length - 1 && userChoice !== safeCorrectAnswer){
            setGameOver(true);
        } else {
            setAnswerCheck(false);
            popUpEffect();
            props.setIndex(props.index + 1);
        };
        setCheck('resetAll');
    }

    // pop up effect letting users know if they got the question wrong or right
    const popUpEffect = () => {
        setTimeout(() => {
            setAnswerCheck();
        }, 2000);
    };

    const handleChange = (e) => {
        setUserChoice(e.target.value);
    };

    return (
        <div className="questionBox">
            <div className="questionContainer">
                <h2>Question #{props.index + 1}</h2>
                <p className="question">{safeQuestion}</p>
            </div>
            {
                props.question.incorrectAnswer.length === 1 ? (
                    <form action="submit" onSubmit={userSubmit} >
                        <fieldset>
                            <div className="answerChoices">
                                <div className="answer">
                                    <input type="radio" 
                                    name="trueFalse" 
                                    id="true" 
                                    value="True" 
                                    onChange={handleChange} 
                                    checked={check==='true'} 
                                    onClick={() => setCheck('true')}
                                    required/>
                                    <label htmlFor="true">True</label>
                                </div>
                                <div className="answer">
                                    <input type="radio" 
                                    name="trueFalse" 
                                    id="false" 
                                    value="False" 
                                    onChange={handleChange}
                                    checked={check==='false'} 
                                    onClick={() => setCheck('false')}/>
                                    <label htmlFor="false">False</label>
                                </div>
                            </div>
                            <button type="submit" className="submitAnswer">Submit Answer</button>
                        </fieldset>
                    </form>
                ) : (
                    <form action="submit" onSubmit={userSubmit}>
                        <fieldset>
                            <div className="answerChoices">
                                <div className="answer">
                                    <input type="radio" 
                                    name="multipleChoice" 
                                    id="answerOne" 
                                    value={safeAnswer[0]} 
                                    onChange={handleChange} 
                                    checked={check===safeAnswer[0]} 
                                    onClick={() => setCheck(safeAnswer[0])}
                                    required/>
                                    <label htmlFor="answerOne">{safeAnswer[0]}</label>
                                </div>
                                <div className="answer">
                                    <input type="radio" 
                                    name="multipleChoice" 
                                    id="answerTwo" 
                                    value={safeAnswer[1]} 
                                    onChange={handleChange} 
                                    checked={check===safeAnswer[1]} 
                                    onClick={() => setCheck(safeAnswer[1])}/>
                                    <label htmlFor="answerTwo">{safeAnswer[1]}</label>
                                </div>
                                <div className="answer">
                                    <input type="radio" 
                                    name="multipleChoice" 
                                    id="answerThree" 
                                    value={safeAnswer[2]} 
                                    onChange={handleChange} 
                                    checked={check===safeAnswer[2]} 
                                    onClick={() => setCheck(safeAnswer[2])}/>
                                    <label htmlFor="answerThree">{safeAnswer[2]}</label>
                                </div>
                            </div>
                            <div className="answer">
                                <input type="radio" 
                                name="multipleChoice" 
                                id="answerFour" 
                                value={safeAnswer[3]} 
                                onChange={handleChange} 
                                checked={check===safeAnswer[3]} 
                                onClick={() => setCheck(safeAnswer[3])}/>
                                <label htmlFor="answerFour">{safeAnswer[3]}</label>
                            </div>
                            <button type="submit" className="submitAnswer">Submit Answer</button>
                        </fieldset>
                    </form>
                )
            }
            {
                answerCheck === true ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <h2 className="answerCheck">You are correct!</h2>
                        </div>
                    </div>
                ) : answerCheck === false ? (
                    <div className="popUpContainer">
                        <div className="popUp">
                            <h2 className="answerCheck">You are wrong!</h2>
                        </div>
                    </div>
                ) : null
            }
            {
                gameOver === true ? (
                    <div className="popUpContainer">
                        <div className="popUp endGame">
                            <p>You got {props.counter} out of {props.numOfQuestion.length} correct!</p>
                            <button className="affirm" onClick={() => props.confirm()}>
                                <Link to="/">Go back to starting screen.</Link>
                            </button>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default DisplayTrivia;