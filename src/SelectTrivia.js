import {useState} from 'react';
import {Link} from 'react-router-dom';
import DisplayTrivia from './DisplayTrivia.js';
import SaveButton from './SaveButton.js';

const SelectTrivia = (props) => {
    const [answerCheck, setAnswerCheck] = useState();

    const handleSubmit = (e) => {
        e.preventDefault(e);
        props.getTrivia();
    };
    
      const handleChange = (e) => {
        const value = e.target.value;
        props.setUserInput({
          ...props.userInput,
          [e.target.name]: value
        })
    };

    return(
        <>
            <button>
                <Link to="/savedGames">Saved Games</Link>
            </button>
            <section>
                <form action="submit" onSubmit={handleSubmit}>
                <select name="categories" id="categories" value={props.userInput.categories} onChange={handleChange}>
                    <option value="placeholder" disabled>Please select your categories</option>
                    <option name="General Knowledge" value="9">General Knowledge</option>
                    <option name="Sports" value="21">Sports</option>
                    <option name="Geography" value="22">Geography</option>
                    <option name="Celebrities" value="26">Celebrities</option>
                    <option name="Vehicles" value="28">Vehicles</option>
                    <option name="Entertainment: Film" value="11">Film</option>
                    <option name="Entertainment: Japanese Anime & Manga" value="31">Anime and Manga</option>
                </select>

                <select name="questionNum" id="questionNum" value={props.userInput.questionNum} onChange={handleChange}>
                    <option value="placeholder" disabled>Select the amount of questions</option>
                    <option name="5" value="5">5</option>
                    <option name="6" value="6">6</option>
                    <option name="7"value="7">7</option>
                    <option name="8"value="8">8</option>
                    <option name="9"value="9">9</option>
                    <option name="10"value="10">10</option>
                </select>

                <button type="submit">Start Trivia</button>
                </form>
                {
                    props.userQuestion.map((key, i) => {
                        return(
                            <DisplayTrivia
                                category={key.category}
                                correctAnswer={key.correct_answer}
                                incorrectAnswer={key.incorrect_answers}
                                question={key.question}
                                key={`key${i}`}
                                answerChecker={setAnswerCheck}
                            />
                        )
                    })
                }

                {
                    answerCheck === true ? (
                        <div>
                        <h2>You are correct!</h2>
                        </div>
                    ) : answerCheck === false ? (
                        <h2>You are wrong!</h2>
                    ) : null
                }

                <SaveButton currentTrivia={props.userQuestion} setQuestion={props.setUserQuestion}/>
            </section>
        </>
    )
}

export default SelectTrivia;