import React, { useState, useEffect } from 'react';
import '../App.css';

export default function PeopleList() {

    const [people, setPeople] = useState([]);
    const [addNewPeople, setAddNewPeople] = useState({
        name: "",
        gender: "",
        age: "",
        eye_color: "",
        hair_color: ""
    })

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(json => setPeople(json))
    }, []);

    const handleAddNewPeopleChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newUpdatedFormData = { ...addNewPeople }
        newUpdatedFormData[fieldName] = fieldValue;

        setAddNewPeople(newUpdatedFormData);
    }

    const handleAddNewPeopleFormSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            name: addNewPeople.name,
            gender: addNewPeople.gender,
            age: addNewPeople.age,
            eye_color: addNewPeople.eye_color,
            hair_color: addNewPeople.hair_color
        }

        const newPeople = [...people, newPerson];
        setPeople(newPeople);
        setAddNewPeople({
            name: "",
            gender: "",
            age: "",
            eye_color: "",
            hair_color: ""
        })
    }

    return (
        <div className="main">
            <form onSubmit={handleAddNewPeopleFormSubmit} className="form-form">
                <input
                    type="text"
                    value={addNewPeople.name}
                    onChange={handleAddNewPeopleChange}
                    className="input-field"
                    name="name"
                    required="required"
                    placeholder="Enter name..."
                ></input>
                <input
                    type="text"
                    value={addNewPeople.gender}
                    className="input-field"
                    onChange={handleAddNewPeopleChange}
                    name="gender"
                    required="required"
                    placeholder="Enter gender..."
                ></input>
                <input
                    type="text"
                    value={addNewPeople.age}
                    className="input-field"
                    onChange={handleAddNewPeopleChange}
                    name="age"
                    required="required"
                    placeholder="Enter age..."
                ></input>
                <input
                    type="text"
                    className="input-field"
                    value={addNewPeople.eye_color}
                    onChange={handleAddNewPeopleChange}
                    name="eye_color"
                    required="required"
                    placeholder="Enter Eye Color..."
                ></input>
                <input
                    type="text"
                    value={addNewPeople.hair_color}
                    className="input-field"
                    onChange={handleAddNewPeopleChange}
                    name="hair_color"
                    required="required"
                    placeholder="Enter Hair Color..."
                ></input>
                <button type="submit" className="add-name-button">Submit</button>
            </form>

            <table className="table-table">
                <thead>
                    <tr className="even-row">
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Eye Color</th>
                        <th>Hair Color</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => (
                        <tr className="even-row">
                            <td>{person.name}</td>
                            <td>{person.gender}</td>
                            <td>{person.age}</td>
                            <td>{person.eye_color}</td>
                            <td>{person.hair_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}