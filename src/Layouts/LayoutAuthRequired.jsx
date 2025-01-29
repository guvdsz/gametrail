import { Outlet, Navigate } from "react-router"
export default function LayoutAuthRequired({isAuth}) {
    if (isAuth) {
        return <Outlet/>
    } else {
        return <Navigate to="login"/>
    }
}