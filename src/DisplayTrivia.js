import { useState, useEffect } from 'react';

const DisplayTrivia = (props) => {
    const [userChoice, setUserChoice] = useState('');
    const [safeQuestion, setSafeQuestion] = useState('');
    const [safeAnswer, setSafeAnswer] = useState('');
    const [answerCheck, setAnswerCheck] = useState();
    

    const userSubmit = (e) => {
        e.preventDefault();
        if (userChoice === props.correctAnswer) {
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
        placeholder.innerHTML = props.question;
        const safeQuestion = placeholder.textContent;

        const newShuffleAnswer = props.answers.map((array) => {
            const placeholderTwo = document.createElement('div');
            placeholderTwo.innerHTML = array;
            const safeAnswers = placeholderTwo.textContent;
            return safeAnswers;
        });

        setSafeQuestion(safeQuestion);
        setSafeAnswer(newShuffleAnswer);

    }, [props.question, props.answers]);

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
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionOne`} value={safeAnswer[0]} onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionOne`}>{safeAnswer[0]}</label>
                                </div>
                                
                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionTwo`} value={safeAnswer[1]} onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionTwo`}>{safeAnswer[1]}</label>
                                </div>

                                <div className="answer">
                                    <input type="radio" name="multipleChoice" id={`${props.questionNum}questionThree`} value={safeAnswer[2]} onChange={handleChange}/>
                                    <label htmlFor={`${props.questionNum}questionThree`}>{safeAnswer[2]}</label>
                                </div>
                            </div>

                            <div className="answer">
                                <input type="radio" name="multipleChoice" id={`${props.questionNum}questionFour`} value={safeAnswer[3]} onChange={handleChange}/>
                                <label htmlFor={`${props.questionNum}questionFour`}>{safeAnswer[3]}</label>
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

export default DisplayTrivia 