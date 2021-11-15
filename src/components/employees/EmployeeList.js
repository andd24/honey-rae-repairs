import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialtyList, setSpecialtyList] = useState("")


    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
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
                Specialties: {employeeSpecialtyList}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
