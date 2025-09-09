import React from 'react'
import SingleQuestion from './SingleQuestion'
const Questions = ({ questions, toggleQuestion, activeId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            isActive={activeId === question.id}
          />
        )
      })}
    </section>
  )
}

export default Questions
