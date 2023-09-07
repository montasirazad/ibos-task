import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import iBosLogo from '../../image/ibos_logo.jpeg';
import './SignUp.css';

const SignUp = () => {
    const { user, setUser, newData, setNewData, loggedInUser, setLoggedInUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === 'fullName') {
            const newState = { ...user }
            newState.fullName = fieldValue;
            setUser(newState)

        }
        else if (fieldName === 'userName') {
            const newState = { ...user }
            newState.userName = fieldValue;
            setUser(newState)
        }
        else if (fieldName === 'email') {
            const newState = { ...user }
            newState.email = fieldValue;
            setUser(newState)
        }
        else if (fieldName === 'phone') {
            const newState = { ...user }
            newState.phone = fieldValue;
            setUser(newState)
        }
        else if (fieldName === 'password') {
            const newState = { ...user }
            newState.password = fieldValue;
            setUser(newState)
        }
        else if (fieldName === 'bio') {
            const newState = { ...user }
            newState.bio = fieldValue;
            setUser(newState)
        }

    }
    //delicate part of code



    // useEffect(() => {
    //     try {
    //         const savedData = JSON.parse(localStorage.getItem('user-data'));
    //         setNewData(savedData)
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }, [])

    const handleSubmit = (e) => {
        localStorage.setItem('user-data', JSON.stringify([...newData, user]))

        // alert('User created successfully')
        // navigate('/log-in')
        // e.target.reset()
        console.log(user);
        e.preventDefault()
    };
    return (
        <div className='sign-up-div'>
            <img src={iBosLogo} alt="" style={{width:'120px'}}/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" onBlur={handleBlur} placeholder='Your Full Name' /> <br />
                <input type="text" name="userName" onBlur={handleBlur} placeholder='Enter a user name' /> <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder='email' /><br />
                <input type="text" name="phone" onBlur={handleBlur} placeholder='phone' /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder='password' /><br />
                {/* <input type="text" name="bio" onBlur={handleBlur} placeholder='Your position' /><br /> */}
                {/* <input type="file" name="img" id="" onChange={handleChange} /> */}
                <button type='submit'>Sign Up</button>
            </form>
            <Link to={'/log-in'}>Already Signed up? Click to Log In</Link>
        </div>
    );
};

export default SignUp;