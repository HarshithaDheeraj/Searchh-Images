import React from 'react';
import {useParams, useLocation } from "react-router-dom";

// const User =({match}) => {
  //  return(
  //      <>
   //     <h1>user {match.params.name} page</h1>
   //     </>
  //  );
// }; 


const User =() => {
    const {fname, lname} = useParams();
    const location= useLocation();
    return(
        <>
        <h1>user {fname} {lname} page</h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === '/user/vinod/thapa' ?
    (
    <button onClick={ () => alert("You are awesome")}>Found ME</button>
    ): null}
        </>
    );
};



export default User;