import React, { useState, useRef,  useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import service  from './services/persons';

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number:'040-123456'}]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");

    const focusName = useRef();

    useEffect(() => {
        console.log('effect')
        service.getAll()
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
          })
      }, [])
      console.log('render', persons.length, 'persons')

    const addPerson = (event) => {
        event.preventDefault();
        if (!(persons.find((person) => person.name === newName))) {
            const personObject = {
                name: newName,
                number: newNumber,
            };
            service.create(personObject)
          .then(response => {
            setPersons(persons.concat(response.data));
            setNewName("");
            setNewNumber("");
          })
        } else {
            return alert(newName + " is already added to the phonebook");
        }
    };
      const removePerson = (id, name) => {
        if ( window.confirm(`Delete ${name} ?`)) {
          service
            .deleteP(id)
            .then(() => setPersons(persons.filter((person) => person.id !== id)))
       
        } else {
          return;
        }
      };
    
    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchName={searchName} setSearchName={setSearchName} />

            <h3>Add a new</h3>
            <PersonForm
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
                addPerson={addPerson}
                focusName={focusName}
            />

            <h3>Numbers</h3>
            <Persons persons={persons} searchName={searchName} removePerson={removePerson}/>
        </div>
    );
};

export default App;
