import React from 'react'
import data from './data'
import { useState } from 'react'
import { use } from 'react'
import Questions from './Questions'

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}
export default App
