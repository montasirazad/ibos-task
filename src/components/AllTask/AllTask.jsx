import React, { useEffect, useState } from 'react';
import './AllTask.css';

const AllTask = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('new-toDo'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div>
            <div style={{ padding: '30px' }}>
                <div style={{ overflow: 'hidden', overflowX: 'scroll'}}>
                    <table >

                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Created At</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {


                                data.length ?
                                    data.map(d => <tr key={d.email}>
                                        <td>{d.title}</td>
                                        <td style={{ fontSize: 'small' }}>{new Date(`${d.createdAt}`).toLocaleString('en-us', { dateStyle: 'medium', hour12: true, timeStyle: 'short' })}</td>
                                        <td>{d.description}</td>
                                        <td>{d.startDate}</td>
                                        <td>{d.endDate}</td>
                                        <td>{d.priority}</td>

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