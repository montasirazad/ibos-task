import React, { createContext, useEffect, useState } from 'react';
import { todoFakeData, userFakeData } from '../utilities';


export const AuthContext = createContext();


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
    const [newToDo, setNewToDo] = useState({

        id: `task-id_${Date.now()}_${new Date().toLocaleDateString()}`,
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        priority: 'low',
        teamMember: [],
        createdAt: new Date()
    });
    const [newData, setNewData] = useState([]);
    const [data, setData] = useState([]);
    const [oldTodo, setOldTodo] = useState([]);

    useEffect(() => {
        try {
            const savedData = JSON.parse(window.localStorage?.getItem('new-toDo'));
            if (!savedData) {
                const storageData = window.localStorage.setItem('new-toDo', JSON.stringify(todoFakeData))
                setOldTodo(JSON.parse(storageData))
            }
            setOldTodo(savedData)
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        try {
            const savedData = JSON.parse(window.localStorage?.getItem('user-data'));
            if (!savedData) {
                const storageData = window.localStorage.setItem('user-data', JSON.stringify(userFakeData))
                setNewData(JSON.parse(storageData))
            }
            setNewData(savedData)
        } catch (error) {
            console.log(error);
        }

    }, []);
    // useEffect(() => {
    //     try {
    //         const savedData = JSON.parse(localStorage.getItem('user-data'));
    //         setData(savedData)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

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
        data, setData,
        oldTodo, setOldTodo,
        newToDo, setNewToDo
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;