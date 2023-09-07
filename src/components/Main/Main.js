import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const Main = () => {
    const { handleLogOut, loggedInUser } = useContext(AuthContext)
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={'/log-in'}>Log in</Link>
                <Link to={'/sign-up'}>Sign Up</Link>
                <Link to={'/menu'}>menu</Link>
                {loggedInUser && <button onClick={handleLogOut}>Log out</button>}

            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;