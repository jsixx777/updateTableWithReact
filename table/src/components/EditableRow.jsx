import React from 'react';
import '../App.css';

export default function EditableRow({ handleEditNameFormSubmit, handleEditPersonNameOnChange }) {
    return (
        <div>
            <form onSubmit={handleEditNameFormSubmit} className="form-form">
                <input
                    type="text"
                    // value={addNewPeople.name}
                    onChange={handleEditPersonNameOnChange}
                    className="input-field"
                    name="name"
                    required="required"
                    placeholder="Enter name..."
                ></input>
                <input
                    type="text"
                    // value={addNewPeople.gender}
                    className="input-field"
                    onChange={handleEditPersonNameOnChange}
                    name="gender"
                    required="required"
                    placeholder="Enter gender..."
                ></input>
                <input
                    type="text"
                    // value={addNewPeople.age}
                    className="input-field"
                    onChange={handleEditPersonNameOnChange}
                    name="age"
                    required="required"
                    placeholder="Enter age..."
                ></input>
                <input
                    type="text"
                    className="input-field"
                    // value={addNewPeople.eye_color}
                    onChange={handleEditPersonNameOnChange}
                    name="eye_color"
                    required="required"
                    placeholder="Enter Eye Color..."
                ></input>
                <input
                    type="text"
                    // value={addNewPeople.hair_color}
                    className="input-field"
                    onChange={handleEditPersonNameOnChange}
                    name="hair_color"
                    required="required"
                    placeholder="Enter Hair Color..."
                ></input>
                <button type="submit" className="save-name-button">Save</button>
            </form>
        </div>
    )
}