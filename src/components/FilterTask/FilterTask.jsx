import React, { useEffect, useState } from 'react';
import './FilterTask.css';

const FilterTask = () => {
    const [data, setData] = useState([]);
    const [filteredToDo, setFilteredToDo] = useState([])

    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('new-toDo'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);
    const handleLow = (e) => {
        const filteredData = data.filter(d => d.priority === 'low');
        //console.log(filteredData);
        setFilteredToDo(filteredData)
        console.log(filteredToDo);
    };

    const handleMedium = (e) => {
        const filteredData = data.filter(d => d.priority === 'medium');
        //console.log(filteredData);
        setFilteredToDo(filteredData)
        console.log(filteredToDo);
    };
    const handleHigh = (e) => {
        const filteredData = data.filter(d => d.priority === 'high');
        //console.log(filteredData);
        setFilteredToDo(filteredData)
        console.log(filteredToDo);
    };
    return (
        <div>
            <div className='button-div'>
                <button onClick={handleLow}>Low</button>
                <button onClick={handleMedium}>Medium</button>
                <button onClick={handleHigh}>High</button>


                <h1>Task Found : {filteredToDo.length}</h1>
                {filteredToDo.length ?
                    filteredToDo.map((info) => <div key={info.title}>
                        <p>Id: {info.id}</p>
                        <p>Created At:{new Date(`${info.createdAt}`).toLocaleString('en-us', { dateStyle: 'medium', hour12: true, timeStyle: 'short' })}</p>
                        <p>Title:{info.title}</p>
                        <p>Start Date:{info.startDate}</p>
                        <p>End Date:{info.endDate}</p>
                        <p>Status:{info.status}</p>
                        <p>Priority:{info.priority.toUpperCase()}</p>
                    </div>) : <p>No data</p>
                }
            </div>
        </div>
    );
};

export default FilterTask;