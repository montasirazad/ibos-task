import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import './AllTask.css';

const AllTask = () => {
    const { oldTodo } = useContext(AuthContext)
    const [data, setData] = useState([]);

console.log(oldTodo);
    useEffect(() => {
        //setData(oldTodo)
    }, []);
    return (
        <div>
            <div style={{ padding: '30px' }}>
                <div style={{ overflow: 'hidden', overflowX: 'scroll' }}>
                    <table >

                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Created At</th>
                                <th>Description</th>
                                <th>Team Member</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                oldTodo?.length ?
                                    oldTodo.map(d => <tr key={d.id}>
                                        <td>{d.title}</td>
                                        <td style={{ fontSize: 'small' }}>{new Date(`${d.createdAt}`).toLocaleString('en-us', { dateStyle: 'medium', hour12: true, timeStyle: 'short' })}</td>
                                        <td>{d.description}</td>
                                        <td>{d.teamMember.toString()}</td>
                                        <td>{d.startDate}</td>
                                        <td>{d.endDate}</td>
                                        <td>{d.priority}</td>
                                        <td>{d.status}</td>
                                        <td><Link to={`/dashboard/edit-task`}><button>Edit</button></Link></td>

                                    </tr>) :
                                    <tr>

                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default AllTask;