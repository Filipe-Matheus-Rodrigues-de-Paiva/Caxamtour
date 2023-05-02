import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";

export default function RoutesMain () {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
    )
}