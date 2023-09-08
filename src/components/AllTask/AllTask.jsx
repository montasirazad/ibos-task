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

    const handleChange = (e, id) => {
        // const fieldName = e.target.name;
        // const fieldValue = e.target.value;
        console.log(id);

    }


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
                                {/* <th>Option</th> */}
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
                                        <td>
                                            <select onChange={() => handleChange(d.title)}>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select value={d.status}   id="">
                                                <option value="inProgress">In Progress</option>
                                                <option value="complete">Complete</option>
                                            </select>
                                        </td>
                                        {/* <td><Link to={`/dashboard/edit-task`}><button>Edit</button></Link></td> */}

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