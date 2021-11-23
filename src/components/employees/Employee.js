import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetEmployeeById } from "../apiManager"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            GetEmployeeById()
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specializes in {employee.specialty}</div>
            </section>
        </>
    )
}