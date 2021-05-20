import React from "react";
import "../styles/Results.css"

function Results({ allEmployees, searchValue, handleSort }) {
    return (
        <table id="employees">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><span id="nameBtn" onClick={handleSort}>Name▾</span></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
        <tbody>
            {allEmployees.map((employee) => {
                return employee.name.first.includes(searchValue) ? (                   
                    <tr>
                        <td>
                            <img src={employee.picture.medium} alt={employee.name}/>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.date.slice(0, 10)}</td>
                    </tr>
                ) : null
            })}
        </tbody>
        </table>
    );
}

export default Results;