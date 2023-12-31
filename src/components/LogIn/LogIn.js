import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import iBosLogo from '../../image/ibos_logo.jpeg';
import './LogIn.css';

const LogIn = () => {
    const { setLoggedInUser } = useContext(AuthContext)

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [data, setData] = useState([]);


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    //delicate part of code
    useEffect(() => {
        try {
            const savedData = JSON.parse(localStorage.getItem('user-data'));
            setData(savedData)
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(data);
    const handleBlur = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (fieldName === 'email') {
            const newState = { ...user }
            newState.email = fieldValue;
            setUser(newState)
        }

        else if (fieldName === 'password') {
            const newState = { ...user }
            newState.password = fieldValue;
            setUser(newState)
        }
    }

    const handleSubmit = (e) => {
        let validate = data.find((d) => d.email === user.email && d.password === user.password);
        if (validate) {
            setLoggedInUser(true)
            navigate(from, { replace: true })
            console.log(true);
        } else {
            alert('Invalid password or email')
            console.log(false);
        }
        console.log(validate);
        e.preventDefault()
    };
    return (
        <div className='log-in-div'>
            <img src={iBosLogo} alt="" style={{ width: '120px' }} />
            <h3 style={{color:'slateblue'}}>Please Log in to continue</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onBlur={handleBlur} placeholder='Enter E-mail' /><br />
                <input type="password" name="password" onBlur={handleBlur} placeholder='Enter password' /><br />
                <button type="submit">Log In</button >
            </form>
            <Link to={'/'}>Don't have account? Click to Sign up..!</Link>

        </div>
    );
};

export default LogIn;