import  React from 'react';
import {NavLink } from 'react-router-dom';


const Menu =() => {
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink >
        <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink >
        <NavLink  exact activeClassName="active_class" to="/search">Search</NavLink >
        <NavLink  exact activeClassName="active_class" to="/user">User</NavLink >
        </div>
    
        
        </>
    );
};

export default Menu;