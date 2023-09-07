import React from 'react';
import "./DashBoard.css";
import NavBar from '../../SharedComponent/NavBar';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <NavBar />
            <div className='dashboard'>
                <div className='dashboard-menu'>
                    <Link to='/dashboard'>Available Member</Link>
                    <Link to='/dashboard/all-task'>All Task</Link>
                </div>
                <div className='dashboard-outlet'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;