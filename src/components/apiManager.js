import { useState } from "react"
import { useParams } from "react-router"

export const getAllCustomers = async () => {
    const res = await fetch("http://localhost:8088/customers")
    return await res.json()
}

export const GetCustomerEmails = async () => {
    const [email, set] = useState("")
    const res = await fetch(`http://localhost:8088/customers?email=${email}`)
    return await res.json()
}

export const GetEmployeeById = async () => {
    const { employeeId } = useParams()
    const res = await fetch(`http://localhost:8088/employees/${employeeId}`)
    return await res.json()
}

export const getEmployees = async () => {
    const res = await fetch("http://localhost:8088/employees")
    return await res.json()
}

export const getTicketById = async () => {
    const { ticketId } = useParams() 
    const res = await fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
    return await res.json()
}

export const getTickets = async () => {
    const res = await fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
    return await res.json()
}