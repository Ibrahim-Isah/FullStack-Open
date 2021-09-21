import React from 'react'

const Filter = ({value , onChange}) => {
    return (
        <div>
            <p>Search Country - </p>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    )
}

export default Filter
