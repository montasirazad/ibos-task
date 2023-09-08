import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';

const EditTask = () => {

    const { oldTodo, setOldTodo } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('new-toDo'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleChange = (e, tid) => {
        //const filteredData = data.filter(to => to.id === id)
        console.log(tid);

    }

    return (
        <div>
            {
                oldTodo.map(todo => <div key={todo.id}>
                    <p>Created at:{new Date(`${todo.createdAt}`).toLocaleString('en-us', { dateStyle: 'medium', hour12: true, timeStyle: 'short' })}</p>
                    <p>Description:{todo.description}</p>
                    <p>Start Date{todo.startDate}</p>
                    <p>End Date:{todo.endDate}</p>

                    <button onClick={() => setToggle(!toggle)}>Edit</button>
                    <br />
                    {toggle && <form action="">
                        <select onChange={() => handleChange(`${todo.id}`)} name="" id="">
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                        </select>
                        <br />
                        <select name="" id="">
                            <option value="inProgress">In Progress</option>
                            <option value="complete">Complete</option>

                        </select>
                    </form>}
                </div>)
            }
        </div>
    );
};

export default EditTask;