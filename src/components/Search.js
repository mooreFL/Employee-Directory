import React from "react";
import "../styles/Search.css"

function Search(props) {
    return (
        <form>
            <div className="search-container">
                <div className="search-bar">
                <input 
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="search-input"
                placeholder="Search for an employee"
                id="search"
                />
                </div>
            </div>
        </ form>
    )
};

export default Search;

