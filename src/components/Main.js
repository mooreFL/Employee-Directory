import React, { useState, useEffect } from "react";
import "../styles/Main.css"
import Search from "./Search";
import Results from "./Results";
import api from "../utils/API.js";

function Main() {
    const [allEmployees, setAllEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortOrder, setSortOrder] = useState(false);

    useEffect(() => {
        api.getUsers().then((res) => setAllEmployees(res.data.results));
    }, []);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(!sortOrder);

        var sorted = (!sortOrder ? allEmployees.sort((a, b) => a.name.last.localeCompare(b.name.last)) : allEmployees.sort((a, b ) => b.name.last.localeCompare(a.name.last)))

        console.log(sorted)
        setAllEmployees(sorted);
    }

    return (
        <main>
            <Search handleInputChange={handleInputChange} value={searchValue} />
            <Results 
            allEmployees={allEmployees} 
            searchValue={searchValue}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            handleSort={handleSort} 
            />
        </main>
    )
}


export default Main;