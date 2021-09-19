import React from 'react'

const PersonContent = ({persons}) => {
    return (
        <div>
            {persons.map(person => {
                return (<div key={person.name}>
                {person.name} <br /> {person.number}
                </div>)
            })}
        </div>
    )
}

export default PersonContent
