import { useState } from 'react'

const StatisticLine = ( {text, value} ) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all === 0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={props.all} />
        <StatisticLine text='average' value={props.average} />
        <StatisticLine text='positive' value={props.positive} />
      </tbody>
    </table>
  )
}

const Button = ( {handler, text} ) => <button onClick={handler}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good * 100 / all + '%'

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={handleClickGood} text='good' />
      <Button handler={handleClickNeutral} text='neutral' />
      <Button handler={handleClickBad} text='bad' />

      <h2>statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App