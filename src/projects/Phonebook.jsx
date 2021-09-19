import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../components/Filter';
import PersonContent from '../components/PersonContent';
import PersonForm from '../components/PersonForm';

const Phonebook = () => {
  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [phone, setPhone] = useState('');
  const [filtering, setFiltering] = useState('');

  useEffect(() => {
    console.log("we are up and running")
    axios
    .get('http://localhost:3333/persons')
    .then(response => setPersons(response.data))
    .catch(error => console.log(error))
  }, [])
  

  const handleSubmit = (event) => {
    event.preventDefault();
    newName.trim()
    for(let i = 0; i < persons.length; i++){
        if(newName === persons[i].name || phone === persons[i].number){
            alert(`${newName} is already in that stuff sha`)
        } else {
            setPersons(persons.concat({name: newName, number: phone}))
        }
    }  
  }

  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtering={filtering} persons={persons} setFiltering={setFiltering} setPersons={setPersons}/>
      {`\n\n\n`}
      
      <PersonForm handleSubmit={handleSubmit} newName={newName} setNewName={setNewName} phone={phone} setPhone={setPhone}/>
      <h2>Numbers</h2>
      <PersonContent persons={persons}/>
    </div>
  )
}

export default Phonebook