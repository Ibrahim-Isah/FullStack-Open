import React, { useState } from 'react'

const Statistics = ({good, bad, neutral, feedback , average}) => {
    return (
            <div>
                <table>
                    <tbody>
                        <StatisticsLine text="Good" value={good}/>
                        <StatisticsLine text="Neutral" value={neutral}/>
                        <StatisticsLine text="Bad" value={bad}/>
                        <StatisticsLine text="Average" value={average}/>
                        <StatisticsLine text="Feedback" value={feedback + "%"}/>
                    </tbody>
                </table>
            </div>
    )
}

const StatisticsLine = ({text , value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}



const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)
    const handleReset = () => {
        setGood(0)
        setNeutral(0)
        setBad(0)
        
    }
    const averageCourse = ()=> {
        let minus = good - bad;
        return minus/10;
    }
    const positiveFeedback = () => {
        let totalGood = good;
        let totalStuff = bad + neutral + good;
        if(totalStuff === 0) return 0;
        
        return ((totalGood/totalStuff) * 100)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
           <button onClick={handleGood}>Good</button>
           <button onClick={handleNeutral}>Neutral</button>
           <button onClick={handleBad}>Bad</button> 
           <button onClick={handleReset}>Reset</button>

            <h2>Statistics</h2>
            {(good || neutral || bad) ? <Statistics good={good} bad={bad} neutral={neutral} feedback={positiveFeedback()} average={averageCourse()} /> : "No feedback Given"}
        </div>
    )
}

export default Feedback
