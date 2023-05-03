import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard";
import { RegisterProvider } from "../Contexts/RegisterContext";
export default function RoutesMain () {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterProvider><RegisterPage />
            </RegisterProvider>}/>
            <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
    )
}