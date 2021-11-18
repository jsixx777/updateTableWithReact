import React from 'react';
import '../App.css';

export default function AddNameForm ({ handleAddNameCancelOption, handleAddNewPeopleFormSubmit, addNewPeople, handleAddNewPeopleChange}) {
    return (
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
                <button onClick={handleAddNameCancelOption} type="button" className="cancel-name-button">Cancel</button>
            </form>
    )
}