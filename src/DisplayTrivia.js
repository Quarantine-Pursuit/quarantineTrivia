import { useState } from 'react';

const DisplayTrivia = (props) => {
    const [userChoice, setUserChoice] = useState('');
    console.log(props)

    const userSubmit = (e) => {
        e.preventDefault();
        if (userChoice === 'correct') {
            props.answerChecker(true);
        } else if (userChoice === props.correctAnswer.toLowerCase()) {
            props.answerChecker(true);
        } else {
            props.answerChecker(false);
        }
    }

    const handleChange = (e) => {
        setUserChoice(e.target.value);
    }

    return(
        <section>
            <div>
                <h2>Question #</h2>
                <p className="question">{props.question}</p>
                    {
                        props.incorrectAnswer.length === 1 ? (
                            <form action="submit" onSubmit={userSubmit}>
                                <div className="answerChoices">
                                    <div className="answer">
                                        <input type="radio" name="trueFalse" id={`${props.randomKey}true`} value="true" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}true`}>True</label>
                                    </div>
                        
                                    <div className="answer">
                                        <input type="radio" name="trueFalse" id={`${props.randomKey}false`} value="false" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}false`}>False</label>
                                    </div>
                                </div>

                                <button type="submit" className="submitAnswer">Submit Answer</button>
                            </form>
                        ) : (
                            <form action="submit" onSubmit={userSubmit}>
                                <div className="answerChoices">
                                    <div className="answer">
                                        <input type="radio" name="multipleChoice" id={`${props.randomKey}questionOne`} value="correct" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}questionOne`}>{props.correctAnswer}</label>
                                    </div>
                                    
                                    <div className="answer">
                                        <input type="radio" name="multipleChoice" id={`${props.randomKey}questionTwo`} value="wrong" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}questionTwo`}>{props.incorrectAnswer[0]}</label>
                                    </div>

                                    <div className="answer">
                                        <input type="radio" name="multipleChoice" id={`${props.randomKey}questionThree`} value="wrong" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}questionThree`}>{props.incorrectAnswer[1]}</label>
                                    </div>

                                    <div className="answer">
                                        <input type="radio" name="multipleChoice" id={`${props.randomKey}questionFour`} value="wrong" onChange={handleChange}/>
                                        <label htmlFor={`${props.randomKey}questionFour`}>{props.incorrectAnswer[2]}</label>
                                    </div>
                                </div>

                                <button type="submit" className="submitAnswer">Submit Answer</button>
                            </form>
                        )
                    }
            </div>
        </section>
    ) 
}

export default DisplayTrivia 