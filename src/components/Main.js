import React, { useState, useEffect } from "react";
import "../styles/Main.css"
import Search from "./Search";
import Results from "./Results";
import api from "../utils/API.js";

function Main() {
    const [allEmployees, setAllEmployees] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        api.getUsers().then((res) => setAllEmployees(res.data.results));
    }, []);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <main>
            <Search handleInputChange={handleInputChange} value={searchValue} />
            <Results allEmployees={allEmployees} searchValue={searchValue} />
        </main>
    )
}


export default Main;