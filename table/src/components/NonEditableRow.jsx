import React from 'react';
import '../App.css';

export default function NonEditableRow({ handleRemovePersonFromList, handleEditPersonNameClick, person }) {
    return (
        <tr className="even-row">
            <td>{person.name}</td>
            <td>{person.gender}</td>
            <td>{person.age}</td>
            <td>{person.eye_color}</td>
            <td>{person.hair_color}</td>
            <td>
                <button onClick={(e) => handleEditPersonNameClick(e, person)} className="edit-name-button">Edit Name</button>
                <button onClick={(e) => handleRemovePersonFromList(person.id)} className="delete-name-button">Delete Name</button>
            </td>
        </tr>
    )
}