import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import './TaskCreation.css';


const TaskCreation = () => {
    // const { newToDo, setNewToDo } = useContext(AuthContext);
    const [oldTodo, setOldTodo] = useState([]);
    const [data, setData] = useState([]);
    const [newToDo, setNewToDo] = useState({
        id: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        priority: 'low',
        teamMember: [],
        createdAt: new Date()
    });

    const fakeData = [
        {
            id: "test_data_9/8/2023",
            title: "Test data ",
            description: "Test data",
            endDate: "2023-09-12",
            startDate: "2023-09-08",
            priority: "medium",
            status: 'pending',
            teamMember: ['user_2', 'user_3', 'user_4'],
            createdAt: new Date()
        }
    ];
    useEffect(() => {
        try {
            const savedData = JSON.parse(window.localStorage?.getItem('new-toDo'));
            if (!savedData) {
                const storageData = window.localStorage.setItem('new-toDo', JSON.stringify(fakeData))
                setOldTodo(JSON.parse(storageData))
            }
            setOldTodo(savedData)
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('user-data'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);



    const handleBlur = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === 'title') {
            const newState = { ...newToDo }
            newState.title = fieldValue;
            setNewToDo(newState)

        }
        else if (fieldName === 'description') {
            const newState = { ...newToDo }
            newState.description = fieldValue;
            setNewToDo(newState)
        }


    }

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (fieldName === 'startDate') {
            const newState = { ...newToDo }
            newState.startDate = fieldValue;
            setNewToDo(newState)
        }
        else if (fieldName === 'endDate') {
            const newState = { ...newToDo }
            newState.endDate = fieldValue;
            setNewToDo(newState)
        }
        else if (fieldName === 'priority') {
            const newState = { ...newToDo }
            newState.priority = fieldValue;
            setNewToDo(newState)
        }
        e.preventDefault()
    };
    const checkHandler = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        const checkValue = e.target.checked;
        if (fieldName === 'teamMember' && checkValue) {
            const newState = { ...newToDo }
            newState.teamMember = [...newToDo.teamMember, value];
            setNewToDo(newState)
        }
        console.log(newToDo);
    }
    const handleSubmit = (e) => {
        const newId = newToDo.title + '_' + new Date().toLocaleDateString();
        const updatedState = { ...newToDo };
        updatedState.id = newId;
        setNewToDo(updatedState)
        window.localStorage.setItem('new-toDo', JSON.stringify([...oldTodo, newToDo]))
        alert('data updated')
        // e.target.reset()
        console.log(newToDo);
        e.preventDefault()
    }
    return (
        <div className='task-div'>
            <form onSubmit={handleSubmit}>

                <div className="data-div">
                    <input type="text" onBlur={handleBlur} name="title" id="" placeholder='title' /><br /> <br />
                    <textarea type="text" onBlur={handleBlur} name="description" id="" placeholder='description' /><br />
                    <p>Start Date</p>
                    <input type="date" onBlur={handleChange} name="startDate" id="" /> <br />
                    <p>End Date</p>
                    <input type="date" onBlur={handleChange} name="endDate" id="" /> <br />
                    <label htmlFor="">Task Priority</label><br />

                    <select onChange={handleChange} name="priority" id="">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>


                <br />

                <p>Add member to Your Team</p>

                {
                    data.map(d => <div className='checkmark' key={d.userName}>
                        <label>
                            <input name='teamMember'
                                type="checkbox"
                                value={d.userName}
                                onChange={checkHandler}
                            />
                            {d.userName}
                        </label>
                    </div>)
                }
                <br />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default TaskCreation;