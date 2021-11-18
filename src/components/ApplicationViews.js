import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Ticket } from "./serviceTickets/Ticket"
import { Employee } from "./employees/Employee"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/serviceTickets">
                <TicketList />
            </Route>
            <Route path="/ticket/create">
                <TicketForm />
            </Route>
            <Route path="/employee/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route exact path="/employee/:employeeId(\d+)">
                <Employee />
            </Route>
        </>
    )
}
