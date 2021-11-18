import React, { useState, useEffect } from 'react';
import '../App.css';

export default function PeopleList() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(json => setPeople(json))
    }, []);


    return (
        <div className="main">
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