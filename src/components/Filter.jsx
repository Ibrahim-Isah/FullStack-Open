import React from 'react'

const Filter = ({filtering , persons , setFiltering , setPersons}) => {
    return (
        <div>
            <p>filter people <input type="text" value={filtering} 
            onChange={(e) => {
             setFiltering(e.target.value)
            const regex = new RegExp(filtering, 'i');
            const filteredPersons = () => persons.filter(person => person.name.match(regex))
            setPersons(filteredPersons)
            }
            } />
          </p>
        </div>
    )
}

export default Filter
