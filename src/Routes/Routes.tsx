import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import RegisterPage from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard";
import { RegisterProvider } from "../Contexts/RegisterContext";
import { DashBoardProvider } from "../Contexts/DashboardContext";
export default function RoutesMain () {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterProvider><RegisterPage /></RegisterProvider>}/>
            <Route path="/dashboard" element={<DashBoardProvider><Dashboard /></DashBoardProvider>} />
        </Routes>
    )
}