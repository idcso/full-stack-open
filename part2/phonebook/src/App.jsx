import { useState } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilterChange = event => setNewFilter(event.target.value)

  const hook = () => {
    personService
      .getAll()
      .then(personsList => setPersons(personsList))
  }

  useEffect(hook, [])

  const updateNumber = (person) => {
    if (
      window.confirm(`${person.name} is already added to phonebook, replace the old number?`)
    ) {
      const changedPerson = {...person, number: newNumber}
      personService.updatePerson(person, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
        })
    }
  }

  const addName = (event) => {
    event.preventDefault()

    const newNameObj = {
      name: newName,
      number: newNumber,
    }

    if (persons.some(person => person.name === newName)) {
      updateNumber(persons.find(p => p.name === newName))
      return
    }

    personService.addPerson(newNameObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deleteName = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const newPersonList = persons.filter(p => p.id !== person.id)
      personService.deletePerson(person.id)
      setPersons(newPersonList)
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons 
        persons={persons} 
        newFilter={newFilter} 
        deletePerson={deleteName} 
      />
    </div>
  )
}

export default App