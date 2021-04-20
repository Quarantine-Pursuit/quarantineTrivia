import { useState, useEffect } from 'react';

const DisplayTrivia = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [safeQuestion, setSafeQuestion] = useState('');
    const [safeAnswer, setSafeAnswer] = useState('');
    const [answerCheck, setAnswerCheck] = useState();
    const [safeIncorrectAnswer, setSafeIncorrectAnswer] = useState([]);
    

    const userSubmit = (e) => {
        e.preventDefault();
        if (userChoice === 'correct') {
            setAnswerCheck(true);
            popUpEffect();
        } else if (userChoice === props.correctAnswer.toLowerCase()) {
            setAnswerCheck(true);
            popUpEffect();
        } else {
            setAnswerCheck(false);
            popUpEffect();
        }
        e.target[0].setAttribute('disabled', true);
    }

    const popUpEffect = () => {
        setTimeout(() => {
            setAnswerCheck(undefined);
        }, 2000);
    }

    const handleChange = (e) => {
        setUserChoice(e.target.value);
    }

    useEffect( () => { 
        const placeholder = document.createElement('div');  
        const placeholderTwo = document.createElement('div');
        placeholder.innerHTML = props.question;
        const safeQuestion = placeholder.textContent;
        const newWrongAnswer = props.incorrectAnswer.map( (array) => {
            const placeholderThree = document.createElement('div');
            placeholderThree.innerHTML = array;
            const safeIncorrectAnswer = placeholderThree.textContent;
            return safeIncorrectAnswer
        })

        placeholderTwo.innerHTML = props.correctAnswer;
        const safeAnswer = placeholderTwo.textContent;

        setSafeQuestion(safeQuestion);
        setSafeAnswer(safeAnswer);
        setSafeIncorrectAnswer(newWrongAnswer)

    }, [props.question, props.correctAnswer, props.incorrectAnswer])


    return(
        <div className="questionBox">
            <div className="questionContainer">
                <h2>Question #{props.questionNum +1}</h2>
                <p className="question">{safeQuestion}</p>
            </div>
            {
                props.incorrectAnswer.length === 1 ? (
                    <form action="submit" onSubmit={userSubmit}>
                        <fieldset>
                        <div className="answerChoices">
                            <div className="answer">
                                <input type="radio" name="trueFalse" id={`${props.questionNum}true`} value="true" onChange={handleChange}/>
                                <label htmlFor={`${props.questionNum}true`}>True</label>
                            </div>
                
                            <div className="answer">
                                <input type="radio" name="trueFalse" id={`${props.questionNum}false`} value="false" onChange={handleChange}/>
                                <label htmlFor={`${props.questionNum}false`}>False</label>
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
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionOne`} value="correct" onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionOne`}>{safeAnswer}</label>
                                </div>
                                
                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionTwo`} value="wrong" onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionTwo`}>{safeIncorrectAnswer[0]}</label>
                                </div>

                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionThree`} value="wrong" onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionThree`}>{safeIncorrectAnswer[1]}</label>
                                </div>
                            </div>

                            <div className="answer">
                                <input type="radio" name="multipleChoice" id={`${props.questionNum}questionFour`} value="wrong" onChange={handleChange}/>
                                <label htmlFor={`${props.questionNum}questionFour`}>{safeIncorrectAnswer[2]}</label>
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
        </div>
    ) 
}

export default DisplayTrivia;