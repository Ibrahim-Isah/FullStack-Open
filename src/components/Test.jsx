import React, {useState} from 'react'

const Test = () => {
    const [right , setRight] = useState(0)
    const [left , setLeft] = useState(0)
    const [allClicks , setAllClicks] = useState([])


    const handleLeftClick = () => {
        setAllClicks(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAllClicks(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>

            <h1>{allClicks.join(' ')}</h1>
            
        </div>
    )
}

export default Test
