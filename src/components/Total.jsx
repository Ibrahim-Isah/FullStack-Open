import React from 'react'

const Total = ({parts}) => {
    return (
        <div>
            {parts.map(item => "Excesrce " + item.exercises + " ")}
        </div>
    )
}

export default Total
