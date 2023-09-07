import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';
import './NavBar.css'

const NavBar = () => {
    const { handleLogOut, loggedInUser } = useContext(AuthContext)
    return (
        <div className='navbar' >
            <Link to={'/log-in'}>Log in</Link>
            <Link to={'/'}>Sign Up</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/task-creation'}>Add Task</Link>
            {loggedInUser && <button onClick={handleLogOut}>Log out</button>}

        </div>
    );
};

export default NavBar;