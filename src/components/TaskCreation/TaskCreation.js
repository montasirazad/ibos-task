import React from 'react';

const TaskCreation = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form action="">
                <input type="text" name="" id="" placeholder='title' /><br /> <br />
                <textarea type="text" name="" id="" placeholder='description' /><br />
                <p>Start Date</p>
                <input type="date" name="" id="" /> <br />
                <p>End Date</p>
                <input type="date" name="" id="" /> <br />
                <label htmlFor="">Task Priority</label><br />
                <select name="" id="">
                    <option value="">Low</option>
                    <option value="">Medium</option>
                    <option value="">High</option>
                </select> <br />
                <select name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <br />
            </form>
        </div>
    );
};

export default TaskCreation;