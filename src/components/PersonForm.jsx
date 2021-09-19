import React from 'react'

const PersonForm = ({handleSubmit , newName, setNewName, phone , setPhone}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
          <h2>Add new people</h2>
        <div>
          name: <input type="text" value={newName} onChange={(e) => {setNewName(e.target.value)}}/>
        </div>
        <div>
          number: <input type="text" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}

export default PersonForm
