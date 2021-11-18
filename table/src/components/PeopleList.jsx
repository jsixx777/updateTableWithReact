import React, { useState, useEffect } from 'react';
import '../App.css';

export default function PeopleList() {

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(json => console.log(json))
    }, []);


    return (
        <div className="main">
            <h3 className="title">My List</h3>
        </div>
    )
}