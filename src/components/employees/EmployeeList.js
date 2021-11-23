import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getEmployees } from "../apiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialtyList, setSpecialtyList] = useState("")
    const history = useHistory()

    useEffect(() => {
            getEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        }, [])

    useEffect(() => {
            const specialtyArray = employees.map(employee => employee.specialty)
            setSpecialtyList(specialtyArray.join(", "))
        
        
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    return (
        <>
            <div>
                <button onClick={() => history.push("/employee/create")}>Add Employee</button>
            </div>
            <div>
                Specialties: {employeeSpecialtyList}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employee/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
