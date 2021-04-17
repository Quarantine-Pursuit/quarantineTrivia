import { useState } from 'react';

const DisplayTrivia = (props) => {

    const [userChoice, setUserChoice] = useState('');

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
                <h2 className="question">{props.question}</h2>
                    {
                        props.incorrectAnswer.length === 1 ? (
                            <form action="submit" onSubmit={userSubmit}>
                                <label htmlFor="true">True</label>
                                <input type="radio" name="trueFalse" id="true" value="true" onChange={handleChange}/>
                    
                                <label htmlFor="false">False</label>
                                <input type="radio" name="trueFalse" id="false" value="false" onChange={handleChange}/>

                                <button type="submit">Submit Answer</button>
                            </form>
                        ) : (
                            <form action="submit" onSubmit={userSubmit}>
                                <label htmlFor="questionOne">{props.correctAnswer}</label>
                                <input type="radio" name="multipleChoice" id="questionOne" value="correct" onChange={handleChange}/>

                                <label htmlFor="questionTwo">{props.incorrectAnswer[0]}</label>
                                <input type="radio" name="multipleChoice" id="questionTwo" value="wrong" onChange={handleChange}/>

                                <label htmlFor="questionThree">{props.incorrectAnswer[1]}</label>
                                <input type="radio" name="multipleChoice" id="questionThree" value="wrong" onChange={handleChange}/>

                                <label htmlFor="questionFour">{props.incorrectAnswer[2]}</label>
                                <input type="radio" name="multipleChoice" id="questionFour" value="wrong" onChange={handleChange}/>

                                <button type="submit">Submit Answer</button>
                            </form>
                        )
                    }
            </div>
        </section>
    ) 
}

export default DisplayTrivia 