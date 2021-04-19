import { useState, useEffect } from 'react';

const DisplayTrivia = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [safeQuestion, setSafeQuestion] = useState('');
    const [safeAnswer, setSafeAnswer] = useState('');


    const userSubmit = (e) => {
        e.preventDefault();
        if (userChoice === 'correct') {
            props.answerChecker(true);
        } else if (userChoice === props.correctAnswer.toLowerCase()) {
            props.answerChecker(true);
        } else {
            props.answerChecker(false);
        }
        e.target[0].setAttribute('disabled', true);
    }

    const handleChange = (e) => {
        setUserChoice(e.target.value);
    }

    useEffect( () => { 
        const placeholder = document.createElement('div');  
        const placeholderTwo = document.createElement('div');
        placeholder.innerHTML = props.question;
        const safeQuestion = placeholder.textContent;

        placeholderTwo.innerHTML = props.correctAnswer;
        const safeAnswer = placeholderTwo.textContent;

        setSafeQuestion(safeQuestion);
        setSafeAnswer(safeAnswer);

    }, [props.question, props.correctAnswer])


    return(
        <div className="questionBox">
            <h2>Question #{props.questionNum +1}</h2>
            <p className="question">{safeQuestion}</p>
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
                                    <label htmlFor={`${props.questionNum}questionTwo`}>{props.incorrectAnswer[0]}</label>
                                </div>

                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionThree`} value="wrong" onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionThree`}>{props.incorrectAnswer[1]}</label>
                                </div>

                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionFour`} value="wrong" onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionFour`}>{props.incorrectAnswer[2]}</label>
                                </div>
                            </div>
                            <button type="submit" className="submitAnswer">Submit Answer</button>
                            </fieldset>
                        </form>
                    )
                }
        </div>
    ) 
}

export default DisplayTrivia 