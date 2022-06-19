import React from 'react';
import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useProfile } from '../context/profile.context';



const PrivateRoute = ({ children, ...routeProps }) => {
  
    const {profile,isLoading} = useProfile();

    if (isLoading && !profile) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
              >
              <CircularProgress/>
            </Box>
        );
      }
    
      if (!profile && !isLoading) {
        return <Redirect to="/signin" />;
      }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
};

export default PrivateRoute;