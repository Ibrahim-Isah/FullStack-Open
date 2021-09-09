import React from 'react'

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(item => <p key={item.name}>{item.name}</p>)}
        </div>
    )
}

export default Content
