import { Outlet, Navigate } from "react-router"
export default function LayoutAuthRequired({isAuth}) {
    isAuth ? <Outlet/> : <Navigate to="login"/>
}