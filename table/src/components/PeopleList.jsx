import React, { useState, useEffect, Fragment } from 'react';
import '../App.css';
import AddNameForm from './AddNameForm';
import EditableRow from './EditableRow';
import NonEditableRow from './NonEditableRow';

export default function PeopleList() {

    const [people, setPeople] = useState([]);
    const [selectToAddName, setSelectToAddName] = useState(false);
    const [editPersonId, setEditPersonId] = useState(null);
    const [editPeopleName, setEditPeopleName] = useState({
        name: "",
        gender: "",
        age: "",
        eye_color: "",
        hair_color: ""
    })
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
        setSelectToAddName(false);
    }

    const handleEditPersonNameClick = (e, person) => {
        e.preventDefault();
        setEditPersonId(person.id)

        const formValues = {
            name: person.name,
            gender: person.gender,
            age: person.age,
            eye_color: person.eye_color,
            hair_color: person.hair_color
        }

        setEditPeopleName(formValues);
    }

    const handleEditPersonNameOnChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const editFormData = { ...editPeopleName }
        editFormData[fieldName] = fieldValue;

        setEditPeopleName(editFormData);
    }

    const handleEditNameFormSubmit = (e) => {
        e.preventDefault();

        const editableName = {
            name: editPeopleName.name,
            gender: editPeopleName.gender,
            age: editPeopleName.age,
            eye_color: editPeopleName.eye_color,
            hair_color: editPeopleName.hair_color
        }

        const newPeople = [...people];
        const index = people.findIndex((person) => person.id === editPersonId);

        newPeople[index] = editableName;

        setPeople(newPeople);
        setEditPersonId(null)
    }

    const handleCancelNameChange = () => {
        setEditPersonId(null);
    }

    const handleRemovePersonFromList = (personId) => {
        const removeName = people.filter((person) => person.id !== personId);

        setPeople(removeName);
    }

    const handleSelectAddNameToList = () => {
        setSelectToAddName(true);
    }

    const handleAddNameCancelOption = () => {
        setSelectToAddName(false);
    }

    return (
        <div className="main">
            <button onClick={handleSelectAddNameToList} className="select-name-button">Select To Add Name</button>
            {selectToAddName ? (<AddNameForm handleAddNameCancelOption={handleAddNameCancelOption} handleAddNewPeopleFormSubmit={handleAddNewPeopleFormSubmit} addNewPeople={addNewPeople} handleAddNewPeopleChange={handleAddNewPeopleChange} />) : ""}

            <table className="table-table">
                <thead>
                    <tr className="even-row">
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Eye Color</th>
                        <th>Hair Color</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => (
                        <Fragment>
                            {editPersonId === person.id ? (<EditableRow handleCancelNameChange={handleCancelNameChange} handleEditNameFormSubmit={handleEditNameFormSubmit} handleEditPersonNameOnChange={handleEditPersonNameOnChange} />) : (<NonEditableRow handleRemovePersonFromList={handleRemovePersonFromList} handleEditPersonNameClick={handleEditPersonNameClick} person={person} />)}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}