import React from 'react'

const Results = props => {
    <div className="dogFilter">
        <label htmlFor="dogBreed">Type Dog Breed</label>
        <input type="text" id="dogBreed" placeholder="Breed" />

        <label htmlFor="dogAge">Age</label>
        <select id="dogAge">
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
        </select>

        <label htmlFor="dogGender">Gender</label>
        <select id="dogGender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>
}

export default Results