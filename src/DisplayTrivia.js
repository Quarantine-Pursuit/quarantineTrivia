const DisplayTrivia = (props) => {
    console.log(props.triviaObj)

    return(
        <section>
        {
            props.triviaObj.map( (key, i) => {
                console.log(key)
                return(
                    <div>
                    <h2 className="question">{key.question}</h2>
                    
                        {
                            key.incorrect_answers.length === 1 ? (
                                <form action="submit">
                            
                                    <label htmlFor="true">True</label>
                                    <input type="radio" name="trueFalse" id="true" value="true"/>
                        
                                    <label htmlFor="false">False</label>
                                    <input type="radio" name="trueFalse" id="false" value="false"/>

                                    <button type="submit">Submit Answer</button>
                               </form>
                            ) : (
                                <form action="submit">

                                    <label htmlFor="questionOne">{key.correct_answer}</label>
                                    <input type="radio" name="multipleChoice" id="questionOne" value="correct"/>

                                    <label htmlFor="questionTwo">{key.incorrect_answers[0]}</label>
                                    <input type="radio" name="multipleChoice" id="questionTwo" value="wrong"/>

                                    <label htmlFor="questionThree">{key.incorrect_answers[1]}</label>
                                    <input type="radio" name="multipleChoice" id="questionThree" value="wrong"/>

                                    <label htmlFor="questionFour">{key.incorrect_answers[2]}</label>
                                    <input type="radio" name="multipleChoice" id="questionFour" value="wrong"/>

                                    <button type="submit">Submit Answer</button>

                                </form>
                            )
                        }
                   
                </div>
                )
                        
  
            })
        } 
        </section>
    ) 
}



export default DisplayTrivia 

