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
                            
                                    <label htmlFor="true">true</label>
                                    <input type="radio" name="true" id="true"/>
                        
                                    <label htmlFor="false">false</label>
                                    <input type="radio" name="false" id="false"/>

                                    <button type="submit">Submit Answer</button>
                               </form>
                            ) : (
                                <form action="submit">

                                    <label htmlFor="questionOne">{key.correct_answer}</label>
                                    <input type="radio" name="questionOne" id="questionOne"/>

                                    <label htmlFor="questionTwo">{key.incorrect_answers[0]}</label>
                                    <input type="radio" name="questionTwo" id="questionTwo"/>

                                    <label htmlFor="questionThree">{key.incorrect_answers[1]}</label>
                                    <input type="radio" name="questionThree" id="questionThree"/>

                                    <label htmlFor="questionFour">{key.incorrect_answers[2]}</label>
                                    <input type="radio" name="questionFour" id="questionFour"/>

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

