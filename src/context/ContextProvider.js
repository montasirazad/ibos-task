import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext()
const ContextProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(false)

    const [user, setUser] = useState({
        userName: '',
        fullName: '',
        password: '',
        phone: '',
        email: '',
        // bio: ''
    });
    const [newData, setNewData] = useState([]);
    const [newToDo, setNewToDo] = useState({
        id: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        priority: 'low',
        createdAt: new Date()
    });


    const fakeData = [
        {
            userName: 'user1',
            password: '1234',
            phone: '011111111',
            email: 'user1@gmail.com',
            bio: 'something'
        }
    ];


    useEffect(() => {
        try {
            const savedData = JSON.parse(window.localStorage?.getItem('user-data'));
            if (!savedData) {
                const storageData = window.localStorage.setItem('user-data', JSON.stringify(fakeData))
                setNewData(JSON.parse(storageData))
            }
            setNewData(savedData)
        } catch (error) {
            console.log(error);
        }

    }, []);

    const handleLogOut = () => {
        setLoggedInUser(false)
    }
    console.log(newData);
    const authInfo = {
        user,
        setUser,
        newData,
        setNewData,
        loggedInUser,
        setLoggedInUser,
        handleLogOut,
        newToDo,
        setNewToDo
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;