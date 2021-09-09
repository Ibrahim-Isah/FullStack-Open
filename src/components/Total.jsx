import React from 'react'

const Total = ({course}) => {
    return (
        <div>
            {course.map(item => "Excesrce " + item.exercises + " ")}
        </div>
    )
}

export default Total
