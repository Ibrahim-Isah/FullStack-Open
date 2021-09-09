import React from 'react'

const Content = ({course}) => {
    return (
        <div>
            {course.map(item => <p key={item.name}>{item.name}</p>)}
        </div>
    )
}

export default Content
