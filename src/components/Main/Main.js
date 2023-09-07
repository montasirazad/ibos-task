import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import NavBar from '../../SharedComponent/NavBar';

const Main = () => {
    const { handleLogOut, loggedInUser } = useContext(AuthContext)
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;