import React from "react";
import { Navigate } from "react-router-dom";

const RefreshRoute = ({ children, isDataAvailable }) => {
    return isDataAvailable ? children : <Navigate to={{ pathname: "/" }} />;
}

export default RefreshRoute; 