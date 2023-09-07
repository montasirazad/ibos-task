import React, { useEffect, useState } from 'react';
import './AvailableUsers.css';

const AvailableUsers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('user-data'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div style={{ padding: '30px' }}>
            <div style={{ overflow: 'hidden', overflowX: 'scroll', overflowY: 'scroll' }}>
                <table >

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length ?
                                data.map(d => <tr key={d.email}>
                                    <td>{d.fullName}</td>
                                    <td>{d.userName}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>

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
    );
};

export default AvailableUsers;