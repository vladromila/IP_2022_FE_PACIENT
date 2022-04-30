import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="//fiihealth.ro/login" />;
}

export { PrivateRoute }