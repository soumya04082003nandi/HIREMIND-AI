import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import React from 'react'
import Loading from "./Loading";

const Protected = ({ children }) => {
    const { loading, user } = useAuth()

    if (loading) return <Loading />



    if (!user) {
        return <Navigate to={"/login"} />
    }



    return children


    return (
        <div>Protected</div>
    )
}

export default Protected

