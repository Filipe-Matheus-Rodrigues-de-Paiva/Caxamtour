import { useContext } from "react"
import { LoginContext } from "../../Contexts/LoginContext"
import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoutes () {
    const { user } = useContext(LoginContext)
    
    return user ? <Outlet /> : <Navigate to="/" />
}