import React from 'react';
import { NavLink } from 'react-router-dom';

const Error =() =>{
    return(
        <>
        <h1>Oops Page not found!</h1>
        <p>Sorry! This ipage is not available.</p>
        <NavLink to="/">Go Back</NavLink>
        </>
    );
};
export default Error;