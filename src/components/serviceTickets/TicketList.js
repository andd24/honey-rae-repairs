import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, getTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    useEffect(() => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    getTickets(data)
                })
        }, [])

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
                        {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                    
            })}
        </>
)}