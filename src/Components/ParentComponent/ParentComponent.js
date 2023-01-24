import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [message, setAnswer] = useState("")
    
    const setQuiz = (quiz) => {
        if(quiz === 'react'){
            setAnswer(`Your answer ${quiz} is true`)
        }else{
            setAnswer(`Your answer ${quiz} is false`)
        }
    }


    return(
        <div>
            <h2>{message}</h2>
            <ChildComponent onQuiz={setQuiz} yourAnswer={message} />
        </div>
    )
}

export default ParentComponent;