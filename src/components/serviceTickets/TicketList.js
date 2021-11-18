import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, getTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    const fetchTickets = () => {
        fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
        .then((data) => {
            getTickets(data)
        })
    }

    useEffect(() => {
        fetchTickets()
        }, [])

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        fetchTickets()
    }
        

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    return (
        <>
            <div>
                <button onClick={() => history.push("/ticket/create")}>Create Ticket</button>
            </div>
            { active }
            {
                tickets.map(
                    (ticket) => {
                        return <p className={`ticket`} class= {ticket.emergency ? "emergency" : "nonemergency"}>
                        {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>
                        submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                        <button onClick={() => {deleteTicket(ticket.id)}}>Delete</button></p> 
                    
            })}

        </>
)}