import React from "react";

const Persons = ({ persons, searchName, removePerson }) => {
    return persons.length ? (
        <ul>
            {persons
                .filter((person) =>
                    person.name.toLowerCase().includes(searchName.toLowerCase())
                )
                .map((person) => (
                    <li key={person.name}>
                        {person.name} {person.number} &nbsp;
                    </li>
                ))}
                <button onClick={() => removePerson(persons.id, persons.name)}>Delete</button>
        </ul>
    ) : (
        <p>Loading contacts...</p>
    );
};

export default Persons;