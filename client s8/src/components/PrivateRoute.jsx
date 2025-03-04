import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/context';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext); // Implement your own auth logic

  return isAuthenticated ? children : <Navigate to="/sign-up" replace />;
};

export default PrivateRoute;
